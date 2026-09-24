import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Le site est servi à la RACINE du domaine rmpartners.fr (fichier public/CNAME).
// C'est la correction du bug qui rendait la page blanche : l'ancien build était
// figé sur la base "/RM-PARTNERS/" (déploiement github.io/<repo>/).
// Si un jour le site doit repasser sur https://<user>.github.io/RM-PARTNERS/,
// il suffit de lancer le build avec :  BASE_PATH=/RM-PARTNERS/ npm run build
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true, // évite l'accumulation d'anciens bundles (-v9 … -v39)
    sourcemap: false,
    rollupOptions: {
      output: {
        // Découpage par route : le visiteur ne télécharge plus les 24 pages d'un coup.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return "react";
          return "vendor";
        },
      },
    },
  },
});
