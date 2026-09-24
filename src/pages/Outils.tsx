import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChartColumn, CircleCheckBig, Cloud, Lock } from "lucide-react";
import { Link } from "wouter";
export function Outils() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Outils Informatiques</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Solutions digitales pour simplifier votre gestion comptable et paie.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technologie au service de votre gestion</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Chez RM Partners, nous utilisons les meilleurs outils informatiques pour vous offrir
                une gestion comptable et paie moderne, sécurisée et efficace. Nos solutions cloud
                vous permettent d'accéder à vos données à tout moment, de n'importe où.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud</h3>
                <p className="text-foreground">
                  Accès 24/7 à vos données depuis n'importe quel appareil.
                </p>
              </div>
              <div className="text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <ChartColumn className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analyses</h3>
                <p className="text-foreground">Rapports et tableaux de bord en temps réel.</p>
              </div>
              <div className="text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sécurité</h3>
                <p className="text-foreground">
                  Données protégées avec les standards les plus élevés.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">TeoGest</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  TeoGest est une plateforme SaaS française de production comptable 100% cloud,
                  conçue pour les experts-comptables et leurs clients. Fondée en 2012, TeoGest
                  automatise 98% des écritures comptables grâce à sa technologie OCR et ses
                  algorithmes auto-apprenants. C'est la solution de référence pour optimiser vos
                  processus comptables et collaborer efficacement avec vos clients.
                </p>
                <h3 className="text-2xl font-bold mb-4">Fonctionnalités principales</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">OCR et Automatisation</p>
                      <p className="text-sm text-foreground">
                        Collecte automatique des factures avec reconnaissance optique
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Tableaux de bord</p>
                      <p className="text-sm text-foreground">
                        Suivi en temps réel de vos indicateurs clés
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Rapports</p>
                      <p className="text-sm text-foreground">
                        Bilan, compte de résultat, états financiers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Collaboration</p>
                      <p className="text-sm text-foreground">Partage sécurisé avec votre cabinet</p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-heading">Avantages de TeoGest</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Accès 24/7 à vos données comptables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Synchronisation automatique des flux bancaires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Rapports en temps réel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Sécurité maximale de vos données</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Support technique réactif</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-heading">Avantages d'OpenPaye</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Bulletins 100% conformes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Tableau de bord intuitif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Alertes automatiques sur les échéances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Mises à jour légales automatiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Portail salarié intégré</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">OpenPaye</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  OpenPaye est un logiciel de paie en ligne (SaaS) conçu pour les TPE et PME. Il
                  permet de gérer les bulletins de paie et les déclarations sociales (DSN)
                  simplement et de façon fiable, avec une conformité garantie.
                </p>
                <h3 className="text-2xl font-bold mb-4">Fonctionnalités principales</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Gestion de paie</p>
                      <p className="text-sm text-foreground">
                        Bulletins de salaire et déclarations sociales
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">DSN</p>
                      <p className="text-sm text-foreground">
                        Déclarations sociales nominatives automatisées
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Portail salarié</p>
                      <p className="text-sm text-foreground">
                        Accès aux bulletins et gestion des absences
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Intégrations</p>
                      <p className="text-sm text-foreground">Zapier pour automatiser les flux RH</p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Une intégration complète</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Synchronisation</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    TeoGest et OpenPaye sont intégrés pour une synchronisation automatique de vos
                    données comptables et paie.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Données comptables à jour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Écritures paie automatisées
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Pas de double saisie
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Collaboration</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Travaillez en collaboration avec votre cabinet d'expertise comptable de manière
                    sécurisée et transparente.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Accès sécurisé partagé
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Traçabilité des modifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Communication fluide
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Support</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Bénéficiez d'un support technique réactif et d'une formation complète pour
                    utiliser nos outils.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Support technique 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Formation utilisateurs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Documentation complète
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Simplifiez votre gestion avec nos outils</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment TeoGest et OpenPaye peuvent transformer votre gestion comptable et
              paie.
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
export default Outils;
