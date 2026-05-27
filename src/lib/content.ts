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
  email: "contacto@goniabogados.cl",
  phone: "+56 2 2345 6789",
  address: {
    street: "Avenida Nueva Providencia 1901, Piso 7",
    city: "Providencia",
    region: "Región Metropolitana",
    country: "Chile",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/goniabogados",
  },
};

export const homeHero: HeroContent = {
  title: "Defensa legal para riesgos complejos",
  subtitle:
    "Rigor técnico, profundidad jurídica y resultados consistentes.",
  overlayOpacity: 75,
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

const sharedPracticeAreaFeatures = [
  {
    title: "Diagnóstico técnico desde el inicio",
    description:
      "Ordenamos hechos, pólizas, contratos y evidencia para definir una estrategia clara antes de avanzar.",
    bullets: [
      "Revisión de pólizas, contratos y antecedentes clave",
      "Identificación temprana de riesgos y escenarios",
      "Definición de una estrategia de acción inicial",
    ],
    icon: "track_changes",
  },
  {
    title: "Criterio jurídico aplicable al negocio",
    description:
      "Traducimos la complejidad legal en decisiones comprensibles para equipos legales, técnicos y operacionales.",
    bullets: [
      "Análisis alineado con la operación del cliente",
      "Comunicación clara entre áreas legales y de negocio",
      "Recomendaciones accionables, no solo teóricas",
    ],
    icon: "account_tree",
  },
  {
    title: "Seguimiento con foco en resultado",
    description:
      "Gestionamos cada asunto con trazabilidad, prioridades definidas y comunicación permanente con el cliente.",
    bullets: [
      "Hitos y prioridades definidos desde el inicio",
      "Trazabilidad documental y de decisiones",
      "Actualización permanente al cliente",
    ],
    icon: "timeline",
  },
  {
    title: "Coordinación con equipos técnicos",
    description:
      "Integramos antecedentes de liquidadores, peritos, ajustadores y equipos internos para construir una visión completa del caso.",
    bullets: [
      "Levantamiento ordenado de información técnica",
      "Coordinación con especialistas y contrapartes",
      "Síntesis jurídica de hallazgos críticos",
    ],
    icon: "hub",
  },
  {
    title: "Estrategia procesal y negociación",
    description:
      "Definimos rutas de acción que combinan análisis jurídico, oportunidad procesal y espacios de negociación cuando agregan valor.",
    icon: "gavel",
  },
  {
    title: "Comunicación ejecutiva",
    description:
      "Presentamos avances, riesgos y próximos pasos en formatos claros para que los equipos puedan tomar decisiones con rapidez.",
    bullets: [
      "Reportes breves orientados a decisión",
      "Priorización de riesgos materiales",
      "Lenguaje claro para comités y áreas de negocio",
    ],
    icon: "summarize",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "seguros-y-reaseguros",
    number: "01",
    title: "Seguros y reaseguros",
    shortDescription:
      "Asesoría técnica y litigios en pólizas complejas, coberturas, reclamos de indemnización y disputas con reaseguradores.",
    intro:
      "Acompañamos a compañías de seguros y reaseguros en la totalidad del ciclo de la póliza: desde la estructuración de programas hasta la defensa frente a reclamos y disputas técnicas.",
    body: [
      "Nuestra práctica nace de un conocimiento profundo del negocio asegurador y de su lógica contractual. Trabajamos con aseguradores nacionales e internacionales, brokers y reaseguradores, asesorando en pólizas de transporte, casco y maquinaria, construcción y montaje, responsabilidad civil y líneas técnicas.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Defensa de reclamos de cobertura",
      "Análisis y opinión legal sobre pólizas",
      "Disputas con reaseguradores",
      "Estructuración de programas de seguros",
    ],
    industries: [
      "Aseguradoras",
      "Reaseguradoras",
      "Brokers",
      "Empresas industriales",
    ],
  },
  {
    slug: "recuperos-legales",
    number: "02",
    title: "Recuperos legales",
    shortDescription:
      "Acciones de subrogación y recupero contra terceros responsables, con know-how en procesos masivos y litigios técnicamente complejos.",
    intro:
      "Una de las prácticas más consolidadas del estudio. Operamos recuperos masivos y casos puntuales de alto monto con criterios técnicos uniformes y trazabilidad para el cliente.",
    body: [
      "Asesoramos a aseguradoras y concesionarias en acciones de subrogación contra terceros responsables, integrando gestión judicial y extrajudicial. Aplicamos métricas de seguimiento, tiempos de resolución y montos recuperados que el cliente puede consultar de forma transparente.",
      "Nuestra experiencia abarca recuperos en siniestros de transporte marítimo, terrestre, aéreo, robo, daños a infraestructura vial y responsabilidad civil de terceros.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Recupero judicial y extrajudicial",
      "Gestión de carteras masivas",
      "Métricas y reportería para el cliente",
      "Negociación con responsables y sus aseguradores",
    ],
    industries: [
      "Aseguradoras",
      "Concesionarias de autopistas",
      "Operadores logísticos",
    ],
  },
  {
    slug: "responsabilidad-civil",
    number: "03",
    title: "Responsabilidad civil",
    shortDescription:
      "Defensa y reclamación de indemnizaciones por daños patrimoniales y morales, en sede contractual y extracontractual.",
    intro:
      "Defendemos y representamos a empresas e instituciones en litigios de responsabilidad civil contractual y extracontractual, con énfasis en industrias reguladas y de alta exposición técnica.",
    body: [
      "Combinamos análisis técnico-pericial con argumentación jurídica para articular defensas robustas frente a reclamos individuales y colectivos. Trabajamos coordinadamente con peritos, ajustadores y equipos de operaciones del cliente.",
      "Hemos representado intereses en casos de daños a la propiedad, accidentes de transporte, responsabilidad de producto, riesgos operacionales y responsabilidad civil de directores y administradores.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Defensa frente a demandas indemnizatorias",
      "Estrategias de transacción",
      "Coordinación con peritos y ajustadores",
      "Litigios de alta complejidad técnica",
    ],
    industries: [
      "Industrias logísticas",
      "Concesionarias",
      "Empresas industriales",
      "Aseguradoras",
    ],
  },
  {
    slug: "derecho-maritimo-y-transporte",
    number: "04",
    title: "Derecho marítimo y transporte",
    shortDescription:
      "Asesoría integral en transporte marítimo, aéreo y terrestre: contratos, siniestros, averías, litigios y arbitrajes internacionales.",
    intro:
      "Una de las prácticas distintivas del estudio. Nuestro socio fundador, Magíster en Derecho Marítimo por Tulane Law School, lidera un equipo con experiencia en toda la cadena de transporte.",
    body: [
      "Asesoramos en contratos de fletamento, conocimientos de embarque, contratos de transporte multimodal y operaciones portuarias. Representamos a navieras, operadores logísticos, cargadores, terminales y aseguradores ante tribunales chilenos y en arbitrajes internacionales.",
      "Nuestra inserción en el ecosistema marítimo-portuario nos permite anticipar riesgos, coordinar con surveyors y P&I Clubs, y articular estrategias eficientes en siniestros complejos.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Contratos de fletamento y transporte",
      "Defensa en averías gruesas y particulares",
      "Coordinación con P&I Clubs y surveyors",
      "Arbitrajes internacionales",
    ],
    industries: [
      "Navieras y armadores",
      "Operadores logísticos",
      "Terminales portuarias",
      "Aseguradores y reaseguradores",
    ],
  },
  {
    slug: "derecho-corporativo",
    number: "05",
    title: "Derecho corporativo y negocios internacionales",
    shortDescription:
      "Asesoría societaria, contratos comerciales y operaciones transfronterizas para empresas que operan en mercados regulados.",
    intro:
      "Acompañamos a nuestros clientes en su operación cotidiana y en transacciones complejas, con un enfoque pragmático orientado al cierre de negocios y a la gestión de riesgo contractual.",
    body: [
      "Asesoramos en constitución y reorganización de sociedades, negociación y redacción de contratos comerciales, joint ventures, compraventa de activos y operaciones transfronterizas. Trabajamos coordinadamente con asesores en otras jurisdicciones cuando la operación lo requiere.",
      "Nuestra mirada está puesta en industrias de alta exigencia regulatoria: seguros, transporte, logística e infraestructura.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Contratos comerciales complejos",
      "Operaciones transfronterizas",
      "Gobierno corporativo",
      "Cumplimiento regulatorio sectorial",
    ],
    industries: [
      "Empresas medianas y grandes",
      "Holdings",
      "Inversionistas extranjeros",
    ],
  },
  {
    slug: "litigios-y-arbitrajes",
    number: "06",
    title: "Litigios y arbitrajes",
    shortDescription:
      "Representación estratégica en sede judicial y arbitral, con foco en disputas comerciales, civiles y de seguros.",
    intro:
      "Nuestra práctica litigiosa es transversal a las áreas del estudio: representamos a nuestros clientes en disputas comerciales, civiles, de seguros y de transporte, con un enfoque estratégico y orientado a resultados.",
    body: [
      "Asumimos casos donde la complejidad técnica y la exposición patrimonial requieren un equipo con experiencia probada. Definimos estrategias procesales claras desde el inicio, evaluando alternativas de transacción cuando agregan valor al cliente.",
      "Tenemos experiencia en juicios ordinarios, sumarios, ejecutivos, arbitrales y procedimientos especiales aplicables a seguros y transporte.",
    ],
    features: sharedPracticeAreaFeatures,
    highlights: [
      "Litigios civiles y comerciales",
      "Arbitrajes nacionales e internacionales",
      "Medidas precautorias",
      "Recursos ante cortes superiores",
    ],
    industries: [
      "Aseguradoras",
      "Empresas industriales y logísticas",
      "Concesionarias",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Su rigor técnico y conocimiento del mercado asegurador han sido determinantes en la defensa de casos complejos. Trabajan con la profundidad y la disciplina que exige la industria.",
    author: "Gerente de Reclamos",
    position: "Gerencia de Reclamos",
    company: "Compañía de Seguros Generales",
  },
  {
    quote:
      "Sus equipos de recuperos operan con métricas claras y trazabilidad. Lo que para otros es un volumen difícil de gestionar, para Goñi & Cía. es un proceso ordenado y previsible.",
    author: "Subgerente Legal",
    position: "Subgerencia Legal",
    company: "Concesionaria de Autopistas",
  },
  {
    quote:
      "Su entendimiento del derecho marítimo y de la operación portuaria les permite anticipar riesgos que otros no ven. Son nuestros asesores de confianza en siniestros complejos.",
    author: "Director Legal Regional",
    position: "Dirección Legal",
    company: "Operador Logístico Internacional",
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "carlos-goni",
    name: "Carlos Goñi",
    role: "Socio Fundador",
    bio: "Abogado de la Pontificia Universidad Católica de Valparaíso y Magíster en Derecho Marítimo (LL.M. Admiralty Law) por Tulane Law School, Estados Unidos. Profesor de Derecho Marítimo y Seguro Marítimo en diversas instituciones y liquidador oficial de seguros. Lidera la estrategia del estudio en seguros, responsabilidad civil y transporte.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "LL.M. Admiralty Law, Tulane Law School",
      "Profesor de Derecho Marítimo",
      "Liquidador oficial de seguros",
    ],
  },
  {
    slug: "maria-jose-ramirez",
    name: "María José Ramírez",
    role: "Abogada Jefe · Recuperos y Litigios",
    bio: "Abogada de la Universidad de Chile, con más de quince años de experiencia en litigios civiles y recuperos para aseguradoras y concesionarias. Lidera el equipo de recuperos masivos del estudio, con foco en eficiencia procesal y métricas para el cliente.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "Universidad de Chile",
      "Diplomado en Seguro de Transporte",
      "+15 años en litigios y recuperos",
    ],
  },
  {
    slug: "felipe-aguirre",
    name: "Felipe Aguirre",
    role: "Abogado Senior · Derecho Marítimo",
    bio: "Abogado de la Pontificia Universidad Católica de Valparaíso, con postgrado en Derecho Marítimo y experiencia en arbitrajes internacionales. Asesora a navieras, operadores logísticos y P&I Clubs en siniestros y disputas contractuales.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "Postgrado en Derecho Marítimo",
      "Arbitrajes internacionales",
      "Asesoría a P&I Clubs",
    ],
  },
  {
    slug: "antonia-velasco",
    name: "Antonia Velasco",
    role: "Abogada · Seguros y Responsabilidad Civil",
    bio: "Abogada de la Universidad Diego Portales, especializada en responsabilidad civil contractual y extracontractual y en defensa de reclamos de cobertura. Participa activamente en seminarios y publicaciones del estudio.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "Universidad Diego Portales",
      "Diplomado en Responsabilidad Civil",
      "Especialista en defensa de coberturas",
    ],
  },
  {
    slug: "diego-fuentes",
    name: "Diego Fuentes",
    role: "Abogado · Corporativo y Transporte",
    bio: "Abogado de la Universidad de los Andes, asesora a clientes industriales y logísticos en derecho corporativo, contratos comerciales y operaciones transfronterizas vinculadas al transporte y la cadena logística.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "Universidad de los Andes",
      "Diplomado en Derecho Corporativo",
      "Operaciones transfronterizas",
    ],
  },
  {
    slug: "valentina-soto",
    name: "Valentina Soto",
    role: "Coordinadora de Recuperos",
    bio: "Procuradora con amplia experiencia en gestión judicial de carteras masivas de recuperos. Coordina equipos de procuradores y asistentes en tribunales civiles y de cobranza a lo largo del país.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "Procuradora",
      "Gestión de carteras masivas",
      "Coordinación nacional",
    ],
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
