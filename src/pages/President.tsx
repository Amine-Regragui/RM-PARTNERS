import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, Lock, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

export function President() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/cabinet-hero-panorama.jpg"
              alt="Mot du Président"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">Mot du Président</h1>
            <div className="w-20 h-1 bg-accent rounded mb-6" />
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Découvrez la vision et le parcours d'Amine Regragui, Président et Fondateur de RM
              Partners.
            </p>
          </div>
        </section>
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            background: "#fdfbf5",
          }}
        >
          <div className="container mx-auto px-4 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute top-0 right-0 hidden lg:block leading-none"
              style={{
                fontSize: "20rem",
                fontWeight: 800,
                color: "#173B63",
                opacity: 0.04,
                fontFamily: "Georgia,serif",
                transform: "translate(8%,-15%)",
              }}
            >
              RM
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[3rem_1fr_1.15fr] gap-10 lg:gap-14 items-start relative">
              <div className="hidden lg:flex justify-center pt-4">
                <span
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    letterSpacing: "0.4em",
                    color: "#9c7a2e",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                  }}
                >
                  RM PARTNERS
                </span>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-md w-full">
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 pointer-events-none"
                    style={{
                      borderColor: "#9c7a2e",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 pointer-events-none"
                    style={{
                      borderColor: "#9c7a2e",
                    }}
                  />
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/Photoportrait.png"
                      alt="Amine Regragui, Président de RM Partners"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p
                    className="text-center mt-5"
                    style={{
                      fontFamily: "'Mrs Saint Delafield',cursive",
                      fontSize: "3rem",
                      lineHeight: 1,
                      color: "#9c7a2e",
                    }}
                  >
                    Amine Regragui
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                  style={{
                    color: "#9c7a2e",
                  }}
                >
                  À propos de nous
                </p>
                <h2 className="text-4xl font-bold mb-2">Amine Regragui</h2>
                <p className="text-lg text-foreground font-semibold mb-8">
                  Président Fondateur de RM Partners
                </p>
                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    Depuis la création de RM Partners en 2019, j'ai eu le privilège d'accompagner
                    des centaines d'entrepreneurs, de PME et d'indépendants dans leur parcours
                    comptable et fiscal. Cette expérience m'a profondément convaincu que l'expertise
                    comptable ne doit pas être une simple obligation administrative, mais un
                    véritable levier de croissance et de sérénité pour les dirigeants.
                  </p>
                  <p>
                    Fort de plus de 15 années d'expérience dans les plus grands cabinets d'audit et
                    de conseil (RSM, ALEYA CONSEIL, ROTHSCHILD & CO, P. & Partners), j'ai développé
                    une vision unique de ce que doit être un cabinet d'expertise comptable moderne :
                    rigoureux, réactif, transparent et orienté vers la performance de nos clients.
                  </p>
                  <p>
                    Chez RM Partners, nous croyons que chaque entreprise mérite un accompagnement
                    personnalisé et de qualité. Nos équipes combinent expertise technique pointue et
                    disponibilité constante pour transformer votre comptabilité en outil stratégique
                    de pilotage. Nous ne nous contentons pas de gérer vos chiffres ; nous vous
                    conseillons pour optimiser votre structure, réduire vos impôts et accélérer
                    votre croissance.
                  </p>
                  <p>
                    Nos valeurs - rigueur, réactivité, confidentialité et vision stratégique -
                    guident chacune de nos actions. Nous sommes fiers de la confiance que nos
                    clients nous accordent et nous nous engageons à la mériter chaque jour.
                  </p>
                </div>
                <div className="flex items-start justify-between divide-x divide-border mt-10 pt-8 border-t border-border">
                  <div className="flex-1 text-center px-2">
                    <Target
                      className="w-6 h-6 mx-auto mb-2"
                      style={{
                        color: "#9c7a2e",
                      }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Rigueur
                    </p>
                  </div>
                  <div className="flex-1 text-center px-2">
                    <Zap
                      className="w-6 h-6 mx-auto mb-2"
                      style={{
                        color: "#9c7a2e",
                      }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Réactivité
                    </p>
                  </div>
                  <div className="flex-1 text-center px-2">
                    <Lock
                      className="w-6 h-6 mx-auto mb-2"
                      style={{
                        color: "#9c7a2e",
                      }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Confidentialité
                    </p>
                  </div>
                  <div className="flex-1 text-center px-2">
                    <TrendingUp
                      className="w-6 h-6 mx-auto mb-2"
                      style={{
                        color: "#9c7a2e",
                      }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Vision stratégique
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/contact">
                    <a>
                      <Button
                        className="rounded-full px-8 py-6 text-white shadow-lg hover:shadow-xl transition-shadow"
                        style={{
                          background: "#173B63",
                        }}
                      >
                        Parlons de votre projet
                        <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-heading">Parcours Professionnel</h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="h-px w-16 bg-accent/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-px w-16 bg-accent/40" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto relative">
              <div className="hidden md:block absolute left-7 top-14 bottom-14 w-0.5 bg-accent/25" />
              <div className="space-y-8">
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Fondateur de RM Partners
                      </h3>
                      <p className="text-foreground">
                        Expert-comptable et commissaire aux comptes, direction du cabinet à Paris.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Depuis nov. 2019</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Fondateur de RM Expertise
                      </h3>
                      <p className="text-foreground">
                        Expert-comptable et commissaire aux comptes, développement du cabinet à
                        Marrakech.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Depuis mars 2021</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Responsable de Dossiers chez P. & Partners
                      </h3>
                      <p className="text-foreground">
                        Encadrement des missions de direction financière externalisée et de due
                        diligence comptable et financière.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Juil. 2018 – Mars 2019</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Financial Service Consultant chez Rothschild & Co
                      </h3>
                      <p className="text-foreground">
                        Gestion de la relation investisseurs, reporting mensuel et suivi des flux
                        financiers des fonds d'investissement.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Déc. 2017 – Nov. 2018</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Analyste chez P. & Partners
                      </h3>
                      <p className="text-foreground">
                        Missions d'expertise-comptable et de valorisation pour des fonds
                        professionnels de capital investissement.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Juil. 2015 – Juin 2018</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Expert Comptable Stagiaire chez ALEYA Conseil Expertise Audit
                      </h3>
                      <p className="text-foreground">
                        Gestion d'un portefeuille de 22 clients, de la saisie comptable à
                        l'établissement de la TVA et des liasses fiscales.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Déc. 2013 – Juil. 2015</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Collaborateur Comptable chez Crowe RSA
                      </h3>
                      <p className="text-foreground">
                        Tenue comptable, révision et établissement des comptes annuels pour un
                        portefeuille de clients diversifiés.
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="3" y1="10" y2="10" />
                      </svg>
                      <span>Sept. 2011 – Août 2012</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-accent flex items-center justify-center mx-auto mb-4">
                    <CircleCheckBig className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">Rigueur</h3>
                  <p className="text-foreground">
                    Excellence technique et respect des normes comptables les plus strictes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-accent flex items-center justify-center mx-auto mb-4">
                    <CircleCheckBig className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">Réactivité</h3>
                  <p className="text-foreground">
                    Disponibilité constante et réponses rapides à vos demandes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-accent flex items-center justify-center mx-auto mb-4">
                    <CircleCheckBig className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">Confidentialité</h3>
                  <p className="text-foreground">
                    Protection absolue de vos données et de vos informations sensibles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-accent flex items-center justify-center mx-auto mb-4">
                    <CircleCheckBig className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">Vision Stratégique</h3>
                  <p className="text-foreground">
                    Conseil orienté vers la croissance et la performance de votre entreprise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à collaborer avec RM Partners ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins en expertise comptable et commissariat aux
              comptes.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg">
                  Nous contacter
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default President;
