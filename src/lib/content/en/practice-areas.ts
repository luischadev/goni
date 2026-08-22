import type { PracticeArea } from "../../types";

const recuperosLegalesHighlights = [
  {
    title: "Industry knowledge",
    description:
      "Sustained experience in the insurance and reinsurance market, focused on court recovery actions.",
    icon: "domain",
  },
  {
    title: "Portfolio management",
    description:
      "Capacity to manage high volumes of recovery actions with order, traceability and predictability.",
    icon: "folder_managed",
  },
  {
    title: "Judgment to act",
    description:
      "Rigorous assessment that distinguishes when litigation is worthwhile and when another route is better.",
    icon: "balance",
  },
  {
    title: "Integrated teams",
    description:
      "Professionals who work across insurance, transport, litigation and commercial law without silos.",
    icon: "groups",
  },
];

const derechoMaritimoHighlights = [
  {
    title: "Logistics chain",
    description:
      "Knowledge of operators, freight forwarders, carriers and insurers at every link.",
    icon: "local_shipping",
  },
  {
    title: "Multimodal transport",
    description:
      "Sea, air and land transport in disputes over the carriage of goods.",
    icon: "directions_boat",
  },
  {
    title: "International reach",
    description:
      "Advice on domestic and international cargo transport and the disputes it generates.",
    icon: "public",
  },
  {
    title: "Transport ecosystem",
    description:
      "Work alongside insurers, reinsurers, carriers and corporate clients.",
    icon: "handshake",
  },
];

const litigiosHighlights = [
  {
    title: "Breadth of matters",
    description:
      "Experience in civil, commercial, employment, criminal, maritime and insurance cases.",
    icon: "gavel",
  },
  {
    title: "Multiple forums",
    description:
      "Representation before ordinary courts, arbitral tribunals and other dispute resolution bodies.",
    icon: "account_balance",
  },
];

const responsabilidadCivilHighlights = [
  {
    title: "Diverse experience",
    description:
      "Accidents, property damage, professional liability and transport-related disputes.",
    icon: "emergency",
  },
  {
    title: "Multiple parties",
    description:
      "Defense of individuals, companies and insurance companies within the same practice.",
    icon: "groups",
  },
  {
    title: "Both regimes",
    description:
      "Command of contractual and non-contractual liability in damages claims.",
    icon: "compare_arrows",
  },
  {
    title: "High technical standard",
    description:
      "Rigorous legal solutions, focused on concrete results for every client.",
    icon: "workspace_premium",
  },
];

const derechoCorporativoHighlights = [
  {
    title: "Global reach",
    description:
      "Advice to domestic and international companies on corporate and commercial decisions.",
    icon: "language",
  },
  {
    title: "Legal certainty",
    description:
      "Structures and decisions that protect business growth and manage risk.",
    icon: "verified_user",
  },
];

const recuperosLegalesFeatures = [
  {
    title: "Analysis",
    description:
      "A thorough review of the legal, technical and commercial background, identifying risks, opportunities and the most efficient strategy to defend our clients' interests.",
    icon: "track_changes",
  },
  {
    title: "Defining the strategy",
    description:
      "We design tailored solutions, favoring a preventive approach where possible and rigorous litigation when the dispute must be resolved before the courts or in arbitration.",
    icon: "route",
  },
  {
    title: "Specialized management",
    description:
      "Our lawyers work in a coordinated way, combining experience in insurance, civil liability, transport, litigation and commercial law to deliver comprehensive advice at every stage of the case.",
    icon: "hub",
  },
  {
    title: "Ongoing reporting",
    description:
      "We maintain clear and timely communication with our clients, providing regular reports on the status of the matters entrusted to us and recommendations to support decision-making.",
    icon: "summarize",
  },
  {
    title: "Results-focused approach",
    description:
      "We are committed to delivering efficient, technically sound legal solutions aligned with each client's commercial objectives, always seeking the best alternative to resolve their disputes.",
    icon: "verified",
  },
];

const derechoMaritimoFeatures = [
  {
    title: "Analysis of the operation",
    description:
      "We assess the background of each case, the contractual and transport documentation, the applicable regulations and the responsibilities of the different parties in the logistics chain.",
    icon: "inventory_2",
  },
  {
    title: "Legal strategy",
    description:
      "We design a strategy tailored to each matter, taking into account the nature of the transport, the risks involved and the client's commercial objectives.",
    icon: "account_tree",
  },
  {
    title: "End-to-end management",
    description:
      "We represent our clients in negotiations, claims, arbitrations and litigation, coordinating where appropriate with insurers, surveyors, loss adjusters, carriers and other relevant parties.",
    icon: "hub",
  },
  {
    title: "Efficient solutions",
    description:
      "We prioritize responsive, technically rigorous service, maintain ongoing communication with our clients, and focus on risk prevention and effective dispute resolution.",
    icon: "bolt",
  },
];

