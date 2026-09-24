/**
 * Manifeste des routes déclarées dans App.tsx, destiné au pré-rendu et au sitemap.
 *
 * `title` et `description` reprennent l'appel <SEO> de la page lorsqu'il existe ;
 * pour les pages qui n'en déclarent pas encore, ils reprennent mot pour mot le titre
 * et le chapô de la bannière publiée (aucun texte n'a été réécrit).
 */

export interface RouteEntry {
  /** Motif de route wouter, tel que déclaré dans App.tsx */
  path: string;
  /** Titre SEO, sans le suffixe « | RM Partners » ajouté par le composant SEO */
  title: string;
  description: string;
  /** true pour une route paramétrée : elle ne peut pas être pré-rendue telle quelle */
  dynamic?: boolean;
  /** true pour une route exclue du sitemap (page d'erreur, doublon) */
  noIndex?: boolean;
}

export const routes: RouteEntry[] = [
  {
    path: "/",
    title: "Cabinet d'expertise comptable et de commissariat aux comptes | RM Partners",
    description:
      "RM Partners accompagne les entrepreneurs, investisseurs et dirigeants dans leur croissance, structuration et optimisation. Expert-comptable à Paris avec expertise franco-marocaine.",
  },
  {
    path: "/about",
    title: "À propos du cabinet",
    description:
      "Découvrez RM Partners, cabinet d'expertise comptable à Paris 8. Notre histoire, nos valeurs de rigueur et réactivité, et notre engagement envers nos clients.",
  },
  {
    path: "/president",
    title: "Mot du Président",
    description:
      "Découvrez la vision et le parcours d'Amine Regragui, Président et Fondateur de RM Partners.",
  },
  {
    path: "/equipe",
    title: "Notre Équipe",
    description: "Des experts passionnés au service de votre réussite.",
  },
  {
    path: "/secteurs",
    title: "Secteurs d'Activité",
    description: "Une expertise adaptée à chaque type d'entreprise et de secteur.",
  },
  {
    path: "/services",
    title: "Nos services",
    description:
      "Une gamme complète de services comptables, fiscaux, sociaux et juridiques adaptés aux besoins de chaque entreprise.",
  },
  {
    path: "/services/comptabilite",
    title: "Comptabilité",
    description: "Tenue comptable complète, bilans et gestion financière pour votre entreprise.",
  },
  {
    path: "/services/fiscalite",
    title: "Fiscalité & Optimisation",
    description:
      "Stratégies fiscales intelligentes pour réduire vos impôts et optimiser votre structure.",
  },
  {
    path: "/services/paie",
    title: "Paie & Gestion Sociale",
    description:
      "Gestion complète de la paie, des cotisations sociales et de la conformité sociale.",
  },
  {
    path: "/services/audit",
    title: "Audit & Commissariat aux Comptes",
    description:
      "Audit légal et commissariat aux comptes pour assurer la fiabilité de vos états financiers.",
  },
  {
    path: "/services/controle-fiscal",
    title: "Assistance au Contrôle Fiscal",
    description:
      "Expertise en défense fiscale à Paris. RM Partners vous accompagne lors de vos contrôles fiscaux : préparation, assistance aux débats et recours.",
  },
  {
    path: "/services/juridique",
    title: "Assistance Juridique",
    description:
      "Accompagnement juridique complet pour sécuriser votre entreprise et vos décisions.",
  },
  {
    path: "/services/creation",
    title: "Création d'Entreprise",
    description:
      "Accompagnement complet de la création de votre entreprise du projet à l'immatriculation.",
  },
  {
    path: "/services/conseil",
    title: "Conseil en Gestion",
    description:
      "Pilotage financier et stratégie pour optimiser la performance de votre entreprise.",
  },
  {
    path: "/services/controle",
    title: "Contrôle Fiscal",
    description: "Assistance et défense lors d'un contrôle fiscal pour sécuriser votre entreprise.",
  },
  {
    path: "/outils",
    title: "Outils Informatiques",
    description: "Solutions digitales pour simplifier votre gestion comptable et paie.",
  },
  {
    path: "/implantations",
    title: "Nos Implantations",
    description: "Retrouvez RM Partners à Paris pour un accompagnement de proximité.",
  },
  {
    path: "/partenaires",
    title: "Nos Partenaires",
    description: "Des partenaires de confiance pour vous accompagner dans tous vos projets.",
  },
  {
    path: "/temoignages",
    title: "Témoignages Clients",
    description: "Découvrez ce que nos clients pensent de nos services et de notre accompagnement.",
  },
  {
    path: "/blog",
    title: "Actualités et Conseils",
    description:
      "Retrouvez les dernières actualités fiscales, comptables et sociales du cabinet RM Partners. Conseils d'experts pour votre entreprise.",
  },
  {
    // Titre et description sont repris du titre de l'article au rendu (cf. BlogArticle).
    path: "/blog/:slug",
    title: "Actualités et Conseils",
    description:
      "Retrouvez les dernières actualités fiscales, comptables et sociales du cabinet RM Partners. Conseils d'experts pour votre entreprise.",
    dynamic: true,
  },
  {
    // Déclarée après /blog/:slug dans le Switch : jamais atteinte en navigation.
    path: "/blog/facturation-electronique",
    title: "Facturation Électronique : Obligations et Enjeux",
    description:
      "La facturation électronique est devenue un sujet incontournable pour les entreprises françaises. Depuis le 1er janvier 2024, les obligations se renforcent progressivement. Découvrez ce que vous devez savoir sur cette transformation digitale majeure.",
    noIndex: true,
  },
  {
    path: "/contact",
    title: "Contactez-nous",
    description:
      "Contactez RM Partners, votre expert-comptable à Paris 8. Formulaire de contact, téléphone, email et plan d'accès à nos bureaux.",
  },
  {
    path: "/404",
    title: "Page Not Found",
    description: "Sorry, the page you are looking for doesn't exist.",
    noIndex: true,
  },
];

/** Routes réellement pré-rendables et indexables (sitemap). */
export const staticRoutes: RouteEntry[] = routes.filter(
  (route) => !route.dynamic && !route.noIndex,
);

/** Retrouve l'entrée du manifeste correspondant à un chemin. */
export function getRouteByPath(path: string): RouteEntry | undefined {
  return routes.find((route) => route.path === path);
}

export default routes;
