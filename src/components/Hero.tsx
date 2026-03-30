import React, { useState, useEffect } from 'react';
import '../styles.css';
import { ArrowRightIcon, ChevronDownIcon } from './Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';

interface HeroProps {
  navigateTo: (page: Page) => void;
}

const slides = [
  {
    headline: 'Precision. Integrity. Excellence.',
    sub: 'Legal Advisory',
    body: "Nigeria's trusted chambers for corporate, commercial, and dispute resolution matters — delivering clarity where it counts most.",
    bg: 'linear-gradient(135deg, #0a0f1e 0%, #111827 40%, #1a2540 100%)',
  },
  {
    headline: 'Protecting Your Business at Every Turn.',
    sub: 'Corporate Law',
    body: 'From incorporation to complex M&A transactions, our attorneys provide strategic counsel that moves your business forward.',
    bg: 'linear-gradient(135deg, #0d1224 0%, #14213d 50%, #0a0f1e 100%)',
  },
  {
    headline: 'Where Strategy Meets the Law.',
    sub: 'Strategic Advisory',
    body: 'Decades of combined experience across litigation, regulatory compliance, and commercial transactions — all in one chambers.',
    bg: 'linear-gradient(135deg, #111827 0%, #0a0f1e 60%, #1a2540 100%)',
  },
];

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero__bg ${i === active ? 'active' : ''}`}
          style={{ background: slide.bg }}
        />
      ))}

      {/* Geometric Pattern Overlay */}
      <div className="hero__pattern" />

      {/* Gold accent bar */}
      <div className="hero__gold-bar" />

      {/* Content */}
      <div className="container hero__content">
        <div className={`hero__text ${mounted ? 'mounted' : ''}`}>
          <p className="eyebrow hero__eyebrow">
            <span className="hero__eyebrow-line" />
            {slides[active].sub}
          </p>
          <h1 className="display-xl text-white hero__headline">
            {slides[active].headline}
          </h1>
          <p className="body-lg hero__body">
            {slides[active].body}
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
              Book a Consultation
              <ArrowRightIcon size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => navigateTo('services')}>
              Our Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { num: '20+', label: 'Years of Excellence' },
            { num: '500+', label: 'Cases Resolved' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Prompt */}
      <div className="hero__scroll-prompt">
        <ChevronDownIcon size={20} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
};

export default Hero;
