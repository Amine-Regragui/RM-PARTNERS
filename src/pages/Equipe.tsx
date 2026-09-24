import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Award, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
export function Equipe() {
  const n = [
      {
        name: "Amine Regragui",
        title: "Président Fondateur",
        role: "Expert-Comptable & Commissaire aux Comptes",
        avatar: "avatar-1.jpg",
        languages: "Français, Anglais, Arabe",
        email: "a.regragui@rmpartners.fr",
        phone: "+33 6 03 40 68 53",
        bio: "Amine Regragui est un expert-comptable et commissaire aux comptes expérimenté avec plus de 15 ans d'expérience dans le domaine. Fondateur de RM Partners, il a accompagné plus de 500 entreprises dans leur développement.",
        specialties: [
          "Expertise comptable",
          "Commissariat aux comptes",
          "Conseil en gestion",
          "Optimisation fiscale",
        ],
        education: [
          "Diplôme d'Expert-Comptable et de Commissaire aux Comptes (DEC) - Paris",
          "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Paris",
          "Diplôme de Comptabilité et de Gestion (DCG) - Paris",
        ],
        experience: [
          "Fondateur de RM Partners \u2013 Expert-Comptable & Commissaire aux Comptes (depuis nov. 2019)",
          "Fondateur de RM Expertise \u2013 Expert-Comptable & Commissaire aux Comptes, Marrakech (depuis mars 2021)",
          "Responsable de Dossiers chez P. & Partners (juil. 2018 - mars 2019)",
          "Financial Service Consultant chez Rothschild & Co (déc. 2017 - nov. 2018)",
          "Analyste chez P. & Partners (juil. 2015 - juin 2018)",
          "Expert Comptable Stagiaire chez ALEYA Conseil Expertise Audit (déc. 2013 - juil. 2015)",
          "Collaborateur Comptable chez Crowe RSA (sept. 2011 - août 2012)",
        ],
      },
      {
        name: "Sophie Laurent",
        title: "Directrice Comptable",
        role: "Spécialiste en Comptabilité et Gestion",
        avatar: "avatar-2.jpg",
        languages: "Français, Anglais",
        email: "",
        phone: "",
        bio: "Sophie Laurent est une spécialiste en comptabilité et gestion passionnée par l'optimisation des processus comptables. Elle accompagne les entreprises dans la mise en place de solutions comptables efficaces et adaptées à leurs besoins.",
        specialties: [
          "Mise en place de systèmes comptables",
          "Optimisation des processus",
          "Gestion administrative",
          "Reporting financier",
        ],
        education: [
          "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Lyon",
          "Licence en Gestion - Université Lyon 3",
        ],
        experience: [],
      },
      {
        name: "Marc Dubois",
        title: "Responsable Audit",
        role: "Spécialiste en Audit et Contrôle",
        avatar: "avatar-3.jpg",
        languages: "Français, Anglais",
        email: "",
        phone: "",
        bio: "Marc Dubois est un spécialiste en audit et contrôle reconnu pour son expertise dans l'analyse financière des PME. Il apporte une rigueur et un professionnalisme exemplaires à chaque mission.",
        specialties: [
          "Analyse financière",
          "Vérification de conformité",
          "Contrôle interne",
          "Audit de gestion",
        ],
        education: [
          "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Bordeaux",
          "Diplôme de Comptabilité et de Gestion (DCG) - Bordeaux",
        ],
        experience: [],
      },
      {
        name: "Isabelle Moreau",
        title: "Responsable Fiscalité",
        role: "Spécialiste en Fiscalité et Droit des Affaires",
        avatar: "avatar-4.jpg",
        languages: "Français, Anglais",
        email: "",
        phone: "",
        bio: "Isabelle Moreau est une spécialiste en fiscalité d'entreprise et droit des affaires. Elle accompagne les dirigeants dans l'optimisation de leur situation fiscale et la gestion des enjeux juridiques liés à leur activité.",
        specialties: [
          "Optimisation de la structure fiscale",
          "Gestion des obligations fiscales",
          "Conseils en droit des affaires",
          "Accompagnement des dirigeants",
        ],
        education: [
          "Master en Droit Fiscal - Université Paris 1",
          "Diplôme Supérieur de Comptabilité et de Gestion (DSCG) - Paris",
        ],
        experience: [],
      },
    ],
    [ex, setEx] = useState(Array(4).fill(!1)),
    d = (index: number) => setEx((prev) => prev.map((open, i) => (i === index ? !open : open)));
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/cabinet-hero-panorama.jpg"
              alt="Notre Équipe"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">Notre Équipe</h1>
            <div className="w-20 h-1 bg-accent rounded mb-6" />
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Des experts passionnés au service de votre réussite.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="rm-fade-up max-w-3xl mx-auto text-center">
              <div className="rm-eyebrow justify-center mb-4">
                <span>Notre philosophie</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-heading mb-5 leading-tight">
                Notre équipe
              </h2>
              <div className="w-20 h-1 bg-accent rounded mx-auto mb-8" />
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                Un accompagnement humain, une expertise reconnue et une proximité au service de
                votre réussite.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mt-16 max-w-4xl mx-auto">
              <div className="rm-reveal text-center">
                <div
                  className="text-4xl md:text-5xl font-bold text-heading"
                  data-rm-counter=""
                  data-target="15"
                  data-suffix="+"
                >
                  0+
                </div>
                <p className="text-sm text-foreground/70 mt-2">Années d'expérience</p>
              </div>
              <div className="rm-reveal text-center">
                <div
                  className="text-4xl md:text-5xl font-bold text-heading"
                  data-rm-counter=""
                  data-target="500"
                  data-suffix="+"
                >
                  0+
                </div>
                <p className="text-sm text-foreground/70 mt-2">Clients accompagnés</p>
              </div>
              <div className="rm-reveal text-center">
                <div
                  className="text-4xl md:text-5xl font-bold text-heading"
                  data-rm-counter=""
                  data-target="98"
                  data-suffix="%"
                >
                  0%
                </div>
                <p className="text-sm text-foreground/70 mt-2">Clients satisfaits</p>
              </div>
              <div className="rm-reveal text-center">
                <div className="text-2xl md:text-3xl font-bold text-heading">France</div>
                <p className="text-sm text-foreground/70 mt-2">Présence internationale</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 md:py-28"
          style={{
            background: "linear-gradient(180deg,#ffffff 0%,#f7f8fa 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {n.map((i, l) => (
                <div
                  key={l}
                  className="rm-reveal rm-card rounded-2xl overflow-hidden bg-white flex flex-col h-full border-t-4 border-accent"
                >
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-heading mb-1">{i.name}</h3>
                    <p className="text-accent font-semibold mb-1">{i.title}</p>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider font-semibold mb-4">
                      {i.role}
                    </p>
                    <p className="text-sm text-foreground/85 leading-relaxed mb-5">{i.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {i.specialties.map((o, u) => (
                        <span
                          key={u}
                          className="bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                    {i.languages && (
                      <p className="text-xs text-foreground/60 mb-6">
                        <span className="font-semibold text-heading">Langues : </span>
                        {i.languages}
                      </p>
                    )}
                    {ex[l] && (
                      <div className="space-y-5 mb-6 pt-5 border-t border-border">
                        <div>
                          <h4 className="text-sm font-bold mb-2 text-heading">Formation</h4>
                          <ul className="space-y-1 text-xs text-foreground">
                            {i.education.map((o, u) => (
                              <li key={u} className="flex items-start gap-2">
                                <span className="text-accent font-bold mt-0.5">•</span>
                                <span>{o}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {i.experience.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold mb-2 text-heading">Expérience</h4>
                            <ul className="space-y-1 text-xs text-foreground">
                              {i.experience.map((o, u) => (
                                <li key={u} className="flex items-start gap-2">
                                  <span className="text-accent font-bold mt-0.5">•</span>
                                  <span>{o}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {(i.email || i.phone) && (
                          <div className="space-y-2 pt-1">
                            {i.email && (
                              <a
                                href={`mailto:${i.email}`}
                                className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm"
                              >
                                <Mail className="w-4 h-4 text-accent" />
                                {i.email}
                              </a>
                            )}
                            {i.phone && (
                              <a
                                href={`tel:${i.phone}`}
                                className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm"
                              >
                                <Phone className="w-4 h-4 text-accent" />
                                {i.phone}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    <button
                      onClick={() => d(l)}
                      className="mt-auto inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all w-fit"
                    >
                      {ex[l] ? "Réduire le profil" : "Découvrir le profil"}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pourquoi faire confiance à notre équipe ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise reconnue</h3>
                <p className="text-foreground">
                  Tous nos experts sont diplômés et régulièrement formés aux dernières évolutions
                  réglementaires.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expérience éprouvée</h3>
                <p className="text-foreground">
                  Plus de 20 ans d'expérience cumulée dans l'expertise comptable et l'audit.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="text-accent flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Engagement personnel</h3>
                <p className="text-foreground">
                  Chaque expert s'engage personnellement pour la réussite de vos projets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Rencontrez notre équipe</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos projets avec nos experts.
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
export default Equipe;
