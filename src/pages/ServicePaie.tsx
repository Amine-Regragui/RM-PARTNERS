import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, Users } from "lucide-react";
import { Link } from "wouter";

export function ServicePaie() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-paie-banner.jpg"
              alt="Paie & Gestion Sociale"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Paie & Gestion Sociale
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Gestion complète de la paie, des cotisations sociales et de la conformité sociale.
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
                  <Users
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Gestion de paie externalisée</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  La gestion de la paie est une responsabilité majeure pour tout employeur. Chez RM
                  Partners, nous prenons en charge l'intégralité de votre gestion paie pour vous
                  permettre de vous concentrer sur votre cœur de métier.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  De la saisie des éléments variables à l'établissement des bulletins de paie, en
                  passant par le calcul des cotisations sociales et les déclarations obligatoires,
                  nous garantissons la conformité totale.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos services paie</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Bulletins de paie</p>
                      <p className="text-sm text-foreground">Établissement mensuel conforme</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Déclarations sociales</p>
                      <p className="text-sm text-foreground">DSN, DADS, déclarations URSSAF</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Gestion des absences</p>
                      <p className="text-sm text-foreground">Congés, maladie, maternité</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Conseil en droit du travail</p>
                      <p className="text-sm text-foreground">Questions RH et contrats</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos prestations paie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Gestion administrative</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous gérons tous les aspects administratifs de la paie : saisie des éléments
                    variables, calcul des cotisations, établissement des bulletins et archivage
                    conforme.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Saisie des éléments de paie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Calcul des cotisations
                      sociales
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Établissement des bulletins
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Gestion des archives paie
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Déclarations sociales</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous assurons la conformité de toutes vos déclarations sociales auprès des
                    organismes compétents (URSSAF, MSA, caisses de retraite, etc.).
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclaration Sociale Nominative
                      (DSN)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclarations URSSAF
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclarations de retraite
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclarations d'accidents du
                      travail
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Conformité & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Gestion des absences</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous gérons l'ensemble de vos absences : congés payés, maladie, maternité,
                  paternité, formation, etc.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Suivi des congés payés
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Gestion des arrêts maladie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Congés maternité/paternité
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Conseil RH</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous vous conseillons sur les questions de droit du travail et de gestion des
                  ressources humaines.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Rédaction de contrats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Questions de droit du travail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Gestion des conflits
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Outils digitaux</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous utilisons les meilleurs outils de paie pour assurer efficacité et sécurité.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Logiciels paie modernes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Portail salarié sécurisé
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Accès aux bulletins en ligne
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre paie ?
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
                <h3 className="text-xl font-bold mb-2">Conformité garantie</h3>
                <p className="text-foreground">
                  Respect total des normes légales et des obligations sociales.
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
                <h3 className="text-xl font-bold mb-2">Gain de temps</h3>
                <p className="text-foreground">
                  Libérez-vous de la gestion administrative de la paie.
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
                <h3 className="text-xl font-bold mb-2">Disponibilité</h3>
                <p className="text-foreground">Équipe réactive pour répondre à vos questions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Simplifiez votre gestion paie</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons gérer
              votre paie.
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

export default ServicePaie;
