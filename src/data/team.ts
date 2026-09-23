/** Membres de l'équipe présentés sur la page /equipe. */

export interface TeamMember {
  name: string;
  /** Fonction dans le cabinet */
  title: string;
  /** Qualification professionnelle affichée sous la fonction */
  role: string;
  /** Nom du fichier image, servi depuis /public */
  avatar: string;
  /** Langues parlées, séparées par des virgules */
  languages: string;
  /** Vide lorsque le contact direct n'est pas publié */
  email: string;
  /** Vide lorsque le contact direct n'est pas publié */
  phone: string;
  bio: string;
  specialties: string[];
  education: string[];
  /** Vide pour les membres dont le parcours n'est pas détaillé */
  experience: string[];
}

export const team: TeamMember[] = [
  {
    name: "Amine Regragui",
    title: "Président Fondateur",
    role: "Expert-Comptable & Commissaire aux Comptes",
    avatar: "avatar-1.jpg",
    languages: "Français, Anglais, Arabe",
    email: "a.regragui@rmpartners.fr",
    phone: "+33 6 03 40 68 53",
    bio: "Amine Regragui est un expert-comptable et commissaire aux comptes expérimenté avec plus de 15 ans d'expérience dans le domaine. Fondateur de RM Partners, il a accompagné plus de 500 entreprises dans leur développement.",
    specialties: [
      "Expertise comptable",
      "Commissariat aux comptes",
      "Conseil en gestion",
      "Optimisation fiscale",
    ],
    education: [
      "Diplôme d'Expert-Comptable et de Commissaire aux Comptes (DEC) - Paris",
      "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Paris",
      "Diplôme de Comptabilité et de Gestion (DCG) - Paris",
    ],
    experience: [
      "Fondateur de RM Partners – Expert-Comptable & Commissaire aux Comptes (depuis nov. 2019)",
      "Fondateur de RM Expertise – Expert-Comptable & Commissaire aux Comptes, Marrakech (depuis mars 2021)",
      "Responsable de Dossiers chez P. & Partners (juil. 2018 - mars 2019)",
      "Financial Service Consultant chez Rothschild & Co (déc. 2017 - nov. 2018)",
      "Analyste chez P. & Partners (juil. 2015 - juin 2018)",
      "Expert Comptable Stagiaire chez ALEYA Conseil Expertise Audit (déc. 2013 - juil. 2015)",
      "Collaborateur Comptable chez Crowe RSA (sept. 2011 - août 2012)",
    ],
  },
  {
    name: "Sophie Laurent",
    title: "Directrice Comptable",
    role: "Spécialiste en Comptabilité et Gestion",
    avatar: "avatar-2.jpg",
    languages: "Français, Anglais",
    email: "",
    phone: "",
    bio: "Sophie Laurent est une spécialiste en comptabilité et gestion passionnée par l'optimisation des processus comptables. Elle accompagne les entreprises dans la mise en place de solutions comptables efficaces et adaptées à leurs besoins.",
    specialties: [
      "Mise en place de systèmes comptables",
      "Optimisation des processus",
      "Gestion administrative",
      "Reporting financier",
    ],
    education: [
      "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Lyon",
      "Licence en Gestion - Université Lyon 3",
    ],
    experience: [],
  },
  {
    name: "Marc Dubois",
    title: "Responsable Audit",
    role: "Spécialiste en Audit et Contrôle",
    avatar: "avatar-3.jpg",
    languages: "Français, Anglais",
    email: "",
    phone: "",
    bio: "Marc Dubois est un spécialiste en audit et contrôle reconnu pour son expertise dans l'analyse financière des PME. Il apporte une rigueur et un professionnalisme exemplaires à chaque mission.",
    specialties: [
      "Analyse financière",
      "Vérification de conformité",
      "Contrôle interne",
      "Audit de gestion",
    ],
    education: [
      "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Bordeaux",
      "Diplôme de Comptabilité et de Gestion (DCG) - Bordeaux",
    ],
    experience: [],
  },
  {
    name: "Isabelle Moreau",
    title: "Responsable Fiscalité",
    role: "Spécialiste en Fiscalité et Droit des Affaires",
    avatar: "avatar-4.jpg",
    languages: "Français, Anglais",
    email: "",
    phone: "",
    bio: "Isabelle Moreau est une spécialiste en fiscalité d'entreprise et droit des affaires. Elle accompagne les dirigeants dans l'optimisation de leur situation fiscale et la gestion des enjeux juridiques liés à leur activité.",
    specialties: [
      "Optimisation de la structure fiscale",
      "Gestion des obligations fiscales",
      "Conseils en droit des affaires",
      "Accompagnement des dirigeants",
    ],
    education: [
      "Master en Droit Fiscal - Université Paris 1",
      "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Paris",
    ],
    experience: [],
  },
];

export default team;
