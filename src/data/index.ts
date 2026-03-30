import { NavItem, ServiceItem, TeamMember, PricingPlan, Testimonial, CoreValue, Stat } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Contact', page: 'contact' },
];

export const HERO_SLIDES = [
  {
    eyebrow: 'Legal Excellence',
    headline: 'Precision.\nIntegrity.\nExcellence.',
    body: "Nigeria's trusted chambers for corporate, commercial, and dispute resolution matters — delivering clarity where it counts most.",
  },
  {
    eyebrow: 'Corporate Law',
    headline: 'Protecting\nYour Business\nat Every Turn.',
    body: 'From incorporation to complex M&A transactions, our attorneys provide strategic counsel that moves your business forward.',
  },
  {
    eyebrow: 'Strategic Advisory',
    headline: 'Where Strategy\nMeets the Law.',
    body: 'Decades of combined experience across litigation, regulatory compliance, and commercial transactions — all in one chambers.',
  },
];

export const HOME_STATS: Stat[] = [
  { num: '20+', label: 'Years of Practice' },
  { num: '500+', label: 'Matters Handled' },
  { num: '12', label: 'Practice Areas' },
  { num: '98%', label: 'Client Retention' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'corporate',
    num: '01',
    title: 'Corporate & Commercial Law',
    short: 'End-to-end legal support for every stage of your business journey.',
    description: 'Our corporate practice advises on the full spectrum of business law — from entity formation and shareholder agreements to complex M&A transactions and joint ventures.',
    items: [
      'Company incorporation & structuring',
      'Shareholder & partnership agreements',
      'Mergers, acquisitions & joint ventures',
      'Corporate governance & board advisory',
      'Commercial contracts & negotiations',
      'Due diligence & transaction support',
    ],
  },
  {
    id: 'dispute',
    num: '02',
    title: 'Dispute Resolution & Litigation',
    short: 'Strategic representation that protects your interests in every forum.',
    description: 'Our litigation team combines deep procedural expertise with commercial acumen to achieve favourable outcomes — through negotiation, mediation, arbitration, or court proceedings.',
    items: [
      'Commercial litigation at all court levels',
      'International arbitration (ICC, LCIA)',
      'Mediation & alternative dispute resolution',
      'Enforcement of judgments & awards',
      'Injunctions & emergency relief',
      'Class actions & complex disputes',
    ],
  },
  {
    id: 'regulatory',
    num: '03',
    title: 'Regulatory & Compliance Advisory',
    short: "Navigate Nigeria's regulatory environment with confidence.",
    description: 'We guide businesses through the complexities of Nigerian regulatory law, providing practical compliance advice and strategic engagement with government agencies and regulators.',
    items: [
      'SEC, CBN & NCC regulatory compliance',
      'Financial services licensing',
      'Data protection & privacy (NDPR/GDPR)',
      'AML/KYC compliance frameworks',
      'Government contracts & procurement',
      'Regulatory investigations & enforcement',
    ],
  },
  {
    id: 'employment',
    num: '04',
    title: 'Employment & Labour Law',
    short: 'Comprehensive counsel for workplace matters at every level.',
    description: 'Our employment practice provides strategic advice to employers and employees alike, covering the full lifecycle of the employment relationship from hire to exit.',
    items: [
      'Employment contracts & policies',
      'Executive compensation & benefits',
      'Unfair dismissal & redundancy',
      'Workplace investigations',
      'Trade union & collective bargaining',
      'Employment tribunal representation',
    ],
  },
  {
    id: 'international',
    num: '05',
    title: 'International Transactions & Finance',
    short: 'Cross-border expertise for a connected world.',
    description: 'We support foreign investors, multinationals, and Nigerian businesses on complex cross-border matters, combining deep local knowledge with international transaction experience.',
    items: [
      'Foreign direct investment structuring',
      'Cross-border financing & capital markets',
      'Trade finance & export credit',
      'International commercial contracts',
      'Multi-jurisdictional corporate restructuring',
      'ISDA documentation & derivatives',
    ],
  },
  {
    id: 'private',
    num: '06',
    title: 'Private Client & Wealth Advisory',
    short: 'Discreet, sophisticated counsel for individuals and families.',
    description: 'Our private client team provides comprehensive legal services for high-net-worth individuals, families, and entrepreneurs — protecting wealth across generations.',
    items: [
      'Wills, trusts & estate planning',
      'Succession & inheritance advisory',
      'Family governance & constitutions',
      'Real estate & property transactions',
      'Philanthropy & charitable structures',
      'Immigration & residency advisory',
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Babatunde Owolebic',
    role: 'Founding Partner',
    area: 'Corporate & Commercial Law',
    years: '24 years',
    initials: 'BO',
  },
  {
    name: 'Ngozi Amaechi',
    role: 'Senior Partner',
    area: 'Dispute Resolution & Litigation',
    years: '18 years',
    initials: 'NA',
  },
  {
    name: 'Emeka Okonkwo',
    role: 'Partner',
    area: 'Regulatory & Compliance Advisory',
    years: '15 years',
    initials: 'EO',
  },
  {
    name: 'Aisha Bello',
    role: 'Partner',
    area: 'International Transactions & Finance',
    years: '12 years',
    initials: 'AB',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'We hold ourselves to the highest ethical standards, ensuring every action reflects our commitment to honest, transparent practice.',
  },
  {
    title: 'Excellence',
    description: 'We relentlessly pursue the best possible outcomes, combining deep expertise with strategic creativity to deliver results.',
  },
  {
    title: 'Partnership',
    description: "We don't just advise — we become a trusted extension of our clients' teams, building lasting relationships beyond single matters.",
  },
  {
    title: 'Innovation',
    description: 'We embrace forward-thinking approaches, leveraging technology and global insights to deliver modern legal solutions.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Adebayo Okafor',
    role: 'CEO, Finvest Capital',
    text: 'Owolebichambers provided exceptional guidance during our Series B round. Their attention to detail and strategic clarity was invaluable.',
  },
  {
    name: 'Chisom Nwachukwu',
    role: 'General Counsel, Techbridge Ltd',
    text: 'Their regulatory advisory team helped us navigate complex compliance challenges quickly and confidently. An outstanding firm.',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Managing Partner, Al-Hassan & Co',
    text: 'A rare combination of deep expertise and genuine client care. We trust Owolebichambers with our most sensitive legal matters.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Advisory',
    sub: 'For individuals & startups',
    price: '₦150,000',
    period: 'per month',
    featured: false,
    features: [
      'Up to 4 hours legal consultation',
      'Contract review (up to 3 docs)',
      'Email advisory support',
      'Basic compliance guidance',
      'Legal templates library',
      'Monthly legal newsletter',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Corporate',
    sub: 'For growing businesses',
    price: '₦450,000',
    period: 'per month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Up to 12 hours legal consultation',
      'Unlimited contract review',
      'Dedicated relationship partner',
      'Full regulatory compliance review',
      '24-hour priority response',
      'Quarterly strategy session',
      'Employment law coverage',
      'Dispute advisory & early resolution',
    ],
    cta: 'Start Now',
  },
  {
    name: 'Enterprise',
    sub: 'For large organisations',
    price: 'Custom',
    period: 'tailored engagement',
    featured: false,
    features: [
      'Unlimited attorney access',
      'Dedicated in-house legal team',
      'Fractional General Counsel',
      'Full litigation support',
      'International transactions',
      'Board & governance advisory',
      'Regulatory lobbying & liaison',
      'Custom SLAs & reporting',
    ],
    cta: 'Contact Us',
  },
];

export const FAQS = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. You may upgrade or downgrade your plan at the start of any billing month. Our team will ensure a smooth transition without interruption to your legal coverage.',
  },
  {
    q: 'What happens if I exceed my consultation hours?',
    a: 'Additional hours are billed at our standard add-on rate (₦35,000/hour). We will always notify you before any overage is incurred.',
  },
  {
    q: 'Do you offer matter-based billing instead of retainers?',
    a: 'Absolutely. For specific transactions or disputes, we offer transparent matter-based billing. Contact us for a tailored quote.',
  },
  {
    q: 'Is VAT included in the stated prices?',
    a: 'All prices are exclusive of applicable VAT at the prevailing rate. Your invoice will clearly itemise all charges.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 30-minute consultation via our Contact page. One of our partners will assess your needs and recommend the most suitable plan.',
  },
];

export const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Initial Consultation',
    desc: 'We begin with a confidential consultation to understand your legal needs, objectives, and circumstances.',
  },
  {
    n: '02',
    title: 'Strategy & Advice',
    desc: 'Our team crafts a clear, tailored legal strategy with transparent advice on risks, costs, and timelines.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'We act swiftly and decisively on your behalf, keeping you informed at every step of the process.',
  },
  {
    n: '04',
    title: 'Resolution & Review',
    desc: 'We deliver outcomes, then review the engagement to ensure lasting value and continued compliance.',
  },
];

export const ADDONS = [
  { label: 'Additional Consultation Hour', price: '₦35,000' },
  { label: 'Litigation Retainer (per month)', price: '₦200,000+' },
  { label: 'Contract Drafting (per doc)', price: '₦75,000+' },
  { label: 'Regulatory Filing Support', price: '₦100,000+' },
  { label: 'Legal Due Diligence (per deal)', price: 'Custom' },
  { label: 'International Transaction Support', price: 'Custom' },
];
