import type { GetStaticPaths } from "astro";
import { ui, defaultLang, languages, showDefaultLang, routes, type Language } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    // Get the site's base path from import.meta.env.BASE_URL or default to '/'
    const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, "") : "";

    // Handle the path normalization
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const pathName = normalizedPath.replaceAll("/", "");

    const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? `/${routes[l][pathName]}` : normalizedPath;

    // Apply the base path to the final URL
    return basePath + (!showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`);
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
export const getPortfolioStaticPaths = (() => {
  return Object.keys(languages).map((lang) => ({
    params: { lang },
  }));
}) satisfies GetStaticPaths;
