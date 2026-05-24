export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  number: string;
  intro: string;
  body: string[];
  highlights: string[];
  industries: string[];
}

export interface Publication {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  author: string;
  body: string[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  credentials: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface Indicator {
  value: string;
  label: string;
}

export interface SiteSettings {
  name: string;
  legalName: string;
  tagline: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
  };
  social: {
    linkedin: string;
  };
}
