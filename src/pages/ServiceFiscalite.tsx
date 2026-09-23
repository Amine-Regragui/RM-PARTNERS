import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export function ServiceFiscalite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-fiscalite-banner.jpg"
              alt="Fiscalité & Optimisation"
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
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Fiscalité & Optimisation
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Stratégies fiscales intelligentes pour réduire vos impôts et optimiser votre
                structure.
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
                  <TrendingUp
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Optimisation fiscale stratégique</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  La fiscalité est un levier majeur de performance pour votre entreprise. Chez RM
                  Partners, nous analysons votre situation pour identifier toutes les opportunités
                  d'optimisation légales et conformes.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  De la structure juridique optimale à la gestion des impôts directs et indirects,
                  nous vous conseillons pour minimiser votre charge fiscale tout en respectant
                  l'intégrité de votre activité.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Demander une consultation
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos domaines d'expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Déclarations fiscales</p>
                      <p className="text-sm text-foreground">
                        TVA, IS, CFE, CVAE, impôt sur le revenu
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Optimisation de structure</p>
                      <p className="text-sm text-foreground">Choix du régime fiscal optimal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Gestion de trésorerie</p>
                      <p className="text-sm text-foreground">Optimisation des flux de trésorerie</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Assistance en contrôle fiscal</p>
                      <p className="text-sm text-foreground">
                        Défense et représentation auprès de l'administration
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos services fiscaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Impôts directs</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Gestion complète de l'impôt sur les sociétés (IS), de l'impôt sur le revenu (IR)
                    et des impôts locaux (CFE, CVAE). Nous optimisons votre charge fiscale en
                    fonction de votre structure et activité.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclaration d'impôt sur les
                      sociétés (IS)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclaration d'impôt sur le
                      revenu (IR)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Contribution foncière des
                      entreprises (CFE)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Cotisation sur la valeur
                      ajoutée des entreprises (CVAE)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">TVA & Impôts indirects</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Gestion de la TVA (déclarations mensuelles ou trimestrielles), optimisation des
                    régimes de TVA et assistance en matière d'impôts indirects. Nous vous
                    conseillons sur les meilleures pratiques de conformité.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclarations TVA
                      mensuelles/trimestrielles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Optimisation du régime de TVA
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Gestion des récupérations de
                      TVA
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Droits d'enregistrement et
                      droits de mutation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Stratégies d'optimisation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Choix de structure</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Le choix entre EIRL, SARL, EURL, SAS, SAAS, SCOP ou autres structures a un impact
                  majeur sur votre fiscalité. Nous vous accompagnons dans cette décision
                  stratégique.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Analyse comparative des régimes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Simulation d'impact fiscal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Restructuration d'entreprise
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Gestion de trésorerie</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Optimisez vos flux de trésorerie pour réduire votre charge fiscale. Nous vous
                  conseillons sur la distribution de dividendes, les provisions et les
                  amortissements.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Optimisation des dividendes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Gestion des provisions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Stratégie d'amortissement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre fiscalité ?
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
                <h3 className="text-xl font-bold mb-2">Expertise pointue</h3>
                <p className="text-foreground">
                  Maîtrise complète de la fiscalité française et des normes comptables
                  internationales.
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
                <h3 className="text-xl font-bold mb-2">Conformité garantie</h3>
                <p className="text-foreground">
                  Toutes nos stratégies respectent la loi et les réglementations en vigueur.
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
                <h3 className="text-xl font-bold mb-2">Économies réelles</h3>
                <p className="text-foreground">
                  Nous identifions les opportunités pour réduire significativement votre charge
                  fiscale.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Optimisez votre fiscalité dès maintenant</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons
              réduire votre charge fiscale.
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

export default ServiceFiscalite;
