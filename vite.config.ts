// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ruta al src usando concatenación simple para evitar template literals
const srcPath = process.cwd() + "/src";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
      "@components": srcPath + "/components",
    },
  },
});
