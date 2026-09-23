/** Structure du menu principal (Header) et des colonnes de liens du pied de page (Footer). */

/** Entrée de navigation pointant directement vers une page. */
export interface NavLink {
  href: string;
  label: string;
}

/** Entrée de navigation qui n'ouvre qu'un sous-menu déroulant. */
export interface NavMenu {
  label: string;
  submenu: NavLink[];
}

export type NavItem = NavLink | NavMenu;

/** Discrimine les deux formes d'entrée du menu (narrowing exploitable dans le JSX). */
export function hasSubmenu(item: NavItem): item is NavMenu {
  return "submenu" in item;
}

export const mainNav: NavItem[] = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    label: "Cabinet",
    submenu: [
      {
        href: "/president",
        label: "Mot du Président",
      },
      {
        href: "/about",
        label: "Présentation du cabinet",
      },
      {
        href: "/equipe",
        label: "Équipe",
      },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        href: "/services",
        label: "Tous nos services",
      },
      {
        href: "/services/comptabilite",
        label: "Comptabilité",
      },
      {
        href: "/services/fiscalite",
        label: "Fiscalité",
      },
      {
        href: "/services/paie",
        label: "Paie & Social",
      },
      {
        href: "/services/audit",
        label: "Audit & Commissariat",
      },
      {
        href: "/services/controle-fiscal",
        label: "Contrôle Fiscal",
      },
      {
        href: "/services/conseil",
        label: "Conseil en gestion",
      },
    ],
  },
  {
    href: "/secteurs",
    label: "Secteurs",
  },
  {
    href: "/blog",
    label: "Actualités",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

/** Bouton d'appel à l'action présent dans le Header (version bureau et mobile). */
export const headerCta: NavLink = {
  href: "/contact",
  label: "Nous contacter",
};

/** Colonne « Services » du pied de page. */
export const footerServices: NavLink[] = [
  { href: "/services/comptabilite", label: "Comptabilité" },
  { href: "/services/fiscalite", label: "Fiscalité" },
  { href: "/services/paie", label: "Paie & Social" },
  { href: "/services/audit", label: "Audit & Commissariat" },
  { href: "/services/controle-fiscal", label: "Contrôle Fiscal" },
];

/** Colonne « Entreprise » du pied de page. */
export const footerCompany: NavLink[] = [
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

/** Liens légaux en bas de page — les cibles ne sont pas encore publiées (href="#"). */
export const footerLegal: NavLink[] = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Politique de confidentialité" },
  { href: "#", label: "Conditions d'utilisation" },
];

export default mainNav;
