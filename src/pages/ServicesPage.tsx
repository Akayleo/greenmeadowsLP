import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ScalesIcon, BriefcaseIcon, ShieldIcon, DocumentIcon, GlobeIcon, UsersIcon, ArrowRightIcon, CheckIcon } from '../components/Icons';
import '../styles.css';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';
interface ServicesPageProps { navigateTo: (page: Page) => void; }

const services = [
  {
    Icon: DocumentIcon,
    title: 'Corporate & Commercial Law',
    short: 'End-to-end legal support for every stage of your business journey.',
    desc: 'Our corporate practice advises on the full spectrum of business law matters — from entity formation, shareholder agreements, and corporate governance to complex M&A transactions and joint ventures.',
    items: ['Company incorporation & structuring','Shareholder & partnership agreements','Mergers, acquisitions & joint ventures','Corporate governance & board advisory','Commercial contracts & negotiations','Due diligence & transaction support'],
    id: 'corporate',
  },
  {
    Icon: ScalesIcon,
    title: 'Dispute Resolution & Litigation',
    short: 'Strategic representation that protects your interests in every forum.',
    desc: 'Our litigation team combines deep procedural expertise with commercial acumen to achieve favourable outcomes — whether through negotiation, mediation, arbitration, or full court proceedings.',
    items: ['Commercial litigation at all court levels','International arbitration (ICC, LCIA, ICSID)','Mediation & alternative dispute resolution','Enforcement of judgments & awards','Injunctions & emergency relief','Class actions & complex disputes'],
    id: 'dispute',
  },
  {
    Icon: ShieldIcon,
    title: 'Regulatory & Compliance Advisory',
    short: 'Navigate Nigeria\'s regulatory environment with confidence.',
    desc: 'We guide businesses through the complexities of Nigerian regulatory law, providing practical compliance advice and strategic engagement with government agencies and regulators.',
    items: ['SEC, CBN & NCC regulatory compliance','Financial services licensing','Data protection & privacy (NDPR/GDPR)','AML/KYC compliance frameworks','Government contracts & procurement','Regulatory investigations & enforcement'],
    id: 'regulatory',
  },
  {
    Icon: BriefcaseIcon,
    title: 'Employment & Labour Law',
    short: 'Comprehensive counsel for workplace matters at every level.',
    desc: 'Our employment practice provides strategic advice to employers and employees alike, covering the full lifecycle of the employment relationship.',
    items: ['Employment contracts & policies','Executive compensation & benefits','Unfair dismissal & redundancy','Workplace investigations','Trade union & collective bargaining','Employment tribunal representation'],
    id: 'employment',
  },
  {
    Icon: GlobeIcon,
    title: 'International Transactions & Finance',
    short: 'Cross-border expertise for a connected world.',
    desc: 'We support foreign investors, multinationals, and Nigerian businesses on complex cross-border matters, combining deep local knowledge with international transaction experience.',
    items: ['Foreign direct investment structuring','Cross-border financing & capital markets','Trade finance & export credit','International commercial contracts','ISDA documentation & derivatives','Multi-jurisdictional corporate restructuring'],
    id: 'international',
  },
  {
    Icon: UsersIcon,
    title: 'Private Client & Wealth Advisory',
    short: 'Discreet, sophisticated counsel for individuals and families.',
    desc: 'Our private client team provides comprehensive legal services for high-net-worth individuals, families, and entrepreneurs — protecting wealth across generations.',
    items: ['Wills, trusts & estate planning','Succession & inheritance advisory','Family governance & constitutions','Real estate & property transactions','Philanthropy & charitable structures','Immigration & residency advisory'],
    id: 'private',
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
  useScrollReveal();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div>
      {/* Page Header */}
      <div className="page-hero" style={{ background: 'var(--navy)' }}>
        <div className="container page-hero__inner">
          <p className="eyebrow text-gold reveal">Our Expertise</p>
          <div className="gold-rule reveal reveal-delay-1" />
          <h1 className="display-xl text-white reveal reveal-delay-2">
            Practice<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Areas</em>
          </h1>
          <p className="body-lg reveal reveal-delay-3" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 540, marginTop: '1.5rem' }}>
            Comprehensive, specialised legal services delivered with precision, strategy, and an unwavering commitment to your success.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map(({ Icon, title, short, desc, items, id }, i) => (
            <div
              key={id}
              className={`svc-row reveal ${i % 2 === 1 ? 'svc-row--alt' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="svc-row__header" onClick={() => setActiveId(activeId === id ? null : id)}>
                <div className="svc-row__icon-wrap">
                  <Icon size={28} color="var(--gold)" />
                </div>
                <div className="svc-row__headline">
                  <span className="eyebrow" style={{ color: 'var(--gold)' }}>0{i + 1}</span>
                  <h2 className="display-md" style={{ marginTop: '0.4rem' }}>{title}</h2>
                  <p className="body-sm" style={{ color: 'var(--gray-600)', marginTop: '0.5rem' }}>{short}</p>
                </div>
                <div className={`svc-row__toggle ${activeId === id ? 'open' : ''}`}>
                  <span />
                  <span />
                </div>
              </div>

              {activeId === id && (
                <div className="svc-row__body">
                  <div className="svc-row__body-inner">
                    <p className="body-lg" style={{ color: 'var(--gray-600)', maxWidth: 640 }}>{desc}</p>
                    <div className="svc-row__items">
                      {items.map(item => (
                        <div key={item} className="svc-row__item">
                          <CheckIcon size={15} color="var(--gold)" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => navigateTo('contact')}>
                      Enquire About This Service <ArrowRightIcon size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow text-gold reveal">How We Work</p>
            <div className="gold-rule center reveal reveal-delay-1" />
            <h2 className="display-lg text-white reveal reveal-delay-2">Our Approach</h2>
          </div>
          <div className="svc-process">
            {[
              { n: '01', title: 'Initial Consultation', desc: 'We begin with a confidential consultation to understand your legal needs, objectives, and circumstances.' },
              { n: '02', title: 'Strategy & Advice', desc: 'Our team crafts a clear, tailored legal strategy with transparent advice on risks, costs, and timelines.' },
              { n: '03', title: 'Execution', desc: 'We act swiftly and decisively, keeping you informed at every step of the process.' },
              { n: '04', title: 'Resolution & Review', desc: 'We deliver outcomes, then review the engagement to ensure lasting value and continued compliance.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className={`svc-process__step reveal reveal-delay-${i + 1}`}>
                <span className="svc-process__num">{n}</span>
                <div className="svc-process__line" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--white)', margin: '1rem 0 0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
