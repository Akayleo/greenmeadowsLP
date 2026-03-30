// ─── Shared Types ───────────────────────────────────────────────────────────

export type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';

export interface NavItem {
  label: string;
  page: Page;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  short: string;
  description: string;
  items: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  area: string;
  years: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  sub: string;
  price: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  type: 'address' | 'phone' | 'email';
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
