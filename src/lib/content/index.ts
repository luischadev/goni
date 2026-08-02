/**
 * Local curated content.
 *
 * Domain modules live in this folder. `cms.ts` is the public API for pages;
 * import from here only when a component needs a pure helper (e.g. date format).
 */
export {
  siteSettings,
  homeHero,
  indicators,
  getSiteSettings,
  getHomeHero,
  getIndicators,
} from "./site";

export {
  practiceAreas,
  getPracticeAreas,
  getPracticeAreaBySlug,
} from "./practice-areas";

export {
  areaHeroImages,
  getPracticeAreaHeroImage,
} from "./practice-area-heroes";

export {
  testimonials,
  getTestimonials,
} from "./testimonials";

export {
  teamMembers,
  getTeamMembers,
} from "./team";

export {
  publications,
  getPublications,
  getPublicationBySlug,
  formatPublicationDate,
} from "./publications";
