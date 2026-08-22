/**
 * Browser-language detection + persisted locale preference.
 *
 * - First visit to `/` with no preference: pick from navigator.languages
 *   (English → `/en/`, otherwise Spanish) and store it.
 * - Language switcher clicks write the preference.
 * - Once stored, localized routes redirect to match the preference.
 * - Spanish-only pages (e.g. publications) are left alone.
 */

const STORAGE_KEY = "goni-preferred-lang";

type Lang = "es" | "en";

function isLang(value: string | null | undefined): value is Lang {
  return value === "es" || value === "en";
}

function readPreferredLang(): Lang | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLang(value) ? value : null;
  } catch {
    return null;
  }
}

function writePreferredLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* private mode / blocked storage */
  }
}

function langFromNavigator(): Lang {
  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  for (const raw of candidates) {
    const tag = String(raw).toLowerCase();
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("es")) return "es";
  }

  return "es";
}

function getLangFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

function normalize(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

function stripLangPrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

function localizePath(path: string, lang: Lang): string {
  if (lang === "es") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

const LOCALIZED_ROUTES = ["/nosotros", "/contacto", "/areas-de-practica"];

function isLocalizedRoute(pathname: string): boolean {
  const path = normalize(stripLangPrefix(pathname));
  return (
    path === "/" ||
    LOCALIZED_ROUTES.some(
      (route) => path === route || path.startsWith(`${route}/`)
    )
  );
}

function switchLocalePath(pathname: string, target: Lang): string {
  if (!isLocalizedRoute(pathname)) return localizePath("/", target);
  return localizePath(normalize(stripLangPrefix(pathname)), target);
}

function maybeRedirect(): void {
  const path = window.location.pathname;
  let preferred = readPreferredLang();

  if (!preferred) {
    // Auto-detect only on the Spanish home to avoid surprising deep links.
    if (path !== "/") return;
    preferred = langFromNavigator();
    writePreferredLang(preferred);
    if (preferred === "en") {
      window.location.replace("/en/");
    }
    return;
  }

  const current = getLangFromPath(path);
  if (preferred === current || !isLocalizedRoute(path)) return;

  const next = switchLocalePath(path, preferred);
  if (normalize(next) !== normalize(path)) {
    window.location.replace(next);
  }
}

function bindSwitcherClicks(): void {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest<HTMLAnchorElement>("a[data-locale-switch]");
    if (!link) return;
    const lang = link.getAttribute("data-locale-switch");
    if (isLang(lang)) writePreferredLang(lang);
  });
}

declare global {
  interface Window {
    __goniLocalePreferenceInit?: boolean;
  }
}

export function initLocalePreference(): void {
  if (!window.__goniLocalePreferenceInit) {
    window.__goniLocalePreferenceInit = true;
    bindSwitcherClicks();
  }
  maybeRedirect();
}
