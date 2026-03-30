import React from 'react';
import '../styles.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckIcon, ArrowRightIcon, AwardIcon, UsersIcon, ScalesIcon, GlobeIcon } from '../components/Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';
interface AboutPageProps { navigateTo: (page: Page) => void; }

const team = [
  { name: 'Babatunde Owolebic', role: 'Founding Partner', area: 'Corporate & Commercial Law', years: '24 years', initials: 'BO' },
  { name: 'Ngozi Amaechi', role: 'Senior Partner', area: 'Dispute Resolution & Litigation', years: '18 years', initials: 'NA' },
  { name: 'Emeka Okonkwo', role: 'Partner', area: 'Regulatory & Compliance Advisory', years: '15 years', initials: 'EO' },
  { name: 'Aisha Bello', role: 'Partner', area: 'International Transactions & Finance', years: '12 years', initials: 'AB' },
];

const values = [
  { Icon: ScalesIcon, title: 'Integrity', desc: 'We hold ourselves to the highest ethical standards, ensuring every action reflects our commitment to honest, transparent practice.' },
  { Icon: AwardIcon, title: 'Excellence', desc: 'We relentlessly pursue the best possible outcomes for our clients, combining deep expertise with strategic creativity.' },
  { Icon: UsersIcon, title: 'Partnership', desc: "We don't just advise — we build lasting relationships, becoming a trusted extension of our clients' teams." },
  { Icon: GlobeIcon, title: 'Innovation', desc: 'We embrace forward-thinking approaches to law, leveraging technology and global insights for modern solutions.' },
];

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  useScrollReveal();

  return (
    <div>
      {/* Page Header */}
      <div className="page-hero" style={{ background: 'var(--navy)' }}>
        <div className="container page-hero__inner">
          <p className="eyebrow text-gold reveal">Our Story</p>
          <div className="gold-rule reveal reveal-delay-1" />
          <h1 className="display-xl text-white reveal reveal-delay-2">
            About<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Green Meadows LP</em>
          </h1>
          <p className="body-lg reveal reveal-delay-3" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, marginTop: '1.5rem' }}>
            Founded on a vision of accessible, high-quality legal services, Owolebichambers has grown into one of Nigeria's most respected legal chambers.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about__story-grid">
            <div>
              <p className="eyebrow reveal">Our Foundation</p>
              <div className="gold-rule reveal reveal-delay-1" />
              <h2 className="display-lg reveal reveal-delay-2">Two Decades of<br />Legal Leadership</h2>
              <p className="body-lg reveal reveal-delay-3" style={{ color: 'var(--gray-600)', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                Established in 2004 by Babatunde Owolebic, our chambers was built on the belief that exceptional legal counsel should be strategic, responsive, and deeply attuned to clients' business realities.
              </p>
              <p className="body-lg reveal reveal-delay-4" style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>
                From our offices in Abuja, we serve corporations, institutions, and individuals across Nigeria and the diaspora, combining local expertise with a global perspective on commercial law, dispute resolution, and regulatory compliance.
              </p>
              <ul className="about__story-list reveal reveal-delay-5">
                {['Founded 2004 in Abuja, Nigeria','Expanded practice to Lagos in 2012','International desk launched in 2017','Over 500 successfully concluded matters'].map(i => (
                  <li key={i}><CheckIcon size={15} color="var(--gold)" /><span>{i}</span></li>
                ))}
              </ul>
            </div>
            <div className="about__story-visual reveal reveal-delay-2">
              <div className="about__story-card">
                <span className="about__story-year">2004</span>
                <div className="gold-rule" />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--navy)', lineHeight: 1.4, marginBottom: '1rem' }}>
                  "The law should serve people — not intimidate them. We built this chambers to change that."
                </p>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-600)' }}>
                  — Babatunde Owolebic, Founding Partner
                </p>
              </div>
              <div className="about__story-stat-row">
                {[{ n: '20+', l: 'Years' }, { n: '4', l: 'Partners' }, { n: '30+', l: 'Attorneys' }].map(({ n, l }) => (
                  <div key={l} className="about__story-stat">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)' }}>{n}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-600)' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow text-gold reveal">What Drives Us</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg text-white reveal reveal-delay-2">Our Core Values</h2>
          </div>
          <div className="about__values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`about__value-card reveal reveal-delay-${i + 1}`}>
                <div className="about__value-icon"><Icon size={26} color="var(--gold)" /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', margin: '1.25rem 0 0.75rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow reveal">The People Behind the Practice</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg reveal reveal-delay-2">Meet Our Partners</h2>
            <p className="body-lg reveal reveal-delay-3" style={{ color: 'var(--gray-600)', maxWidth: 520, margin: '1rem auto 0' }}>
              Our partners bring decades of combined expertise across every major area of Nigerian and international law.
            </p>
          </div>
          <div className="about__team-grid">
            {team.map(({ name, role, area, years, initials }, i) => (
              <div key={name} className={`about__team-card reveal reveal-delay-${i + 1}`}>
                <div className="about__team-avatar">{initials}</div>
                <div className="about__team-info">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 500 }}>{name}</h3>
                  <p style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0.25rem 0 0.5rem' }}>{role}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{area}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: '0.5rem' }}>{years} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--gold)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md reveal" style={{ color: 'var(--navy)' }}>Ready to Work With Us?</h2>
          <p className="body-lg reveal reveal-delay-1" style={{ color: 'rgba(10,15,30,0.7)', margin: '1rem auto 2rem', maxWidth: 480 }}>
            Schedule a confidential consultation with one of our partners today.
          </p>
          <button className="btn reveal reveal-delay-2" style={{ background: 'var(--navy)', color: 'var(--white)' }} onClick={() => navigateTo('contact')}>
            Book a Consultation <ArrowRightIcon size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
