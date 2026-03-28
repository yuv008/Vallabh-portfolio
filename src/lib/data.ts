export interface Experience {
  company: string;
  division?: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  date: string;
  gpa?: string;
  stem?: boolean;
}

export const personalInfo = {
  name: "Vallabh Sachin Wattamwar",
  tagline: "Turning raw data into automated, audit-ready intelligence.",
  email: "vallabhw1@gmail.com",
  phone: "(585) 363-8928",
  location: "Salt Lake City, USA",
  linkedin: "https://www.linkedin.com/in/vallabhwattamwar/",
} as const;

export const aboutBio =
  "I design automation systems that turn messy data into structured, compliant reporting at scale. At Goldman Sachs, I architect SQL-to-API pipelines and Seismic templates that power 180+ institutional fund reports — saving 300+ hours a year in manual work. I care about precision, clarity, and building things that just work.";

export const quickFacts = {
  currentRole: "Analyst, Goldman Sachs AWM",
  education: "MS Business Analytics, Simon Business School (Rochester)",
  focusAreas: "Content Automation · Data Pipelines · Reporting Ops",
} as const;

export const experiences: Experience[] = [
  {
    company: "Goldman Sachs",
    division: "Asset Wealth Management",
    location: "Salt Lake City, USA",
    role: "Asset Management Reporting Ops. - Analyst",
    period: "June 2025 – Present",
    highlights: [
      "Designed automated templates for 180+ institutional funds across daily, monthly, quarterly, and annual reports",
      "Built SQL → JSON → API templating pipeline for schema mapping, payload definition, and distribution integration",
      "Core contributor to firm-wide Seismic rollout: migration, data bindings, UAT to global signoff",
      "Saved 300+ hours/year through workflow automation and exception-reduction logic",
      "Authored SOPs, governance rules, and training docs for regulatory and disclosure compliance",
    ],
  },
  {
    company: "ATC",
    division: "Remote",
    location: "USA",
    role: "Business Strategy Analyst",
    period: "March 2025 – May 2025",
    highlights: [
      'Led 0→1 product strategy for "DUE" AI task assistant; delivered MVP in 3 months',
      "Built SQL pipelines and performance tracking frameworks for task and activity data",
      "Authored PRD, GTM strategy, and stakeholder alignment plans",
      "Created analytical models to quantify feature impact on productivity and retention",
    ],
  },
  {
    company: "Harris Seeds",
    location: "New York, USA",
    role: "Business Analyst",
    period: "Aug 2024 – Dec 2024",
    highlights: [
      "Built SARIMA time-series model: +43% forecasting accuracy over traditional methods",
      "Reduced overstocking by 25% and holding costs by 20% with region-specific insights",
      "Built Power BI dashboards for product launch ROI and executive decision-making",
      "Conducted supply chain cost-benefit analysis to enhance operational efficiency",
    ],
  },
  {
    company: "Aramark",
    location: "New York, USA",
    role: "Financial Analyst",
    period: "Sep 2023 – Dec 2024",
    highlights: [
      "Improved Starbucks demand forecasting by 18% using SQL and Excel analysis",
      "Created pricing elasticity models: -18% stockouts, increased profit margins",
      "Managed $1.5M+ vendor invoices with automated reporting for cash flow visibility",
      "Initiated reporting automation and audit tracking for regulatory filings",
    ],
  },
  {
    company: "Skyang Products LLP",
    location: "Maharashtra, India",
    role: "Business Analyst",
    period: "Jun 2022 – May 2023",
    highlights: [
      "Launched sustainable tableware line with data-driven pricing (+30% forecasting accuracy)",
      "Reduced procurement costs by 18% through supplier negotiation and contract analysis",
      "Built SQL dashboards for revenue tracking and financial reporting",
      "Identified new revenue opportunities through TAM and competitor analysis (+20% profitability)",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Content Automation & Reporting Ops",
    skills: [
      "Seismic",
      "Template Design",
      "Data Bindings",
      "Logic Rules",
      "Disclosure Governance",
      "Narrative Automation",
      "Version Control",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL",
      "Python (Pandas/NumPy)",
      "Power BI",
      "Tableau",
      "Excel (Advanced)",
      "JSON Schemas",
      "API Templating",
      "Forecasting",
    ],
  },
  {
    title: "Business & Strategy",
    skills: [
      "Process Optimization",
      "Sprint Planning",
      "KPI Tracking",
      "Competitive Analysis",
      "Product Operations",
      "BRD/FRD Documentation",
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      "JIRA",
      "Visio",
      "Agile/Scrum",
      "Seismic",
      "Internal Workflow Systems",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Travel Meta",
    role: "Founder & Data Analyst",
    period: "Mar 2024 – Present",
    description:
      "Travel planning platform with real-time API integrations for flights, accommodations with safety ratings, and transportation services. Features personalized dining recommendations, dynamic pricing, event scheduling, and customizable itinerary planning.",
    tags: ["APIs", "Real-time Data", "Dynamic Pricing", "Analytics"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science",
    field: "Business Analytics",
    school: "Simon Business School, University of Rochester",
    location: "New York, USA",
    date: "Dec 2024",
    stem: true,
  },
  {
    degree: "Bachelor of Business Administration",
    field: "International Business",
    school: "MIT World Peace University",
    location: "Pune, India",
    date: "Apr 2022",
    gpa: "8.59 / 10",
  },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
] as const;
