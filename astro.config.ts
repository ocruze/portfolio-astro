import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.arnestcruze.com",
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
