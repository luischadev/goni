import { es, type Dictionary } from "./es";
import { en } from "./en";

export const LANGS = ["es", "en"] as const;

export type Lang = (typeof LANGS)[number];

/** Served from the root, without a URL prefix. */
export const DEFAULT_LANG: Lang = "es";

export type { Dictionary };

export const ui: Record<Lang, Dictionary> = { es, en };

const PREFIXES: Record<Lang, string> = { es: "", en: "/en" };

/**
 * Routes that exist in every language. Everything else (publications) is
 * Spanish-only and lives outside the localized tree.
 */
const LOCALIZED_ROUTES = ["/nosotros", "/contacto", "/areas-de-practica"];

function normalize(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

function stripLangPrefix(pathname: string): string {
  for (const lang of LANGS) {
    const prefix = PREFIXES[lang];
    if (!prefix) continue;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
}

/** Reads the active language from the URL. Unknown prefixes fall back to Spanish. */
export function getLang(url: URL | string): Lang {
  const pathname = typeof url === "string" ? url : url.pathname;
  const [first] = pathname.split("/").filter(Boolean);

  return (
    LANGS.find((lang) => PREFIXES[lang] && PREFIXES[lang] === `/${first}`) ??
    DEFAULT_LANG
  );
}

/** Prefixes an app-relative path with the language segment. */
export function localizePath(path: string, lang: Lang): string {
  const prefix = PREFIXES[lang];
  if (!prefix) return path;
  return path === "/" ? `${prefix}/` : `${prefix}${path}`;
}

/** True when the path has a counterpart in every language. */
export function isLocalizedRoute(pathname: string): boolean {
  const path = normalize(stripLangPrefix(pathname));
  return (
    path === "/" ||
    LOCALIZED_ROUTES.some(
      (route) => path === route || path.startsWith(`${route}/`)
    )
  );
}

/**
 * Same page in another language. Spanish-only pages fall back to that
 * language's home instead of linking to a URL that was never built.
 */
export function switchLocalePath(pathname: string, target: Lang): string {
  if (!isLocalizedRoute(pathname)) return localizePath("/", target);
  return localizePath(stripLangPrefix(pathname), target);
}
