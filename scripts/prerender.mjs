#!/usr/bin/env node
/**
 * Pré-rendu des métadonnées — RM Partners
 * =======================================
 *
 * POURQUOI
 * GitHub Pages sert des fichiers statiques : une SPA ne répond 200 que sur les URL
 * pour lesquelles un fichier existe réellement. Toutes les URL profondes
 * (/contact, /services/audit…) renvoient donc 404 — les robots d'indexation et les
 * aperçus de partage (LinkedIn, WhatsApp, Slack) ne voient jamais la page.
 * Ce script s'exécute APRÈS `vite build` et écrit, pour chaque route du manifeste,
 * un `dist/<route>/index.html` : une copie de la coquille `dist/index.html` dont
 * les balises SEO ont été remplacées par celles de la route. Chaque URL répond
 * alors 200 avec ses vraies métadonnées, et React prend le relais côté client.
 *
 * COMMENT LE MANIFESTE EST LU
 * `src/data/routes.ts` est un module TypeScript : Node ne sait pas l'importer sans
 * transpilation, et ajouter un runner TS (tsx, esbuild-register…) ajouterait une
 * dépendance. La solution retenue est la plus simple ET la plus robuste des deux
 * proposées : on lit le fichier en texte, on en extrait le LITTÉRAL de tableau
 * (avec un scanner qui ignore chaînes et commentaires, donc insensible au
 * formatage de Prettier) et on l'évalue. Aucune dépendance, aucun plugin Vite à
 * ajouter, aucun artefact intermédiaire à maintenir.
 *
 * >>> CONTRAT À RESPECTER DANS src/data/routes.ts <<<
 * Le tableau exporté doit rester un manifeste de DONNÉES littérales : pas d'import
 * référencé à l'intérieur du tableau, pas de `.map()`, pas de concaténation avec
 * une constante extérieure. Les annotations de type, `as const`, `satisfies` et
 * les commentaires sont sans effet (ils vivent hors du littéral ou sont ignorés).
 * Si ce contrat est rompu, le script échoue avec un message explicite plutôt que
 * de produire un sitemap silencieusement faux.
 *
 * CHAMPS RECONNUS PAR ROUTE (tolérant sur les alias)
 *   path | url | route          chemin absolu, ex. "/services/audit"   (requis)
 *   title | seoTitle            titre de la page
 *   description | seoDescription | desc
 *   lastmod, changefreq, priority   repris tels quels dans le sitemap si présents
 *   noindex: true | sitemap: false  → page pré-rendue mais exclue du sitemap
 *
 * SORTIES
 *   dist/<route>/index.html   une par route statique du manifeste
 *   dist/index.html           la route "/" est repatchée depuis le manifeste
 *   dist/404.html             copie fidèle de la coquille (URL inconnues + routes
 *                             dynamiques type /blog/:slug, que GitHub Pages sert
 *                             avec un 404 mais où la SPA démarre normalement)
 *   dist/sitemap.xml          généré depuis le même manifeste
 *
 * Node ESM pur, aucune dépendance.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const SHELL_FILE = path.join(DIST_DIR, "index.html");
const ROUTES_FILE = path.join(ROOT_DIR, "src", "data", "routes.ts");

const SITE_NAME = "RM Partners";
const DEFAULT_ORIGIN = "https://rmpartners.fr";

/* ------------------------------------------------------------------ *
 * 1. Lecture du manifeste de routes
 * ------------------------------------------------------------------ */

/** Avance jusqu'au guillemet fermant d'une chaîne ouverte en `start`. */
function skipString(source, start) {
  const quote = source[start];
  for (let i = start + 1; i < source.length; i += 1) {
    if (source[i] === "\\") {
      i += 1;
      continue;
    }
    if (source[i] === quote) return i;
  }
  return source.length;
}

/**
 * Renvoie l'index du `]` fermant le tableau ouvert en `start`.
 * Chaînes, gabarits et commentaires sont ignorés : le scanner ne se laisse pas
 * piéger par un crochet à l'intérieur d'un texte français ou d'un commentaire.
 */
