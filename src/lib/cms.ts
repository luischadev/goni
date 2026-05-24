import {
  getHomeHero,
  getIndicators,
  getPracticeAreaBySlug,
  getPracticeAreas,
  getPublicationBySlug,
  getPublications,
  getSiteSettings,
  getTeamMembers,
  getTestimonials,
} from "./content";
import {
  isExternalMediaUrl,
  resolveMediaAsset,
  resolveMediaUrl,
} from "./media";
import type {
  HeroContent,
  Indicator,
  PracticeArea,
  Publication,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "./types";

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

  return {
    ...hero,
    backgroundImage,
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
 */
export const cms = {
  async getSiteSettings(): Promise<SiteSettings> {
    return getSiteSettings();
  },

  async getHomeHero(): Promise<HeroContent> {
    return resolveHero(getHomeHero());
  },

  async getIndicators(): Promise<Indicator[]> {
    return getIndicators();
  },

  async getPracticeAreas(): Promise<PracticeArea[]> {
    return getPracticeAreas();
  },

  async getPracticeAreaBySlug(slug: string): Promise<PracticeArea | undefined> {
    return getPracticeAreaBySlug(slug);
  },

  async getPublications(): Promise<Publication[]> {
    return getPublications().map(resolvePublication);
  },

  async getPublicationBySlug(slug: string): Promise<Publication | undefined> {
    const publication = getPublicationBySlug(slug);
    return publication ? resolvePublication(publication) : undefined;
  },

  async getTeamMembers(): Promise<TeamMember[]> {
    return getTeamMembers().map((member) => ({
      ...member,
      photo: resolveMediaUrl(member.photo),
    }));
  },

  async getTestimonials(): Promise<Testimonial[]> {
    return getTestimonials();
  },
};

export type CmsClient = typeof cms;
