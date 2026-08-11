/**
 * Local curated content.
 *
 * Domain modules live in `es/` and `en/`, one file per domain with the same
 * exports on both sides — TypeScript flags any locale that drifts. `cms.ts`
 * is the public API for pages; import from here only when a component needs
 * a pure helper (e.g. date format).
 *
 * Publications are Spanish-only and therefore sit outside the locale folders.
 */
import type { Lang } from "../i18n";
import type {
  HeroContent,
  Indicator,
  PracticeArea,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "../types";
import * as esContent from "./es";
import * as enContent from "./en";

const content: Record<Lang, typeof esContent> = {
  es: esContent,
  en: enContent,
};

export function getSiteSettings(lang: Lang): SiteSettings {
  return content[lang].siteSettings;
}

export function getHomeHero(lang: Lang): HeroContent {
  return content[lang].homeHero;
}

export function getIndicators(lang: Lang): Indicator[] {
  return content[lang].indicators;
}

export function getPracticeAreas(lang: Lang): PracticeArea[] {
  return content[lang].practiceAreas;
}

export function getPracticeAreaBySlug(
  lang: Lang,
  slug: string
): PracticeArea | undefined {
  return content[lang].practiceAreas.find((area) => area.slug === slug);
}

export function getPracticeAreaHeroImage(
  lang: Lang,
  slug: string
): { src: string; alt: string } {
  const images = content[lang].areaHeroImages;
  return images[slug] ?? images["recuperos-legales"];
}

export function getTestimonials(lang: Lang): Testimonial[] {
  return content[lang].testimonials;
}

export function getTeamMembers(lang: Lang): TeamMember[] {
  return content[lang].teamMembers;
}

export {
  publications,
  getPublications,
  getPublicationBySlug,
  formatPublicationDate,
} from "./publications";
