import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import { Link } from "wouter";

export function Implantations() {
  const n = [
    {
      name: "Siège social - Paris",
      address: "61 rue la Boétie",
      city: "75008 Paris",
      phone: "+33 6 03 40 68 53",
      email: "a.regragui@rmpartners.fr",
      hours: "Lun - Ven: 9h - 18h",
      description: "Notre siège social et principal bureau à Paris, au cœur du 8e arrondissement.",
      team: "Équipe complète",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Nos Implantations</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Retrouvez RM Partners à Paris pour un accompagnement de proximité.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Présent pour vous</h2>
              <p className="text-lg text-foreground leading-relaxed">
                RM Partners est implanté à Paris pour vous offrir un accompagnement de proximité.
                Notre équipe d'experts est à votre disposition pour répondre à vos questions et vous
                conseiller.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Notre bureau</h2>
            <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
              {n.map((i, l) => (
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-primary text-white p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{i.name}</h3>
                          <p className="text-white/90 mb-8 leading-relaxed">{i.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-8 h-8 text-accent" />
                          <span className="text-white">{i.team}</span>
                        </div>
                      </div>
                      <div className="p-8 space-y-6">
                        <div>
                          <h4 className="font-bold mb-2 text-heading">Adresse</h4>
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                              <p>{i.address}</p>
                              <p>{i.city}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-heading">Téléphone</h4>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                            <a
                              href={`tel:${i.phone}`}
                              className="hover:text-accent transition-colors"
                            >
                              {i.phone}
                            </a>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-heading">Email</h4>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                            <a
                              href={`mailto:${i.email}`}
                              className="hover:text-accent transition-colors"
                            >
                              {i.email}
                            </a>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-heading">Horaires</h4>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                            <p>{i.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Nous trouver</h2>
            <div className="bg-secondary rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9915256937595!2d2.3073137!3d48.8699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8f8f8f8f8f%3A0x40b82c3688c9460!2s61%20Rue%20la%20Bo%C3%A9tie%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen={!0}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi nous rendre visite ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Localisation stratégique</h3>
                  <p className="text-foreground">
                    Situé au cœur de Paris, dans le 8e arrondissement, notre bureau est facilement
                    accessible en transports en commun et en voiture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">Équipe disponible</h3>
                  <p className="text-foreground">
                    Notre équipe d'experts est disponible pour vous accueillir et répondre à toutes
                    vos questions lors de rendez-vous.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-heading">
                    Environnement professionnel
                  </h3>
                  <p className="text-foreground">
                    Nos bureaux offrent un cadre professionnel et confidentiel pour discuter de vos
                    projets et enjeux.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Prenez rendez-vous avec nos experts</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour fixer un rendez-vous à notre bureau de Paris.
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

export default Implantations;
