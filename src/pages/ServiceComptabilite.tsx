import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckBig, FileText } from "lucide-react";
import { Link } from "wouter";
export function ServiceComptabilite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-comptabilite-banner.jpg"
              alt="Comptabilité"
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Comptabilité
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Tenue comptable complète, bilans et gestion financière pour votre entreprise.
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
                  <FileText
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Tenue comptable et bilans</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  La comptabilité est le cœur de votre gestion d'entreprise. Chez RM Partners, nous
                  assurons une tenue comptable rigoureuse, conforme aux normes en vigueur, pour vous
                  offrir une vision claire de votre situation financière.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos experts gèrent l'intégralité de votre comptabilité générale et analytique, de
                  la saisie des écritures à l'établissement de vos comptes annuels.
                </p>
                <Link href="/contact">
                  <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos prestations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Tenue comptable générale</p>
                      <p className="text-sm text-foreground">
                        Saisie et classement de toutes vos écritures comptables
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Comptabilité analytique</p>
                      <p className="text-sm text-foreground">
                        Analyse de vos coûts par centre de profit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Bilans et comptes de résultat</p>
                      <p className="text-sm text-foreground">
                        Élaboration de vos états financiers annuels
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Tableaux de bord de gestion</p>
                      <p className="text-sm text-foreground">
                        Suivi en temps réel de vos indicateurs clés
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
            <h2 className="text-4xl font-bold mb-16 text-center">Nos services en détail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Déclarations fiscales</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous gérons l'ensemble de vos déclarations fiscales liées à votre comptabilité :
                    TVA, IS, CFE, CVAE. Toutes les formalités sont traitées dans les délais
                    impartis.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclarations mensuelles ou
                      trimestrielles de TVA
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Déclaration d'impôt sur les
                      sociétés (IS)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Suivi budgétaire et
                      prévisionnel
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Tableaux de bord</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Accédez à des tableaux de bord personnalisés pour suivre votre performance
                    financière en temps réel. Identifiez rapidement les tendances et les
                    opportunités d'amélioration.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Suivi du chiffre d'affaires
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Analyse de rentabilité
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Indicateurs de performance
                      clés
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
              Pourquoi nous choisir pour votre comptabilité ?
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
                <h3 className="text-xl font-bold mb-2">Expertise reconnue</h3>
                <p className="text-foreground">
                  Nos experts-comptables maîtrisent les normes comptables françaises et
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
                <h3 className="text-xl font-bold mb-2">Outils modernes</h3>
                <p className="text-foreground">
                  Nous utilisons les dernières technologies pour une gestion comptable efficace et
                  sécurisée.
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
                <h3 className="text-xl font-bold mb-2">Réactivité</h3>
                <p className="text-foreground">
                  Disponibilité constante pour répondre à vos questions et besoins comptables.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Notre processus</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                    style={{
                      background: "#0b2340",
                      color: "#c9a84c",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Audit initial</h3>
                    <p className="text-foreground">
                      Nous analysons votre situation comptable actuelle et vos besoins spécifiques.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                    style={{
                      background: "#0b2340",
                      color: "#c9a84c",
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mise en place</h3>
                    <p className="text-foreground">
                      Nous configurons votre comptabilité et intégrons vos données historiques si
                      nécessaire.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                    style={{
                      background: "#0b2340",
                      color: "#c9a84c",
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Suivi régulier</h3>
                    <p className="text-foreground">
                      Nous assurons la tenue comptable mensuelle et vous fournissons des rapports
                      réguliers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                    style={{
                      background: "#0b2340",
                      color: "#c9a84c",
                    }}
                  >
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Clôture annuelle</h3>
                    <p className="text-foreground">
                      Nous établissons vos comptes annuels et vous accompagnons dans les formalités
                      de dépôt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à optimiser votre comptabilité ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons
              simplifier votre gestion comptable.
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
export default ServiceComptabilite;
