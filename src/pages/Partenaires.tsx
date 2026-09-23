import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { Link } from "wouter";

export function Partenaires() {
  const n = [
    {
      name: "TeoGest",
      category: "Comptabilité",
      description:
        "Solution de comptabilité en ligne pour la gestion complète de votre comptabilité avec synchronisation bancaire automatique.",
      features: [
        "Comptabilité générale",
        "Tableaux de bord",
        "Rapports en temps réel",
        "Collaboration sécurisée",
      ],
    },
    {
      name: "OpenPaye",
      category: "Paie & Social",
      description:
        "Logiciel de paie en ligne pour gérer les bulletins de salaire et les déclarations sociales (DSN) de manière fiable et conforme.",
      features: [
        "Bulletins 100% conformes",
        "DSN automatisées",
        "Portail salarié",
        "Intégrations Zapier",
      ],
    },
    {
      name: "Rothschild & Co",
      category: "Partenaire Financier",
      description:
        "Partenaire stratégique pour les conseils en financement, investissement et gestion de patrimoine.",
      features: [
        "Conseils financiers",
        "Montage de financements",
        "Gestion de patrimoine",
        "Expertise M&A",
      ],
    },
    {
      name: "Tikehau Capital",
      category: "Partenaire Investissement",
      description:
        "Partenaire pour les conseils en investissement et gestion de portefeuille pour les entreprises et les dirigeants.",
      features: [
        "Gestion d'actifs",
        "Conseils en investissement",
        "Structuration financière",
        "Optimisation fiscale",
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/paris-banner.jpg"
              alt="Nos Partenaires"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white">Nos Partenaires</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Des partenaires de confiance pour vous accompagner dans tous vos projets.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Un écosystème de confiance</h2>
              <p className="text-lg text-foreground leading-relaxed">
                RM Partners s'entoure de partenaires de confiance pour vous offrir une gamme
                complète de services. Nos partenaires sont sélectionnés pour leur expertise, leur
                fiabilité et leur engagement envers l'excellence.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Nos partenaires clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {n.map((i, l) => (
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {i.category}
                      </span>
                      <h3 className="text-2xl font-bold text-heading">{i.name}</h3>
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed">{i.description}</p>
                    <div>
                      <h4 className="font-bold mb-3">Spécialités</h4>
                      <ul className="space-y-2">
                        {i.features.map((o, u) => (
                          <li className="flex items-center gap-2 text-foreground text-sm">
                            <CircleCheckBig className="w-4 h-4 text-accent flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Avantages de nos partenariats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise reconnue</h3>
                <p className="text-foreground">
                  Nos partenaires sont des leaders reconnus dans leurs domaines respectifs.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Solutions intégrées</h3>
                <p className="text-foreground">
                  Nos partenaires travaillent ensemble pour vous offrir des solutions cohérentes.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <CircleCheckBig className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Valeur ajoutée</h3>
                <p className="text-foreground">
                  Vous bénéficiez d'une expertise étendue et de services complémentaires.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Domaines de partenariat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Outils Digitaux</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous partenons avec les meilleurs éditeurs de logiciels pour vous offrir des
                  solutions de comptabilité et paie modernes et performantes.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>TeoGest - Comptabilité
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>OpenPaye - Paie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Autres solutions spécialisées
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Partenaires Financiers</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Nous collaborons avec des institutions financières de renom pour vous offrir des
                  conseils en financement et investissement.
                </p>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Rothschild & Co
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Tikehau Capital
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">•</span>Autres partenaires stratégiques
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Bénéficiez de notre réseau</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour découvrir comment nos partenaires peuvent vous aider à atteindre
              vos objectifs.
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

export default Partenaires;
