/**
 * Politique de confidentialité du site rmpartners.fr (information RGPD, art. 13
 * du règlement 2016/679) couvrant le formulaire de contact (envoi via formsubmit.co).
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
export function Confidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Politique de confidentialité"
        description="Traitement des données personnelles sur rmpartners.fr : finalités du formulaire de contact, base légale, destinataires, durées de conservation et exercice de vos droits RGPD."
        canonical="/confidentialite"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rm-eyebrow">
                <span>Protection des données</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Politique de confidentialité
              </h1>
              <div className="w-20 h-1 bg-accent rounded mb-6" />
              <p className="text-base md:text-xl text-white/90">
                Comment RM Partners collecte, utilise et protège les données personnelles
                communiquées depuis ce site, et comment exercer vos droits.
              </p>
              <p className="text-sm text-white/70 mt-6">
                Dernière mise à jour : 30 octobre 2026
              </p>
            </div>
          </div>
        </section>

        <LegalSection title="1. Responsable du traitement">
          <p>
            Le responsable du traitement est <strong>RM PARTNERS</strong>, société par actions
            simplifiée au capital de 2 000,00 euros, dont le siège social est situé 61 rue La
            Boétie, 75008 Paris, immatriculée au RCS de Paris sous le numéro SIREN 879 434 322.
          </p>
          <p>
            Le cabinet n'a pas désigné de délégué à la protection des données (DPO). Pour toute
            question relative à vos données personnelles, votre interlocuteur est M. Amine
            Regragui, Président, joignable à l'adresse{" "}
            <a
              href="mailto:a.regragui@rmpartners.fr"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              a.regragui@rmpartners.fr
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Données collectées" tone="muted">
          <p>
            Le formulaire de contact du site recueille les informations que vous saisissez vous-même
            :
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>nom complet ;</li>
            <li>entreprise ;</li>
            <li>adresse de courriel ;</li>
            <li>numéro de téléphone ;</li>
            <li>objet de la demande ;</li>
            <li>contenu libre du message.</li>
          </ul>
          <p>
            Aucun champ n'est destiné à recueillir des données sensibles au sens de l'article 9 du
            RGPD : merci de ne pas en faire figurer dans le corps du message.
          </p>
          <p>
            Les données traitées dans le cadre des missions confiées au cabinet (missions
            comptables, sociales et d'audit) ne relèvent pas de la présente politique : elles sont
            encadrées par la lettre de mission conclue avec chaque client et couvertes par le secret
            professionnel.
          </p>
        </LegalSection>

        <LegalSection title="3. Finalités et bases légales">
          <p>
            Les données transmises via le formulaire sont utilisées pour prendre connaissance de
            votre demande, y répondre et, le cas échéant, préparer une proposition de mission.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Réponse à une sollicitation commerciale ou informative : mesures précontractuelles
              prises à votre demande (art. 6.1.b du RGPD) et intérêt légitime du cabinet à traiter
              les demandes entrantes (art. 6.1.f).
            </li>
            <li>
              Prospection : aucune prospection commerciale ni lettre d'information n'est adressée
              à partir des données transmises via le formulaire.
            </li>
            <li>
              Obligations légales et professionnelles du cabinet (art. 6.1.c du RGPD) : lutte contre
              le blanchiment de capitaux et le financement du terrorisme (articles L. 561-1 et
              suivants du Code monétaire et financier) et conservation des dossiers de mission.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Destinataires et sous-traitants" tone="muted">
          <p>
            Vos données sont destinées aux seuls collaborateurs du cabinet en charge du traitement
            de votre demande. Elles ne font l'objet d'aucune cession ni location à des tiers.
          </p>
          <p>
            L'acheminement du formulaire est assuré par le service <strong>FormSubmit</strong> : la
            soumission est transmise à l'adresse <code className="break-all">formsubmit.co</code>,
            qui réexpédie le message vers la boîte de réception du cabinet. Ce prestataire agit en
            qualité de sous-traitant au sens de l'article 28 du RGPD.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Service d'acheminement du formulaire : FormSubmit (formsubmit.co), contact :
              support@formsubmit.co. Ses serveurs pouvant être situés hors de l'Union européenne,
              vos données sont susceptibles d'y être transférées le temps de leur acheminement.
            </li>
            <li>
              Hébergeur du site : GitHub, Inc. (service GitHub Pages), 88 Colin P. Kelly Jr. Street,
              San Francisco, CA 94107, États-Unis, qui peut enregistrer des données techniques de
              connexion (adresse IP) dans ses journaux.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Durées de conservation">
          <p>
            Les données ne sont pas conservées au-delà de ce qui est nécessaire aux finalités
            poursuivies.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Demandes de contact sans suite : 3 ans à compter du dernier contact
            </li>
            <li>
              Demandes converties en mission : 10 ans à compter de la fin de la mission, au titre des
              obligations légales et professionnelles du cabinet
            </li>
            <li>
              Traces techniques éventuelles : selon la politique de conservation des journaux du
              prestataire d'hébergement
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Sécurité et confidentialité" tone="muted">
          <p>
            Le site est servi en HTTPS et les échanges avec le service d'acheminement du formulaire
            sont chiffrés en transit. Le cabinet met en œuvre les mesures techniques et
            organisationnelles appropriées pour préserver la sécurité et la confidentialité des
            données.
          </p>
          <p>
            L'expert-comptable et le commissaire aux comptes sont en outre tenus au secret
            professionnel pour l'ensemble des informations recueillies dans le cadre de leurs
            missions.
          </p>
        </LegalSection>

        <LegalSection title="7. Cookies et mesure d'audience">
          <p>
            Le site n'utilise aucun outil de mesure d'audience ni aucun cookie publicitaire. Le
            choix du thème d'affichage (clair ou sombre) est mémorisé localement dans votre
            navigateur, à des fins strictement fonctionnelles. Seuls des
            cookies strictement nécessaires au fonctionnement du site peuvent être déposés sans
            votre consentement ; tout traceur de mesure d'audience ou de publicité requiert une
            bannière de recueil du consentement.
          </p>
          <p>
            Services tiers intégrés au site : les polices de caractères Google Fonts (Google), dont
            le chargement entraîne la transmission de votre adresse IP à Google, et la carte Google
            Maps affichée sur les pages Contact et Implantations, susceptible de déposer des
            traceurs propres à Google.
          </p>
        </LegalSection>

        <LegalSection title="8. Vos droits" tone="muted">
          <p>
            Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos
            données :
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>droit d'accès et droit d'obtenir une copie de vos données ;</li>
            <li>droit de rectification des données inexactes ou incomplètes ;</li>
            <li>
              droit à l'effacement, dans les limites des obligations légales de conservation ;
            </li>
            <li>droit à la limitation du traitement ;</li>
            <li>droit d'opposition, notamment à la prospection commerciale ;</li>
            <li>droit à la portabilité des données que vous nous avez fournies ;</li>
            <li>
              droit de définir des directives relatives au sort de vos données après votre décès ;
            </li>
            <li>
              droit de retirer votre consentement à tout moment, lorsque le traitement repose sur
              celui-ci.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="9. Exercer vos droits et réclamations">
          <p>
            Vous pouvez exercer vos droits en écrivant à{" "}
            <a
              href="mailto:a.regragui@rmpartners.fr"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              a.regragui@rmpartners.fr
            </a>{" "}
            ou par courrier à RM PARTNERS, 61 rue La Boétie, 75008 Paris,
            en joignant tout élément permettant de vous identifier. Une réponse vous sera adressée
            dans un délai d'un mois, prorogeable dans les conditions prévues par le RGPD.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
            pouvez introduire une réclamation auprès de la Commission nationale de l'informatique et
            des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="10. Évolution de la présente politique" tone="muted">
          <p>
            Cette politique peut être modifiée pour tenir compte d'évolutions légales, techniques ou
            organisationnelles. La version applicable est celle publiée sur cette page à la date de
            votre consultation.
          </p>
          <p>
            Les informations relatives à l'éditeur du site figurent dans les{" "}
            <Link
              href="/mentions-legales"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              mentions légales
            </Link>
            .
          </p>
        </LegalSection>
      </main>
      <Footer />
    </div>
  );
}
export default Confidentialite;
