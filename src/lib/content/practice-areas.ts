import type { PracticeArea } from "../types";

const recuperosLegalesHighlights = [
  {
    title: "Conocimiento del rubro",
    description:
      "Experiencia sostenida en el mercado de seguros y reaseguros, con foco en recuperos judiciales.",
    icon: "domain",
  },
  {
    title: "Gestión de cartera",
    description:
      "Capacidad para administrar volúmenes de recuperos con orden, trazabilidad y previsibilidad.",
    icon: "folder_managed",
  },
  {
    title: "Criterio para actuar",
    description:
      "Evaluación rigurosa que distingue cuándo conviene litigar y cuándo buscar otra vía.",
    icon: "balance",
  },
  {
    title: "Equipos integrados",
    description:
      "Profesionales que cruzan seguros, transporte, litigios y derecho comercial sin silos.",
    icon: "groups",
  },
];

const derechoMaritimoHighlights = [
  {
    title: "Cadena logística",
    description:
      "Conocimiento de operadores, agentes de carga, transportistas y aseguradoras en cada eslabón.",
    icon: "local_shipping",
  },
  {
    title: "Transporte multimodal",
    description:
      "Marítimo, aéreo y terrestre en controversias del transporte de mercancías.",
    icon: "directions_boat",
  },
  {
    title: "Alcance internacional",
    description:
      "Asesoría en transporte nacional e internacional de carga y sus controversias.",
    icon: "public",
  },
  {
    title: "Ecosistema del transporte",
    description:
      "Trabajo con aseguradoras, reaseguradoras, transportistas y clientes corporativos.",
    icon: "handshake",
  },
];

const litigiosHighlights = [
  {
    title: "Amplitud de materias",
    description:
      "Experiencia en civiles, comerciales, laborales, penales, marítimos y de seguros.",
    icon: "gavel",
  },
  {
    title: "Foros múltiples",
    description:
      "Representación ante tribunales ordinarios, arbitrales y otras instancias de resolución.",
    icon: "account_balance",
  },
];

const responsabilidadCivilHighlights = [
  {
    title: "Experiencia diversa",
    description:
      "Accidentes, daños a la propiedad, responsabilidad profesional y controversias de transporte.",
    icon: "emergency",
  },
  {
    title: "Múltiples actores",
    description:
      "Defensa de personas, empresas y compañías de seguros en la misma práctica.",
    icon: "groups",
  },
  {
    title: "Ambas modalidades",
    description:
      "Dominio de la responsabilidad contractual y extracontractual en indemnización de perjuicios.",
    icon: "compare_arrows",
  },
  {
    title: "Alto nivel técnico",
    description:
      "Soluciones jurídicas rigurosas, con foco en resultados concretos para cada cliente.",
    icon: "workspace_premium",
  },
];

const derechoCorporativoHighlights = [
  {
    title: "Alcance global",
    description:
      "Asesoría a empresas nacionales e internacionales en decisiones corporativas y comerciales.",
    icon: "language",
  },
  {
    title: "Seguridad jurídica",
    description:
      "Estructuras y decisiones que protegen el crecimiento del negocio y gestionan riesgos.",
    icon: "verified_user",
  },
];

const recuperosLegalesFeatures = [
  {
    title: "Análisis",
    description:
      "Estudio exhaustivo de los antecedentes jurídicos, técnicos y comerciales, identificando los riesgos, oportunidades y la estrategia más eficiente para la defensa de los intereses de nuestros clientes.",
    icon: "track_changes",
  },
  {
    title: "Definición de la estrategia",
    description:
      "Diseñamos soluciones personalizadas privilegiando un enfoque preventivo cuando es posible y una litigación rigurosa cuando el conflicto requiere ser resuelto ante tribunales o en sede arbitral.",
    icon: "route",
  },
  {
    title: "Gestión especializada",
    description:
      "Nuestros abogados trabajan de manera coordinada, combinando experiencia en seguros, responsabilidad civil, transporte, litigios y derecho comercial para entregar una asesoría integral en cada etapa del caso.",
    icon: "hub",
  },
  {
    title: "Información permanente",
    description:
      "Mantenemos una comunicación clara y oportuna con nuestros clientes, proporcionando reportes periódicos sobre el estado de los asuntos encomendados y recomendaciones para la toma de decisiones.",
    icon: "summarize",
  },
  {
    title: "Orientación a resultados",
    description:
      "Nuestro compromiso es ofrecer soluciones jurídicas eficientes, técnicamente sólidas y alineadas con los objetivos comerciales de cada cliente, procurando siempre la mejor alternativa para la resolución de sus conflictos.",
    icon: "verified",
  },
];

