/**
 * Prestations du cabinet.
 * `services` reprend la grille complète de la page /services ;
 * `featuredServices` reprend la sélection mise en avant sur la page d'accueil,
 * dont les intitulés, descriptions et puces diffèrent volontairement de la grille complète.
 *
 * `icon` est le composant lucide-react à rendre — la taille reste définie côté page
 * (`<service.icon className="w-8 h-8" />`) pour ne pas figer le rendu ici.
 */

import {
  Briefcase,
  ChartColumn,
  CircleCheckBig,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Chemin de la page de détail */
  href: string;
  /** Puces détaillant la prestation */
  features: string[];
}

export const services: Service[] = [
  {
    icon: FileText,
    title: "Comptabilité",
    description: "Tenue comptable et bilans",
    href: "/services/comptabilite",
    features: [
      "Tenue comptable générale et analytique",
      "Élaboration du bilan et compte de résultat",
      "Déclarations fiscales et suivi budgétaire",
      "Tableaux de bord de gestion",
    ],
  },
  {
    icon: TrendingUp,
    title: "Fiscalité",
    description: "Optimisation et déclarations fiscales",
    href: "/services/fiscalite",
    features: [
      "Déclarations de TVA, IS, CFE, CVAE",
      "Conseil en optimisation fiscale",
      "Accompagnement lors de contrôles fiscaux",
      "Fiscalité internationale et des dirigeants",
    ],
  },
  {
    icon: Users,
    title: "Paie et Social",
    description: "Gestion complète de la paie",
    href: "/services/paie",
    features: [
      "Établissement des bulletins de salaire",
      "Déclarations sociales et DSN",
      "Gestion des congés, absences, ruptures",
      "Conseil en droit social",
    ],
  },
  {
    icon: Briefcase,
    title: "Juridique",
    description: "Assistance juridique courante",
    href: "/services/juridique",
    features: [
      "Rédaction d'actes juridiques (AG, statuts, PV)",
      "Secrétariat juridique annuel",
      "Modifications statutaires",
      "Conseil juridique aux dirigeants",
    ],
  },
  {
    icon: Zap,
    title: "Création d'entreprise",
    description: "Accompagnement à la création",
    href: "/services/creation",
    features: [
      "Choix du statut juridique et fiscal",
      "Élaboration du business plan",
      "Immatriculation et démarches administratives",
      "Suivi post-création",
    ],
  },
  {
    icon: ChartColumn,
    title: "Conseil en gestion",
    description: "Pilotage et stratégie financière",
    href: "/services/conseil",
    features: [
      "Tableaux de bord et prévisionnels",
      "Analyse de rentabilité et cash-flow",
      "Optimisation des coûts et marges",
      "Conseil en financement et investissement",
    ],
  },
  {
    icon: Shield,
    title: "Contrôle fiscal",
    description: "Assistance et défense en contrôle",
    href: "/services/controle-fiscal",
    features: [
      "Préparation et accompagnement lors d'un contrôle",
      "Représentation auprès de l'administration fiscale",
      "Rédaction des réponses et recours",
      "Optimisation post-contrôle",
    ],
  },
  {
    icon: CircleCheckBig,
    title: "Audit",
    description: "Audit légal et contractuel",
    href: "/services/audit",
    features: [
      "Commissariat aux comptes",
      "Audit d'acquisition et d'évaluation",
      "Audit interne et opérationnel",
      "Rapport d'audit détaillé et recommandations",
    ],
  },
];

/** Sélection affichée sur la page d'accueil — libellés et puces propres à l'accueil. */
export const featuredServices: Service[] = [
  {
    icon: FileText,
    title: "Expertise Comptable",
    description: "Tenue comptable et bilans",
    href: "/services/comptabilite",
    features: [
      "Tenue comptable générale",
      "Bilans et comptes de résultat",
      "Tableaux de bord de gestion",
    ],
  },
  {
    icon: ChartColumn,
    title: "Commissariat aux Comptes",
    description: "Audit et conformité",
    href: "/services/audit",
    features: ["Audit financier", "Vérification de conformité", "Rapports d'audit"],
  },
  {
    icon: TrendingUp,
    title: "Fiscalité",
    description: "Optimisation et déclarations",
    href: "/services/fiscalite",
    features: ["Déclarations TVA, IS, CFE", "Conseil en optimisation", "Accompagnement contrôles"],
  },
  {
    icon: Users,
    title: "Paie & Social",
    description: "Gestion complète de la paie",
    href: "/services/paie",
    features: ["Bulletins de paie", "Déclarations sociales", "Gestion du personnel"],
  },
  {
    icon: Briefcase,
    title: "Conseil Stratégique",
    description: "Accompagnement dirigeants",
    href: "/services/conseil",
    features: ["Stratégie d'entreprise", "Optimisation financière", "Conseils M&A"],
  },
  {
    icon: Shield,
    title: "Contrôle Fiscal",
    description: "Assistance et préparation",
    href: "/services/controle-fiscal",
    features: ["Audit à blanc", "Assistance aux débats", "Stratégie de défense"],
  },
];

export default services;
