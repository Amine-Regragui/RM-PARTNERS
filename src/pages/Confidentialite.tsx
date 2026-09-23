/**
 * ⚠️ SQUELETTE JURIDIQUE — À FAIRE VALIDER PAR UN JURISTE (ou un DPO) AVANT MISE EN LIGNE.
 *
 * Trame d'information RGPD (art. 13 du règlement 2016/679) couvrant le formulaire
 * de contact du site. Les éléments factuels vérifiables dans le code y figurent
 * (champs du formulaire, envoi via formsubmit.co) ; toute donnée juridique ou
 * organisationnelle restante est signalée par un marqueur [À COMPLÉTER : …].
 * Tant que ces marqueurs subsistent, l'information des personnes est incomplète.
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

/** Marqueur visuel des données restant à fournir avant publication. */
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
                Dernière mise à jour : <ARenseigner>date de mise à jour</ARenseigner>
              </p>
            </div>
          </div>
        </section>

        <LegalSection title="1. Responsable du traitement">
          <p>
            Le responsable du traitement est <ARenseigner>raison sociale exacte</ARenseigner>, dont
            le siège social est situé <ARenseigner>adresse complète du siège social</ARenseigner>,
            immatriculée sous le numéro SIREN <ARenseigner>numéro SIREN</ARenseigner>.
          </p>
          <p>
            Délégué à la protection des données ou point de contact « données personnelles » :{" "}
            <ARenseigner>
              nom et coordonnées du DPO, ou mention « aucun DPO désigné » et interlocuteur référent
            </ARenseigner>
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
            Autres traitements réalisés par le cabinet en dehors du site (dossiers clients, missions
            comptables, sociales et d'audit) :{" "}
            <ARenseigner>
              description des traitements liés aux missions et de leur documentation (registre)
            </ARenseigner>
            .
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
              Envoi éventuel d'informations ultérieures :{" "}
              <ARenseigner>
                préciser si une prospection est réalisée et sur quelle base (consentement)
              </ARenseigner>
              .
            </li>
            <li>
              Obligations légales et professionnelles du cabinet :{" "}
              <ARenseigner>
                obligations applicables (LCB-FT, conservation des dossiers de mission…)
              </ARenseigner>
              .
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
              Éditeur du service d'acheminement et localisation de ses serveurs :{" "}
              <ARenseigner>identité de l'éditeur de FormSubmit et pays d'hébergement</ARenseigner>
            </li>
            <li>
              Encadrement du transfert hors Union européenne le cas échéant :{" "}
              <ARenseigner>
                clauses contractuelles types ou autre garantie appropriée (art. 46 du RGPD)
              </ARenseigner>
            </li>
            <li>
              Hébergeur du site et messagerie du cabinet :{" "}
              <ARenseigner>identité des prestataires et localisation des données</ARenseigner>
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
              Demandes de contact sans suite :{" "}
              <ARenseigner>
                durée retenue (usuellement 3 ans à compter du dernier contact)
              </ARenseigner>
            </li>
            <li>
              Demandes converties en mission :{" "}
              <ARenseigner>durée de conservation des dossiers clients et archives</ARenseigner>
            </li>
            <li>
              Traces techniques éventuelles :{" "}
              <ARenseigner>durée de conservation des journaux du prestataire</ARenseigner>
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Sécurité et confidentialité" tone="muted">
          <p>
            Le site est servi en HTTPS et les échanges avec le service d'acheminement du formulaire
            sont chiffrés en transit. Le cabinet met en œuvre les mesures techniques et
            organisationnelles appropriées pour préserver la sécurité des données :{" "}
            <ARenseigner>
              mesures effectivement en place (habilitations, sauvegardes, MFA…)
            </ARenseigner>
            .
          </p>
          <p>
            L'expert-comptable et le commissaire aux comptes sont en outre tenus au secret
            professionnel pour l'ensemble des informations recueillies dans le cadre de leurs
            missions.
          </p>
        </LegalSection>

        <LegalSection title="7. Cookies et mesure d'audience">
          <p>
            État actuel du site :{" "}
            <ARenseigner>confirmer la présence ou l'absence de cookies</ARenseigner>. Seuls des
            cookies strictement nécessaires au fonctionnement du site peuvent être déposés sans
            votre consentement ; tout traceur de mesure d'audience ou de publicité requiert une
            bannière de recueil du consentement.
          </p>
          <p>
            Outils tiers susceptibles de déposer des traceurs :{" "}
            <ARenseigner>
              liste des outils (mesure d'audience, polices distantes, vidéos intégrées…) et finalité
            </ARenseigner>
            .
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
            ou par courrier à <ARenseigner>adresse postale de traitement des demandes</ARenseigner>,
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
