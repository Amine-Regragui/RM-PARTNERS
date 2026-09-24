import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CircleCheckBig, User } from "lucide-react";
import { Link } from "wouter";
export function BlogFacturationElectronique() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-primary hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </section>
        <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Facturation Électronique : Obligations et Enjeux
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-8 h-8 text-accent" />
                <span className="text-white">15 novembre 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-8 h-8 text-accent" />
                <span className="text-white">Amine Regragui</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-lg text-foreground leading-relaxed mb-8">
                La facturation électronique est devenue un sujet incontournable pour les entreprises
                françaises. Depuis le 1er janvier 2024, les obligations se renforcent
                progressivement. Découvrez ce que vous devez savoir sur cette transformation
                digitale majeure.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">
                Qu'est-ce que la facturation électronique ?
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                La facturation électronique est l'émission, la transmission et la conservation de
                factures sous forme électronique. Contrairement à la simple numérisation d'une
                facture papier, elle implique un format structuré et standardisé permettant un
                traitement automatisé.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Les formats acceptés incluent le format UBL (Universal Business Language) et le
                format CII (Cross Industry Invoice). Ces formats garantissent une interopérabilité
                entre les différents systèmes informatiques.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">
                Les obligations légales
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Depuis le 1er janvier 2024, les entreprises ont l'obligation de recevoir les
                factures électroniques de leurs fournisseurs. Cette obligation s'applique à :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Les entreprises assujetties à la TVA</strong> - Toutes les entreprises,
                    quelle que soit leur taille
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Les collectivités territoriales</strong> - Communes, régions,
                    départements, etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Les établissements publics</strong> - Hôpitaux, universités, etc.
                  </span>
                </li>
              </ul>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">
                Calendrier de mise en œuvre
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                La mise en œuvre de la facturation électronique se fait progressivement :
              </p>
              <div className="bg-secondary rounded-lg p-6 mb-6 space-y-4">
                <div>
                  <h4 className="font-bold text-heading mb-2">1er janvier 2024</h4>
                  <p className="text-foreground">
                    Obligation de recevoir les factures électroniques
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-heading mb-2">1er juillet 2024</h4>
                  <p className="text-foreground">
                    Obligation d'émettre des factures électroniques pour les grandes entreprises (CA
                    supérieur à 10 millions euros)
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-heading mb-2">1er janvier 2025</h4>
                  <p className="text-foreground">
                    Obligation d'émettre pour les PME (CA supérieur à 2 millions euros)
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-heading mb-2">1er janvier 2026</h4>
                  <p className="text-foreground">
                    Obligation d'émettre pour toutes les entreprises
                  </p>
                </div>
              </div>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">
                Les avantages de la facturation électronique
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Réduction des coûts</strong> - Suppression des frais d'impression,
                    d'envoi et de stockage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Amélioration de la trésorerie</strong> - Traitement plus rapide des
                    factures et des paiements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Réduction des erreurs</strong> - Traitement automatisé limitant les
                    erreurs manuelles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Meilleure traçabilité</strong> - Historique complet et facilité de
                    recherche
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Conformité réglementaire</strong> - Respect des obligations légales et
                    fiscales
                  </span>
                </li>
              </ul>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">Comment se préparer ?</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Pour vous préparer à la facturation électronique, nous vous recommandons de :
              </p>
              <ol className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span className="text-foreground">
                    <strong>Évaluer votre système informatique</strong> - Vérifiez que vos logiciels
                    sont compatibles avec les formats électroniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span className="text-foreground">
                    <strong>Choisir une solution adaptée</strong> - Sélectionnez un logiciel ou un
                    service de facturation électronique
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span className="text-foreground">
                    <strong>Former vos équipes</strong> - Assurez-vous que vos collaborateurs
                    comprennent le nouveau processus
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">4.</span>
                  <span className="text-foreground">
                    <strong>Mettre en place une transition progressive</strong> - Commencez par les
                    clients volontaires avant de généraliser
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">5.</span>
                  <span className="text-foreground">
                    <strong>Consulter un expert</strong> - Faites-vous accompagner par un cabinet
                    d'expertise comptable
                  </span>
                </li>
              </ol>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">Conclusion</h2>
              <p className="text-foreground leading-relaxed mb-6">
                La facturation électronique est une transformation majeure pour les entreprises.
                Bien que les obligations s'échelonnent jusqu'en 2026, il est recommandé de commencer
                dès maintenant à vous préparer. Cette transition offre des opportunités
                d'amélioration significatives en termes de coûts, d'efficacité et de conformité.
              </p>
              <p className="text-foreground leading-relaxed">
                Chez RM Partners, nous accompagnons les entreprises dans cette transition. N'hésitez
                pas à nous contacter pour discuter de votre situation spécifique et des solutions
                adaptées à vos besoins.
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-16 bg-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-heading">
                Besoin d'aide pour la facturation électronique ?
              </h3>
              <p className="text-foreground mb-6">
                Nos experts peuvent vous accompagner dans la mise en place de la facturation
                électronique.
              </p>
              <Link href="/contact">
                <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-6">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Articles connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/blog"
                className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-heading">Optimisation fiscale 2024</h3>
                  <p className="text-foreground text-sm mb-4">
                    Découvrez les meilleures stratégies d'optimisation fiscale pour votre entreprise
                    en 2024.
                  </p>
                  <span className="text-accent text-sm font-semibold">Lire l'article</span>
                </div>
              </Link>
              <Link
                href="/blog"
                className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-heading">Gestion de la paie</h3>
                  <p className="text-foreground text-sm mb-4">
                    Les dernières obligations en matière de gestion de paie et de déclarations
                    sociales.
                  </p>
                  <span className="text-accent text-sm font-semibold">Lire l'article</span>
                </div>
              </Link>
              <Link
                href="/blog"
                className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-heading">Audit interne</h3>
                  <p className="text-foreground text-sm mb-4">
                    L'importance de l'audit interne pour la santé financière de votre entreprise.
                  </p>
                  <span className="text-accent text-sm font-semibold">Lire l'article →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default BlogFacturationElectronique;