function findArrayEnd(source, start) {
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];

    if (char === "/" && next === "/") {
      const eol = source.indexOf("\n", i);
      if (eol === -1) break;
      i = eol;
      continue;
    }
    if (char === "/" && next === "*") {
      const end = source.indexOf("*/", i + 2);
      if (end === -1) break;
      i = end + 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      i = skipString(source, i);
      continue;
    }
    if (char === "[" || char === "{" || char === "(") {
      depth += 1;
    } else if (char === "]" || char === "}" || char === ")") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** Extrait le littéral de tableau de la déclaration la plus plausible du module. */
function extractArrayLiteral(source) {
  // `export const routes: RouteMeta[] = [` — l'annotation de type éventuelle est
  // absorbée par `[^=;]*`, le `=` final lève l'ambiguïté avec le `[]` du type.
  const declaration = /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*(?::[^=;]*)?=\s*\[/g;
  const candidates = [];

  for (let match = declaration.exec(source); match; match = declaration.exec(source)) {
    const openIndex = source.indexOf("[", match.index + match[0].length - 1);
    const closeIndex = findArrayEnd(source, openIndex);
    if (closeIndex === -1) continue;
    candidates.push({ name: match[1], literal: source.slice(openIndex, closeIndex + 1) });
  }

  if (candidates.length === 0) return null;
  // Un manifeste peut cohabiter avec d'autres tableaux : on privilégie le nom parlant.
  return candidates.find((entry) => /route/i.test(entry.name)) ?? candidates[0];
}

async function readRouteManifest() {
  let source;
  try {
    source = await readFile(ROUTES_FILE, "utf8");
  } catch {
    return null; // Fichier absent : traité en amont comme un avertissement, pas une erreur.
  }

  const extracted = extractArrayLiteral(source);
  if (!extracted) {
    throw new Error(
      `Aucun tableau exporté trouvé dans ${path.relative(ROOT_DIR, ROUTES_FILE)}. ` +
        "Le manifeste doit être de la forme `export const routes = [ … ];`.",
    );
  }

  let parsed;
  try {
    parsed = new Function(`"use strict"; return (${extracted.literal});`)();
  } catch (error) {
    throw new Error(
      `Le tableau \`${extracted.name}\` de src/data/routes.ts n'est pas un littéral de données autonome ` +
        `(${error instanceof Error ? error.message : String(error)}). ` +
        "Retirez les références à des variables importées à l'intérieur du tableau.",
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error(`\`${extracted.name}\` n'est pas un tableau.`);
  }
  return parsed;
}

/* ------------------------------------------------------------------ *
 * 2. Normalisation des routes
 * ------------------------------------------------------------------ */

function firstString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim() !== "") return value.trim();
  }
  return undefined;
}

/** "/services/audit/" → "/services/audit" ; "/" reste "/". */
function normalizePath(value) {
  if (typeof value !== "string") return null;
  let result = value.trim();
  if (result === "") return null;
  if (!result.startsWith("/")) result = `/${result}`;
  if (result.length > 1) result = result.replace(/\/+$/, "");
  return result;
}

