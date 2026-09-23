import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ArrowUpRight,
  Briefcase,
  ChartColumn,
  CircleCheckBig,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

export function Services() {
  const n = [
    {
      icon: <FileText className="w-8 h-8" />,
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
      icon: <TrendingUp className="w-8 h-8" />,
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
      icon: <Users className="w-8 h-8" />,
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
      icon: <Briefcase className="w-8 h-8" />,
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
      icon: <Zap className="w-8 h-8" />,
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
      icon: <ChartColumn className="w-8 h-8" />,
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
      icon: <Shield className="w-8 h-8" />,
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
      icon: <CircleCheckBig className="w-8 h-8" />,
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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/services-banner.jpg"
              alt="Nos services"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-5">
              Nos prestations
            </p>
            <h1 className="text-white mb-6 max-w-3xl">Nos services</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              Une gamme complète de services comptables, fiscaux, sociaux et juridiques adaptés aux
              besoins de chaque entreprise.
            </p>
          </div>
        </section>
        <section className="rm-section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {n.map((i, l) => (
                <ServiceCard {...i} />
              ))}
            </div>
          </div>
        </section>
        <section className="rm-section bg-secondary">
          <div className="container mx-auto px-4">
            <div className="rm-fade-up rounded-2xl overflow-hidden shadow-2xl mb-16">
              <img
                src="/tools-banner.jpg"
                alt="Outils digitaux RM Partners"
                className="w-full h-auto"
              />
            </div>
            <div className="rm-fade-up mb-14 max-w-2xl mx-auto text-center">
              <div className="rm-eyebrow justify-center">
                <span>Outils digitaux</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mt-3">
                Nos outils digitaux
              </h2>
              <p className="text-foreground/80 mt-4 leading-relaxed">
                Nous mettons à votre disposition des solutions numériques performantes afin de
                simplifier la gestion de votre entreprise, automatiser vos processus et collaborer
                efficacement avec notre cabinet.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="rm-reveal rm-card rounded-2xl p-7 bg-white flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[440px] overflow-hidden">
                <div className="flex items-center gap-4 mb-5 min-h-[3.5rem]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src="/logo-teogest.png"
                      alt="Teogest"
                      className="w-full h-full object-contain p-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading leading-tight">Teogest</h3>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold">
                      Expert-Comptable
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[4.5rem]">
                  Plateforme de production comptable conçue pour optimiser le travail collaboratif
                  entre votre entreprise et notre cabinet.
                </p>
                <div className="w-10 h-0.5 bg-accent rounded mb-4">{""}</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Comptabilité collaborative
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Révision comptable
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Automatisation des écritures
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Rapprochement bancaire
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Gestion documentaire sécurisée
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Tableaux de bord en temps réel
                  </li>
                </ul>
              </div>
              <div className="rm-reveal rm-card rounded-2xl p-7 bg-white flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[440px] overflow-hidden">
                <div className="flex items-center gap-4 mb-5 min-h-[3.5rem]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: "#000000",
                    }}
                  >
                    <img
                      src="/logo-sage.png"
                      alt="Sage"
                      className="w-full h-full object-contain p-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading leading-tight">Sage</h3>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold">
                      Comptabilité
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[4.5rem]">
                  Solution de gestion reconnue permettant de piloter efficacement la comptabilité,
                  la finance et les obligations fiscales.
                </p>
                <div className="w-10 h-0.5 bg-accent rounded mb-4">{""}</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Comptabilité générale, auxiliaire et analytique
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Gestion de la TVA et déclarations fiscales
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    États financiers en temps réel
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Suivi clients, fournisseurs et tiers
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Sécurisation des données
                  </li>
                </ul>
              </div>
              <div className="rm-reveal rm-card rounded-2xl p-7 bg-white flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[440px] overflow-hidden">
                <div className="flex items-center gap-4 mb-5 min-h-[3.5rem]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src="/logo-openpaye.png"
                      alt="Openpaye"
                      className="w-full h-full object-contain p-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading leading-tight">Openpaye</h3>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold">
                      Paie
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[4.5rem]">
                  Solution de paie en ligne simple et fiable pour gérer l'ensemble du processus de
                  paie en toute conformité.
                </p>
                <div className="w-10 h-0.5 bg-accent rounded mb-4">{""}</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Bulletins 100% conformes
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Déclarations sociales (DSN)
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Gestion des congés et absences
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Portail salarié
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Intégration avec Zapier
                  </li>
                </ul>
              </div>
              <div className="rm-reveal rm-card rounded-2xl p-7 bg-white flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[440px] overflow-hidden">
                <div className="flex items-center gap-4 mb-5 min-h-[3.5rem]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src="/logo-silae.png"
                      alt="Silae"
                      className="w-full h-full object-contain p-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading leading-tight">Silae</h3>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold">
                      Paie
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[4.5rem]">
                  Logiciel de paie de référence permettant une gestion fiable, conforme et
                  entièrement automatisée de la paie.
                </p>
                <div className="w-10 h-0.5 bg-accent rounded mb-4">{""}</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Bulletins de paie automatisés
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Déclarations sociales (DSN)
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Mises à jour légales automatiques
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Portail salarié
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Gestion RH simplifiée
                  </li>
                </ul>
              </div>
              <div className="rm-reveal rm-card rounded-2xl p-7 bg-white flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[440px] overflow-hidden">
                <div className="flex items-center gap-4 mb-5 min-h-[3.5rem]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src="/logo-pennylane.png"
                      alt="PennyLane"
                      className="w-full h-full object-contain p-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading leading-tight">PennyLane</h3>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold">
                      Trésorerie
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[4.5rem]">
                  Solution de gestion de trésorerie qui vous donne une visibilité claire et en temps
                  réel sur votre situation financière.
                </p>
                <div className="w-10 h-0.5 bg-accent rounded mb-4">{""}</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Suivi des flux de trésorerie
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Prévisions de trésorerie
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Rapprochement bancaire
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Tableaux de bord en temps réel
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Analyse et reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                    Partage avec votre expert-comptable
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/contact">
                <a
                  className="rm-arrow-cta"
                  style={{
                    background: "#0b2340",
                    color: "#c9a84c",
                  }}
                >
                  Découvrir nos solutions digitales
                  <span
                    className="rm-arrow-circle"
                    style={{
                      background: "#c9a84c",
                    }}
                  >
                    <ArrowUpRight
                      className="w-4 h-4"
                      style={{
                        color: "#0b2340",
                      }}
                    />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="rm-section bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <div className="rm-eyebrow justify-center">
                <span>Nos atouts</span>
              </div>
              <h2 className="text-3xl md:text-4xl">Pourquoi nous choisir</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <CircleCheckBig className="w-7 h-7" />
                </div>
                <h3 className="text-lg mb-2">Expertise reconnue</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Équipe de professionnels qualifiés avec des années d'expérience dans tous les
                  domaines comptables et fiscaux.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-lg mb-2">Réactivité</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Disponibilité constante et réponses rapides à vos questions, même en période
                  chargée.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-lg mb-2">Sécurité</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Protection maximale de vos données avec les technologies les plus sécurisées du
                  marché.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl mb-5">Prêt à optimiser votre gestion ?</h2>
            <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et trouver la solution
              adaptée.
            </p>
            <Link href="/contact">
              <a className="rm-arrow-cta inline-flex">
                Nous contacter
                <span className="rm-arrow-circle">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
