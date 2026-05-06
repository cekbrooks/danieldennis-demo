// Content scraped from danieldennis.com (May 2026) and lightly hand-cleaned.
// This is a demo — all copy can be revised by the firm before production.

export const firm = {
  name: "Daniel Dennis & Co.",
  shortName: "Daniel Dennis",
  founded: 1981,
  city: "Boston",
  tagline: "Audit, tax, and advisory for the organizations that matter to Massachusetts.",
  description:
    "An independent CPA firm trusted by nonprofits, charter schools, affordable housing organizations, and employee benefit plans across New England.",
};

export const contact = {
  phone: "617-262-9898",
  phoneDisplay: "(617) 262-9898",
  email: "info@danieldennis.com",
  addressLines: ["990 Washington Street, Suite 203", "Dedham, MA 02026"],
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  detail: string;
};

export const services: Service[] = [
  {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    short: "Independent audits, reviews, and compilations that stand up to scrutiny.",
    detail:
      "Financial-statement audits, reviews, and compilations performed by partners who specialize in the nonprofit, affordable-housing, charter-school, and employee-benefit-plan sectors. We work to firm deadlines and to your funders' expectations.",
  },
  {
    slug: "single-audit-uniform-guidance",
    name: "Single Audits",
    short: "Uniform Guidance audits of federal-award programs.",
    detail:
      "Compliance audits required of organizations that expend $750,000 or more in federal awards in a fiscal year, performed in accordance with the Uniform Guidance and the OMB Compliance Supplement.",
  },
  {
    slug: "tax-planning-and-preparation",
    name: "Tax Planning & Preparation",
    short: "Forms 990, 990-T, 1120, and the strategy that ties them together.",
    detail:
      "Tax planning and preparation for tax-exempt organizations and the for-profit entities that support them. We file Forms 990, 990-T, 1120, and state equivalents, and advise on UBIT, intermediate sanctions, and entity structure.",
  },
  {
    slug: "agreed-upon-procedures",
    name: "Agreed-Upon Procedures",
    short: "Targeted engagements where a full audit is more than you need.",
    detail:
      "AUP engagements that test specific assertions — fund balances, grant compliance, internal-control gaps — and report results without expressing an audit opinion.",
  },
  {
    slug: "management-advisory-services",
    name: "Advisory Services",
    short: "Internal-control reviews, risk assessments, and operational guidance.",
    detail:
      "Hands-on advisory work that goes beyond the audit: internal-control assessments, fraud-risk reviews, finance-team coaching, and ad-hoc consulting on transactions, restructurings, and reporting questions.",
  },
  {
    slug: "training-and-professional-development",
    name: "Board & Staff Training",
    short: "Practical, sector-specific training for boards and finance teams.",
    detail:
      "Workshops on nonprofit financial reporting, board fiduciary duty, internal controls, and grant compliance — delivered in plain language for non-finance audiences.",
  },
  {
    slug: "massachusetts-uniform-financial-report-ufr",
    name: "Massachusetts UFR",
    short: "Compliant Uniform Financial Reports for state-contracted nonprofits.",
    detail:
      "Preparation, review, and audit of the Massachusetts Uniform Financial Report (UFR) required of human-services agencies that hold state contracts.",
  },
];

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  {
    slug: "nonprofit-organizations",
    name: "Nonprofit organizations",
    blurb:
      "Mission-driven organizations from arts and culture to human services. We understand donor restrictions, functional expense allocation, and the GAAP that surrounds them.",
  },
  {
    slug: "charter-schools",
    name: "Charter schools",
    blurb:
      "Massachusetts charters with state and federal reporting obligations. We file your audited financials, your single audit, and your DESE schedules on the same calendar.",
  },
  {
    slug: "affordable-housing",
    name: "Affordable housing",
    blurb:
      "Owners and operators of LIHTC, HUD, and state-assisted projects. Cost certifications, REAC submissions, and partnership returns under one roof.",
  },
  {
    slug: "employee-benefit-plans",
    name: "Employee benefit plans",
    blurb:
      "ERISA-governed 401(k), 403(b), and defined-benefit plans. Limited- and full-scope audits, Form 5500 filings, and DOL-correspondence support.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    slug: "kristoffer-lane",
    name: "Kristoffer Lane",
    role: "Managing Partner, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0006_kris.jpg",
    bio: "Kris is the firm's Managing Partner with deep experience in audits of nonprofit organizations, affordable-housing entities, and employee-benefit plans.",
  },
  {
    slug: "james-meehan",
    name: "James Meehan",
    role: "Partner, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0001_jim.jpg",
    bio: "Jim is a partner with three decades of experience leading nonprofit and charter-school audits across New England.",
  },
  {
    slug: "kenneth-lund",
    name: "Kenneth Lund",
    role: "Partner, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0003_ken.jpg",
    bio: "Ken is a partner focused on audits of affordable-housing partnerships and the cost-certification work that surrounds them.",
  },
  {
    slug: "michael-driscoll",
    name: "Michael Driscoll",
    role: "Partner, CPA, MST",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0004_mike.jpg",
    bio: "Mike leads the firm's tax practice, advising tax-exempt organizations and their for-profit affiliates on Forms 990, UBIT, and entity structure.",
  },
  {
    slug: "eric-mahoney",
    name: "Eric Mahoney",
    role: "Partner, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0009_eric.jpg",
    bio: "Eric is a partner with over fifteen years of public-accounting experience, currently focused on the nonprofit, affordable-housing, and employee-benefit-plan industries.",
  },
  {
    slug: "sean-alexander",
    name: "Sean Alexander",
    role: "Partner, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0010_sean.jpg",
    bio: "Sean partners with charter schools and human-service nonprofits, leading audit and Single-Audit engagements across the state.",
  },
  {
    slug: "abby-cleggett",
    name: "Abby Cleggett",
    role: "Manager, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0013_abby.jpg",
    bio: "Abby has been with Daniel Dennis & Co. since 2018 and has over seven years of public-accounting experience focused on nonprofit and affordable-housing engagements.",
  },
  {
    slug: "hayley-macdonald",
    name: "Hayley MacDonald",
    role: "Manager, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0008_hayley.jpg",
    bio: "Hayley has been with the firm since 2018 and primarily focuses on the nonprofit, affordable-housing, and employee-benefit-plan industries.",
  },
  {
    slug: "nicholas-metz",
    name: "Nicholas Metz",
    role: "Manager, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0007_nick.jpg",
    bio: "Nick manages audit engagements for charter schools and nonprofit clients, with a particular focus on Single-Audit and Uniform-Guidance compliance.",
  },
  {
    slug: "sheenia-mchayle",
    name: "Sheenia McHayle",
    role: "Manager, CPA",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0011_sheenia.jpg",
    bio: "Sheenia manages audit and review engagements for the firm's nonprofit and affordable-housing clients.",
  },
  {
    slug: "valquiria-marcal",
    name: "Valquiria Marcal",
    role: "Manager",
    image: "https://danieldennis.com/wp-content/uploads/2025/09/team_0012_val.jpg",
    bio: "Val manages engagement logistics and client communication across the firm's audit and tax practices.",
  },
];

export const stats = [
  { value: "1981", label: "Founded" },
  { value: "8", label: "Partners" },
  { value: "100+", label: "Combined years' experience" },
  { value: "200+", label: "Clients across MA & New England" },
];
