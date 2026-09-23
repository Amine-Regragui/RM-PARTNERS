import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

export function Temoignages() {
  const n = [
    {
      name: "Jean Martin",
      company: "Startup Tech Paris",
      role: "Fondateur",
      content:
        "RM Partners nous a accompagnés depuis la création de notre entreprise. Leur expertise et leur réactivité ont été déterminantes pour notre succès. Merci pour votre professionnalisme !",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sophie Laurent",
      company: "Conseil & Stratégie",
      role: "Directrice Générale",
      content:
        "Nous avons fait confiance à RM Partners pour notre audit annuel. Leur rapport détaillé et leurs recommandations nous ont permis d'optimiser notre gestion. Excellent travail !",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Marc Dupont",
      company: "Commerce de Proximité",
      role: "Gérant",
      content:
        "Depuis 5 ans, RM Partners gère ma comptabilité et ma paie. Je peux me concentrer sur mon activité en toute confiance. Leur support est toujours disponible et efficace.",
      rating: 5,
      image: "👨‍🔧",
    },
    {
      name: "Isabelle Moreau",
      company: "Cabinet Juridique",
      role: "Associée",
      content:
        "RM Partners nous a aidés lors d'un contrôle fiscal complexe. Leur stratégie de défense a été très efficace. Je les recommande vivement à tous mes confrères.",
      rating: 5,
      image: "👩‍⚖️",
    },
    {
      name: "Thomas Bernard",
      company: "PME Industrielle",
      role: "Président",
      content:
        "Le conseil en gestion de RM Partners nous a permis d'identifier des gisements d'économies importants. Leur analyse de rentabilité a transformé notre approche commerciale.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Marie Leclerc",
      company: "Agence Immobilière",
      role: "Responsable Administrative",
      content:
        "RM Partners a mis en place TeoGest pour notre comptabilité. L'interface est intuitive et les rapports en temps réel nous aident à prendre de meilleures décisions.",
      rating: 5,
      image: "👩‍💼",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Témoignages Clients</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Découvrez ce que nos clients pensent de nos services et de notre accompagnement.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">La confiance de nos clients</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Depuis plus de 15 ans, RM Partners accompagne des entreprises de tous les secteurs.
                Nos clients nous font confiance pour notre expertise, notre réactivité et notre
                engagement envers leur succès.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Avis de nos clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {n.map((i, l) => (
                <Card className="flex flex-col">
                  <CardContent className="pt-6 flex flex-col flex-1">
                    <div className="flex gap-1 mb-4">
                      {Array.from({
                        length: i.rating,
                      }).map((o, u) => (
                        <Star className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 flex-1 leading-relaxed italic">
                      "{i.content}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl">{i.image}</div>
                        <div>
                          <p className="font-bold text-heading">{i.name}</p>
                          <p className="text-sm text-foreground">{i.role}</p>
                        </div>
                      </div>
                      <p className="text-xs text-foreground">{i.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Nos chiffres</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-heading mb-2">500+</div>
                <p className="text-foreground">Clients accompagnés</p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-heading mb-2">15+</div>
                <p className="text-foreground">Années d'expérience</p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-heading mb-2">98%</div>
                <p className="text-foreground">Taux de satisfaction</p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-heading mb-2">20+</div>
                <p className="text-foreground">Experts qualifiés</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi nous choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Expertise</h3>
                  <p className="text-foreground">
                    Notre équipe d'experts qualifiés maîtrise tous les aspects de la comptabilité,
                    fiscalité, paie et droit des affaires.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Réactivité</h3>
                  <p className="text-foreground">
                    Nous sommes toujours disponibles pour répondre à vos questions et vous
                    accompagner dans vos projets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Personnalisation</h3>
                  <p className="text-foreground">
                    Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques
                    et votre secteur d'activité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Histoires de succès</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Création d'Entreprise</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous avons accompagné plus de 100 créateurs d'entreprise dans le choix de leur
                  statut juridique et fiscal, l'élaboration de leur business plan et les formalités
                  d'immatriculation.
                </p>
                <p className="text-sm text-foreground font-semibold">
                  Résultat : 95% de nos clients sont toujours en activité après 5 ans.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Optimisation Fiscale</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nos conseils en optimisation fiscale ont permis à nos clients d'économiser en
                  moyenne 15% de leurs impôts, tout en restant 100% conformes.
                </p>
                <p className="text-sm text-foreground font-semibold">
                  Résultat : Plus de 5 millions d'euros d'économies réalisées pour nos clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Rejoignez nos clients satisfaits</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une première consultation et découvrez comment nous pouvons vous
              aider.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg gap-2">
                  Nous contacter
                  <ArrowRight className="w-4 h-4" />
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

export default Temoignages;
