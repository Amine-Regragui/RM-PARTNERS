/**
 * Mentions légales du site rmpartners.fr (LCEN art. 6-III et Code de déontologie
 * des professionnels de l'expertise comptable).
 * Identité de l'éditeur reprise de l'extrait d'immatriculation RCS de RM PARTNERS.
 */

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Link } from "wouter";
interface LegalSectionProps {
  title: string;
  /** Alterne le fond des sections, comme sur les autres pages du site. */
  tone?: "light" | "muted";
  children: ReactNode;
}
function LegalSection({ title, tone = "light", children }: LegalSectionProps) {
  return (
    <section
      className={cn(
        "rm-section py-14 md:py-16",
        tone === "muted" ? "bg-secondary" : "bg-background",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-6">{title}</h2>
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
export function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Mentions légales"
        description="Mentions légales du site RM Partners : éditeur, directeur de la publication, hébergeur, inscription à l'Ordre des experts-comptables et assurance professionnelle."
        canonical="/mentions-legales"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rm-eyebrow">
                <span>Informations légales</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Mentions légales</h1>
              <div className="w-20 h-1 bg-accent rounded mb-6" />
              <p className="text-base md:text-xl text-white/90">
                Informations relatives à l'éditeur du site rmpartners.fr, à son hébergement et à
                l'exercice réglementé des professions d'expert-comptable et de commissaire aux
                comptes.
              </p>
              <p className="text-sm text-white/70 mt-6">
                Dernière mise à jour : 30 octobre 2026
              </p>
            </div>
          </div>
        </section>

        <LegalSection title="1. Éditeur du site">
          <p>
            Le site rmpartners.fr est édité par <strong>RM PARTNERS</strong>, société par actions
            simplifiée (SAS) au capital social de 2 000,00 euros.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Siège social : 61 rue La Boétie, 75008 Paris, France
            </li>
            <li>
              Immatriculation : RCS Paris sous le numéro 879 434 322 — SIREN 879 434 322
            </li>
            <li>
              Numéro de TVA intracommunautaire : FR75879434322
            </li>
            <li>
              Code APE / NAF : 69.20Z (activités comptables)
            </li>
            <li>
              Téléphone :{" "}
              <a href="tel:+33603406853" className="hover:text-accent transition-colors">
                +33 6 03 40 68 53
              </a>
            </li>
            <li>
              Courriel :{" "}
              <a
                href="mailto:a.regragui@rmpartners.fr"
                className="hover:text-accent transition-colors"
              >
                a.regragui@rmpartners.fr
              </a>
            </li>
            <li>Adresse des bureaux : 61 rue la Boétie, 75008 Paris</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Directeur de la publication" tone="muted">
          <p>
            Le directeur de la publication du site est M. Amine Regragui, Président de RM PARTNERS,
            joignable à l'adresse{" "}
            <a
              href="mailto:a.regragui@rmpartners.fr"
              className="hover:text-accent transition-colors"
            >
              a.regragui@rmpartners.fr
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="3. Hébergement">
          <p>
            Le site est hébergé par le service GitHub Pages de la société GitHub, Inc., 88 Colin P.
            Kelly Jr. Street, San Francisco, CA 94107, États-Unis —{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              github.com
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="4. Professions réglementées" tone="muted">
          <p>
            L'activité d'expertise comptable est réglementée par l'ordonnance du 19 septembre 1945
            et soumise au respect du Code de déontologie des professionnels de l'expertise
            comptable.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Inscription au Tableau de l'Ordre des experts-comptables : M. Amine Regragui,
              expert-comptable inscrit au Tableau de l'Ordre de la région Paris Île-de-France
            </li>
            <li>
              Inscription sur la liste des commissaires aux comptes : M. Amine Regragui,
              commissaire aux comptes inscrit sur la liste tenue par la Haute autorité de l'audit
              (H2A)
            </li>
            <li>
              Autorités de contrôle : Conseil national de l'Ordre des experts-comptables (expertise
              comptable) et Haute autorité de l'audit — H2A (commissariat aux comptes)
            </li>
            <li>
              Titres professionnels d'expert-comptable et de commissaire aux comptes obtenus en
              France
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Assurance responsabilité civile professionnelle">
          <p>
            Conformément à l'ordonnance du 19 septembre 1945, le cabinet est couvert par une
            assurance de responsabilité civile professionnelle.
          </p>
          <p>
            L'attestation d'assurance, précisant les coordonnées de l'assureur et l'étendue
            territoriale de la garantie, est communiquée sur simple demande adressée au cabinet.
          </p>
        </LegalSection>

        <LegalSection title="6. Médiation de la consommation" tone="muted">
          <p>
            Conformément aux articles L. 612-1 et suivants du Code de la consommation, tout client
            ayant la qualité de consommateur peut recourir gratuitement à un médiateur de la
            consommation en vue de la résolution amiable d'un litige, après avoir adressé une
            réclamation écrite au cabinet et à défaut de réponse satisfaisante sous deux mois.
          </p>
          <p>
            Les coordonnées du médiateur de la consommation compétent sont communiquées sur simple
            demande adressée au cabinet.
          </p>
        </LegalSection>

        <LegalSection title="7. Propriété intellectuelle">
          <p>
            L'ensemble des éléments composant le site — structure, textes, identité visuelle,
            logotypes, photographies, illustrations et documents téléchargeables — est protégé par
            le droit de la propriété intellectuelle et demeure la propriété de leur titulaire
            respectif.
          </p>
          <p>
            Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, par
            quelque procédé que ce soit, sans autorisation écrite préalable, est interdite et
            constitue une contrefaçon au sens des articles L. 335-2 et suivants du Code de la
            propriété intellectuelle.
          </p>
        </LegalSection>

        <LegalSection title="8. Liens hypertextes" tone="muted">
          <p>
            Le site peut renvoyer vers des sites tiers, sur lesquels le cabinet n'exerce aucun
            contrôle. Leur contenu n'engage que leurs éditeurs et la responsabilité du cabinet ne
            saurait être recherchée à ce titre.
          </p>
          <p>
            La création d'un lien vers rmpartners.fr est libre, sous réserve de ne pas porter
            atteinte à l'image du cabinet et de ne pas mettre la page en situation d'être confondue
            avec un site tiers.
          </p>
        </LegalSection>

        <LegalSection title="9. Données personnelles et cookies">
          <p>
            Les traitements de données à caractère personnel réalisés depuis ce site, notamment via
            le formulaire de contact, sont décrits dans notre{" "}
            <Link
              href="/confidentialite"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              politique de confidentialité
            </Link>
            .
          </p>
          <p>
            Le secret professionnel auquel sont tenus l'expert-comptable et le commissaire aux
            comptes s'applique à l'ensemble des informations recueillies dans le cadre de la
            mission.
          </p>
        </LegalSection>

        <LegalSection title="10. Droit applicable" tone="muted">
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige et à
            défaut de résolution amiable, compétence est attribuée aux tribunaux français
            compétents.
          </p>
          <p>
            Pour toute question relative à ces mentions, vous pouvez nous écrire via la{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              page contact
            </Link>
            .
          </p>
        </LegalSection>
      </main>
      <Footer />
    </div>
  );
}
export default MentionsLegales;
