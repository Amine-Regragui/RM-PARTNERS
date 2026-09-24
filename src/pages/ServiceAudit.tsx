import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "wouter";
export function ServiceAudit() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-audit-banner.jpg"
              alt="Audit & Commissariat aux Comptes"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Audit & Commissariat aux Comptes
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Audit légal et commissariat aux comptes pour assurer la fiabilité de vos états
                financiers.
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
                  <CircleCheckBig
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Commissariat aux comptes professionnel</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Le commissariat aux comptes est une obligation légale pour certaines entreprises.
                  Chez RM Partners, nous assurons l'audit de vos comptes avec rigueur et
                  professionnalisme, garantissant la fiabilité et la conformité de vos états
                  financiers.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos commissaires aux comptes certifiés offrent une expertise complète en audit
                  légal, audit interne et audit opérationnel pour vous assurer une conformité
                  totale.
                </p>
                <Link href="/contact">
                  <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos services d'audit</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Audit légal</p>
                      <p className="text-sm text-foreground">Certification des comptes annuels</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Audit interne</p>
                      <p className="text-sm text-foreground">Évaluation des contrôles internes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Audit opérationnel</p>
                      <p className="text-sm text-foreground">Optimisation des processus</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Due diligence</p>
                      <p className="text-sm text-foreground">Audit d'acquisition et de fusion</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos prestations d'audit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Audit légal</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Audit légal complet de vos comptes annuels. Nous certifions la régularité, la
                    sincérité et l'image fidèle de vos états financiers conformément aux normes
                    d'audit applicables.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Certification des comptes
                      annuels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Rapport de gestion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Vérification des déclarations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Rapport spécial sur les
                      conventions
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Audit interne</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Évaluation complète de vos systèmes de contrôle interne. Nous identifions les
                    risques et recommandons des améliorations pour renforcer votre gouvernance.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Évaluation des contrôles
                      internes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Audit de conformité
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Gestion des risques
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Recommandations d'amélioration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Services spécialisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Due diligence</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Audit complet en vue d'une acquisition, fusion ou levée de fonds. Nous analysons
                  les risques financiers, fiscaux et opérationnels.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Audit financier approfondi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Analyse fiscale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Audit opérationnel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Rapport de synthèse
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Audit opérationnel</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Audit de vos processus opérationnels pour identifier les inefficacités et
                  recommander des améliorations.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Analyse des processus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Optimisation des coûts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Amélioration de l'efficacité
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Plan d'action
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre audit ?
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
                <h3 className="text-xl font-bold mb-2">Expertise certifiée</h3>
                <p className="text-foreground">Commissaires aux comptes agréés et expérimentés.</p>
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
                <h3 className="text-xl font-bold mb-2">Indépendance</h3>
                <p className="text-foreground">
                  Audit impartial et conforme aux normes internationales.
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
                <h3 className="text-xl font-bold mb-2">Valeur ajoutée</h3>
                <p className="text-foreground">Recommandations pour améliorer votre gouvernance.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Confiez votre audit à des experts</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins en audit et commissariat aux comptes.
            </p>
            <Link href="/contact">
              <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default ServiceAudit;
