export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  image: string;
  iconName: string;
}

export interface ProblemState {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface WhyPillar {
  number: string;
  title: string;
  description: string;
}

export interface ReputationFact {
  metric: string;
  label: string;
  source: string;
}

export const SITE_CONFIG = {
  businessName: 'LMK Plumbing & Heating Services',
  shortName: 'LMK Plumbing & Heating',
  ownerName: 'Lee Kovacs',
  ownerShortName: 'Lee',
  phoneDisplay: '07805 329803',
  phoneLink: 'tel:+447805329803',
  emailDisplay: 'lmkheating@gmail.com',
  emailLink: 'mailto:lmkheating@gmail.com',
  locationBase: 'Wrenthorpe / Wakefield',
  region: 'West Yorkshire',
  motto: 'FROM THE SMALL FIXES TO THE FULL SYSTEM.',
  tagline: 'Local, direct & reliable plumbing & heating services from Lee across Wrenthorpe, Wakefield & surrounding areas.',
  verifiedAreas: ['Wrenthorpe', 'Wakefield', 'Ossett', 'Horbury'],
  supportingAreaText: '& surrounding areas',
};

export const CORE_SERVICES: ServiceCategory[] = [
  {
    id: 'boiler-installations-repairs',
    number: '01',
    title: 'BOILER INSTALLATIONS & REPAIRS',
    shortDesc: 'Boiler installation, servicing and repairs for domestic heating systems.',
    fullDesc: 'Complete domestic boiler solutions from diagnosis and emergency leak/fault repairs to full high-efficiency boiler installations and scheduled servicing.',
    bullets: ['Boiler Installations & Replacements', 'Fault Diagnostics & Urgent Repairs', 'Annual Servicing & Maintenance', 'Efficiency & System Checks'],
    image: '/images/boiler_install.png',
    iconName: 'Flame',
  },
  {
    id: 'central-heating-radiators',
    number: '02',
    title: 'CENTRAL HEATING & RADIATORS',
    shortDesc: 'Radiators, heating-system improvements and related heating work.',
    fullDesc: 'Full central heating maintenance, radiator replacements, thermostatic valve installations, and system upgrades to keep your home warm and efficient.',
    bullets: ['Radiator Installations & Removals', 'Thermostatic Valve Upgrades', 'Heating Circulation Fixes', 'System Upgrades & Balancing'],
    image: '/images/heating_radiators.png',
    iconName: 'ThermometerSun',
  },
  {
    id: 'plumbing-repairs',
    number: '03',
    title: 'PLUMBING REPAIRS',
    shortDesc: 'Everyday plumbing repairs including taps, toilets, leaks and pipework.',
    fullDesc: 'Dependable fix for all everyday plumbing problems. No job is too small, from dripping taps and running toilets to burst pipes and urgent leaks.',
    bullets: ['Tap Repairs & Washer Replacements', 'Toilet & Flush Mechanism Repairs', 'Urgent Leak Detection & Fixes', 'Pipework Repair & Replacement'],
    image: '/images/plumbing_repairs.png',
    iconName: 'Wrench',
  },
  {
    id: 'bathrooms-showers',
    number: '04',
    title: 'BATHROOMS & SHOWERS',
    shortDesc: 'Bathroom and shower plumbing, upgrades and installation work.',
    fullDesc: 'Comprehensive plumbing support for new bathroom suites, shower installations, replacement sanitaryware, and pipe re-routing.',
    bullets: ['Shower Plumbing & Enclosures', 'Bathroom Sanitaryware Plumbing', 'Waste & Overflow Pipework', 'Bathroom Upgrades & Repairs'],
    image: '/images/bathroom_shower.png',
    iconName: 'Bath',
  },
  {
    id: 'hot-cold-water-systems',
    number: '05',
    title: 'HOT & COLD WATER SYSTEMS',
    shortDesc: 'Hot and cold water pipework, cylinders and related plumbing.',
    fullDesc: 'Expert installation and maintenance of hot and cold water distribution pipework, storage cylinders, and pressure management.',
    bullets: ['Hot & Cold Pipework Installations', 'Hot Water Cylinders', 'Cold Water Storage & Feeds', 'Pressure & Circulation Upgrades'],
    image: '/images/hot_water_systems.png',
    iconName: 'Droplets',
  },
  {
    id: 'system-flushing-pipework',
    number: '06',
    title: 'SYSTEM FLUSHING & PIPEWORK',
    shortDesc: 'System flushing, chemical treatment and pipework repair / upgrades.',
    fullDesc: 'Improve heating performance and extend system lifespan with thorough power flushing, chemical treatment, sludge removal, and pipework upgrades.',
    bullets: ['Power Flushing & System Cleaning', 'Sludge & Corrosion Removal', 'Chemical Inhibitor Treatments', 'Major Pipework Upgrades'],
    image: '/images/system_flushing.png',
    iconName: 'Zap',
  },
];

export const PROBLEM_STATES: ProblemState[] = [
  {
    id: 'leak',
    number: '01',
    title: 'LEAK',
    tagline: 'Urgent Leak & Pipework Help',
    description: 'Leaks, damaged pipework and urgent plumbing problems. Quick, practical repairs directly from Lee to protect your home.',
    bullets: ['Burst or dripping pipes', 'Leaking taps & valves', 'Urgent leak containment', 'Waste pipe leaks'],
    image: '/images/plumbing_repairs.png',
  },
  {
    id: 'boiler',
    number: '02',
    title: 'BOILER',
    tagline: 'Boiler Faults & Performance Issues',
    description: 'Boiler servicing, repair and installation support. Getting your hot water and central heating back up and running reliably.',
    bullets: ['Loss of heating or hot water', 'Boiler pressure drops', 'Fault diagnostics & repairs', 'New boiler replacement options'],
    image: '/images/boiler_install.png',
  },
  {
    id: 'radiator',
    number: '03',
    title: 'RADIATOR',
    tagline: 'Cold Radiators & Circulation Problems',
    description: 'Radiator problems, heating upgrades and circulation issues. Cold spots, noisy radiators, or outdated valves rectified efficiently.',
    bullets: ['Cold spots on radiators', 'Noisy or knocking pipes', 'TRV valve replacement', 'Radiator additions or swaps'],
    image: '/images/heating_radiators.png',
  },
  {
    id: 'hotwater',
    number: '04',
    title: 'HOT WATER',
    tagline: 'Hot Water Supply & Cylinder Repairs',
    description: 'Hot-water pipework, cylinders and related domestic plumbing. Ensuring consistent, clean hot water to all taps and showers.',
    bullets: ['Fluctuating water temp', 'Cylinder & tank issues', 'Low shower pressure', 'Cold supply pipework repairs'],
    image: '/images/hot_water_systems.png',
  },
];

export const SMALL_JOBS_ITEMS = [
  'OUTSIDE TAPS',
  'TOILET REPAIRS',
  'TAPS & WASHERS',
  'WASTE PIPEWORK',
  'SMALL LEAKS',
  'OUTSIDE SHOWERS',
  'PIPEWORK REPAIRS',
  'RADIATOR SWAPS',
];

export const WHY_LMK_PILLARS: WhyPillar[] = [
  {
    number: '01',
    title: 'NO JOB TOO SMALL',
    description: 'From replacing a worn tap washer or fixing a toilet valve to installing a full central heating system, every job gets equal care.',
  },
  {
    number: '02',
    title: 'RELIABLE LOCAL SERVICE',
    description: 'Based around Wrenthorpe & Wakefield. You speak directly with Lee, ensuring prompt turnarounds and genuine local accountability.',
  },
  {
    number: '03',
    title: 'TIDY & RESPECTFUL WORK',
    description: 'Working neatly in your home with proper protective equipment, leaving all work areas clean and tidy when the job is done.',
  },
  {
    number: '04',
    title: 'GOOD COMMUNICATION',
    description: 'Clear, straightforward advice and honest communication from start to finish. No technical jargon or hidden surprises.',
  },
  {
    number: '05',
    title: 'OPTIONS THAT SUIT THE JOB',
    description: 'Practical options tailored to your specific problem, home layout, and budget without pushing unnecessary work.',
  },
];

export const REPUTATION_THEMES = [
  { title: 'RELIABLE', desc: 'Arrives as scheduled and completes the job thoroughly.' },
  { title: 'TIDY', desc: 'Clean working habits, leaving your property immaculate.' },
  { title: 'KNOWLEDGEABLE', desc: 'Sound advice and expert trade experience.' },
  { title: 'GOOD COMMUNICATION', desc: 'Clear updates before, during, and after the job.' },
];
