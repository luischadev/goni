import type { Indicator, PracticeArea } from "./types";

export function getPracticeAreaIndicators(area: PracticeArea): Indicator[] {
  return [
    { value: "30+", label: "años de experiencia" },
    { value: String(area.industries.length), label: "sectores foco" },
    { value: String(area.highlights.length), label: "focos de trabajo" },
    { value: String(area.features?.length ?? 0), label: "criterios de abordaje" },
  ];
}
