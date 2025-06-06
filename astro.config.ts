import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ocruze.github.io",
  base: "portfolio-astro",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    fallback: {
      fr: "en",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
