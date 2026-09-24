import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogArticle } from "@/pages/BlogArticle";
import { BlogFacturationElectronique } from "@/pages/BlogFacturationElectronique";
import { Contact } from "@/pages/Contact";
import { Equipe } from "@/pages/Equipe";
import { Home } from "@/pages/Home";
import { Implantations } from "@/pages/Implantations";
import { NotFound } from "@/pages/NotFound";
import { Outils } from "@/pages/Outils";
import { Partenaires } from "@/pages/Partenaires";
import { President } from "@/pages/President";
import { Secteurs } from "@/pages/Secteurs";
import { ServiceAudit } from "@/pages/ServiceAudit";
import { ServiceComptabilite } from "@/pages/ServiceComptabilite";
import { ServiceConseil } from "@/pages/ServiceConseil";
import { ServiceControle } from "@/pages/ServiceControle";
import { ServiceControleFiscal } from "@/pages/ServiceControleFiscal";
import { ServiceCreation } from "@/pages/ServiceCreation";
import { ServiceFiscalite } from "@/pages/ServiceFiscalite";
import { ServiceJuridique } from "@/pages/ServiceJuridique";
import { ServicePaie } from "@/pages/ServicePaie";
import { Services } from "@/pages/Services";
import { Temoignages } from "@/pages/Temoignages";
import { Route, Router, Switch, useLocation } from "wouter";

function ScrollToTop() {
  const [n] = useLocation();
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [n]),
    null
  );
}

export function AppRouter() {
  const n = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <Router base={n}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/president" component={President} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/secteurs" component={Secteurs} />
        <Route path="/services" component={Services} />
        <Route path="/services/comptabilite" component={ServiceComptabilite} />
        <Route path="/services/fiscalite" component={ServiceFiscalite} />
        <Route path="/services/paie" component={ServicePaie} />
        <Route path="/services/audit" component={ServiceAudit} />
        <Route path="/services/controle-fiscal" component={ServiceControleFiscal} />
        <Route path="/services/juridique" component={ServiceJuridique} />
        <Route path="/services/creation" component={ServiceCreation} />
        <Route path="/services/conseil" component={ServiceConseil} />
        <Route path="/services/controle" component={ServiceControle} />
        <Route path="/outils" component={Outils} />
        <Route path="/implantations" component={Implantations} />
        <Route path="/partenaires" component={Partenaires} />
        <Route path="/temoignages" component={Temoignages} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogArticle} />
        <Route path="/blog/facturation-electronique" component={BlogFacturationElectronique} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
