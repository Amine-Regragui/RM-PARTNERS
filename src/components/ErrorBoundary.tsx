import { Component, type ErrorInfo, type ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  /** UI de repli personnalisée ; sinon l'écran sobre RM Partners est affiché. */
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Barrière d'erreur globale : évite l'écran blanc si un composant lève
 * une exception pendant le rendu et propose de recharger le site.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Erreur non interceptée :", error, errorInfo.componentStack);
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.fallback) {
      return this.props.fallback;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
        <div className="w-full max-w-md text-center border border-border bg-card px-8 py-10 shadow-sm">
          <div className="mx-auto mb-6 h-0.5 w-12 bg-accent" />
          <h1 className="text-2xl font-bold text-primary mb-3">Une erreur est survenue</h1>
          <p className="text-sm text-foreground/70 leading-relaxed mb-8">
            Nous ne parvenons pas à afficher cette page pour le moment. Rechargez le site ou
            réessayez dans quelques instants.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors duration-200"
          >
            Recharger la page
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