/** SEO.tsx compose `${title} | RM Partners` : on reproduit exactement le titre rendu. */
function buildTitle(title) {
  if (!title) return undefined;
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

function normalizeRoutes(rawRoutes) {
  const seen = new Set();
  const routes = [];
  const skipped = [];

  for (const raw of rawRoutes) {
    if (raw === null || typeof raw !== "object") continue;

    const routePath = normalizePath(firstString(raw.path, raw.url, raw.route));
    if (!routePath) continue;

    // Les routes paramétrées (/blog/:slug) n'ont pas d'URL unique : elles sont
    // couvertes par dist/404.html, qui démarre la SPA quand même.
    if (routePath.includes(":") || routePath.includes("*")) {
      skipped.push(routePath);
      continue;
    }
    if (seen.has(routePath)) continue;
    seen.add(routePath);

    routes.push({
      path: routePath,
      // Titre/description restent optionnels : une route qui n'en déclare pas
      // conserve ceux de la coquille (cas de l'accueil, dont index.html porte
      // déjà les bonnes métadonnées) plutôt que de les appauvrir.
      title: buildTitle(firstString(raw.title, raw.seoTitle)),
      description: firstString(raw.description, raw.seoDescription, raw.desc),
      lastmod: firstString(raw.lastmod, raw.lastModified),
      changefreq: firstString(raw.changefreq, raw.changeFrequency),
      priority:
        typeof raw.priority === "number" || typeof raw.priority === "string"
          ? String(raw.priority)
          : undefined,
      // Une page pré-rendue peut légitimement rester hors du sitemap (ex. /404).
      inSitemap:
        raw.noindex !== true &&
        raw.noIndex !== true &&
        raw.sitemap !== false &&
        routePath !== "/404",
    });
  }

  return { routes, skipped };
}

/* ------------------------------------------------------------------ *
 * 3. Réécriture des balises SEO de la coquille
 * ------------------------------------------------------------------ */

function escapeHtmlText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeHtmlAttribute(value) {
  return escapeHtmlText(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlText(title)}</title>`);
}

/**
 * Remplace la valeur d'un attribut dans la première balise repérée par un couple
 * attribut/valeur. `[^>]*` traverse les retours à la ligne : le formatage
 * multiligne de index.html est donc pris en charge. Si la balise est absente,
 * le HTML est renvoyé inchangé — on ne fabrique pas de balise qui n'existait pas.
 */
function setTagAttribute(html, { tag, matchAttribute, matchValue, attribute, value }) {
  const tagPattern = new RegExp(
    `<${tag}\\b[^>]*?\\b${matchAttribute}\\s*=\\s*"${escapeRegExp(matchValue)}"[^>]*>`,
    "i",
  );
  const match = html.match(tagPattern);
  if (!match || match.index === undefined) return html;

  const attributePattern = new RegExp(`\\b${attribute}\\s*=\\s*"[^"]*"`, "i");
  if (!attributePattern.test(match[0])) return html;

  const patchedTag = match[0].replace(attributePattern, `${attribute}="${escapeHtmlAttribute(value)}"`);
  return html.slice(0, match.index) + patchedTag + html.slice(match.index + match[0].length);
}

function setMetaContent(html, matchAttribute, matchValue, content) {
  return setTagAttribute(html, {
    tag: "meta",
    matchAttribute,
    matchValue,
    attribute: "content",
    value: content,
  });
}

function renderPage(shell, route, origin) {
  const url = route.path === "/" ? `${origin}/` : `${origin}${route.path}`;
  // L'URL canonique est toujours réécrite : c'est elle qui distingue les copies.
  let html = setTagAttribute(shell, {
    tag: "link",
    matchAttribute: "rel",
    matchValue: "canonical",
    attribute: "href",
    value: url,
  });
  html = setMetaContent(html, "property", "og:url", url);

  if (route.title) {
    html = setTitle(html, route.title);
    html = setMetaContent(html, "property", "og:title", route.title);
    // Présente seulement si la coquille la déclare ; sinon l'appel est neutre.
    html = setMetaContent(html, "name", "twitter:title", route.title);
  }
  if (route.description) {
    html = setMetaContent(html, "name", "description", route.description);
    html = setMetaContent(html, "property", "og:description", route.description);
    html = setMetaContent(html, "name", "twitter:description", route.description);
  }
  return html;
}

/* ------------------------------------------------------------------ *
 * 4. Sitemap
 * ------------------------------------------------------------------ */

