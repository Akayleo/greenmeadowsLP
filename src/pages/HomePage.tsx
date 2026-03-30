import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import '../styles.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  ScalesIcon, BriefcaseIcon, ShieldIcon, DocumentIcon,
  GlobeIcon, UsersIcon, CheckIcon, ArrowRightIcon, QuoteIcon, StarIcon,
} from '../components/Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const services = [
  { Icon: DocumentIcon, title: 'Corporate & Commercial Law', desc: 'End-to-end legal support for businesses — from incorporation, contracts, and M&A to governance and compliance.' },
  { Icon: ScalesIcon, title: 'Dispute Resolution', desc: 'Strategic litigation, arbitration, and mediation services to protect your interests and achieve swift, favourable outcomes.' },
  { Icon: ShieldIcon, title: 'Regulatory Advisory', desc: 'Expert guidance navigating Nigeria\'s evolving regulatory landscape across finance, technology, and industry sectors.' },
  { Icon: BriefcaseIcon, title: 'Employment Law', desc: 'Comprehensive counsel on employment contracts, workplace policies, and dispute resolution for employers and employees.' },
  { Icon: GlobeIcon, title: 'International Transactions', desc: 'Cross-border legal expertise supporting foreign investment, trade agreements, and multi-jurisdictional structuring.' },
  { Icon: UsersIcon, title: 'Private Client Services', desc: 'Discreet legal counsel for high-net-worth individuals on estate planning, succession, and asset protection.' },
];

const testimonials = [
  { name: 'Adebayo Okafor', role: 'CEO, Finvest Capital', text: 'Green Meadows provided exceptional guidance during our Series B round. Their attention to detail and strategic clarity was invaluable.' },
  { name: 'Chisom Nwachukwu', role: 'General Counsel, Techbridge Ltd', text: 'Their regulatory advisory team helped us navigate complex compliance challenges quickly and confidently. Outstanding firm.' },
  { name: 'Fatima Al-Hassan', role: 'Managing Partner, Al-Hassan & Co', text: 'A rare combination of deep expertise and genuine client care. We trust Green Meadows with our most sensitive matters.' },
];

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  useScrollReveal();

  return (
    <div>
      <Hero navigateTo={navigateTo} />

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="home__why-grid">
            <div>
              <p className="eyebrow reveal">Our Distinction</p>
              <div className="gold-rule reveal reveal-delay-1" />
              <h2 className="display-lg reveal reveal-delay-2">
                Legal Excellence<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Built on Trust</em>
              </h2>
              <p className="body-lg reveal reveal-delay-3" style={{ color: 'var(--gray-600)', marginTop: '1.5rem', maxWidth: 480 }}>
                For over two decades, Green Meadows has stood at the intersection of legal brilliance and strategic advisory, serving Nigeria's most discerning clients.
              </p>
              <ul className="home__why-list reveal reveal-delay-4">
                {['Senior counsel with 20+ years average experience','Dedicated partner-led client service','Multi-disciplinary practice areas under one roof','Transparent, results-focused billing'].map(item => (
                  <li key={item}>
                    <CheckIcon size={16} color="var(--gold)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline-dark reveal reveal-delay-5" style={{ marginTop: '2.5rem' }} onClick={() => navigateTo('about')}>
                About Our Chambers
                <ArrowRightIcon size={16} />
              </button>
            </div>

            <div className="home__why-visual reveal reveal-delay-2">
              <div className="home__why-card home__why-card--main">
                <div className="home__why-card-badge">Est. 2004</div>
                <p className="eyebrow">Our Promise</p>
                <h3 className="display-md" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  Every client. Every matter. Full commitment.
                </h3>
                <p className="body-sm" style={{ color: 'var(--gray-600)' }}>
                  We don't just advise — we become your strategic legal partner, invested in your outcomes at every stage.
                </p>
              </div>
              <div className="home__why-card home__why-card--accent">
                <span className="home__why-num">500+</span>
                <span className="body-sm">Successfully closed matters across all practice areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow reveal text-gold">What We Do</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg text-white reveal reveal-delay-2">Our Practice Areas</h2>
            <p className="body-lg reveal reveal-delay-3" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '1rem auto 0' }}>
              Comprehensive legal services delivered with precision, strategy, and unwavering integrity.
            </p>
          </div>

          <div className="home__services-grid">
            {services.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`home__service-card reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="home__service-icon">
                  <Icon size={28} color="var(--gold)" />
                </div>
                <h3 className="display-md" style={{ fontSize: '1.25rem', color: 'var(--white)', margin: '1.25rem 0 0.75rem' }}>{title}</h3>
                <p className="body-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
                <button className="btn btn-ghost" style={{ marginTop: '1.5rem' }} onClick={() => navigateTo('services')}>
                  Learn more <ArrowRightIcon size={14} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
            <button className="btn btn-outline" onClick={() => navigateTo('services')}>
              View All Services <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="home__stats-bar">
        {[
          { num: '20+', label: 'Years of Practice' },
          { num: '500+', label: 'Matters Handled' },
          { num: '12', label: 'Practice Areas' },
          { num: '98%', label: 'Client Retention' },
        ].map(({ num, label }) => (
          <div key={label} className="home__stat-item reveal">
            <span className="home__stat-num">{num}</span>
            <span className="home__stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow reveal">Client Voices</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg reveal reveal-delay-2">What Our Clients Say</h2>
          </div>
          <div className="home__testimonials-grid">
            {testimonials.map(({ name, role, text }, i) => (
              <div key={name} className={`home__testimonial reveal reveal-delay-${i + 1}`}>
                <QuoteIcon size={36} color="rgba(201,168,76,0.2)" />
                <p className="body-lg" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', margin: '1rem 0 1.5rem' }}>
                  "{text}"
                </p>
                <div className="home__testimonial-stars">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} size={14} color="var(--gold)" />)}
                </div>
                <div className="home__testimonial-author">
                  <div className="home__testimonial-avatar">{name[0]}</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{name}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
