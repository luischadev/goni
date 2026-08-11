import type { Dictionary } from "./es";

export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_US",
  label: "EN",
  name: "English",

  a11y: {
    skipToContent: "Skip to main content",
    homeLink: (siteName: string) => `${siteName} — Home`,
    openMenu: "Open menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    breadcrumb: "Breadcrumb",
    parentPage: "Parent page",
    close: "Close",
    closeNotification: "Dismiss notification",
    sheetLabel: "Details",
    avatarGroup: (count: number) => `View team: ${count} people`,
    languageSwitcher: "Language",
  },

  nav: {
    home: "Home",
    practiceAreas: "Practice areas",
    practiceAreasDescription:
      "Comprehensive legal services for risk and disputes",
    about: "About us",
    contact: "Contact",
    bookConsultation: "Book a consultation",
    viewAll: "View all",
    viewAllMobile: "View all →",
    areaDescriptions: {
      "recuperos-legales":
        "Recovery actions aimed at reimbursing indemnities paid by insurance companies.",
      "derecho-maritimo-y-transporte":
        "Prevention and resolution of disputes arising from the domestic and international carriage of goods.",
      "litigios-y-arbitrajes":
        "Civil, commercial, employment, criminal, maritime and insurance litigation.",
      "responsabilidad-civil":
        "Defense in contractual and non-contractual damages claims.",
      "derecho-corporativo":
        "Corporate and commercial law advice for strategic decisions.",
    },
  },

  footer: {
    practice: "Practice",
    firm: "Firm",
    contact: "Contact",
    viewAllAreas: "View all practice areas",
    viewOnMaps: "View on Google Maps",
    rights: "All rights reserved.",
  },

  cta: {
    defaultLabel: "Get in touch",
  },

  home: {
    heroPrimaryAction: "Get in touch",
    heroSecondaryAction: "Practice areas",
    introEyebrow: "An expert perspective",
    introHeadline:
      "Goñi & Cia. is a law firm built on extensive experience in the domestic and international market, providing comprehensive and specialized legal services in civil and commercial matters, primarily in insurance and reinsurance.",
    aboutLink: "More about us",
    ctaTitle: "Do you have a case or an insurance program to review with us?",
    ctaDescription:
      "We will arrange an initial meeting to understand your company or insurer's context, the critical risks involved and the best way to structure advice that adds value from day one.",
  },

  trust: {
    headline: "50+ years of experience",
    subline: "in the insurance and reinsurance market",
  },

  practiceStack: {
    eyebrow: "Practice areas",
    title: "Comprehensive legal services for risk and disputes.",
    description:
      "We provide specialized legal advice with efficiency, quality and personalized attention, supporting our clients in preventing risk and resolving disputes.",
  },

  practiceIndex: {
    metaTitle: "Practice areas",
    metaDescription:
      "The areas where the firm concentrates its practice: insurance, recoveries, civil liability, maritime and transport law, corporate law and litigation.",
    title: "Comprehensive legal services for risk and disputes.",
    description:
      "We provide specialized legal advice with efficiency, quality and personalized attention, supporting our clients in preventing risk and resolving disputes.",
    ctaTitle: "Need to review a matter with our team?",
    ctaDescription:
      "We will arrange an initial conversation to understand the context, identify the relevant risks and outline the best way to approach your case.",
  },

  practiceDetail: {
    featuresEyebrow: "How we work",
    backToAreas: "Practice areas",
    otherAreas: "Other practice areas",
    ctaTitle: (area: string) =>
      `Let's talk about how ${area.toLowerCase()} applies to your operation.`,
    ctaDescription: (area: string) =>
      `We will arrange an initial meeting to assess your company's context, the critical risks involved and the best way to approach ${area.toLowerCase()} with a clear strategy.`,
  },

  about: {
    metaTitle: "About us",
    metaDescription:
      "Meet the team at Goñi & Cía. Abogados: partners, senior lawyers and specialists with a track record in insurance, civil liability and transport law.",
    heroTitle:
      "A boutique firm, built on technical knowledge and close client relationships.",
    portraitAlt: (name: string) => `Portrait of ${name}`,
    practiceAreas: "Practice areas",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    memberships: "Memberships",
    contact: "Contact",
    linkedin: "LinkedIn",
    approachEyebrow: "Our approach",
    approachTitle:
      "A way of working built on technical rigor, closeness and judgment.",
    approach: [
      {
        title: "Technical depth",
        description:
          "Our practice grows out of a deep understanding of the industries we advise.",
      },
      {
        title: "Close relationships",
        description:
          "As a boutique firm, every client works directly with the Managing Director and with the team that knows their operation end to end.",
      },
      {
        title: "Consistent results",
        description:
          "More than five decades advising the insurance and logistics market have taught us that consistency is a firm's greatest asset.",
      },
      {
        title: "Strategic judgment",
        description:
          "We bring order to complex scenarios so that every legal decision comes with a clear reading of risks, timelines and commercial impact.",
      },
    ],
    ctaTitle:
      "If you think we are the right firm to support your operation, let's talk.",
    ctaDescription:
      "We work with clients who are looking for in-depth advice, not generic answers. Tell us about your situation and we will assess the best path together.",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Contact Goñi & Cía. Abogados. We arrange an initial meeting to assess your case or insurance program.",
    eyebrow: "Contact",
    title: "Let's talk about your company's legal operation.",
    intro:
      "We arrange an initial meeting, with no commitment, to understand your company or insurer's context, the critical risks involved and the best way to structure advice that adds value from day one.",
    detailsEyebrow: "Contact details",
    office: "Office",
    viewOnMaps: "View on Google Maps",
    email: "Email",
    phone: "Phone",
    hours: "Office hours",
    hoursDays: "Monday to Friday",
    hoursTime: "09:00 – 18:30 hrs.",
    formEyebrow: "Enquiry form",
    optional: "(optional)",
    honeypotLabel: "Website",
    nameLabel: "Full name",
    namePlaceholder: "First and last name",
    nameHelper: "Enter your first and last name.",
    nameError: "Please enter your full name.",
    companyLabel: "Company",
    companyPlaceholder: "Company or organization",
    companyHelper: "Tell us your company or organization if applicable.",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    emailHelper: "We will use this address to reply to your enquiry.",
    emailError: "Enter a valid email, for example name@company.com.",
    phoneLabel: "Phone",
    phonePlaceholder: "+56 9 0000 0000",
    phoneHelper: "Include the country code if applicable.",
    areaLabel: "Area of interest",
    areaPlaceholder: "Select an area",
    areaOther: "Other enquiry",
    areaHelper: "Select the main focus of your enquiry.",
    messageLabel: "Tell us briefly about your case",
    messagePlaceholder: "How can we help you?",
    messageError: "Tell us briefly about your case so we can reply.",
    submit: "Send enquiry",
    submitted: "Enquiry sent",
    successMessage:
      "Thank you. We have received your enquiry and will reply shortly.",
    errorMessage:
      "We could not send your enquiry. Please try again or write to us directly.",
    notConfiguredMessage: (email: string) =>
      `The form is not configured. Please write to us directly at ${email}.`,
  },

  testimonials: {
    eyebrow: "Voices from the market",
    title: "Trusted by those operating on the most demanding fronts.",
    description:
      "Testimonials from teams facing technical risks, complex disputes and high-impact legal decisions.",
    regionLabel: "Testimonials",
    controlsLabel: "Testimonial carousel controls",
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
};