const derechoMaritimoFeatures = [
  {
    title: "Análisis de la operación",
    description:
      "Evaluamos los antecedentes de cada caso, la documentación contractual y de transporte, la normativa aplicable y las responsabilidades de los distintos intervinientes en la cadena logística.",
    icon: "inventory_2",
  },
  {
    title: "Estrategia jurídica",
    description:
      "Diseñamos una estrategia ajustada a cada asunto, considerando la naturaleza del transporte, los riesgos involucrados y los objetivos comerciales del cliente.",
    icon: "account_tree",
  },
  {
    title: "Gestión integral",
    description:
      "Representamos a nuestros clientes en negociaciones, reclamaciones, arbitrajes y litigios, coordinando cuando corresponde el trabajo con aseguradoras, peritos, liquidadores, transportistas y demás actores relevantes.",
    icon: "hub",
  },
  {
    title: "Soluciones eficientes",
    description:
      "Priorizamos una gestión ágil y técnicamente sólida, manteniendo una comunicación permanente con nuestros clientes y orientando nuestra actuación a la prevención de riesgos y a la resolución eficaz de los conflictos.",
    icon: "bolt",
  },
];

const litigiosFeatures = [
  {
    title: "Evaluación estratégica",
    description:
      "Analizamos los antecedentes de cada controversia para identificar los riesgos, fortalezas y oportunidades, definiendo la estrategia procesal más adecuada desde el inicio.",
    icon: "track_changes",
  },
  {
    title: "Defensa especializada",
    description:
      "Representamos a nuestros clientes ante tribunales ordinarios, arbitrales y demás instancias de resolución de conflictos, actuando con rigor jurídico y una visión estratégica en cada etapa del proceso.",
    icon: "gavel",
  },
  {
    title: "Gestión eficiente",
    description:
      "Planificamos cada litigio con un enfoque preventivo y orientado a resultados, optimizando recursos, controlando plazos y evaluando permanentemente las mejores alternativas para la resolución del conflicto.",
    icon: "timeline",
  },
  {
    title: "Comunicación permanente",
    description:
      "Mantenemos una relación cercana con nuestros clientes, entregando información clara y oportuna que les permita tomar decisiones fundadas durante el desarrollo del proceso.",
    icon: "forum",
  },
];

const responsabilidadCivilFeatures = [
  {
    title: "Evaluación del caso",
    description:
      "Analizamos los antecedentes, los hechos y la normativa aplicable para determinar los riesgos, responsabilidades y la mejor estrategia de defensa.",
    icon: "fact_check",
  },
  {
    title: "Estrategia personalizada",
    description:
      "Diseñamos una defensa jurídica adaptada a las particularidades de cada caso, considerando tanto los aspectos legales como los intereses comerciales de nuestros clientes.",
    icon: "tune",
  },
  {
    title: "Representación integral",
    description:
      "Asumimos la defensa en negociaciones, mediaciones y litigios, coordinando cuando corresponde el trabajo con aseguradoras, liquidadores, peritos y demás intervinientes.",
    icon: "gavel",
  },
  {
    title: "Protección de intereses del cliente",
    description:
      "Actuamos con un enfoque preventivo, técnico y orientado a resultados, manteniendo una comunicación permanente durante todo el desarrollo del asunto.",
    icon: "shield",
  },
];

