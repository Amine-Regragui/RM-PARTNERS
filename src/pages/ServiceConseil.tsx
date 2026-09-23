import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChartColumn, CircleCheckBig } from "lucide-react";
import { Link } from "wouter";

export function ServiceConseil() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-conseil-banner.jpg"
              alt="Conseil en Gestion"
              className="w-full h-full object-cover rm-hero-img"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-lg">
              <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white mb-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Conseil en Gestion
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Pilotage financier et stratégie pour optimiser la performance de votre entreprise.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg,#0b234010,#c9a84c1a)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <ChartColumn
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Pilotez votre entreprise avec confiance</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Pour réussir, une entreprise a besoin d'une vision claire et d'outils de pilotage
                  efficaces. Chez RM Partners, nous vous accompagnons dans la définition de votre
                  stratégie financière et dans la mise en place d'outils de gestion performants.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos consultants vous conseillent pour optimiser votre rentabilité, maîtriser vos
                  coûts et prendre les meilleures décisions stratégiques.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Demander un diagnostic
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos services de conseil</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Tableaux de bord</p>
                      <p className="text-sm text-foreground">Suivi en temps réel de vos KPIs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Prévisions financières</p>
                      <p className="text-sm text-foreground">Budgets et scénarios</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Analyse de rentabilité</p>
                      <p className="text-sm text-foreground">Par produit, client ou projet</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Optimisation des coûts</p>
                      <p className="text-sm text-foreground">Identification des gisements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos prestations de conseil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Tableaux de Bord</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous concevons des tableaux de bord adaptés à votre activité pour vous permettre
                    de suivre en temps réel les indicateurs clés de votre entreprise : chiffre
                    d'affaires, marges, cash-flow, trésorerie.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Tableaux de bord personnalisés
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Indicateurs clés (KPIs)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Suivi mensuel et trimestriel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Alertes et analyses
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Prévisions Financières</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous vous aidons à élaborer des prévisions financières réalistes : budgets
                    d'exploitation, plans de trésorerie, scénarios de croissance. Des outils
                    essentiels pour anticiper et piloter votre développement.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Budgets d'exploitation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Plans de trésorerie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Scénarios de croissance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Analyse d'écarts
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Services avancés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Analyse de Rentabilité</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous analysons la rentabilité de votre entreprise par produit, client ou projet.
                  Cette analyse permet d'identifier les activités les plus profitables et
                  d'optimiser votre mix commercial.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Rentabilité par produit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Rentabilité par client
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Analyse de marges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Recommandations stratégiques
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Optimisation des Coûts</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous identifions les gisements d'économies dans votre structure de coûts : achats,
                  frais de personnel, frais généraux. Nous vous proposons un plan d'action pour
                  améliorer votre rentabilité.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Audit des coûts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Identification des gisements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Plan d'action
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Suivi de la mise en œuvre
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre conseil en gestion ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise métier</h3>
                <p className="text-foreground">
                  Consultants expérimentés dans tous les secteurs d'activité.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Outils performants</h3>
                <p className="text-foreground">
                  Utilisation des meilleurs outils de gestion et d'analyse.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent"
                  style={{
                    background: "linear-gradient(135deg,#0b234008,#c9a84c14)",
                    border: "1px solid #c9a84c40",
                  }}
                >
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Résultats concrets</h3>
                <p className="text-foreground">
                  Amélioration mesurable de votre rentabilité et performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Optimisez la performance de votre entreprise
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un diagnostic gratuit et découvrez comment nous pouvons vous
              aider.
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

export default ServiceConseil;
