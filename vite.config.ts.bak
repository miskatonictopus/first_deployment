// vite.config.ts
import { defineConfig } from "vite";
import react from "./vitejs/plugin-react";

// No importamos 'path' ni usamos __dirname para evitar problemas con los tipos de Node
// en el proceso de build (Vercel/TS). Usamos process.cwd() y construimos rutas como strings.
const srcPath = `${process.cwd()}/src`;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
      "@components": `${srcPath}/components`,
    },
  },
});