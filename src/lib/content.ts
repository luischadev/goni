import type {
  HeroContent,
  Indicator,
  PracticeArea,
  Publication,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "./types";

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

export const testimonials: Testimonial[] = [
  {
    quote:
      "Su rigor técnico y conocimiento del mercado asegurador han sido determinantes en la defensa de casos complejos. Trabajan con la profundidad y la disciplina que exige la industria.",
    author: "Gerente de Reclamos",
    position: "Gerencia de Reclamos",
    company: "Compañía de Seguros Generales",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Sus equipos de recuperos operan con métricas claras y trazabilidad. Lo que para otros es un volumen difícil de gestionar, para Goñi & Cía. es un proceso ordenado y previsible.",
    author: "Subgerente Legal",
    position: "Subgerencia Legal",
    company: "Concesionaria de Autopistas",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "Su entendimiento del derecho marítimo y de la operación portuaria les permite anticipar riesgos que otros no ven. Son nuestros asesores de confianza en siniestros complejos.",
    author: "Director Legal Regional",
    position: "Dirección Legal",
    company: "Operador Logístico Internacional",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Su capacidad para ordenar escenarios complejos y transformarlos en decisiones procesales claras nos ha permitido avanzar con seguridad en disputas de alta exposición.",
    author: "Gerente Legal",
    position: "Gerencia Legal",
    company: "Empresa de Infraestructura",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "carlos-goni",
    name: "Carlos Goñi Garrido",
    role: "Socio",
    bio: "Licenciado en Ciencias Jurídicas y Sociales por la Universidad de Valparaíso y liquidador de seguros.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/carlos.jpg",
    credentials: [
      "Universidad de Valparaíso",
      "Liquidador de seguros",
      "Socio",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Universidad de Valparaíso",
      "Liquidador de Seguros",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "sebastian-mardones",
    name: "Sebastián Matías Mardones Zúñiga",
    role: "Gerente",
    bio: "Licenciado en Ciencias Jurídicas y Sociales por la Universidad Adolfo Ibáñez, con formación de postítulo en seguros, derecho laboral y compliance.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/sebastian.jpg",
    credentials: [
      "Universidad Adolfo Ibáñez",
      "Diplomado en Seguros",
      "Posgrado de Seguros, UBA",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Universidad Adolfo Ibáñez (2010)",
      "Diplomado en Seguros, Universidad de Los Andes (2014)",
      "Diplomado en Derecho Laboral, Universidad de Chile (2018)",
      "Diplomado en Compliance, Universidad Adolfo Ibáñez (2019)",
      "Posgrado de Seguros, Universidad de Buenos Aires (2023)",
    ],
    languages: ["Español"],
    email: "smardones@goni-abogados.cl",
  },
  {
    slug: "ruben-nieto",
    name: "Rubén Darío Nieto Santelices",
    role: "Consultor",
    bio: "Consultor del estudio con experiencia en el mercado de seguros y reaseguros.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/ruben.jpg",
    credentials: ["Consultor", "Español e inglés"],
    languages: ["Español", "Inglés"],
    email: "rnieto@goni-abogados.cl",
  },
  {
    slug: "josefa-guerrero",
    name: "Josefa María Guerrero Vives",
    role: "Asociada",
    bio: "Licenciada en Ciencias Jurídicas y Sociales por la Universidad Diego Portales, con diplomado en Derecho de Seguros y magíster en Derecho Laboral en curso.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/josefa.jpg",
    credentials: [
      "Universidad Diego Portales",
      "Diplomado en Derecho de Seguros",
      "Magíster en Derecho Laboral (cursando)",
    ],
    experience: [
      "Albagli & Zaliasnik — Procuradora (enero 2018 - enero 2019)",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas y Sociales, Universidad Diego Portales (2019)",
      "Diplomado en Derecho de Seguros mención en Seguros Generales: Daños y Seguro Marítimo, Pontificia Universidad Católica de Chile (2022)",
      "Magíster en Derecho Laboral y Seguridad Social (2025 - 2026, cursando)",
    ],
    languages: ["Español", "Inglés"],
    email: "jguerrero@goni-abogados.cl",
    linkedin: "https://www.linkedin.com/in/josefa-mar%C3%ADa-guerrero-vives-734051155/",
  },
  {
    slug: "daniel-lagunas",
    name: "Daniel Alberto Lagunas Pizarro",
    role: "Asociado",
    bio: "Asociado de Goñi & Cía. Abogados con trayectoria en procura y derecho de seguros, vinculado al estudio desde el año 2000.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/daniel.jpg",
    credentials: [
      "Goñi & Cía. Abogados desde 2000",
      "Derecho de Seguros y Seguros Marítimos",
    ],
    experience: [
      "Sociedad de Cobranzas Soherco Ltda. — Procurador (1993 - 1995)",
      "Inverca S.A. — Procurador judicial y Coordinador (1995 - 2000)",
      "Goñi & Cía. Abogados — Procurador y Asociado (diciembre 2000 a la fecha)",
    ],
    education: [
      "Curso Derecho de Seguros y Seguros Marítimos, Escuela de Seguros de Chile (2005)",
    ],
    languages: ["Español"],
    email: "dlagunas@goniabogados.cl",
    linkedin: "https://www.linkedin.com/in/daniel-lagunas-pizarro-71b13256/",
  },
  {
    slug: "danilo-alvarez",
    name: "Danilo Iván Álvarez Medina",
    role: "Asociado",
    bio: "Licenciado en Ciencias Jurídicas y Sociales por la Universidad Miguel de Cervantes, con experiencia en procura judicial.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/danilo.jpg",
    credentials: [
      "Universidad Miguel de Cervantes",
      "Experiencia en procura",
    ],
    experience: [
      "Acción Legal — Procurador (marzo - septiembre 2008)",
      "Endress, Israel & Olguin — Procurador (septiembre 2008 - julio 2012)",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Universidad Miguel de Cervantes (2019)",
    ],
    languages: ["Español"],
    email: "dalvarez@goniabogados.cl",
  },
  {
    slug: "nicolas-obregon",
    name: "Nicolás Antonio Obregón Soto",
    role: "Asociado",
    bio: "Licenciado en Ciencias Jurídicas y Sociales por la Pontificia Universidad Católica de Chile, con especialización en derecho privado y formación en litigación civil.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/nicolas.jpg",
    credentials: [
      "Pontificia Universidad Católica de Chile",
      "Especialidad en Derecho Privado",
      "Diplomado en Litigación Civil (cursando)",
    ],
    experience: [
      "Un Techo para Chile — Pasantía (marzo 2024 - mayo 2024)",
      "URZÚA Abogados — Pasantía (junio 2025 - noviembre 2025)",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Pontificia Universidad Católica de Chile (2025)",
      "Certificado Académico de Especialidad en Derecho Privado, Pontificia Universidad Católica de Chile (2025)",
      "Curso de Inglés Legal, Universidad del Desarrollo (2025)",
      "Diplomado en Derecho procesal avanzado y litigación civil, Pontificia Universidad Católica de Chile (2026, cursando)",
    ],
    languages: ["Español", "Inglés"],
    email: "nobregon@goni-abogados.cl",
    linkedin: "https://www.linkedin.com/in/nicolasobre/",
  },
  {
    slug: "antonia-soto",
    name: "Antonia De Los Ángeles Soto Pizarro",
    role: "Asociada",
    bio: "Licenciada en Ciencias Jurídicas y Sociales por la Universidad Diego Portales, con diploma de honor en Políticas Públicas.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/antonia.jpg",
    credentials: [
      "Universidad Diego Portales",
      "Diploma de Honor en Políticas Públicas",
    ],
    experience: [
      "Álamos, Álvarez & Squella — Pasantía (abril 2023 - julio 2023)",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas y Sociales, Universidad Diego Portales (diciembre 2024)",
      "Diploma de Honor en Políticas Públicas, Universidad Diego Portales (marzo 2020 - diciembre 2021)",
    ],
    languages: ["Español", "Inglés"],
    email: "asoto@goni-abogados.cl",
    linkedin:
      "https://www.linkedin.com/in/antonia-de-los-%C3%A1ngeles-soto-pizarro-077ab9351",
  },
  {
    slug: "edith-munoz",
    name: "Edith Del Carmen Muñoz Cabrales",
    role: "Administración y Finanzas",
    bio: "Técnico jurídico del Instituto Jurídico Canon, a cargo de administración y finanzas del estudio.",
    photo: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/equipo/edith.jpg",
    credentials: ["Técnico jurídico", "Administración y Finanzas"],
    education: ["Técnico jurídico, Instituto Jurídico Canon"],
    languages: ["Español"],
    email: "emunoz@goni-abogados.cl",
  },
];

export const publications: Publication[] = [
  {
    slug: "subrogacion-en-seguros-de-transporte",
    title: "Subrogación en seguros de transporte: criterios prácticos para 2026",
    excerpt:
      "Una revisión de los criterios jurisprudenciales recientes en acciones de subrogación y su impacto en la gestión de recuperos para aseguradoras.",
    category: "Seguros",
    date: "2026-04-12",
    readingMinutes: 7,
    author: "Carlos Goñi",
    coverImage:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "Documentos legales y pluma sobre escritorio",
    body: [
      "La acción de subrogación es la herramienta jurídica que permite al asegurador, tras indemnizar al asegurado, colocarse en su lugar para perseguir al tercero responsable. En siniestros de transporte, donde concurren múltiples actores (cargador, transportista, operador logístico, terminal, conductor), su correcta articulación es decisiva para el resultado del recupero.",
      "En los últimos años, la jurisprudencia chilena ha ido afinando criterios sobre los presupuestos de la acción —pago efectivo de la indemnización, vigencia y cobertura de la póliza, existencia de responsabilidad del tercero— así como sobre el alcance temporal de la subrogación y la posibilidad de ejercerla parcialmente.",
      "Para la gestión de carteras masivas, estos criterios obligan a documentar con rigor cada hito del siniestro, desde la denuncia hasta el pago, y a coordinar con las áreas de operaciones del asegurador la trazabilidad de la información que servirá como prueba en juicio.",
    ],
  },
  {
    slug: "averias-gruesas-y-cadena-logistica",
    title: "Averías gruesas: impactos en la cadena logística internacional",
    excerpt:
      "La declaración de avería gruesa puede paralizar embarques durante meses. Analizamos su tratamiento procesal y las medidas que aseguradores y cargadores pueden adoptar.",
    category: "Marítimo",
    date: "2026-03-02",
    readingMinutes: 9,
    author: "Felipe Aguirre",
    coverImage:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "Buque portacontenedores en altamar",
    body: [
      "La avería gruesa es una institución del derecho marítimo que distribuye, entre todos los intereses involucrados en una expedición marítima, los gastos y sacrificios extraordinarios realizados para salvar la nave y la carga de un peligro común.",
      "En la práctica chilena, su declaración suele generar incertidumbre en cargadores y aseguradores: liberar la carga implica entregar garantías cuya magnitud no siempre es proporcional al riesgo asumido por cada interés.",
      "En esta publicación revisamos los criterios para evaluar las garantías exigidas, el rol del Average Adjuster, y las acciones que pueden ejercerse cuando la declaración de avería gruesa no se ajusta a los hechos.",
    ],
  },
  {
    slug: "responsabilidad-civil-concesionarias",
    title: "Responsabilidad civil de concesionarias: tendencias jurisprudenciales",
    excerpt:
      "Análisis de los criterios recientes en juicios de responsabilidad civil contra concesionarias de autopistas y su impacto en la gestión de siniestros.",
    category: "Responsabilidad civil",
    date: "2026-01-20",
    readingMinutes: 6,
    author: "María José Ramírez",
    coverImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "Autopista en perspectiva al atardecer",
    body: [
      "Las concesionarias de autopistas enfrentan una creciente exposición a demandas de responsabilidad civil derivadas de accidentes ocurridos en sus tramos. La jurisprudencia ha venido consolidando estándares de mantenimiento, señalización y respuesta operativa que delimitan los contornos de la responsabilidad.",
      "Para una gestión eficiente de siniestros, es clave articular tres capas de información: la operacional (bitácoras, registros de mantenimiento), la pericial (informes técnicos del siniestro) y la documental contractual con el concedente.",
      "Esta publicación sintetiza los criterios jurisprudenciales más relevantes del último año y propone una checklist práctica para los equipos legales y operacionales de las concesionarias.",
    ],
  },
  {
    slug: "contratos-fletamento-mercado-spot",
    title: "Contratos de fletamento en un mercado spot volátil",
    excerpt:
      "La volatilidad del mercado de fletes ha vuelto críticos detalles contractuales que antes parecían secundarios. Revisamos cláusulas clave y disputas frecuentes.",
    category: "Marítimo",
    date: "2025-12-10",
    readingMinutes: 8,
    author: "Felipe Aguirre",
    coverImage:
      "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "Vista aérea de contenedores en terminal portuario",
    body: [
      "El mercado spot de fletes ha exhibido en los últimos años una volatilidad inédita, con oscilaciones que han transformado clausulados estandarizados en focos de disputa. La selección de modelos (Gencon, NYPE, BPVOY) y la redacción de las desviaciones particulares se han vuelto decisivas.",
      "En esta publicación analizamos las cláusulas más sensibles: laycan, demoras, despatch, off-hire, war risk, y las particularidades de su aplicación en el comercio chileno e internacional.",
      "Cerramos con recomendaciones prácticas para armadores, fletadores y operadores logísticos sobre cómo prevenir disputas y, cuando son inevitables, articular una estrategia procesal eficiente.",
    ],
  },
  {
    slug: "polizas-construccion-montaje",
    title: "Pólizas de construcción y montaje: claves para una defensa técnica",
    excerpt:
      "Las pólizas CAR/EAR concentran reclamos de alta complejidad técnica. Compartimos criterios para articular una defensa coherente y bien fundada.",
    category: "Seguros",
    date: "2025-11-05",
    readingMinutes: 7,
    author: "Antonia Velasco",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "Obra industrial en construcción con grúas",
    body: [
      "Las pólizas de construcción todo riesgo (CAR) y de montaje todo riesgo (EAR) protegen proyectos cuya complejidad técnica es, por definición, alta. Cuando ocurre un siniestro, la articulación de la defensa requiere coordinar argumentos jurídicos con análisis de ingeniería y de gestión de proyectos.",
      "Una defensa eficaz parte por un análisis riguroso del clausulado y de las exclusiones, especialmente aquellas relativas a vicios de diseño, falta de mantenimiento, errores de operación y daños a la propia obra.",
      "Compartimos en esta publicación los criterios que hemos consolidado a partir de la experiencia en defensa de reclamos en pólizas CAR/EAR para proyectos industriales y de infraestructura.",
    ],
  },
];

export function getPracticeAreas(): PracticeArea[] {
  return practiceAreas;
}

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getPublications(): Publication[] {
  return [...publications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((publication) => publication.slug === slug);
}

export function getTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getIndicators(): Indicator[] {
  return indicators;
}

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}

export function getHomeHero(): HeroContent {
  return homeHero;
}

export function formatPublicationDate(date: string): string {
  return new Date(date).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
