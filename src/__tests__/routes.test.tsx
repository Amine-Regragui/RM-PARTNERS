/**
 * Test de fumée : monte chaque route statique du site et vérifie qu'elle
 * s'affiche sans planter.
 *
 * Ce test attrape exactement la classe de bug qui a cassé la production :
 * une erreur au chargement (`qg is not defined`) laissait #root vide et le
 * site entièrement blanc, alors que le build passait sans broncher.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";

import { AppRouter } from "@/App";
import { routes } from "@/data/routes";

const staticRoutes = routes.filter((route) => !route.dynamic);

function renderAt(path: string) {
  const { hook } = memoryLocation({ path, static: true });
  return render(
    <HelmetProvider>
      <Router hook={hook}>
        <AppRouter />
      </Router>
    </HelmetProvider>,
  );
}

describe("routes du site", () => {
  it("déclare au moins 20 routes statiques", () => {
    expect(staticRoutes.length).toBeGreaterThanOrEqual(20);
  });

  it.each(staticRoutes.map((route) => [route.path, route.title] as const))(
    "affiche %s sans erreur",
    (path) => {
      const { container } = renderAt(path);

      // La page produit du contenu (le bug de prod laissait #root vide).
      expect(container.innerHTML.length).toBeGreaterThan(500);

      // Les pages du site portent l'en-tête et son menu ; la page d'erreur,
      // volontairement nue, n'affiche qu'un bouton de retour.
      const isErrorPage = routes.find((route) => route.path === path)?.noIndex;
      if (!isErrorPage) {
        expect(screen.getAllByRole("link").length).toBeGreaterThan(5);
      }
    },
  );
});
