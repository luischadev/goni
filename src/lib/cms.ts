import {
  getHomeHero,
  getIndicators,
  getPracticeAreaBySlug,
  getPracticeAreaHeroImage,
  getPracticeAreas,
  getPublicationBySlug,
  getPublications,
  getSiteSettings,
  getTeamMembers,
  getTestimonials,
} from "./content";
import { localizePath, ui, type Lang } from "./i18n";
import {
  getVideoPosterPath,
  isExternalMediaUrl,
  resolveMediaAsset,
  resolveMediaUrl,
} from "./media";
import type {
  HeroContent,
  Indicator,
  NavItem,
  PracticeArea,
  Publication,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "./types";

export type PracticeAreaHeroImage = { src: string; alt: string };

function resolveHero(hero: HeroContent): HeroContent {
  const backgroundImage = resolveMediaAsset(hero.backgroundImage);

  let backgroundVideo = hero.backgroundVideo
    ? resolveMediaAsset(hero.backgroundVideo)
    : undefined;

  // Only expose video in production when hosted externally (CDN / Strapi).
  // In dev, local /videos/* paths still work if files exist in public/.
  if (
    backgroundVideo &&
    !isExternalMediaUrl(backgroundVideo.url) &&
    !import.meta.env.DEV
  ) {
    backgroundVideo = undefined;
  }

  const resolvedBackgroundImage = backgroundVideo
    ? {
        ...backgroundImage,
        url: getVideoPosterPath(backgroundVideo.url),
      }
    : backgroundImage;

  return {
    ...hero,
    backgroundImage: resolvedBackgroundImage,
    backgroundVideo,
  };
}

function resolvePublication(publication: Publication): Publication {
  return {
    ...publication,
    coverImage: publication.coverImage
      ? resolveMediaUrl(publication.coverImage)
      : undefined,
  };
}

function resolvePracticeArea(area: PracticeArea): PracticeArea {
  return area;
}

/**
 * CMS adapter.
 *
 * This module is intentionally simple and synchronous today: it returns
 * locally curated content used to build the MVP. The exported `cms` object
 * is the single entry point for every page, so when the team wires Strapi
 * in the next iteration we only need to replace the implementation here
 * (e.g. swapping the local helpers with `fetch(import.meta.env.STRAPI_URL/...)`
 * calls) and convert the methods to `async`. All pages already `await`
 * these calls to make that migration trivial.
 *
 * Every method takes the active language, which maps directly onto Strapi's
 * `locale` query parameter. Pages resolve it with `getLang(Astro.url)`.
 * Publications are the exception: they are Spanish-only and live outside
 * the localized routes.
 */
export const cms = {
  async getSiteSettings(lang: Lang): Promise<SiteSettings> {
    return getSiteSettings(lang);
  },

  async getHomeHero(lang: Lang): Promise<HeroContent> {
    return resolveHero(getHomeHero(lang));
  },

  async getIndicators(lang: Lang): Promise<Indicator[]> {
    return getIndicators(lang);
  },

  async getPracticeAreas(lang: Lang): Promise<PracticeArea[]> {
    return getPracticeAreas(lang).map(resolvePracticeArea);
  },

  async getPracticeAreaBySlug(
    lang: Lang,
    slug: string
  ): Promise<PracticeArea | undefined> {
    const area = getPracticeAreaBySlug(lang, slug);
    return area ? resolvePracticeArea(area) : undefined;
  },

  async getPublications(): Promise<Publication[]> {
    return getPublications().map(resolvePublication);
  },

  async getPublicationBySlug(slug: string): Promise<Publication | undefined> {
    const publication = getPublicationBySlug(slug);
    return publication ? resolvePublication(publication) : undefined;
  },

  async getTeamMembers(lang: Lang): Promise<TeamMember[]> {
    return getTeamMembers(lang).map((member) => ({
      ...member,
      photo: resolveMediaUrl(member.photo),
    }));
  },

  async getTestimonials(lang: Lang): Promise<Testimonial[]> {
    return getTestimonials(lang);
  },

  async getPracticeAreaHeroImage(
    lang: Lang,
    slug: string
  ): Promise<PracticeAreaHeroImage> {
    return getPracticeAreaHeroImage(lang, slug);
  },

  async getMainNav(lang: Lang): Promise<NavItem[]> {
    const areas = getPracticeAreas(lang).map(resolvePracticeArea);
    const t = ui[lang].nav;
    // The dictionary keys the descriptions by slug literal; areas arrive as strings.
    const areaDescriptions: Record<string, string> = t.areaDescriptions;

    return [
      {
        label: t.practiceAreas,
        href: localizePath("/areas-de-practica", lang),
        description: t.practiceAreasDescription,
        children: areas.map((area) => ({
          label: area.title,
          href: localizePath(`/areas-de-practica/${area.slug}`, lang),
          description: areaDescriptions[area.slug],
        })),
      },
      { label: t.about, href: localizePath("/nosotros", lang) },
      { label: t.contact, href: localizePath("/contacto", lang) },
    ];
  },
};

export type CmsClient = typeof cms;
