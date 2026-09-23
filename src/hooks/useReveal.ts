import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

/**
 * Système d'animation au scroll — port React du script global de l'ancien index.html.
 *
 * L'ancien script attendait `DOMContentLoaded` puis surveillait `#root` avec un
 * MutationObserver pour retagger le DOM après chaque rendu : il écrivait dans des
 * nœuds appartenant à React, à contretemps de ses commits. Ici le balayage est
 * déclenché par React lui-même (effet + changement d'URL), donc toujours après
 * le commit, et tout est démonté proprement.
 *
 * Garde-fou visuel (voir l'en-tête de src/styles/motion.css) : la classe
 * `anim-ready` n'est posée sur <html> que lorsque l'animation est réellement
 * active. Si `prefers-reduced-motion` est à `reduce`, si IntersectionObserver
 * manque ou si le hook est démonté, tout le contenu est remis visible.
 */

const ANIM_READY_CLASS = "anim-ready";
const HEADER_ID = "rm-header";

/** Sélecteurs repris tels quels du script d'origine. */
const AUTO_REVEAL_SELECTOR = "h2, .rm-card, .rm-reveal";
const REVEAL_SELECTOR = ".rm-reveal";
const AUTO_IMAGE_SELECTOR = "main img:not(.rm-hero-img)";
const IMAGE_SELECTOR = ".rm-img-reveal";
const COUNTER_SELECTOR = "[data-rm-counter]";
const HERO_IMAGE_SELECTOR = ".rm-hero-img";

const COUNTER_DURATION_MS = 1600;
const HEADER_SCROLL_OFFSET_PX = 24;
/** Deuxième et troisième passes : carrousels et images qui se montent après le commit. */
const RESCAN_DELAYS_MS = [120, 600];

export interface UseRevealOptions {
  /**
   * Clé de re-balayage. Par défaut l'URL courante : chaque navigation ré-observe
   * le DOM de la nouvelle page. À renseigner uniquement pour forcer un balayage
   * en dehors d'un changement de route.
   */
  key?: string;
  /**
   * Ajoute `.rm-reveal` aux `h2` / `.rm-card` et `.rm-img-reveal` aux images de
   * `<main>`, comme le faisait le script d'origine. À `false`, seuls les éléments
   * qui portent déjà ces classes dans le JSX sont animés.
   */
  autoTag?: boolean;
  /** Anime les éléments `[data-rm-counter]` (attributs `data-target` / `data-suffix`). */
  counters?: boolean;
  /** Bascule `rm-scrolled` sur `#rm-header` au-delà de 24 px de scroll. */
  header?: boolean;
  /** Parallaxe douce sur les images `.rm-hero-img`. */
  parallax?: boolean;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Valeur finale d'un compteur, utilisée aussi comme repli quand l'animation est coupée. */
function counterFinalText(element: HTMLElement): string {
  const target = Number.parseFloat(element.getAttribute("data-target") ?? "");
  const suffix = element.getAttribute("data-suffix") ?? "";
  return `${Number.isFinite(target) ? Math.round(target) : 0}${suffix}`;
}

/** Décalage en cascade des enfants d'une grille (`data-rm-i` piloté par motion.css). */
function applyStagger(container: Element): void {
  Array.from(container.children).forEach((child, index) => {
    if (child instanceof HTMLElement) {
      child.dataset.rmI = String(Math.min(index, 5));
    }
  });
}

export function useReveal(options: UseRevealOptions = {}): void {
  const { key, autoTag = true, counters = true, header = true, parallax = true } = options;
  const [location] = useLocation();
  const scanKey = key ?? location;

  // Compte les exécutions de l'effet : permet de distinguer un vrai démontage
  // d'un simple remontage (double invocation de StrictMode en dev, HMR).
  const generationRef = useRef(0);

  /* ---------- Révélation au scroll, images et compteurs ---------- */
  useEffect(() => {
    const generation = (generationRef.current += 1);
    const html = document.documentElement;

    const finishCounters = (): void => {
      document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR).forEach((element) => {
        element.textContent = counterFinalText(element);
      });
    };

    /** Remet tout le contenu visible : aucune panne d'animation ne peut masquer une section. */
    const revealAll = (): void => {
      html.classList.remove(ANIM_READY_CLASS);
      document
        .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
        .forEach((element) => element.classList.add("rm-reveal-in"));
      document
        .querySelectorAll<HTMLElement>(IMAGE_SELECTOR)
        .forEach((element) => element.classList.add("rm-img-reveal-in"));
      if (counters) finishCounters();
    };

    if (prefersReducedMotion() || typeof window.IntersectionObserver !== "function") {
      revealAll();
      return;
    }

    html.classList.add(ANIM_READY_CLASS);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("rm-reveal-in");
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("rm-img-reveal-in");
          imageObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const counterFrames = new Map<HTMLElement, number>();

    const animateCounter = (element: HTMLElement): void => {
      const target = Number.parseFloat(element.getAttribute("data-target") ?? "");
      const finalValue = Number.isFinite(target) ? target : 0;
      const suffix = element.getAttribute("data-suffix") ?? "";
      let startedAt: number | null = null;

      const step = (now: number): void => {
        if (startedAt === null) startedAt = now;
        const progress = Math.min((now - startedAt) / COUNTER_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubique, comme à l'origine
        element.textContent = `${Math.round(finalValue * eased)}${suffix}`;
        if (progress < 1) {
          counterFrames.set(element, window.requestAnimationFrame(step));
        } else {
          counterFrames.delete(element);
        }
      };

      counterFrames.set(element, window.requestAnimationFrame(step));
    };

    const counterObserver = counters
      ? new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              observer.unobserve(entry.target);
              if (!(entry.target instanceof HTMLElement)) continue;
              if (entry.target.dataset.rmCounterStarted) continue;
              entry.target.dataset.rmCounterStarted = "1";
              animateCounter(entry.target);
            }
          },
          { threshold: 0.4 },
        )
      : null;

