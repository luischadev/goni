/**
 * UI copy (labels, helpers, aria-labels, section headings).
 *
 * Editorial content — practice areas, team, testimonials — lives in
 * `src/lib/content/<lang>/` instead. This file is the shape reference:
 * `en.ts` is typed against it, so a missing key fails the build.
 */
export const es = {
  htmlLang: "es",
  ogLocale: "es_CL",
  label: "ES",
  name: "Español",

  a11y: {
    skipToContent: "Saltar al contenido principal",
    homeLink: (siteName: string) => `${siteName} — Inicio`,
    openMenu: "Abrir menú",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    breadcrumb: "Ruta de navegación",
    parentPage: "Página padre",
    close: "Cerrar",
    closeNotification: "Cerrar notificación",
    sheetLabel: "Detalle",
    avatarGroup: (count: number) => `Ver equipo: ${count} personas`,
    languageSwitcher: "Idioma",
  },

  nav: {
    home: "Inicio",
    practiceAreas: "Áreas de práctica",
    practiceAreasDescription:
      "Servicios legales integrales para riesgos y controversias",
    about: "Nosotros",
    contact: "Contacto",
    bookConsultation: "Agendar consulta",
    viewAll: "Ver todas",
    viewAllMobile: "Ver todas →",
    areaDescriptions: {
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
    },
  },

  footer: {
    practice: "Práctica",
    firm: "Estudio",
    contact: "Contacto",
    viewAllAreas: "Ver todas las áreas",
    viewOnMaps: "Ver en Google Maps",
    rights: "Todos los derechos reservados.",
  },

  cta: {
    defaultLabel: "Contáctanos",
  },

  home: {
    heroPrimaryAction: "Contactar",
    heroSecondaryAction: "Áreas de práctica",
    introEyebrow: "Una mirada experta",
    introHeadline:
      "Goñi & Cia. es un estudio jurídico formado con una extensa experiencia en el mercado nacional e internacional prestando servicios legales integrales y especializados en materias civiles y comerciales, fundamentalmente en asuntos relacionados con seguros y reaseguros.",
    aboutLink: "Más sobre nosotros",
    ctaTitle: "¿Tiene un caso o un programa de seguros que evaluar con nosotros?",
    ctaDescription:
      "Coordinamos una reunión inicial para entender el contexto de su empresa o aseguradora, los riesgos críticos y la mejor forma de articular una asesoría que aporte valor desde el primer día.",
  },

  trust: {
    headline: "+50 años de trayectoria",
    subline: "en el mercado de los seguros y reaseguros",
  },

  practiceStack: {
    eyebrow: "Áreas de práctica",
    title: "Servicios legales integrales para riesgos y controversias.",
    description:
      "Prestamos asesoría legal especializada con eficiencia, calidad y atención personalizada, acompañando a nuestros clientes en la prevención de riesgos y en la solución de conflictos.",
  },

  practiceIndex: {
    metaTitle: "Áreas de práctica",
    metaDescription:
      "Las áreas en las que el estudio concentra su práctica: seguros, recuperos, responsabilidad civil, derecho marítimo y transporte, corporativo y litigios.",
    title: "Servicios legales integrales para riesgos y controversias.",
    description:
      "Prestamos asesoría legal especializada con eficiencia, calidad y atención personalizada, acompañando a nuestros clientes en la prevención de riesgos y en la solución de conflictos.",
    ctaTitle: "¿Necesita evaluar un asunto con nuestro equipo?",
    ctaDescription:
      "Coordinamos una conversación inicial para entender el contexto, identificar los riesgos relevantes y orientar la mejor forma de abordar su caso.",
  },

  practiceDetail: {
    featuresEyebrow: "Cómo trabajamos",
    backToAreas: "Áreas de práctica",
    otherAreas: "Otras áreas del estudio",
    ctaTitle: (area: string) =>
      `Conversemos sobre cómo ${area.toLowerCase()} aplica a su operación.`,
    ctaDescription: (area: string) =>
      `Coordinamos una reunión inicial para evaluar el contexto de su empresa, los riesgos críticos y la mejor forma de abordar ${area.toLowerCase()} con una estrategia clara.`,
  },

  about: {
    metaTitle: "Nosotros",
    metaDescription:
      "Conozca al equipo de Goñi & Cía. Abogados: socios, abogados jefes y especialistas con trayectoria en seguros, responsabilidad civil y derecho de transporte.",
    heroTitle:
      "Un estudio boutique, construido sobre conocimiento técnico y trato cercano.",
    portraitAlt: (name: string) => `Retrato de ${name}`,
    practiceAreas: "Áreas de práctica",
    experience: "Experiencia",
    education: "Formación académica",
    languages: "Idiomas",
    memberships: "Membresías",
    contact: "Contacto",
    linkedin: "LinkedIn",
    approachEyebrow: "Nuestro enfoque",
    approachTitle:
      "Una forma de trabajar construida sobre técnica, cercanía y criterio.",
    approach: [
      {
        title: "Profundidad técnica",
        description:
          "Nuestra práctica nace del conocimiento profundo de las industrias que asesoramos.",
      },
      {
        title: "Trato cercano",
        description:
          "Como estudio boutique, cada cliente tiene contacto directo con el Gerente y con el equipo que conoce su operación de extremo a extremo.",
      },
      {
        title: "Resultados consistentes",
        description:
          "Más de cinco décadas asesorando al mercado asegurador y logístico nos han enseñado que la consistencia es el mejor capital de un estudio.",
      },
      {
        title: "Criterio estratégico",
        description:
          "Ordenamos escenarios complejos para que cada decisión legal tenga una lectura clara de riesgos, tiempos y efectos comerciales.",
      },
    ],
    ctaTitle:
      "Si cree que somos el estudio adecuado para acompañar su operación, conversemos.",
    ctaDescription:
      "Trabajamos con clientes que buscan asesoría profunda, no respuestas genéricas. Cuéntenos su situación y evaluamos juntos el mejor camino.",
  },

  contact: {
    metaTitle: "Contacto",
    metaDescription:
      "Contacte a Goñi & Cía. Abogados. Coordinamos una reunión inicial para evaluar su caso o programa de seguros.",
    eyebrow: "Contacto",
    title: "Conversemos sobre la operación legal de su empresa.",
    intro:
      "Coordinamos una reunión inicial, sin compromiso, para entender el contexto de su empresa o aseguradora, los riesgos críticos y la mejor forma de articular una asesoría que aporte valor desde el primer día.",
    detailsEyebrow: "Datos de contacto",
    office: "Oficina",
    viewOnMaps: "Ver en Google Maps",
    email: "Email",
    phone: "Teléfono",
    hours: "Horario de atención",
    hoursDays: "Lunes a viernes",
    hoursTime: "09:00 – 18:30 hrs.",
    formEyebrow: "Formulario de consulta",
    optional: "(opcional)",
    honeypotLabel: "Sitio web",
    nameLabel: "Nombre completo",
    namePlaceholder: "Nombre y apellido",
    nameHelper: "Ingrese nombre y apellido.",
    nameError: "Ingrese su nombre completo.",
    companyLabel: "Empresa",
    companyPlaceholder: "Empresa u organización",
    companyHelper: "Indique su empresa u organización si corresponde.",
    emailLabel: "Email",
    emailPlaceholder: "nombre@empresa.cl",
    emailHelper: "Usaremos este correo para responder su consulta.",
    emailError: "Ingrese un email válido, por ejemplo nombre@empresa.cl.",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+56 9 0000 0000",
    phoneHelper: "Incluya código de país si corresponde.",
    areaLabel: "Área de interés",
    areaPlaceholder: "Seleccione un área",
    areaOther: "Otra consulta",
    areaHelper: "Seleccione el frente principal de su consulta.",
    messageLabel: "Cuéntenos brevemente su caso",
    messagePlaceholder: "¿En qué podemos ayudarle?",
    messageError: "Cuéntenos brevemente su caso para poder responderle.",
    submit: "Enviar consulta",
    submitted: "Consulta enviada",
    successMessage:
      "Gracias. Recibimos su consulta y le responderemos a la brevedad.",
    errorMessage:
      "No pudimos enviar su consulta. Inténtelo nuevamente o escríbanos directamente.",
    notConfiguredMessage: (email: string) =>
      `El formulario no está configurado. Escríbanos directamente a ${email}.`,
  },

  testimonials: {
    eyebrow: "Voces del mercado",
    title: "La confianza de quienes operan en los frentes más exigentes.",
    description:
      "Testimonios de equipos que enfrentan riesgos técnicos, disputas complejas y decisiones legales de alto impacto.",
    regionLabel: "Testimonios",
    controlsLabel: "Controles del carrusel de testimonios",
    previous: "Testimonio anterior",
    next: "Testimonio siguiente",
  },
};

export type Dictionary = typeof es;
