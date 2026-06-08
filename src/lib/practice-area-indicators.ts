import type { Indicator, PracticeArea } from "./types";

export function getPracticeAreaIndicators(area: PracticeArea): Indicator[] {
  return [
    { value: "30+", label: "años de experiencia" },
    { value: String(area.industries.length), label: "sectores foco" },
  ];
}
