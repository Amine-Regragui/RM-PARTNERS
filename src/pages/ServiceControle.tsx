import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, Shield } from "lucide-react";
import { Link } from "wouter";

export function ServiceControle() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Contrôle Fiscal</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Assistance et défense lors d'un contrôle fiscal pour sécuriser votre entreprise.
            </p>
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
                  <Shield
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Soyez préparé au contrôle fiscal</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Un contrôle fiscal peut être stressant et complexe. Chez RM Partners, nous vous
                  accompagnons à chaque étape : préparation du dossier, représentation auprès de
                  l'administration, négociation et recours si nécessaire.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos experts en fiscalité vous conseillent pour défendre vos intérêts et minimiser
                  les risques. Nous avons une longue expérience des contrôles fiscaux et savons
                  comment les gérer efficacement.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Nous contacter
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Notre accompagnement</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Préparation</p>
                      <p className="text-sm text-foreground">Dossier et documentation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Représentation</p>
                      <p className="text-sm text-foreground">Auprès de l'administration</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Négociation</p>
                      <p className="text-sm text-foreground">Défense de vos intérêts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Recours</p>
                      <p className="text-sm text-foreground">Si nécessaire</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Nos prestations en contrôle fiscal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Préparation au Contrôle</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Dès réception de la notification de contrôle, nous vous aidons à préparer votre
                    dossier : vérification de la documentation, organisation des pièces
                    justificatives, identification des points sensibles.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Vérification de la
                      documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Organisation des pièces
                      justificatives
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Identification des points
                      sensibles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Stratégie de défense
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">
                    Représentation et Négociation
                  </h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous vous représentons auprès de l'administration fiscale et négocions au mieux
                    de vos intérêts. Nous répondons aux demandes de l'inspecteur, justifions vos
                    positions et défendons votre dossier.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Représentation auprès de
                      l'administration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Réponse aux demandes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Justification des positions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Négociation des redressements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Services complémentaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Rédaction des Réponses</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous rédigeons les réponses aux demandes de l'administration : mémoires en
                  réponse, justifications détaillées, documentation complémentaire. Des documents
                  professionnels et convaincants.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Mémoires en réponse
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Justifications détaillées
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Documentation complémentaire
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Recours et appels
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Optimisation Post-Contrôle</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Après le contrôle, nous vous aidons à optimiser votre situation fiscale : analyse
                  des redressements, mise en place de mesures correctives, amélioration de votre
                  conformité fiscale.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Analyse des redressements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Mesures correctives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Amélioration de la conformité
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Prévention des futurs contrôles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre contrôle fiscal ?
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
                <h3 className="text-xl font-bold mb-2">Expertise fiscale</h3>
                <p className="text-foreground">
                  Experts en fiscalité avec une longue expérience des contrôles.
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
                <h3 className="text-xl font-bold mb-2">Défense efficace</h3>
                <p className="text-foreground">Stratégie de défense adaptée à votre situation.</p>
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
                <h3 className="text-xl font-bold mb-2">Tranquillité d'esprit</h3>
                <p className="text-foreground">Vous n'êtes pas seul face à l'administration.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Préparez-vous au contrôle fiscal</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour bénéficier d'une assistance expert lors de votre contrôle fiscal.
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

export default ServiceControle;
