import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, ChartPie, CircleCheckBig, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export function Secteurs() {
  const n = [
    {
      name: "TPE (Très Petites Entreprises)",
      icon: Briefcase,
      description: "Accompagnement des micro-entreprises et auto-entrepreneurs",
      services: [
        "Comptabilité simplifiée",
        "Gestion administrative",
        "Conseils en création",
        "Optimisation fiscale",
        "Paie et social",
        "Déclarations sociales",
      ],
      benefits: [
        "Tarifs adaptés aux TPE",
        "Conseils personnalisés",
        "Disponibilité et réactivité",
        "Outils digitaux modernes",
      ],
    },
    {
      name: "PME (Petites et Moyennes Entreprises)",
      icon: TrendingUp,
      description: "Expertise complète pour les PME en croissance",
      services: [
        "Comptabilité générale",
        "Audit interne",
        "Conseils en gestion",
        "Optimisation fiscale",
        "Gestion de paie",
        "Tableaux de bord",
      ],
      benefits: [
        "Expertise reconnue",
        "Suivi régulier",
        "Analyses financières",
        "Accompagnement stratégique",
      ],
    },
    {
      name: "Sociétés de Gestion",
      icon: ChartPie,
      description: "Spécialisation dans la gestion de portefeuilles et de fonds",
      services: [
        "Comptabilité spécialisée",
        "Audit des fonds",
        "Rapports de gestion",
        "Conformité réglementaire",
        "Gestion administrative",
        "Reporting détaillé",
      ],
      benefits: [
        "Expertise en gestion de fonds",
        "Conformité garantie",
        "Rapports détaillés",
        "Support réglementaire",
      ],
    },
    {
      name: "Fonds d'Investissement",
      icon: Users,
      description: "Accompagnement des fonds et véhicules d'investissement",
      services: [
        "Audit légal des fonds",
        "Commissariat aux comptes",
        "Rapports d'audit",
        "Conformité réglementaire",
        "Gestion administrative",
        "Conseils en gouvernance",
      ],
      benefits: [
        "Expertise en investissement",
        "Conformité AMF",
        "Audit de qualité",
        "Conseils en gouvernance",
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
              src="/secteurs-banner.jpg"
              alt="Secteurs d'Activité"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white">Secteurs d'Activité</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Une expertise adaptée à chaque type d'entreprise et de secteur.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="rm-fade-up max-w-3xl mx-auto text-center relative py-16 md:py-24 overflow-hidden">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                style={{
                  fontSize: "clamp(4rem, 20vw, 11rem)",
                  fontWeight: 800,
                  color: "#0b2340",
                  opacity: 0.035,
                  lineHeight: 1,
                  fontFamily: "serif",
                }}
              >
                RM
              </div>
              <div className="relative">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="h-px w-10 bg-accent" />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{
                      color: "#c9a84c",
                    }}
                  >
                    Notre couverture
                  </span>
                  <span className="h-px w-10 bg-accent" />
                </div>
                <h2
                  className="text-4xl md:text-6xl font-bold mb-6"
                  style={{
                    color: "#0b2340",
                  }}
                >
                  Expertise multi-sectorielle
                </h2>
                <div className="w-16 h-0.5 bg-accent rounded mx-auto mb-8">{""}</div>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  RM Partners accompagne des entreprises de tous les secteurs et de toutes les
                  tailles. Que vous soyez une TPE, une PME, une société de gestion ou un fonds
                  d'investissement, nous avons l'expertise et l'expérience pour vous conseiller.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos secteurs de spécialisation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {n.map((i, l) => {
                const o = i.icon;
                return (
                  <Card className="flex flex-col">
                    <CardContent className="pt-6 flex flex-col flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="rm-icon-badge bg-gradient-to-br from-accent to-[#e0b563] text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-110">
                          <o className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-heading">{i.name}</h3>
                          <p className="text-foreground text-sm">{i.description}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-bold mb-3 text-heading">Services proposés</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {i.services.map((u, p) => (
                            <div className="flex items-center gap-2 text-sm text-foreground">
                              <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-foreground">{u}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pb-6 border-b">
                        <h4 className="font-bold mb-3 text-heading">Avantages</h4>
                        <ul className="space-y-2">
                          {i.benefits.map((u, p) => (
                            <li className="flex items-center gap-2 text-sm text-foreground">
                              <span className="text-accent font-bold">•</span>
                              <span className="text-foreground">{u}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6">
                        <Link href="/contact">
                          <a>
                            <Button className="w-full bg-accent text-white hover:bg-accent/90 gap-2">
                              En savoir plus
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </a>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Notre approche par secteur</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">TPE & Auto-entrepreneurs</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Pour les TPE et auto-entrepreneurs, nous proposons une comptabilité simplifiée et
                  des conseils adaptés à votre situation. Nos tarifs sont compétitifs et nos
                  services sont accessibles. Nous vous aidons à vous concentrer sur votre activité
                  principale.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Comptabilité simplifiée et efficace
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Conseils en création d'entreprise
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Optimisation fiscale personnalisée
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">PME en Croissance</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Pour les PME, nous offrons une expertise complète en comptabilité, audit et
                  conseil. Nous vous accompagnons dans votre croissance et vous aidons à optimiser
                  votre gestion financière et fiscale.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Comptabilité générale complète
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Tableaux de bord et analyses financières
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Conseils en stratégie financière
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">
                  Sociétés de Gestion & Fonds
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Pour les sociétés de gestion et les fonds d'investissement, nous proposons une
                  expertise spécialisée en audit, conformité réglementaire et gestion
                  administrative. Nous maîtrisons les spécificités de ce secteur hautement
                  réglementé.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Audit spécialisé des fonds
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Conformité réglementaire AMF
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0" />
                    Rapports de gestion détaillés
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Trouvez l'expertise adaptée à votre secteur</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous
              pouvons vous aider.
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

export default Secteurs;