function renderSitemap(routes, origin, buildDate) {
  const entries = routes
    .filter((route) => route.inSitemap)
    .map((route) => {
      const url = route.path === "/" ? `${origin}/` : `${origin}${route.path}`;
      const lines = [`    <loc>${escapeHtmlText(url)}</loc>`];
      // À défaut de date explicite, la date du build indique à Google quand recrawler.
      const lastmod = route.lastmod || buildDate;
      if (lastmod) lines.push(`    <lastmod>${escapeHtmlText(lastmod)}</lastmod>`);
      if (route.changefreq) lines.push(`    <changefreq>${escapeHtmlText(route.changefreq)}</changefreq>`);
      if (route.priority) lines.push(`    <priority>${escapeHtmlText(route.priority)}</priority>`);
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;
}


/* ------------------------------------------------------------------ *
 * 4 bis. Redirections des anciennes URL
 *
 * Le site tournait sous Wix avant sa refonte. Ces URL restent référencées par
 * Google et par d'éventuels liens externes. GitHub Pages ne sait pas faire de
 * redirection HTTP : on publie donc une page qui redirige côté navigateur, avec
 * un <link rel="canonical"> vers la destination — Google suit ce signal et
 * transfère le référencement acquis.
 *
 * Les pages Wix sans équivalent (/page-vierge…) sont volontairement absentes :
 * elles doivent continuer à renvoyer 404 pour que Google les retire. Les
 * rediriger vers l'accueil créerait un « soft 404 », pénalisé.
 * ------------------------------------------------------------------ */

const LEGACY_REDIRECTS = {
  "/expertise": "/services",
  "/fonds": "/secteurs",
  "/societes-de-gestion": "/secteurs",
};

function renderRedirect(origin, target) {
  const url = `${origin}${target}`;
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Page déplacée</title>
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=${url}" />
    <script>window.location.replace(${JSON.stringify(url)});</script>
  </head>
  <body>
    <p>Cette page a été déplacée. <a href="${url}">Continuer vers ${target}</a>.</p>
  </body>
</html>
`;
}

/* ------------------------------------------------------------------ *
 * 5. Exécution
 * ------------------------------------------------------------------ */

/** L'origine canonique vient du CNAME déployé, ou de SITE_ORIGIN pour un autre domaine. */
async function resolveOrigin() {
  const fromEnv = process.env.SITE_ORIGIN;
  if (fromEnv && fromEnv.trim() !== "") return fromEnv.trim().replace(/\/+$/, "");
  try {
    const cname = (await readFile(path.join(DIST_DIR, "CNAME"), "utf8")).trim();
    if (cname !== "") return `https://${cname.replace(/\/+$/, "")}`;
  } catch {
    /* Pas de CNAME : on retombe sur le domaine de production. */
  }
  return DEFAULT_ORIGIN;
}

async function main() {
  let shell;
  try {
    shell = await readFile(SHELL_FILE, "utf8");
  } catch {
    console.error("[prerender] dist/index.html introuvable — lancez `vite build` avant ce script.");
    process.exitCode = 1;
    return;
  }

  const rawRoutes = await readRouteManifest();
  if (rawRoutes === null) {
    console.warn(
      "[prerender] src/data/routes.ts absent : aucune page pré-rendue, aucun sitemap généré. " +
        "Le build reste valide mais les URL profondes renverront 404 sur GitHub Pages.",
    );
    return;
  }

  const { routes, skipped } = normalizeRoutes(rawRoutes);
  if (routes.length === 0) {
    console.warn("[prerender] Manifeste vide : rien à pré-rendre.");
    return;
  }

  const origin = await resolveOrigin();

  for (const route of routes) {
    const html = renderPage(shell, route, origin);
    const outFile =
      route.path === "/"
        ? SHELL_FILE
        : path.join(DIST_DIR, ...route.path.split("/").filter(Boolean), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html, "utf8");
  }

  // Coquille intacte : une URL inconnue (ou un article /blog/<slug> non listé)
  // démarre la SPA avec les métadonnées d'accueil plutôt qu'une page vide.
  await writeFile(path.join(DIST_DIR, "404.html"), shell, "utf8");

  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    const outFile = path.join(DIST_DIR, ...from.split("/").filter(Boolean), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, renderRedirect(origin, to), "utf8");
  }

  const buildDate = new Date().toISOString().slice(0, 10);
  const sitemap = renderSitemap(routes, origin, buildDate);
  await writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemap, "utf8");

  const indexed = routes.filter((route) => route.inSitemap).length;
  console.log(
    `[prerender] ${routes.length} page(s) écrite(s) sur ${origin} · ${indexed} URL dans sitemap.xml · ${Object.keys(LEGACY_REDIRECTS).length} redirection(s) · 404.html généré.`,
  );
  if (skipped.length > 0) {
    console.log(`[prerender] Routes paramétrées ignorées (servies par 404.html) : ${skipped.join(", ")}`);
  }
}

main().catch((error) => {
  console.error(`[prerender] ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
