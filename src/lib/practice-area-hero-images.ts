export const areaHeroImages: Record<string, { src: string; alt: string }> = {
  "seguros-y-reaseguros": {
    src: "https://images.pexels.com/photos/7654609/pexels-photo-7654609.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Equipo profesional revisando documentos en una oficina moderna",
  },
  "recuperos-legales": {
    src: "https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Profesionales trabajando en computadores dentro de una oficina sobria",
  },
  "responsabilidad-civil": {
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Reunión de trabajo en una oficina luminosa y minimalista",
  },
  "derecho-maritimo-y-transporte": {
    src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Equipo conversando alrededor de una mesa de trabajo en oficina",
  },
  "derecho-corporativo": {
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Profesionales colaborando en un espacio de oficina contemporáneo",
  },
  "litigios-y-arbitrajes": {
    src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Mesa de reunión en oficina con profesionales revisando una estrategia",
  },
};

export function getPracticeAreaHeroImage(slug: string): { src: string; alt: string } {
  return areaHeroImages[slug] ?? areaHeroImages["seguros-y-reaseguros"];
}
