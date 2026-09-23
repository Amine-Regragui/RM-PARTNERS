import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, Zap } from "lucide-react";
import { Link } from "wouter";

export function ServiceCreation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Création d'Entreprise</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Accompagnement complet de la création de votre entreprise du projet à
              l'immatriculation.
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
                  <Zap
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Votre projet devient réalité</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Créer une entreprise est un projet passionnant mais complexe. Chez RM Partners,
                  nous vous accompagnons à chaque étape : choix du statut juridique et fiscal,
                  élaboration du business plan, formalités d'immatriculation et suivi post-création.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos experts vous conseillent pour faire les bons choix dès le départ et vous
                  permettre de démarrer votre activité dans les meilleures conditions.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Commencer mon projet
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
                      <p className="font-semibold">Choix du statut</p>
                      <p className="text-sm text-foreground">Juridique et fiscal optimal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Business plan</p>
                      <p className="text-sm text-foreground">Élaboration et validation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Formalités</p>
                      <p className="text-sm text-foreground">Immatriculation et déclarations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Suivi post-création</p>
                      <p className="text-sm text-foreground">Mise en place comptable et paie</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Les étapes de votre création</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Étape 1 : Conception</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous analysons votre projet et vous conseillons sur le meilleur statut juridique
                    et fiscal pour votre activité. EIRL, SARL, EURL, SAS, SAAS : chaque structure a
                    ses avantages et inconvénients.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Analyse de votre projet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Comparaison des statuts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Simulation fiscale
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Recommandation personnalisée
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Étape 2 : Business Plan</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous vous aidons à élaborer un business plan solide : prévisions financières,
                    étude de marché, plan marketing, stratégie de développement. Un document
                    essentiel pour convaincre les partenaires et les financeurs.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Prévisions financières
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Étude de marché
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Plan marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Stratégie de développement
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Étapes 3 & 4 : Immatriculation et Suivi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Immatriculation</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous gérons toutes les formalités d'immatriculation : dépôt du dossier au greffe,
                  demande de numéro SIRET, ouverture de compte bancaire, déclarations auprès des
                  organismes sociaux.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Dépôt au greffe
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Numéro SIRET
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Déclarations sociales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Inscription fiscale
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Suivi Post-Création</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Après l'immatriculation, nous vous accompagnons dans la mise en place de votre
                  comptabilité, paie et gestion administrative. Nous vous conseillons sur les
                  premiers mois critiques.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Mise en place comptable
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Gestion de paie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Conseil opérationnel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Suivi des premiers mois
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour créer votre entreprise ?
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
                <h3 className="text-xl font-bold mb-2">Expérience</h3>
                <p className="text-foreground">
                  Nous avons accompagné des centaines de créateurs d'entreprise.
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
                <h3 className="text-xl font-bold mb-2">Conseil global</h3>
                <p className="text-foreground">
                  Juridique, fiscal, comptable et paie : nous couvrons tous les aspects.
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
                <h3 className="text-xl font-bold mb-2">Suivi personnalisé</h3>
                <p className="text-foreground">
                  Un interlocuteur unique pour tous vos besoins de création.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Lancez votre entreprise avec confiance</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et bénéficier d'un accompagnement expert.
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

export default ServiceCreation;
