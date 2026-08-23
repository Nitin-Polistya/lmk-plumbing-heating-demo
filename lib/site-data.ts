export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag?: string;
  featured?: boolean;
  features: string[];
}

export interface ReviewTheme {
  id: string;
  title: string;
  summary: string;
  metric: string;
  source: 'MyBuilder' | 'Google';
}

export const BUSINESS_DETAILS = {
  name: "Gasgenics Heating & Plumbing",
  shortName: "Gasgenics",
  owner: "Darren Gubby",
  phone: "07770 683797",
  phoneRaw: "07770683797",
  phoneHref: "tel:07770683797",
  whatsappHref: "https://wa.me/447770683797?text=Hi%20Darren,%20I'd%20like%20to%20enquire%20about%20heating/plumbing%20services.",
  email: "info@gasgenics.co.uk",
  address: "51 Victoria Ave, Wakefield, WF2 9QL, United Kingdom",
  town: "Wakefield",
  postcode: "WF2 9QL",
  hours: "7:00 AM – 10:00 PM, 7 days a week",
  availability: "7 Days • 7AM - 10PM",
  trustMetrics: {
    googleRating: "5.0",
    myBuilderReviewCount: 122,
    gasSafeStatus: "Gas Safe Registered",
    accreditation: "Ideal Max Accredited Installer"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "boiler-repairs",
    title: "Boiler Repairs & Breakdown Response",
    shortDesc: "Rapid fault diagnostics and breakdown repairs for domestic heating systems across Wakefield.",
    fullDesc: "When your heating or hot water stops working, Darren brings specialized testing equipment to identify the problem and restore your system safely.",
    iconName: "Wrench",
    tag: "Primary Service",
    featured: true,
    features: [
      "Heating & hot water breakdown repairs",
      "System fault isolation & safety checks",
      "Upfront explanation before starting work",
      "Gas Safe certified repair standards"
    ]
  },
  {
    id: "advanced-diagnostics",
    title: "Specialist Diagnostics",
    shortDesc: "Systematic root-cause fault finding. We test electrical, hydraulic, and combustion controls.",
    fullDesc: "Intermittent faults, low pressure drops, or error codes? Darren focuses on finding the underlying cause before recommending any repairs.",
    iconName: "SearchCheck",
    tag: "Diagnostic Focus",
    featured: true,
    features: [
      "Electrical control & sensor testing",
      "System pressure & hydraulic tracing",
      "Combustion performance testing",
      "Honest, clear recommendations"
    ]
  },
  {
    id: "boiler-servicing",
    title: "Boiler Servicing",
    shortDesc: "Comprehensive annual safety inspections and flue gas efficiency checks.",
    fullDesc: "Annual servicing helps keep your boiler operating safely and efficiently. Includes full combustion check and Gas Safe record documentation.",
    iconName: "ShieldCheck",
    features: [
      "Gas Safe safety documentation",
      "Flue gas combustion analysis",
      "Safety control & pressure checks",
      "Ideal Max accreditation support"
    ]
  },
  {
    id: "boiler-installations",
    title: "Boiler Installations",
    shortDesc: "High-efficiency system replacements tailored to your domestic heating demand.",
    fullDesc: "Modern boiler replacements and system upgrades installed to high trade standards by an Ideal Max Accredited Installer.",
    iconName: "Flame",
    features: [
      "Ideal Max Accredited installation",
      "System flushing & filter protection",
      "Smart thermostat integration",
      "Clean, tidy domestic installation"
    ]
  },
  {
    id: "emergency-callouts",
    title: "Emergency Call-Outs",
    shortDesc: "Available 7 days a week (7 AM – 10 PM) for sudden heating breakdowns and leaks.",
    fullDesc: "Direct owner response across Wakefield when you need urgent help with cold radiators, pressure loss, or boiler lockouts.",
    iconName: "AlertTriangle",
    tag: "7 Days • 7AM - 10PM",
    featured: true,
    features: [
      "Direct phone access to Darren",
      "7 AM – 10 PM availability",
      "Rapid local response across Wakefield",
      "Honest advice on immediate action"
    ]
  },
  {
    id: "general-plumbing",
    title: "General Plumbing",
    shortDesc: "Radiator valves, pipe leaks, cylinder maintenance, and domestic plumbing repairs.",
    fullDesc: "Reliable trade work for domestic plumbing issues, radiator valve upgrades, and natural gas, LPG, or oil heating support.",
    iconName: "Droplets",
    features: [
      "Radiator thermostatic valve (TRV) upgrades",
      "Pipe leak repairs & modifications",
      "Hot water cylinder maintenance",
      "NG / LPG / Oil system support"
    ]
  }
];

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: "theme-1",
    title: "Fast & Accurate Fault Diagnosis",
    summary: "Customers repeatedly highlight Darren's efficiency in pinpointing complex heating and electrical control issues on the first visit.",
    metric: "5.0★ Verified Rating",
    source: "MyBuilder"
  },
  {
    id: "theme-2",
    title: "Straightforward & Honest Advice",
    summary: "Public feedback emphasizes clear explanation of root causes, transparent guidance, and a no-pressure approach.",
    metric: "122 MyBuilder Reviews",
    source: "MyBuilder"
  },
  {
    id: "theme-3",
    title: "Reliable Local Service in Wakefield",
    summary: "Wakefield homeowners value prompt communication, tidy work habits, and respect for their property during repairs and servicing.",
    metric: "5.0★ Google Rated",
    source: "Google"
  }
];

export const COVERAGE_AREAS = [
  "Wakefield",
  "Wakefield and surrounding areas",
  "Surrounding West Yorkshire areas"
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    icon: "SearchCheck",
    title: "Specialist Diagnostics",
    desc: "We test electrical components, hydraulic flow, and combustion parameters to find the real root cause rather than guessing."
  },
  {
    number: "02",
    icon: "ShieldCheck",
    title: "Honest Advice",
    desc: "Clear, upfront recommendations with zero high-pressure sales tactics. If a simple fix resolves the issue, that is what Darren advises."
  },
  {
    number: "03",
    icon: "Clock",
    title: "Fast Local Response",
    desc: "Based in Wakefield, Darren responds quickly to heating breakdowns and emergency call-outs 7 days a week (7 AM – 10 PM)."
  },
  {
    number: "04",
    icon: "UserCheck",
    title: "Experienced Engineer",
    desc: "Owner-led care. Gas Safe registered with technical expertise across natural gas, LPG, and oil heating systems."
  }
];
