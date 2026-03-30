import React, { useState } from 'react';
import '../styles.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckIcon, ArrowRightIcon } from '../components/Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';
interface PricingPageProps { navigateTo: (page: Page) => void; }

const plans = [
  {
    name: 'Advisory',
    sub: 'For individuals & startups',
    price: '₦150,000',
    period: 'per month',
    highlight: false,
    features: [
      'Up to 4 hours legal consultation',
      'Contract review (up to 3 docs)',
      'Email advisory support',
      'Basic compliance guidance',
      'Access to legal templates',
      'Monthly legal update newsletter',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Corporate',
    sub: 'For growing businesses',
    price: '₦450,000',
    period: 'per month',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 12 hours legal consultation',
      'Unlimited contract review',
      'Dedicated relationship partner',
      'Full regulatory compliance review',
      'Priority 24-hour response',
      'Quarterly legal strategy session',
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
    highlight: false,
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

const PricingPage: React.FC<PricingPageProps> = ({ navigateTo }) => {
  useScrollReveal();

  return (
    <div>
      {/* Page Header */}
      <div className="page-hero" style={{ background: 'var(--navy)' }}>
        <div className="container page-hero__inner">
          <p className="eyebrow text-gold reveal">Transparent Pricing</p>
          <div className="gold-rule reveal reveal-delay-1" />
          <h1 className="display-xl text-white reveal reveal-delay-2">
            Simple,<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Predictable Plans</em>
          </h1>
          <p className="body-lg reveal reveal-delay-3" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 540, marginTop: '1.5rem' }}>
            No hidden fees. No billing surprises. Choose the plan that matches your legal needs, or let us build a custom engagement.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="pricing__grid">
            {plans.map(({ name, sub, price, period, highlight, badge, features, cta }, i) => (
              <div
                key={name}
                className={`pricing__card reveal reveal-delay-${i + 1} ${highlight ? 'pricing__card--featured' : ''}`}
              >
                {badge && <div className="pricing__badge">{badge}</div>}
                <div className="pricing__card-top">
                  <p className="eyebrow" style={{ color: highlight ? 'var(--gold-pale)' : 'var(--gold)' }}>{name}</p>
                  <p style={{ fontSize: '0.85rem', color: highlight ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)', marginTop: '0.25rem' }}>{sub}</p>
                  <div className="pricing__price">
                    <span className="pricing__amount">{price}</span>
                    <span className="pricing__period">/{period}</span>
                  </div>
                  <div className="gold-rule" style={{ marginBottom: 0 }} />
                </div>
                <ul className="pricing__features">
                  {features.map(f => (
                    <li key={f}>
                      <CheckIcon size={15} color="var(--gold)" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${highlight ? 'btn-primary' : 'btn-outline-dark'} pricing__btn`}
                  style={highlight ? {} : { borderColor: 'rgba(10,15,30,0.3)' }}
                  onClick={() => navigateTo('contact')}
                >
                  {cta} <ArrowRightIcon size={15} />
                </button>
              </div>
            ))}
          </div>

          <p className="reveal" style={{ textAlign: 'center', color: 'var(--gray-600)', fontSize: '0.875rem', marginTop: '2.5rem' }}>
            All plans include an initial 30-minute free consultation. Prices are exclusive of VAT. Matter-based billing also available.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-sm" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="section-header centered" style={{ marginBottom: '3rem' }}>
            <p className="eyebrow reveal">Flexible Add-Ons</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-md reveal reveal-delay-2">Extend Any Plan</h2>
          </div>
          <div className="pricing__addons">
            {[
              { label: 'Additional Consultation Hour', price: '₦35,000' },
              { label: 'Litigation Retainer (per month)', price: '₦200,000+' },
              { label: 'Contract Drafting (per doc)', price: '₦75,000+' },
              { label: 'Regulatory Filing Support', price: '₦100,000+' },
              { label: 'Legal Due Diligence (per deal)', price: 'Custom' },
              { label: 'International Transaction Support', price: 'Custom' },
            ].map(({ label, price }, i) => (
              <div key={label} className={`pricing__addon reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <span>{label}</span>
                <span className="pricing__addon-price">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-header centered">
            <p className="eyebrow reveal">Common Questions</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg reveal reveal-delay-2">FAQs</h2>
          </div>
          {[
            { q: 'Can I switch plans at any time?', a: 'Yes. You may upgrade or downgrade your plan at the start of any billing month. Our team will ensure a smooth transition without interruption to your legal coverage.' },
            { q: 'What happens if I exceed my consultation hours?', a: 'Additional hours are billed at our standard add-on rate (₦35,000/hour). We will always notify you before any overage is incurred.' },
            { q: 'Do you offer matter-based billing instead of retainers?', a: 'Absolutely. For specific transactions or disputes, we offer transparent matter-based billing. Contact us for a tailored quote.' },
            { q: 'Is VAT included in the stated prices?', a: 'All prices are exclusive of applicable VAT at the prevailing rate. Your invoice will clearly itemise all charges.' },
            { q: 'How do I get started?', a: 'Simply book a free 30-minute consultation via our Contact page. One of our partners will assess your needs and recommend the most suitable plan.' },
          ].map(({ q, a }, i) => (
            <FAQItem key={q} q={q} a={a} delay={i + 1} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface FAQItemProps { q: string; a: string; delay: number; }
const FAQItem: React.FC<FAQItemProps> = ({ q, a, delay }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item reveal reveal-delay-${Math.min(delay, 5)}`} style={{ borderBottom: '1px solid rgba(10,15,30,0.08)' }}>
      <button className="faq-item__q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`faq-item__icon ${open ? 'open' : ''}`}>+</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
};

export default PricingPage;
