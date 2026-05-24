import {
  getIndicators,
  getPracticeAreaBySlug,
  getPracticeAreas,
  getPublicationBySlug,
  getPublications,
  getSiteSettings,
  getTeamMembers,
  getTestimonials,
} from "./content";
import type {
  Indicator,
  PracticeArea,
  Publication,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "./types";

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
    return getPublications();
  },

  async getPublicationBySlug(slug: string): Promise<Publication | undefined> {
    return getPublicationBySlug(slug);
  },

  async getTeamMembers(): Promise<TeamMember[]> {
    return getTeamMembers();
  },

  async getTestimonials(): Promise<Testimonial[]> {
    return getTestimonials();
  },
};

export type CmsClient = typeof cms;
