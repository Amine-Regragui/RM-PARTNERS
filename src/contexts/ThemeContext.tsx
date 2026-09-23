import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export interface ThemeContextValue {
  theme: Theme;
  /** Défini uniquement lorsque le thème est commutable. */
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  switchable: false,
});

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  /** Autorise la bascule clair/sombre et la persistance en localStorage. */
  switchable?: boolean;
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (switchable ? readStoredTheme() : null) ?? defaultTheme,
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    if (switchable) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // Stockage indisponible (navigation privée) : on ignore silencieusement.
      }
    }
  }, [theme, switchable]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: switchable
        ? () => setTheme((current) => (current === "light" ? "dark" : "light"))
        : undefined,
      switchable,
    }),
    [theme, switchable],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Retourne le thème courant ; hors provider, renvoie le thème clair par défaut. */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export { ThemeContext };

export default ThemeProvider;
