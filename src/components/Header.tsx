import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";

const SITE_NAME = "RM Partners";

const lo = "/logo.png";

export function Header() {
  const [n, i] = useState(!1),
    [l, o] = useState(null),
    u = [
      {
        href: "/",
        label: "Accueil",
      },
      {
        label: "Cabinet",
        submenu: [
          {
            href: "/president",
            label: "Mot du Président",
          },
          {
            href: "/about",
            label: "Présentation du cabinet",
          },
          {
            href: "/equipe",
            label: "Équipe",
          },
        ],
      },
      {
        label: "Services",
        submenu: [
          {
            href: "/services",
            label: "Tous nos services",
          },
          {
            href: "/services/comptabilite",
            label: "Comptabilité",
          },
          {
            href: "/services/fiscalite",
            label: "Fiscalité",
          },
          {
            href: "/services/paie",
            label: "Paie & Social",
          },
          {
            href: "/services/audit",
            label: "Audit & Commissariat",
          },
          {
            href: "/services/controle-fiscal",
            label: "Contrôle Fiscal",
          },
          {
            href: "/services/conseil",
            label: "Conseil en gestion",
          },
        ],
      },
      {
        href: "/secteurs",
        label: "Secteurs",
      },
      {
        href: "/blog",
        label: "Actualités",
      },
      {
        href: "/contact",
        label: "Contact",
      },
    ];
  return (
    <header
      id="rm-header"
      className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 xl:px-10 py-3">
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={lo} alt={SITE_NAME} className="h-16 w-auto flex-shrink-0 rm-logo-img" />
            <span className="flex flex-col leading-tight">
              <span
                className="tracking-wide uppercase"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#173B63",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "0.06em",
                }}
              >
                {SITE_NAME}
              </span>
              <span
                className="font-semibold text-muted-foreground tracking-widest uppercase"
                style={{
                  fontSize: "0.58rem",
                }}
              >
                Expert-Comptable • Commissaire aux Comptes
              </span>
              <span
                className="font-bold text-accent tracking-widest uppercase"
                style={{
                  fontSize: "0.58rem",
                }}
              >
                Membre de l'Ordre des Experts-Comptables
              </span>
            </span>
          </a>
        </Link>
        <nav className="flex items-center justify-center gap-6">
          {u.map((p) => (
            <div className="relative group">
              {p.submenu ? (
                <>
                  <button className="text-sm text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1 py-2 whitespace-nowrap">
                    {p.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute left-0 top-full w-56 bg-white border-t-2 border-accent shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-1.5 z-50">
                    {p.submenu.map((m) => (
                      <Link href={m.href}>
                        <a className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium">
                          {m.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={p.href}>
                  <a className="text-sm text-foreground hover:text-accent transition-colors font-medium py-2 inline-block whitespace-nowrap">
                    {p.label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </nav>
        <Link href="/contact">
          <a className="rm-arrow-cta flex-shrink-0">
            Nous contacter
            <span className="rm-arrow-circle">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </a>
        </Link>
      </div>
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={lo} alt={SITE_NAME} className="h-12 w-auto" />
            <span className="flex flex-col leading-tight">
              <span
                className="tracking-wide uppercase text-sm"
                style={{
                  color: "#173B63",
                  fontWeight: 700,
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {SITE_NAME}
              </span>
              <span
                className="font-semibold text-muted-foreground tracking-wide uppercase hidden sm:block"
                style={{
                  fontSize: "0.55rem",
                }}
              >
                Expert-Comptable • Commissaire aux Comptes
              </span>
            </span>
          </a>
        </Link>
        <button className="p-2" onClick={() => i(!n)} aria-label="Menu">
          {n ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {n && (
        <nav className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {u.map((p) => (
              <div>
                {p.submenu ? (
                  <>
                    <button
                      onClick={() => o(l === p.label ? null : p.label)}
                      className="w-full text-left font-medium py-2 flex items-center justify-between text-foreground hover:text-accent"
                    >
                      {p.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${l === p.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {l === p.label && (
                      <div className="pl-4 flex flex-col gap-2 mt-1">
                        {p.submenu.map((m) => (
                          <Link href={m.href}>
                            <a
                              className="py-2 text-sm text-foreground hover:text-accent font-medium block"
                              onClick={() => i(!1)}
                            >
                              {m.label}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={p.href}>
                    <a
                      className="py-2 font-medium text-foreground hover:text-accent block"
                      onClick={() => i(!1)}
                    >
                      {p.label}
                    </a>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <a className="rm-arrow-cta justify-center mt-2" onClick={() => i(!1)}>
                Nous contacter
                <span className="rm-arrow-circle">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
