import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
const SITE_NAME = "RM Partners";
const lo = "/logo.png";
export function Footer() {
  return (
    new Date().getFullYear(),
    (
      <footer className="bg-primary text-white mt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img src={lo} alt={SITE_NAME} className="w-11 h-11 object-contain" />
                </div>
                <span className="flex flex-col leading-tight">
                  <span
                    className="font-semibold text-white/70 tracking-widest uppercase"
                    style={{
                      fontSize: "0.72rem",
                    }}
                  >
                    Expert-Comptable • Commissaire aux Comptes
                  </span>
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-4">
                  <img
                    src="/ordre-experts-comptables-circle.png"
                    alt="Ordre des Experts-Comptables"
                    className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                  />
                  <span
                    className="font-medium text-white/80 leading-snug"
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    Membre de l'Ordre des Experts-Comptables
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3
                className="text-[0.7rem] font-semibold uppercase tracking-widest mb-4"
                style={{
                  color: "#9c7a2e",
                }}
              >
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <Link
                    href="/services/comptabilite"
                    className="hover:text-accent transition-colors"
                  >
                    Comptabilité
                  </Link>
                </li>
                <li>
                  <Link href="/services/fiscalite" className="hover:text-accent transition-colors">
                    Fiscalité
                  </Link>
                </li>
                <li>
                  <Link href="/services/paie" className="hover:text-accent transition-colors">
                    Paie & Social
                  </Link>
                </li>
                <li>
                  <Link href="/services/audit" className="hover:text-accent transition-colors">
                    Audit & Commissariat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/controle-fiscal"
                    className="hover:text-accent transition-colors"
                  >
                    Contrôle Fiscal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-[0.7rem] font-semibold uppercase tracking-widest mb-4"
                style={{
                  color: "#9c7a2e",
                }}
              >
                Entreprise
              </h3>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors">
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
                {/* Ces pages n'étaient liées depuis nulle part : sans lien entrant,
                    les moteurs de recherche ne les découvrent pas. */}
                <li>
                  <Link href="/secteurs" className="hover:text-accent transition-colors">
                    Secteurs d'activité
                  </Link>
                </li>
                <li>
                  <Link href="/temoignages" className="hover:text-accent transition-colors">
                    Témoignages
                  </Link>
                </li>
                <li>
                  <Link href="/partenaires" className="hover:text-accent transition-colors">
                    Partenaires
                  </Link>
                </li>
                <li>
                  <Link href="/implantations" className="hover:text-accent transition-colors">
                    Implantations
                  </Link>
                </li>
                <li>
                  <Link href="/outils" className="hover:text-accent transition-colors">
                    Outils
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-[0.7rem] font-semibold uppercase tracking-widest mb-4"
                style={{
                  color: "#9c7a2e",
                }}
              >
                Nous contacter
              </h3>
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex items-center gap-3 group">
                  <span className="rm-icon-badge w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20 group-hover:border-accent/40">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span>61 rue la Boétie, 75008 Paris</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="rm-icon-badge w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20 group-hover:border-accent/40">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <a href="tel:+33603406853" className="hover:text-accent transition-colors">
                    +33 6 03 40 68 53
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="rm-icon-badge w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20 group-hover:border-accent/40">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <a
                    href="mailto:a.regragui@rmpartners.fr"
                    className="hover:text-accent transition-colors"
                  >
                    a.regragui@rmpartners.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/15 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
              <p className="text-white/90">© 2019 RM Partners. Tous droits réservés.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link
                  href="/mentions-legales"
                  className="hover:text-accent transition-colors"
                  style={{
                    color: "#9c7a2e",
                  }}
                >
                  Mentions légales
                </Link>
                <Link
                  href="/confidentialite"
                  className="hover:text-accent transition-colors"
                  style={{
                    color: "#9c7a2e",
                  }}
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
}
export default Footer;