    /**
     * Un élément déjà révélé est ignoré ; les autres sont (ré)observés sans marqueur
     * persistant, `observe()` étant idempotent. Un élément que React aurait recréé
     * est donc repris en charge au balayage suivant au lieu de rester invisible.
     */
    const scan = (): void => {
      if (autoTag) {
        document.querySelectorAll(".grid").forEach(applyStagger);
      }

      document
        .querySelectorAll<HTMLElement>(autoTag ? AUTO_REVEAL_SELECTOR : REVEAL_SELECTOR)
        .forEach((element) => {
          if (element.classList.contains("rm-reveal-in")) return;
          element.classList.add("rm-reveal");
          revealObserver.observe(element);
        });

      document
        .querySelectorAll<HTMLElement>(autoTag ? `${IMAGE_SELECTOR}, ${AUTO_IMAGE_SELECTOR}` : IMAGE_SELECTOR)
        .forEach((element) => {
          if (element.classList.contains("rm-img-reveal-in")) return;
          element.classList.add("rm-img-reveal");
          imageObserver.observe(element);
        });

      if (counterObserver) {
        document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR).forEach((element) => {
          if (element.dataset.rmCounterStarted) return;
          counterObserver.observe(element);
        });
      }
    };

    scan();
    const timers = RESCAN_DELAYS_MS.map((delay) => window.setTimeout(scan, delay));

    // Bascule de la préférence système en cours de session : `anim-ready` doit
    // partir immédiatement, sans quoi les images non révélées resteraient à zéro.
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (): void => {
      if (motionQuery.matches) revealAll();
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      revealObserver.disconnect();
      imageObserver.disconnect();
      counterObserver?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      counterFrames.forEach((id) => window.cancelAnimationFrame(id));
      counterFrames.clear();
      motionQuery.removeEventListener("change", handleMotionChange);

      // Démontage réel uniquement : si l'effet se relance dans la foulée
      // (StrictMode, HMR, navigation), la génération a changé et on ne touche à rien.
      window.setTimeout(() => {
        if (generationRef.current === generation) revealAll();
      }, 0);
    };
  }, [scanKey, autoTag, counters]);

  /* ---------- En-tête : compactage + flou au scroll ---------- */
  useEffect(() => {
    if (!header) return;
    let ticking = false;

    // L'élément est relu à chaque passe : chaque page rend son propre <Header />,
    // donc le nœud change à la navigation.
    const update = (): void => {
      const element = document.getElementById(HEADER_ID);
      element?.classList.toggle("rm-scrolled", window.scrollY > HEADER_SCROLL_OFFSET_PX);
      ticking = false;
    };

    const handleScroll = (): void => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.getElementById(HEADER_ID)?.classList.remove("rm-scrolled");
    };
  }, [header]);

  /* ---------- Parallaxe des visuels de bannière ---------- */
  useEffect(() => {
    if (!parallax || prefersReducedMotion()) return;
    const touched = new Set<HTMLElement>();
    let ticking = false;

    const update = (): void => {
      document.querySelectorAll<HTMLElement>(HERO_IMAGE_SELECTOR).forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        touched.add(image);
        image.style.transform = `translateY(${(rect.top * 0.08).toFixed(1)}px) scale(1.06)`;
      });
      ticking = false;
    };

    const handleScroll = (): void => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // On rend leur style aux images : aucune transformation résiduelle après démontage.
      touched.forEach((image) => {
        image.style.transform = "";
      });
      touched.clear();
    };
  }, [parallax]);
}

export default useReveal;
