/**
 * Constantes du cabinet : identité, coordonnées et réseaux.
 * Source unique pour Header, Footer, Contact et les données structurées (JSON-LD).
 */

export interface SiteAddress {
  /** Numéro et voie, tel qu'affiché sur une première ligne */
  street: string;
  postalCode: string;
  city: string;
  country: string;
  /** Adresse complète sur une seule ligne (Footer) */
  full: string;
}

export interface SiteContact {
  /** Numéro formaté pour l'affichage */
  phone: string;
  /** Même numéro au format href="tel:" */
  phoneHref: string;
  email: string;
  /** Même adresse au format href="mailto:" */
  emailHref: string;
}

export interface SiteHours {
  /** Plage d'ouverture affichée */
  weekdays: string;
  /** Mention complémentaire affichée sous les horaires */
  note: string;
  /** Heure d'ouverture au format ISO (JSON-LD) */
  opens: string;
  /** Heure de fermeture au format ISO (JSON-LD) */
  closes: string;
  /** Jours d'ouverture en anglais (JSON-LD) */
  daysOfWeek: readonly string[];
}

export interface SiteGeo {
  latitude: number;
  longitude: number;
}

export interface SiteConfig {
  name: string;
  /** Baseline affichée sous le logo */
  baseline: string;
  /** Mention d'appartenance à l'Ordre */
  membership: string;
  url: string;
  logo: string;
  address: SiteAddress;
  contact: SiteContact;
  hours: SiteHours;
  geo: SiteGeo;
  linkedin: string;
  /** Lien Google Maps de la fiche établissement */
  mapsUrl: string;
  /** Source de l'iframe Google Maps intégrée sur la page Contact */
  mapsEmbedUrl: string;
  /** Ligne de copyright du pied de page */
  copyright: string;
  /** Description par défaut utilisée par le composant SEO */
  defaultDescription: string;
}

/** Nom du cabinet, repris tel quel dans les balises <title> et les alt d'images. */
export const SITE_NAME = "RM Partners";

export const site: SiteConfig = {
  name: SITE_NAME,
  baseline: "Expert-Comptable • Commissaire aux Comptes",
  membership: "Membre de l'Ordre des Experts-Comptables",
  url: "https://rmpartners.fr",
  logo: "/logo.png",
  address: {
    street: "61 rue la Boétie",
    postalCode: "75008",
    city: "Paris",
    country: "FR",
    full: "61 rue la Boétie, 75008 Paris",
  },
  contact: {
    phone: "+33 6 03 40 68 53",
    phoneHref: "tel:+33603406853",
    email: "a.regragui@rmpartners.fr",
    emailHref: "mailto:a.regragui@rmpartners.fr",
  },
  hours: {
    weekdays: "Lun - Ven : 9h - 18h",
    note: "Sur rendez-vous",
    opens: "09:00",
    closes: "18:00",
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  geo: {
    latitude: 48.8722,
    longitude: 2.3126,
  },
  linkedin: "https://www.linkedin.com/company/rm-partners",
  mapsUrl: "https://maps.google.com/?q=61+rue+la+Boétie+75008+Paris",
  mapsEmbedUrl: "https://www.google.com/maps?q=61+rue+la+Boétie+75008+Paris&output=embed",
  copyright: "© 2019 RM Partners. Tous droits réservés.",
  defaultDescription:
    "Cabinet d'expertise comptable à Paris. RM Partners accompagne entrepreneurs, PME et indépendants dans la comptabilité, la fiscalité et la paie.",
};

export default site;
