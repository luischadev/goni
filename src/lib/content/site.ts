import type { HeroContent, Indicator, SiteSettings } from "../types";

export const siteSettings: SiteSettings = {
  name: "Goñi & Cía.",
  legalName: "Goñi & Cía. Abogados S.A.",
  tagline:
    "Estudio jurídico especializado en seguros, responsabilidad civil y derecho de transporte marítimo, aéreo y terrestre.",
  email: "abogados@goniabogados.cl",
  phone: "+56 2 2429 6900",
  address: {
    street: "Avenida Nueva Providencia N° 1901, Oficina 52",
    city: "comuna de Providencia",
    region: "Región Metropolitana",
    country: "Chile",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Nueva+Providencia+1901+Oficina+52+Providencia+Chile",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/goniabogados",
  },
};

export const homeHero: HeroContent = {
  title: "Defensa legal para riesgos complejos",
  subtitle:
    "Rigor técnico, profundidad jurídica y resultados consistentes.",
  overlayOpacity: 60,
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=2400&q=80",
    alt: "Buques de carga en mar en calma",
  },
  // Path relative to PUBLIC_MEDIA_BASE_URL (R2 / CDN).
  backgroundVideo: {
    url: "/container-port-hero.mp4",
    mimeType: "video/mp4",
  },
};

export const indicators: Indicator[] = [
  { value: "50+", label: "Años asesorando al mercado asegurador" },
  { value: "200+", label: "Recuperos judiciales activos al año" },
  { value: "4", label: "Modalidades de transporte cubiertas" },
  { value: "LATAM", label: "Cobertura internacional con aseguradores y brokers" },
];

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}

export function getHomeHero(): HeroContent {
  return homeHero;
}

export function getIndicators(): Indicator[] {
  return indicators;
}
