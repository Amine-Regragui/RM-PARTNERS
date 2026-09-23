import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  ChartColumn,
  CircleCheckBig,
  Clock,
  FileText,
  Globe,
  Lock,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const gm = [
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

function G0() {
  return (
    <div className="w-full overflow-hidden bg-secondary py-4">
      <style>{`
        @-webkit-keyframes scroll-left {
          from { -webkit-transform: translateX(0); transform: translateX(0); }
          to { -webkit-transform: translateX(-50%); transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .carousel-container {
          width: max-content;
          -webkit-animation: scroll-left 40s linear infinite;
          animation: scroll-left 40s linear infinite;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>
      <div className="relative flex overflow-hidden">
        <div className="carousel-container flex gap-6 w-max">
          {gm.map((n) => (
            <TestimonialsCarousel testimonial={n} />
          ))}
          {gm.map((n) => (
            <TestimonialsCarousel testimonial={n} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Home() {
  const n = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RM Partners",
    image: "https://rmpartners.fr/logo.png",
    "@id": "https://rmpartners.fr",
    url: "https://rmpartners.fr",
    telephone: "+33603406853",
    address: {
      "@type": "PostalAddress",
      streetAddress: "61 rue la Boétie",
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8722,
      longitude: 2.3126,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/company/rm-partners"],
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cabinet d'expertise comptable et de commissariat aux comptes | RM Partners"
        description="RM Partners accompagne les entrepreneurs, investisseurs et dirigeants dans leur croissance, structuration et optimisation. Expert-comptable à Paris avec expertise franco-marocaine."
        schema={n}
      />
      <Header />
      <main className="flex-1">
        <div className="md:hidden">
          <div className="relative w-full min-h-[520px] overflow-hidden flex items-end">
            <img
              src="/hero-image.jpg"
              alt="Cabinet RM Partners"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
            <div className="relative z-10 px-5 pb-8 pt-10 w-full">
              <h1
                id="rm-home-hero-title"
                className="rm-display text-white mb-3"
                style={{
                  fontSize: "1.75rem",
                  lineHeight: "1.2",
                }}
              >
                Votre partenaire de confiance pour aller plus loin
                <span className="text-accent">.</span>
              </h1>
              <p className="text-white/85 mb-6 leading-relaxed text-sm">
                Cabinet d'expertise comptable et de commissariat aux comptes à Paris, nous
                accompagnons les entreprises françaises et internationales dans leurs défis
                comptables, fiscaux et stratégiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Link href="/services">
                  <a className="rm-arrow-cta">
                    Découvrir nos services
                    <span className="rm-arrow-circle">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/50 text-white text-sm font-bold uppercase tracking-wide hover:border-accent hover:text-accent transition-colors">
                    Prendre rendez-vous
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="relative w-full rm-home-hero bg-primary overflow-hidden hidden md:block">
          <img
            src="/hero-image.jpg"
            alt="Cabinet RM Partners"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col justify-end h-full">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 pb-12 md:pb-20">
              <h1
                className="rm-display text-white mb-4 max-w-2xl drop-shadow-sm"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3.2rem)",
                  lineHeight: "1.15",
                }}
              >
                Votre partenaire de confiance pour aller plus loin
                <span className="text-accent">.</span>
              </h1>
              <p
                className="text-white/85 mb-8 leading-relaxed max-w-lg"
                style={{
                  fontSize: "clamp(0.875rem, 1.4vw, 1.05rem)",
                }}
              >
                Cabinet d'expertise comptable et de commissariat aux comptes à Paris, nous
                accompagnons les entreprises françaises et internationales dans leurs défis
                comptables, fiscaux et stratégiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Link href="/services">
                  <a className="rm-arrow-cta">
                    Découvrir nos services
                    <span className="rm-arrow-circle">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/50 text-white text-sm font-bold uppercase tracking-wide hover:border-accent hover:text-accent transition-colors">
                    Prendre rendez-vous
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  icon: Users,
                  number: "500+",
                  label: "Clients accompagnés",
                  target: 500,
                  suffix: "+",
                },
                {
                  icon: Award,
                  number: "15+",
                  label: "Années d'expérience",
                  target: 15,
                  suffix: "+",
                },
                {
                  icon: Globe,
                  number: "France",
                  label: "Une expertise internationale",
                },
                {
                  icon: Clock,
                  number: "24h",
                  label: "Réactivité garantie",
                  target: 24,
                  suffix: "h",
                },
              ].map((i, l) => (
                <div className="flex items-center gap-2 md:gap-4">
                  <i.icon
                    className="w-5 h-5 md:w-7 md:h-7 text-accent flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <div>
                    <div
                      className="font-extrabold text-white leading-tight"
                      style={{
                        fontSize: "clamp(0.95rem, 2.2vw, 1.5rem)",
                      }}
                      {...(i.target != null
                        ? {
                            "data-rm-counter": "",
                            "data-target": String(i.target),
                            "data-suffix": i.suffix,
                          }
                        : {})}
                    >
                      {i.target != null ? "0" + i.suffix : i.number}
                    </div>
                    <p
                      className="text-white/60"
                      style={{
                        fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
                      }}
                    >
                      {i.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="rm-section bg-background py-14 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Expertise France",
                  desc: "Un accompagnement adapté aux projets transfrontaliers et aux structurations françaises.",
                },
                {
                  icon: Users,
                  title: "Suivi personnalisé",
                  desc: "Un interlocuteur dédié qui connaît votre dossier et votre secteur d'activité.",
                },
                {
                  icon: Zap,
                  title: "Réactivité",
                  desc: "Une réponse sous 24 heures ouvrées pour toute demande urgente.",
                },
                {
                  icon: Lock,
                  title: "Outils digitaux sécurisés",
                  desc: "Un espace client en ligne pour suivre votre dossier et transmettre vos pièces en toute sécurité.",
                },
                {
                  icon: Briefcase,
                  title: "Approche business",
                  desc: "Un conseil orienté vers les décisions concrètes de gestion et de croissance.",
                },
                {
                  icon: TrendingUp,
                  title: "Optimisation financière",
                  desc: "Des solutions fiscales et sociales conformes, pensées pour améliorer votre rentabilité.",
                },
              ].map((i, l) => (
                <div className="rm-card p-6">
                  <div
                    className="mb-5"
                    style={{
                      animationDelay: `${l * 0.6}s`,
                    }}
                  >
                    <i.icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-heading">{i.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="rm-section bg-secondary py-14 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <div className="rm-eyebrow justify-center">
                <span>Notre cabinet en images</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Découvrez RM Partners</h2>
            </div>
            <div className="w-full shadow-2xl overflow-hidden">
              <div className="relative w-full aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay={!0}
                  muted={!0}
                  loop={!0}
                  playsInline={!0}
                  preload="auto"
                  poster="/hero-video-poster.jpg"
                >
                  <source src="/hero-video.webm" type="video/webm" />
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-2xl">
              <div className="rm-eyebrow">
                <span>Nos prestations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
              <p className="text-base text-foreground/70">
                Un accompagnement comptable, fiscal, social et stratégique, structuré autour des
                besoins de chaque entreprise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<FileText className="w-8 h-8" />}
                title="Expertise Comptable"
                description="Tenue comptable et bilans"
                href="/services/comptabilite"
                features={[
                  "Tenue comptable générale",
                  "Bilans et comptes de résultat",
                  "Tableaux de bord de gestion",
                ]}
              />
              <ServiceCard
                icon={<ChartColumn className="w-8 h-8" />}
                title="Commissariat aux Comptes"
                description="Audit et conformité"
                href="/services/audit"
                features={["Audit financier", "Vérification de conformité", "Rapports d'audit"]}
              />
              <ServiceCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="Fiscalité"
                description="Optimisation et déclarations"
                href="/services/fiscalite"
                features={[
                  "Déclarations TVA, IS, CFE",
                  "Conseil en optimisation",
                  "Accompagnement contrôles",
                ]}
              />
              <ServiceCard
                icon={<Users className="w-8 h-8" />}
                title="Paie & Social"
                description="Gestion complète de la paie"
                href="/services/paie"
                features={["Bulletins de paie", "Déclarations sociales", "Gestion du personnel"]}
              />
              <ServiceCard
                icon={<Briefcase className="w-8 h-8" />}
                title="Conseil Stratégique"
                description="Accompagnement dirigeants"
                href="/services/conseil"
                features={["Stratégie d'entreprise", "Optimisation financière", "Conseils M&A"]}
              />
              <ServiceCard
                icon={<Shield className="w-8 h-8" />}
                title="Contrôle Fiscal"
                description="Assistance et préparation"
                href="/services/controle-fiscal"
                features={["Audit à blanc", "Assistance aux débats", "Stratégie de défense"]}
              />
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <a className="rm-arrow-cta">
                  Voir tous nos services
                  <span className="rm-arrow-circle">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="rm-section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rm-eyebrow">
                  <span>Outils digitaux</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Un suivi simple et sécurisé</h2>
                <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                  RM Partners s'appuie sur des outils digitaux pour simplifier la transmission des
                  documents et le suivi de votre dossier.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automatisation des tâches comptables répétitives",
                    "Suivi de votre dossier en ligne",
                    "Espace client sécurisé",
                    "Comptabilité dématérialisée",
                    "Moins de temps consacré aux tâches administratives",
                  ].map((i, l) => (
                    <li className="flex items-center gap-3">
                      <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/85 text-sm">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-6 border border-border">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214634183/Ey88EFWcxvDEUJoFKq4Zxm/financial-data-premium-9uKaG7Mpw57KYqeeRLaFYN.webp"
                  alt="Suivi financier digital RM Partners"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-2xl">
              <div className="rm-eyebrow">
                <span>Avis clients</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ce que nos clients disent de nous
              </h2>
              <p className="text-base text-foreground/70">
                Quelques retours de dirigeants et d'entrepreneurs que nous accompagnons.
              </p>
            </div>
            <G0 />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
