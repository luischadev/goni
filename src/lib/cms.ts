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

const practiceAreaNavDescriptions: Record<string, string> = {
  "recuperos-legales":
    "Acciones de recupero orientadas al reembolso de indemnizaciones pagadas por compañías de seguros.",
  "derecho-maritimo-y-transporte":
    "Prevención y resolución de controversias del transporte nacional e internacional de mercancías.",
  "litigios-y-arbitrajes":
    "Litigios civiles, comerciales, laborales, penales, marítimos y de seguros.",
  "responsabilidad-civil":
    "Defensa en acciones de indemnización de perjuicios contractuales y extracontractuales.",
  "derecho-corporativo":
    "Asesoría en derecho corporativo y comercial para decisiones estratégicas.",
};

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
    return getPracticeAreas().map(resolvePracticeArea);
  },

  async getPracticeAreaBySlug(slug: string): Promise<PracticeArea | undefined> {
    const area = getPracticeAreaBySlug(slug);
    return area ? resolvePracticeArea(area) : undefined;
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

  async getPracticeAreaHeroImage(slug: string): Promise<PracticeAreaHeroImage> {
    return getPracticeAreaHeroImage(slug);
  },

  async getMainNav(): Promise<NavItem[]> {
    const areas = getPracticeAreas().map(resolvePracticeArea);

    return [
      {
        label: "Áreas de práctica",
        href: "/areas-de-practica",
        description: "Servicios legales integrales para riesgos y controversias",
        children: areas.map((area) => ({
          label: area.title,
          href: `/areas-de-practica/${area.slug}`,
          description: practiceAreaNavDescriptions[area.slug],
        })),
      },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ];
  },
};

export type CmsClient = typeof cms;