const derechoCorporativoFeatures = [
  {
    title: "Comprensión del negocio",
    description:
      "Conocemos la actividad, objetivos y desafíos de cada cliente para ofrecer soluciones jurídicas alineadas con su estrategia empresarial.",
    icon: "business_center",
  },
  {
    title: "Asesoría estratégica",
    description:
      "Diseñamos estructuras y soluciones legales que permitan desarrollar los negocios con seguridad jurídica, eficiencia y una adecuada gestión de riesgos.",
    icon: "account_tree",
  },
  {
    title: "Acompañamiento permanente",
    description:
      "Brindamos asesoría continua en las decisiones societarias, contractuales y comerciales, anticipándonos a las contingencias y apoyando el crecimiento de nuestros clientes.",
    icon: "handshake",
  },
  {
    title: "Soluciones orientadas a resultados",
    description:
      "Trabajamos con un enfoque práctico, cercano y eficiente, proporcionando respuestas oportunas que agregan valor y contribuyen al éxito de cada negocio.",
    icon: "trending_up",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "recuperos-legales",
    number: "01",
    title: "Recuperos legales",
    shortDescription:
      "Gestión y tramitación de acciones de recupero para reembolsar indemnizaciones pagadas por aseguradoras ante terceros responsables.",
    intro:
      "Asesoría integral en la gestión y tramitación de acciones de recupero, orientadas a obtener el reembolso de las indemnizaciones pagadas por las compañías de seguros cuando existe un tercero legalmente responsable del siniestro.",
    featuresTitle:
      "Gestión integral para recuperar indemnizaciones ante terceros responsables",
    body: [],
    features: recuperosLegalesFeatures,
    highlights: recuperosLegalesHighlights,
    industries: [],
  },
  {
    slug: "derecho-maritimo-y-transporte",
    number: "02",
    title: "Derecho marítimo y transporte",
    shortDescription:
      "Asesoría y representación en controversias del transporte nacional e internacional de mercancías.",
    intro:
      "Asesoría y representación a aseguradoras y reaseguradoras, empresas de transporte, operadores logísticos, agentes de carga y clientes corporativos en la prevención y resolución de controversias derivadas del transporte nacional e internacional de mercancías.",
    featuresTitle:
      "Enfoque jurídico alineado con la cadena logística y el transporte de mercancías",
    body: [],
    features: derechoMaritimoFeatures,
    highlights: derechoMaritimoHighlights,
    industries: [],
  },
  {
    slug: "litigios-y-arbitrajes",
    number: "03",
    title: "Litigios",
    shortDescription:
      "Representación en litigios civiles, comerciales, laborales, penales, marítimos y de seguros ante tribunales y arbitrajes.",
    intro:
      "Trayectoria y amplia experiencia en litigios civiles, comerciales, laborales, penales, marítimos y de seguros, representando a sus clientes ante tribunales ordinarios, tribunales arbitrales y otras instancias de resolución de controversias.",
    featuresTitle:
      "Litigación rigurosa con estrategia procesal en cada etapa del conflicto",
    body: [],
    features: litigiosFeatures,
    highlights: litigiosHighlights,
    industries: [],
  },
  {
    slug: "responsabilidad-civil",
    number: "04",
    title: "Responsabilidad civil",
    shortDescription:
      "Defensa en responsabilidad civil contractual y extracontractual para personas, empresas y compañías de seguros.",
    intro:
      "Asesoría y representación especializada en materias de responsabilidad civil, asumiendo la defensa de personas, empresas y compañías de seguros en acciones de indemnización de perjuicios derivadas de responsabilidad contractual y extracontractual. Contamos con amplia experiencia en controversias relacionadas con accidentes, daños a la propiedad, responsabilidad profesional, responsabilidad derivada del transporte y otros conflictos complejos, proporcionando soluciones jurídicas de alto nivel técnico y orientadas a resultados.",
    featuresTitle:
      "Defensa técnica adaptada a los riesgos y objetivos de cada caso",
    body: [],
    features: responsabilidadCivilFeatures,
    highlights: responsabilidadCivilHighlights,
    industries: [],
  },
  {
    slug: "derecho-corporativo",
    number: "05",
    title: "Derecho corporativo y negocios",
    shortDescription:
      "Asesoría corporativa y comercial para empresas nacionales e internacionales en sus decisiones estratégicas.",
    intro:
      "Asesoría a empresas nacionales e internacionales en materias de derecho corporativo y comercial, acompañándolas en el desarrollo de sus actividades y en la toma de decisiones estratégicas. Entregamos soluciones jurídicas prácticas y eficientes, orientadas a prevenir contingencias, facilitar el desarrollo de los negocios y resguardar los intereses de nuestros clientes en un entorno empresarial dinámico.",
    featuresTitle:
      "Acompañamiento estratégico alineado con el desarrollo de su negocio",
    body: [],
    features: derechoCorporativoFeatures,
    highlights: derechoCorporativoHighlights,
    industries: [],
  },
];

export function getPracticeAreas(): PracticeArea[] {
  return practiceAreas;
}

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
