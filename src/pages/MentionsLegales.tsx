/**
 * ⚠️ SQUELETTE JURIDIQUE — À FAIRE VALIDER PAR UN JURISTE AVANT MISE EN LIGNE.
 *
 * Cette page est une trame conforme aux rubriques exigées par la LCEN (art. 6-III)
 * et par le Code de déontologie des professionnels de l'expertise comptable.
 * Aucune donnée légale n'a été inventée : chaque information à fournir est signalée
 * par un marqueur [À COMPLÉTER : …] visible en rouge dans la page.
 * Tant que ces marqueurs subsistent, la page ne remplit pas l'obligation légale.
 */

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Link } from "wouter";
interface ARenseignerProps {
  children: ReactNode;
}

/** Marqueur visuel des données légales restant à fournir avant publication. */
function ARenseigner({ children }: ARenseignerProps) {
  return <span className="font-semibold text-red-700">[À COMPLÉTER : {children}]</span>;
}
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
                Dernière mise à jour : <ARenseigner>date de mise à jour</ARenseigner>
              </p>
            </div>
          </div>
        </section>

        <LegalSection title="1. Éditeur du site">
          <p>
            Le site rmpartners.fr est édité par <ARenseigner>raison sociale exacte</ARenseigner>,{" "}
            <ARenseigner>forme juridique (SARL, SAS, SELARL…)</ARenseigner> au capital social de{" "}
            <ARenseigner>montant du capital social</ARenseigner>.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Siège social : <ARenseigner>adresse complète du siège social</ARenseigner>
            </li>
            <li>
              Immatriculation : RCS <ARenseigner>ville du greffe</ARenseigner> sous le numéro{" "}
              <ARenseigner>numéro RCS</ARenseigner> — SIREN{" "}
              <ARenseigner>numéro SIREN à 9 chiffres</ARenseigner>
            </li>
            <li>
              Numéro de TVA intracommunautaire : <ARenseigner>numéro de TVA</ARenseigner>
            </li>
            <li>
              Code APE / NAF : <ARenseigner>code APE</ARenseigner>
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
            Le directeur de la publication du site est{" "}
            <ARenseigner>nom, prénom et qualité du directeur de la publication</ARenseigner>,
            joignable à l'adresse{" "}
            <ARenseigner>adresse de courriel du directeur de la publication</ARenseigner>.
          </p>
        </LegalSection>

        <LegalSection title="3. Hébergement">
          <p>
            Le site est hébergé par <ARenseigner>raison sociale de l'hébergeur</ARenseigner>,{" "}
            <ARenseigner>adresse postale de l'hébergeur</ARenseigner>,{" "}
            <ARenseigner>téléphone de l'hébergeur</ARenseigner>.
          </p>
          <p>
            La LCEN impose de désigner nommément l'hébergeur : si le site reste servi par GitHub
            Pages, il convient d'indiquer l'entité et l'adresse exactes fournies par ce prestataire.
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
              Inscription au Tableau de l'Ordre des experts-comptables :{" "}
              <ARenseigner>
                conseil régional de rattachement et numéro d'inscription au Tableau
              </ARenseigner>
            </li>
            <li>
              Inscription sur la liste des commissaires aux comptes :{" "}
              <ARenseigner>
                compagnie régionale des commissaires aux comptes et numéro d'inscription
              </ARenseigner>
            </li>
            <li>
              Autorité de tutelle et de contrôle :{" "}
              <ARenseigner>autorité compétente (H2A / Conseil national de l'Ordre)</ARenseigner>
            </li>
            <li>
              Titre professionnel obtenu en :{" "}
              <ARenseigner>État membre de délivrance du titre</ARenseigner>
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Assurance responsabilité civile professionnelle">
          <p>
            Le cabinet est couvert par une assurance de responsabilité civile professionnelle
            souscrite auprès de{" "}
            <ARenseigner>nom et adresse de la compagnie d'assurance</ARenseigner>, police n°{" "}
            <ARenseigner>numéro de police</ARenseigner>.
          </p>
          <p>
            Couverture géographique : <ARenseigner>étendue territoriale de la garantie</ARenseigner>
            .
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
            Médiateur compétent :{" "}
            <ARenseigner>nom du médiateur, adresse postale et site internet</ARenseigner>.
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
          <p>
            Crédits photographiques et iconographiques :{" "}
            <ARenseigner>auteurs ou banques d'images et licences applicables</ARenseigner>.
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
