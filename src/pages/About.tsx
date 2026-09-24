import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { ArrowUpRight, Award, Lightbulb, Target, Users } from "lucide-react";
import { Link } from "wouter";
export function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="À propos du cabinet"
        description="Découvrez RM Partners, cabinet d'expertise comptable à Paris 8. Notre histoire, nos valeurs de rigueur et réactivité, et notre engagement envers nos clients."
      />
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/cabinet-hero-panorama.jpg"
              alt="À propos de RM Partners"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">
              À propos de RM Partners
            </h1>
            <div className="w-20 h-1 bg-accent rounded mb-6" />
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Fondé par une équipe d'experts passionnés, RM Partners accompagne les entrepreneurs
              dans toutes les étapes de la vie de leur société.
            </p>
          </div>
        </section>
        <section className="rm-section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rm-fade-up overflow-hidden rounded-[22px] shadow-2xl">
                <img
                  src="/mission-meeting.jpg"
                  alt="Réunion d'équipe RM Partners"
                  className="w-full h-full object-cover rm-hero-img"
                />
              </div>
              <div className="rm-fade-up rm-fade-up-d1">
                <div className="rm-eyebrow">
                  <span>Notre mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">Notre mission</h2>
                <p className="text-base text-foreground/80 mb-4 leading-relaxed">
                  Nous croyons en une comptabilité moderne, claire et connectée, où la technologie
                  simplifie votre quotidien. Notre approche est simple : proximité, transparence et
                  excellence technique.
                </p>
                <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                  Depuis notre fondation, nous avons accompagné des centaines d'entreprises à
                  travers les défis comptables, fiscaux et sociaux, en mettant l'humain et la
                  performance au cœur de notre action.
                </p>
                <Link href="/contact" className="rm-arrow-cta">
                  Commençons ensemble
                  <span className="rm-arrow-circle">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>
              <div className="rm-fade-up rm-fade-up-d2 bg-secondary p-8 rounded-[22px]">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-accent flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Équipe d'experts</h3>
                      <p className="text-foreground">
                        Professionnels qualifiés avec des années d'expérience
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-accent flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Approche personnalisée</h3>
                      <p className="text-foreground">
                        Solutions adaptées à votre secteur et vos besoins
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-accent flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Innovation continue</h3>
                      <p className="text-foreground">Outils digitaux modernes et sécurisés</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-accent flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Excellence reconnue</h3>
                      <p className="text-foreground">
                        Certifications et accréditations professionnelles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <div className="rm-eyebrow justify-center">
                <span>Nos valeurs</span>
              </div>
              <h2 className="text-3xl md:text-4xl">Nos valeurs fondamentales</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rm-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Rigueur et fiabilité</h3>
                <p className="text-foreground leading-relaxed">
                  Nous appliquons les plus hauts standards comptables et fiscaux. Chaque document,
                  chaque déclaration est vérifiée avec attention pour garantir votre conformité et
                  votre sérénité.
                </p>
              </div>
              <div className="rm-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">
                  Réactivité et disponibilité
                </h3>
                <p className="text-foreground leading-relaxed">
                  Vos questions méritent des réponses rapides. Notre équipe est mobilisée pour vous
                  accompagner dans les délais impartis, même en période de forte activité.
                </p>
              </div>
              <div className="rm-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">
                  Confidentialité et sécurité
                </h3>
                <p className="text-foreground leading-relaxed">
                  Vos données sont précieuses. Nous utilisons les technologies les plus sécurisées
                  pour protéger vos informations confidentielles et respecter votre vie privée.
                </p>
              </div>
              <div className="rm-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-heading">Vision stratégique</h3>
                <p className="text-foreground leading-relaxed">
                  Nous ne nous contentons pas de gérer votre comptabilité. Nous vous conseillons
                  pour optimiser votre structure, réduire vos impôts et accélérer la croissance de
                  votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <div className="rm-eyebrow justify-center">
                <span>Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl">Nos domaines d'expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-white">Création d'entreprise</h3>
                </div>
                <p className="text-foreground">
                  Accompagnement complet du choix du statut à l'immatriculation, en passant par
                  l'élaboration du business plan.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-white">Développement</h3>
                </div>
                <p className="text-foreground">
                  Optimisation fiscale, financement, investissement et stratégie de croissance pour
                  PME et ETI.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-white">Transmission</h3>
                </div>
                <p className="text-foreground">
                  Préparation et accompagnement de la transmission de votre entreprise, audit
                  d'acquisition.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rm-section bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl mb-5">Découvrez comment nous pouvons vous aider</h2>
            <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
              Contactez-nous pour une première consultation gratuite et sans engagement.
            </p>
            <Link href="/contact" className="rm-arrow-cta inline-flex">
              Nous contacter
              <span className="rm-arrow-circle">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default About;
