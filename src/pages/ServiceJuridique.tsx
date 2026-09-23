import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, CircleCheckBig } from "lucide-react";
import { Link } from "wouter";

export function ServiceJuridique() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Assistance Juridique</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Accompagnement juridique complet pour sécuriser votre entreprise et vos décisions.
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
                  <Briefcase
                    className="w-8 h-8"
                    style={{
                      color: "#0b2340",
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">Conseil juridique courante</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  La gestion juridique d'une entreprise est complexe et exige une expertise pointue.
                  Chez RM Partners, nous vous accompagnons dans tous vos enjeux juridiques :
                  rédaction d'actes, conseil aux dirigeants, gestion des statuts et modifications
                  statutaires.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Nos experts vous conseillent pour sécuriser vos décisions, anticiper les risques
                  et assurer la conformité de votre structure juridique.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className="bg-accent text-white hover:bg-accent/90 gap-2">
                      Demander un conseil
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nos services juridiques</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Rédaction d'actes</p>
                      <p className="text-sm text-foreground">
                        Statuts, procès-verbaux, délibérations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Secrétariat juridique</p>
                      <p className="text-sm text-foreground">Gestion des formalités annuelles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Modifications statutaires</p>
                      <p className="text-sm text-foreground">
                        Changements de structure et de capital
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Conseil aux dirigeants</p>
                      <p className="text-sm text-foreground">
                        Questions juridiques et contractuelles
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
            <h2 className="text-4xl font-bold mb-16 text-center">Nos prestations juridiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Rédaction d'actes</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous rédigeons tous les actes juridiques nécessaires à votre entreprise :
                    statuts, procès-verbaux d'assemblée générale, délibérations de conseil
                    d'administration, actes de nomination, etc.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Rédaction de statuts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Procès-verbaux d'assemblée
                      générale
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Délibérations de conseil
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Actes de nomination de
                      dirigeants
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Secrétariat juridique</h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    Nous gérons l'ensemble de vos formalités juridiques annuelles : dépôt des actes
                    au greffe, mise à jour du registre, gestion des délais de publication, suivi des
                    obligations légales.
                  </p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Dépôt des actes au greffe
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Gestion des formalités
                      annuelles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Suivi des délais légaux
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>Mise à jour du registre
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
                <h3 className="text-2xl font-bold mb-4 text-heading">Modifications statutaires</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Augmentation de capital, changement d'objet social, modification du siège social,
                  fusion-acquisition : nous vous accompagnons dans toutes vos modifications
                  statutaires.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Augmentation de capital
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Changement d'objet social
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Modification du siège social
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Fusion et acquisition
                  </li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Conseil aux dirigeants</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous conseillons les dirigeants sur les questions juridiques courantes :
                  responsabilité civile, contrats commerciaux, droit du travail, propriété
                  intellectuelle.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Responsabilité civile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Contrats commerciaux
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Droit du travail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Propriété intellectuelle
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi nous choisir pour votre conseil juridique ?
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
                <h3 className="text-xl font-bold mb-2">Expertise juridique</h3>
                <p className="text-foreground">
                  Maîtrise complète du droit des sociétés et du droit commercial français.
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
                <h3 className="text-xl font-bold mb-2">Sécurité juridique</h3>
                <p className="text-foreground">
                  Tous nos actes sont conformes à la loi et sécurisent votre entreprise.
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
                  Disponibilité constante pour répondre à vos questions juridiques.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Sécurisez votre entreprise juridiquement</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour bénéficier d'un conseil juridique expert et sécuriser vos
              décisions.
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

export default ServiceJuridique;
