/**
 * Témoignages clients.
 * Deux jeux distincts coexistent sur le site publié :
 * - `carouselTestimonials` : le bandeau défilant de la page d'accueil (composant TestimonialsCarousel) ;
 * - `testimonials` : les avis détaillés de la page /temoignages.
 * Les deux listes ont des auteurs et des textes différents, elles ne sont pas fusionnées.
 */

/** Témoignage court affiché dans le carrousel de la page d'accueil. */
export interface CarouselTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  /** Texte du témoignage (tronqué à 4 lignes dans la carte) */
  text: string;
  /** Nombre d'étoiles pleines, de 0 à 5 */
  rating: number;
}

/** Témoignage détaillé affiché sur la page /temoignages. */
export interface Testimonial {
  name: string;
  company: string;
  role: string;
  /** Texte du témoignage */
  content: string;
  /** Nombre d'étoiles pleines, de 0 à 5 */
  rating: number;
  /** Émoji illustrant l'auteur */
  image: string;
}

export const carouselTestimonials: CarouselTestimonial[] = [
  {
    id: 1,
    name: "Jean M.",
    role: "Directeur",
    company: "PME Paris",
    text: "Un cabinet réactif, compétent et toujours disponible. Ils ont vraiment transformé notre gestion comptable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie L.",
    role: "Fondatrice",
    company: "Start-up Paris",
    text: "Grâce à RM Partners, ma société est parfaitement structurée fiscalement. Un vrai partenaire de confiance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marc D.",
    role: "Entrepreneur",
    company: "Entrepreneur indépendant",
    text: "Service professionnel, conseil avisé et disponibilité exceptionnelle. Je recommande vivement RM Partners.",
    rating: 5,
  },
  {
    id: 4,
    name: "Claire B.",
    role: "Responsable Finance",
    company: "Société de Gestion",
    text: "Expertise reconnue en gestion de fonds. Leur accompagnement a été décisif pour notre croissance.",
    rating: 5,
  },
  {
    id: 5,
    name: "Thomas R.",
    role: "Gérant",
    company: "SARL Île-de-France",
    text: "Accompagnement complet de la création à l'optimisation. Équipe très professionnelle et à l'écoute.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nathalie P.",
    role: "Directrice",
    company: "PME Conseil",
    text: "Conseil stratégique de qualité. RM Partners nous aide à piloter notre activité de manière optimale.",
    rating: 5,
  },
  {
    id: 7,
    name: "Pierre V.",
    role: "Associé",
    company: "Cabinet d'Avocats",
    text: "Partenaire fiable pour tous nos besoins comptables et fiscaux. Très recommandé.",
    rating: 5,
  },
  {
    id: 8,
    name: "Isabelle M.",
    role: "Présidente",
    company: "Fonds d'Investissement",
    text: "Expertise en audit et commissariat aux comptes irréprochable. Équipe compétente et réactive.",
    rating: 5,
  },
  {
    id: 9,
    name: "Laurent D.",
    role: "Directeur Général",
    company: "Groupe Multinational",
    text: "Service de haut niveau. RM Partners comprend les enjeux complexes des grandes organisations.",
    rating: 5,
  },
  {
    id: 10,
    name: "Véronique C.",
    role: "Fondatrice",
    company: "Startup Tech",
    text: "Accompagnement exemplaire pour notre levée de fonds. Conseils avisés et professionnels.",
    rating: 5,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jean Martin",
    company: "Startup Tech Paris",
    role: "Fondateur",
    content:
      "RM Partners nous a accompagnés depuis la création de notre entreprise. Leur expertise et leur réactivité ont été déterminantes pour notre succès. Merci pour votre professionnalisme !",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Sophie Laurent",
    company: "Conseil & Stratégie",
    role: "Directrice Générale",
    content:
      "Nous avons fait confiance à RM Partners pour notre audit annuel. Leur rapport détaillé et leurs recommandations nous ont permis d'optimiser notre gestion. Excellent travail !",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Marc Dupont",
    company: "Commerce de Proximité",
    role: "Gérant",
    content:
      "Depuis 5 ans, RM Partners gère ma comptabilité et ma paie. Je peux me concentrer sur mon activité en toute confiance. Leur support est toujours disponible et efficace.",
    rating: 5,
    image: "👨‍🔧",
  },
  {
    name: "Isabelle Moreau",
    company: "Cabinet Juridique",
    role: "Associée",
    content:
      "RM Partners nous a aidés lors d'un contrôle fiscal complexe. Leur stratégie de défense a été très efficace. Je les recommande vivement à tous mes confrères.",
    rating: 5,
    image: "👩‍⚖️",
  },
  {
    name: "Thomas Bernard",
    company: "PME Industrielle",
    role: "Président",
    content:
      "Le conseil en gestion de RM Partners nous a permis d'identifier des gisements d'économies importants. Leur analyse de rentabilité a transformé notre approche commerciale.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Marie Leclerc",
    company: "Agence Immobilière",
    role: "Responsable Administrative",
    content:
      "RM Partners a mis en place TeoGest pour notre comptabilité. L'interface est intuitive et les rapports en temps réel nous aident à prendre de meilleures décisions.",
    rating: 5,
    image: "👩‍💼",
  },
];

export default testimonials;
