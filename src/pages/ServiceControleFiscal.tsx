import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  CircleCheckBig,
  FileSearch,
  MessageSquare,
  Scale,
  Shield,
  TriangleAlert,
} from "lucide-react";
import { Link } from "wouter";

export function ServiceControleFiscal() {
  const n = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Assistance au Contrôle Fiscal",
    provider: {
      "@type": "LocalBusiness",
      name: "RM Partners",
    },
    description:
      "Accompagnement technique et juridique lors des vérifications de comptabilité par l'administration fiscale.",
    areaServed: "France",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de Contrôle Fiscal",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit à blanc et revue du FEC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assistance aux débats contradictoires",
          },
        },
      ],
    },
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Assistance au Contrôle Fiscal"
        description="Expertise en défense fiscale à Paris. RM Partners vous accompagne lors de vos contrôles fiscaux : préparation, assistance aux débats et recours."
        schema={n}
      />
      <Header />
      <main className="flex-1">
        <section className="relative rm-banner-hero flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/service-controlefiscal-banner.jpg"
              alt="Assistance au Contrôle Fiscal"
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
                  <path d="M12 2 4 5v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V5z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                Assistance au Contrôle Fiscal
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-md">
                Une expertise technique et juridique pour vous accompagner sereinement face à
                l'administration fiscale.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Faire face à un contrôle fiscal avec sérénité
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Le contrôle fiscal est une étape souvent redoutée par les dirigeants d'entreprise.
                  Chez RM Partners, nous considérons qu'une préparation rigoureuse et une défense
                  technique solide sont les clés pour minimiser les risques et les redressements.
                </p>
                <p className="text-lg text-foreground">
                  Notre cabinet vous accompagne à chaque étape de la procédure, de la réception de
                  l'avis de vérification jusqu'à la clôture du contrôle, en assurant l'interface
                  directe avec l'inspecteur des finances publiques.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="text-accent" /> Pourquoi choisir RM Partners ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CircleCheckBig className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Expertise pointue des procédures fiscales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheckBig className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Gestion de la relation avec l'administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheckBig className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Sécurisation des arguments techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheckBig className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Réduction de l'impact financier potentiel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Notre méthodologie d'accompagnement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <FileSearch className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Préparation & Audit</h3>
                <p className="text-foreground">
                  Analyse préalable des pièces comptables, identification des zones de risque et
                  préparation des réponses aux questions prévisibles de l'administration.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Assistance aux Débats</h3>
                <p className="text-foreground">
                  Présence physique lors des interventions de l'inspecteur, gestion des échanges
                  verbaux et écrits, et défense de vos positions techniques.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Scale className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Phase Contradictoire</h3>
                <p className="text-foreground">
                  Rédaction des observations suite à la proposition de rectification, recours
                  hiérarchiques et saisine des commissions départementales si nécessaire.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-white p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Anticiper pour mieux protéger
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    Au-delà de l'assistance curative, RM Partners propose des audits à blanc pour
                    tester la résistance de votre comptabilité face à un éventuel contrôle.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="text-accent w-5 h-5" />
                      <span>Examen de conformité fiscale (ECF)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="text-accent w-5 h-5" />
                      <span>Revue du FEC (Fichier des Écritures Comptables)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="text-accent w-5 h-5" />
                      <span>Vérification des prix de transfert</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="text-accent w-5 h-5" />
                      <span>Validation des crédits d'impôt (CIR/CII)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact">
                    <a>
                      <Button className="bg-accent text-white hover:bg-accent/90 px-10 py-8 text-xl font-bold">
                        Prendre rendez-vous
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceControleFiscal;
