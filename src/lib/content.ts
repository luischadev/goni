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
  { value: "30+", label: "Años asesorando al mercado asegurador" },
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
    name: "Carlos Goñi",
    role: "Socio",
    bio: "Abogado de la Pontificia Universidad Católica de Valparaíso y Magíster en Derecho Marítimo (LL.M. Admiralty Law) por Tulane Law School, Estados Unidos. Profesor de Derecho Marítimo y Seguro Marítimo en diversas instituciones y liquidador oficial de seguros. Lidera la estrategia del estudio en seguros, responsabilidad civil y transporte.",
    photo:
      "https://images.pexels.com/photos/7845290/pexels-photo-7845290.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "LL.M. Admiralty Law, Tulane Law School",
      "Profesor de Derecho Marítimo",
      "Liquidador oficial de seguros",
    ],
    practiceAreas: [
      "Seguros y Reaseguros",
      "Derecho Marítimo y Transporte",
      "Responsabilidad Civil",
      "Litigios y Arbitrajes",
    ],
    experience: [
      "Fundador de Goñi & Cía. Abogados (1993 a la fecha)",
      "Liquidador oficial de seguros, Comisión para el Mercado Financiero",
      "Profesor de Derecho Marítimo y Seguro Marítimo, Pontificia Universidad Católica de Valparaíso",
      "Miembro del Comité de Averías Gruesas, Cámara Marítima de Chile",
      "Autor de publicaciones especializadas en seguro marítimo y responsabilidad del transportador",
    ],
    education: [
      "Abogado, Pontificia Universidad Católica de Valparaíso (1988)",
      "Juramento ante la Corte Suprema, 15 de marzo de 1989",
      "LL.M. Admiralty Law, Tulane Law School, Nueva Orleans (1992)",
    ],
    languages: ["Español", "Inglés"],
    memberships: [
      "Colegio de Abogados de Chile A.G.",
      "Cámara Marítima y Portuaria de Chile",
      "Comité Marítimo Internacional (CMI) — miembro individual",
    ],
  },
  {
    slug: "maria-jose-ramirez",
    name: "María José Ramírez",
    role: "Socia",
    bio: "Abogada de la Universidad de Chile, con más de quince años de experiencia en litigios civiles y recuperos para aseguradoras y concesionarias. Lidera el equipo de recuperos masivos del estudio, con foco en eficiencia procesal y métricas para el cliente.",
    photo:
      "https://images.pexels.com/photos/8871924/pexels-photo-8871924.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "Universidad de Chile",
      "Diplomado en Seguro de Transporte",
      "+15 años en litigios y recuperos",
    ],
    practiceAreas: [
      "Recuperos Legales",
      "Litigios Civiles",
      "Litigios Laborales",
      "Seguros y Reaseguros",
    ],
    experience: [
      "Goñi & Cía. Abogados — Abogada (2009), Socia (2018 a la fecha)",
      "Clínica Jurídica, Universidad de Chile — Supervisora de casos laborales (2007–2009)",
      "Coautora, 'Recuperos en el seguro de transporte: criterios prácticos', Revista Chilena de Derecho del Seguro (2022)",
    ],
    education: [
      "Abogada, Universidad de Chile (2007)",
      "Juramento ante la Corte Suprema, 8 de enero de 2008",
      "Diplomado en Seguro de Transporte, Universidad de Chile (2011, completado)",
      "Diplomado en Litigación Civil Estratégica, Universidad Adolfo Ibáñez (2015, completado)",
    ],
    languages: ["Español", "Inglés"],
    memberships: ["Colegio de Abogados de Chile A.G."],
  },
  {
    slug: "felipe-aguirre",
    name: "Felipe Aguirre",
    role: "Asociado",
    bio: "Abogado de la Pontificia Universidad Católica de Valparaíso, con postgrado en Derecho Marítimo y experiencia en arbitrajes internacionales. Asesora a navieras, operadores logísticos y P&I Clubs en siniestros y disputas contractuales.",
    photo:
      "https://images.pexels.com/photos/31112196/pexels-photo-31112196.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "Postgrado en Derecho Marítimo",
      "Arbitrajes internacionales",
      "Asesoría a P&I Clubs",
    ],
    practiceAreas: [
      "Derecho Marítimo y Transporte",
      "Litigios y Arbitrajes",
      "Seguros y Reaseguros",
    ],
    experience: [
      "Goñi & Cía. Abogados — Abogado asociado (2016 a la fecha)",
      "Procurador, Juzgado de Letras del Trabajo de Valparaíso (2013–2015)",
      "Participante en arbitrajes ante la Cámara de Comercio de Santiago (CCS) y la London Court of International Arbitration (LCIA)",
    ],
    education: [
      "Abogado, Pontificia Universidad Católica de Valparaíso (2013)",
      "Juramento ante la Corte Suprema, 22 de abril de 2014",
      "Postgrado en Derecho Marítimo Internacional, Universidad de Southampton (2016, completado)",
      "Diplomado en Arbitraje Comercial Nacional e Internacional, UAI (2019, completado)",
    ],
    languages: ["Español", "Inglés"],
    memberships: [
      "Colegio de Abogados de Chile A.G.",
      "Young Members Group, Comité Marítimo Internacional (CMI)",
    ],
  },
  {
    slug: "antonia-velasco",
    name: "Antonia Velasco",
    role: "Asociada",
    bio: "Abogada de la Universidad Diego Portales, especializada en responsabilidad civil contractual y extracontractual y en defensa de reclamos de cobertura. Participa activamente en seminarios y publicaciones del estudio.",
    photo:
      "https://images.pexels.com/photos/4347471/pexels-photo-4347471.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "Universidad Diego Portales",
      "Diplomado en Responsabilidad Civil",
      "Especialista en defensa de coberturas",
    ],
    practiceAreas: [
      "Seguros y Reaseguros",
      "Responsabilidad Civil",
      "Negligencias Médicas",
    ],
    experience: [
      "Goñi & Cía. Abogados — Abogada asociada (2019 a la fecha)",
      "Estudio Jurídico Morales & Besa — Abogada (2017–2019)",
      "Coautora, 'Responsabilidad civil en pólizas CAR/EAR: exclusiones frecuentes', ponencia en Congreso Nacional de Seguros (2023)",
    ],
    education: [
      "Abogada, Universidad Diego Portales (2016)",
      "Juramento ante la Corte Suprema, 10 de marzo de 2017",
      "Diplomado en Responsabilidad Civil, Universidad de Chile (2018, completado)",
      "Magíster en Derecho Privado, Universidad de Chile (cursando)",
    ],
    languages: ["Español", "Inglés", "Portugués (básico)"],
    memberships: ["Colegio de Abogados de Chile A.G."],
  },
  {
    slug: "diego-fuentes",
    name: "Diego Fuentes",
    role: "Asociado",
    bio: "Abogado de la Universidad de los Andes, asesora a clientes industriales y logísticos en derecho corporativo, contratos comerciales y operaciones transfronterizas vinculadas al transporte y la cadena logística.",
    photo:
      "https://images.pexels.com/photos/37409503/pexels-photo-37409503.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "Universidad de los Andes",
      "Diplomado en Derecho Corporativo",
      "Operaciones transfronterizas",
    ],
    practiceAreas: [
      "Derecho Corporativo",
      "Derecho Marítimo y Transporte",
      "Litigios y Arbitrajes",
    ],
    experience: [
      "Goñi & Cía. Abogados — Abogado asociado (2020 a la fecha)",
      "Deloitte Legal Chile — Consultor legal, área corporativa (2018–2020)",
    ],
    education: [
      "Abogado, Universidad de los Andes (2018)",
      "Juramento ante la Corte Suprema, 5 de agosto de 2018",
      "Diplomado en Derecho Corporativo y Negocios, Universidad de los Andes (2020, completado)",
      "Diplomado en Comercio Internacional y Aduanas, PUC (2022, completado)",
    ],
    languages: ["Español", "Inglés"],
    memberships: ["Colegio de Abogados de Chile A.G."],
  },
  {
    slug: "valentina-soto",
    name: "Valentina Soto",
    role: "Administración y Finanzas",
    bio: "Procuradora con amplia experiencia en gestión judicial de carteras masivas de recuperos. Coordina equipos de procuradores y asistentes en tribunales civiles y de cobranza a lo largo del país.",
    photo:
      "https://images.pexels.com/photos/7654454/pexels-photo-7654454.jpeg?auto=compress&cs=tinysrgb&w=900",
    credentials: [
      "Procuradora",
      "Gestión de carteras masivas",
      "Coordinación nacional",
    ],
    practiceAreas: ["Recuperos Legales", "Juzgados de Policía Local"],
    experience: [
      "Goñi & Cía. Abogados — Coordinadora de Recuperos y Administración (2014 a la fecha)",
      "Procuradora independiente en tribunales civiles de Santiago y regiones (2010–2014)",
    ],
    education: [
      "Técnico en Administración de Empresas, INACAP (2009)",
      "Diplomado en Gestión Judicial, Universidad Central (2016, completado)",
    ],
    languages: ["Español"],
    memberships: [],
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
