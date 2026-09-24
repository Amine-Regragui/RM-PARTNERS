import type { CSSProperties, ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

import { useTheme } from "@/contexts/ThemeContext";

export type ToasterProps = ComponentProps<typeof Sonner>;

/** Variables CSS reprises du bundle d'origine : les toasts suivent les jetons du site. */
const toasterStyle = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
} as CSSProperties;

export function Toaster({ ...props }: ToasterProps) {
  const { theme } = useTheme();

  return <Sonner theme={theme} className="toaster group" style={toasterStyle} {...props} />;
}

export default Toaster;
