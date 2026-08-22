import type { HeroContent, Indicator, SiteSettings } from "../../types";

export const siteSettings: SiteSettings = {
  name: "Goñi & Cía.",
  legalName: "Goñi & Cía. Abogados S.A.",
  tagline:
    "Law firm specialized in insurance, civil liability and maritime, air and land transport law.",
  email: "abogados@goniabogados.cl",
  phone: "+56 2 2429 6900",
  address: {
    street: "Avenida Nueva Providencia 1901, Office 52",
    city: "Providencia",
    region: "Santiago Metropolitan Region",
    country: "Chile",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Nueva+Providencia+1901+Oficina+52+Providencia+Chile",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/goniabogados",
  },
};

export const homeHero: HeroContent = {
  title: "Legal defense for complex risks",
  subtitle: "Technical rigor, legal depth and consistent results.",
  overlayOpacity: 60,
  // First-frame poster of the hero video. With video present, cms.ts
  // already derives this from backgroundVideo; kept explicit so we do
  // not fall back to an external Unsplash URL.
  backgroundImage: {
    url: "/container-port-hero-poster.jpg",
    alt: "Container port at dusk",
  },
  // Path relative to PUBLIC_MEDIA_BASE_URL (R2 / CDN).
  backgroundVideo: {
    url: "/container-port-hero.mp4",
    mimeType: "video/mp4",
  },
};

export const indicators: Indicator[] = [
  { value: "50+", label: "Years advising the insurance market" },
  { value: "200+", label: "Active court recovery actions per year" },
  { value: "4", label: "Modes of transport covered" },
  { value: "LATAM", label: "International coverage with insurers and brokers" },
];
