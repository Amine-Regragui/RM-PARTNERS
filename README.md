# RM Partners — site du cabinet

Site vitrine du cabinet d'expertise comptable et de commissariat aux comptes RM Partners
([rmpartners.fr](https://rmpartners.fr)).

Application **React 18 + TypeScript**, construite avec **Vite**, stylée avec **Tailwind CSS v4**,
déployée en statique sur **GitHub Pages**.

---

## Démarrer

```bash
npm install
npm run dev          # serveur de développement (http://localhost:5173)
```

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Développement avec rechargement à chaud |
| `npm run build` | Build de production dans `dist/` + pré-rendu des routes |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run typecheck` | Vérifie les types sans produire de fichiers |
| `npm run format` | Reformate `src/` avec Prettier |

---

## Structure

```
rm-partners/
├── .github/workflows/deploy.yml   Publication automatique sur GitHub Pages
├── public/                        Servi tel quel à la racine du site
│   ├── CNAME                      Domaine personnalisé (rmpartners.fr)
│   ├── robots.txt
│   └── *.jpg *.png *.mp4 …        Images et vidéos
├── scripts/prerender.mjs          Génère un index.html par route + sitemap.xml
└── src/
    ├── main.tsx                   Point d'entrée (createRoot, HelmetProvider)
    ├── App.tsx                    Routeur wouter + providers globaux
    ├── index.css                  Tailwind + jetons de design (@theme)
    ├── styles/motion.css          Animations reprises du site d'origine
    ├── components/                Header, Footer, SEO, ServiceCard…
    │   └── ui/                    Primitives shadcn/ui (Button, Card, Input…)
    ├── contexts/                  ThemeContext
    ├── data/                      Contenus typés (blog, équipe, services, routes…)
    ├── hooks/                     useReveal (animations à l'apparition)
    ├── lib/utils.ts               Helper `cn()` (clsx + tailwind-merge)
    └── pages/                     Une page par route
```

**Convention :** le contenu éditorial vit dans `src/data/`, jamais dans le JSX.
Pour corriger un article de blog ou un membre de l'équipe, on édite `src/data/`, pas une page.

L'alias `@/` pointe vers `src/` (`import { Button } from "@/components/ui/button"`).

---

## Déploiement

Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml` :
vérification des types → build → pré-rendu → publication sur GitHub Pages.

Il faut avoir réglé une fois, dans le dépôt GitHub :
**Settings → Pages → Source = GitHub Actions**.

### Chemin de base

Le site est servi à la **racine** du domaine `rmpartners.fr`, donc `base: "/"` dans `vite.config.ts`.

> ⚠️ C'est le réglage qui avait cassé l'ancien site : le build était figé sur `/RM-PARTNERS/`
> (adresse `github.io/<dépôt>/`) alors que le domaine personnalisé sert à la racine.
> Résultat, plus aucune route ne correspondait et la page d'accueil s'affichait **entièrement blanche**.

Pour publier sur `https://<utilisateur>.github.io/RM-PARTNERS/` au lieu du domaine :

```bash
BASE_PATH=/RM-PARTNERS/ npm run build
```

### Pourquoi un pré-rendu

GitHub Pages ne sait pas réécrire les URL. Sans pré-rendu, une adresse comme `/services/audit`
renvoie **HTTP 404** : mauvais pour le référencement et pour le partage de liens.
`scripts/prerender.mjs` écrit un `index.html` par route (avec ses propres `<title>`, description et
canonical), si bien que chaque URL répond **200** avec ses vraies métadonnées.

---

## Origine du code

Ce projet a été **reconstruit à partir du bundle de production** du site précédent, généré par l'outil
Manus, dont le code source n'avait jamais été publié (seul le dossier `dist/` avait été déposé sur GitHub,
sans `package.json`).

La reconstruction s'est appuyée sur les attributs `data-loc` laissés par Manus dans le bundle, qui
indiquaient l'arborescence source exacte (39 fichiers sous `client/src/`), et sur une reconversion
automatique des 2 911 appels `jsx()` en JSX.

Corrections apportées au passage :

- chemin de base `/RM-PARTNERS/` → `/` (page blanche en production) ;
- suppression du runtime de l'éditeur Manus livré en production (358 Ko en ligne dans `index.html`,
  une seconde copie de React, et un écouteur `postMessage` **sans contrôle d'origine** qui permettait
  à n'importe quel site d'exécuter du code dans l'origine de rmpartners.fr) ;
- `lang="en"` → `lang="fr"`, suppression de `maximum-scale=1` (zoom bloqué, WCAG 1.4.4) ;
- favicon `/RM-PARTNERS/logo.png` (404) → `/logo.png` ;
- ajout des métadonnées de partage social (`og:image`) ;
- animations refaites en hook React au lieu d'un script manipulant le DOM de React de l'extérieur ;
- contenu visible par défaut : une panne du script d'animation ne peut plus masquer des sections ;
- purge des 38 anciens bundles publiés par erreur (~20 Mo).

## À faire

- [ ] Compléter les pages `MentionsLegales` et `Confidentialite` (marqueurs `[À COMPLÉTER]`) — **à valider par un juriste**
- [ ] Vérifier les contenus signalés par l'audit : témoignages portant les mêmes noms que l'équipe, partenariats affichés
- [ ] Optimiser les médias (WebP/AVIF, variantes `-mobile` inutilisées, vidéos ~6 Mo)
- [ ] Ajouter une image de partage `public/og-image.jpg` (1200×630)