const litigiosFeatures = [
  {
    title: "Strategic assessment",
    description:
      "We analyze the background of each dispute to identify risks, strengths and opportunities, defining the most suitable procedural strategy from the outset.",
    icon: "track_changes",
  },
  {
    title: "Specialized defense",
    description:
      "We represent our clients before ordinary courts, arbitral tribunals and other dispute resolution bodies, acting with legal rigor and a strategic outlook at every stage of the proceedings.",
    icon: "gavel",
  },
  {
    title: "Efficient management",
    description:
      "We plan every case with a preventive, results-driven approach, optimizing resources, controlling deadlines and continuously assessing the best options for resolving the dispute.",
    icon: "timeline",
  },
  {
    title: "Ongoing communication",
    description:
      "We maintain a close relationship with our clients, providing clear and timely information so they can make well-founded decisions as the proceedings develop.",
    icon: "forum",
  },
];

const responsabilidadCivilFeatures = [
  {
    title: "Case assessment",
    description:
      "We analyze the background, the facts and the applicable regulations to determine risks, liabilities and the best defense strategy.",
    icon: "fact_check",
  },
  {
    title: "Tailored strategy",
    description:
      "We design a legal defense adapted to the particulars of each case, considering both the legal aspects and our clients' commercial interests.",
    icon: "tune",
  },
  {
    title: "Full representation",
    description:
      "We take on the defense in negotiations, mediations and litigation, coordinating where appropriate with insurers, loss adjusters, surveyors and other parties involved.",
    icon: "gavel",
  },
  {
    title: "Protecting the client's interests",
    description:
      "We work with a preventive, technical and results-driven approach, maintaining ongoing communication throughout the matter.",
    icon: "shield",
  },
];

const derechoCorporativoFeatures = [
  {
    title: "Understanding the business",
    description:
      "We get to know each client's activity, objectives and challenges in order to offer legal solutions aligned with their business strategy.",
    icon: "business_center",
  },
  {
    title: "Strategic advice",
    description:
      "We design legal structures and solutions that allow businesses to develop with legal certainty, efficiency and sound risk management.",
    icon: "account_tree",
  },
  {
    title: "Ongoing support",
    description:
      "We provide continuous advice on corporate, contractual and commercial decisions, anticipating contingencies and supporting our clients' growth.",
    icon: "handshake",
  },
  {
    title: "Results-driven solutions",
    description:
      "We take a practical, responsive, and efficient approach, providing timely advice that adds value and contributes to each client's success.",
    icon: "trending_up",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "recuperos-legales",
    number: "01",
    title: "Legal recoveries",
    shortDescription:
      "We manage and pursue recovery actions against liable third parties to recover indemnity payments made by insurers.",
    intro:
      "Comprehensive advice on the management and pursuit of recovery actions, aimed at obtaining reimbursement of the indemnities paid by insurance companies where a third party is legally liable for the loss.",
    featuresTitle:
      "End-to-end management to recover indemnities from liable third parties",
    body: [],
    features: recuperosLegalesFeatures,
    highlights: recuperosLegalesHighlights,
    industries: [],
  },
  {
    slug: "derecho-maritimo-y-transporte",
    number: "02",
    title: "Maritime and transport law",
    shortDescription:
      "Advice and representation in disputes arising from the domestic and international carriage of goods.",
    intro:
      "Advice and representation for insurers and reinsurers, transport companies, logistics operators, freight forwarders and corporate clients in the prevention and resolution of disputes arising from the domestic and international carriage of goods.",
    featuresTitle:
      "A legal approach aligned with the logistics chain and the carriage of goods",
    body: [],
    features: derechoMaritimoFeatures,
    highlights: derechoMaritimoHighlights,
    industries: [],
  },
  {
    slug: "litigios-y-arbitrajes",
    number: "03",
    title: "Litigation",
    shortDescription:
      "Representation in civil, commercial, employment, criminal, maritime and insurance litigation before courts and arbitral tribunals.",
    intro:
      "A long track record and broad experience in civil, commercial, employment, criminal, maritime and insurance litigation, representing our clients before ordinary courts, arbitral tribunals and other dispute resolution bodies.",
    featuresTitle:
      "Rigorous litigation with a procedural strategy at every stage of the dispute",
    body: [],
    features: litigiosFeatures,
    highlights: litigiosHighlights,
    industries: [],
  },
  {
    slug: "responsabilidad-civil",
    number: "04",
    title: "Civil liability",
    shortDescription:
      "Defense in contractual and non-contractual civil liability matters for individuals, companies and insurance companies.",
    intro:
      "Specialized advice and representation in civil liability matters, taking on the defense of individuals, companies and insurance companies in damages claims arising from contractual and non-contractual liability. We have broad experience in disputes involving accidents, property damage, professional liability, transport-related liability and other complex conflicts, providing legal solutions of a high technical standard and geared towards results.",
    featuresTitle:
      "Technical defense adapted to the risks and objectives of each case",
    body: [],
    features: responsabilidadCivilFeatures,
    highlights: responsabilidadCivilHighlights,
    industries: [],
  },
  {
    slug: "derecho-corporativo",
    number: "05",
    title: "Corporate and business law",
    shortDescription:
      "Corporate and commercial advice to domestic and international companies on strategic decision-making.",
    intro:
      "Advice to domestic and international companies on corporate and commercial law matters, supporting them in the development of their activities and in strategic decision-making. We deliver practical and efficient legal solutions aimed at preventing contingencies, facilitating business development and safeguarding our clients' interests in a dynamic business environment.",
    featuresTitle:
      "Strategic support aligned with the development of your business",
    body: [],
    features: derechoCorporativoFeatures,
    highlights: derechoCorporativoHighlights,
    industries: [],
  },
];
