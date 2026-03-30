import React, { useState, useEffect } from 'react';
import '../styles.css';
import logoDark from '../assets/logo-dark.png';
import { MenuIcon, CloseIcon, ScalesIcon } from './Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Contact', page: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (page: Page) => {
    navigateTo(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <button className="navbar__logo" onClick={() => handleNav('home')}>
  <img className="navbar__logo-main" src={logoDark} alt="Green Meadows LP" />
  <span className="navbar__logo-sub">Legal Advisory</span>
</button>
          <nav className="navbar__links">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                className={`navbar__link ${currentPage === page ? 'active' : ''}`}
                onClick={() => handleNav(page)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="navbar__cta btn btn-primary"
            onClick={() => handleNav('contact')}
          >
            Get in Touch
          </button>

          <button className="navbar__burger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <MenuIcon size={22} color="var(--white)" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <nav className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="eyebrow text-gold">Navigation</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon size={22} color="var(--white)" />
          </button>
        </div>
        <div className="mobile-menu__links">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              className={`mobile-menu__link ${currentPage === page ? 'active' : ''}`}
              onClick={() => handleNav(page)}
            >
              <span>{label}</span>
              <span className="mobile-menu__arrow">→</span>
            </button>
          ))}
        </div>
        <div className="mobile-menu__footer">
          <button className="btn btn-primary" onClick={() => handleNav('contact')}>
            Book a Consultation
          </button>
          <p className="body-sm" style={{ color: 'var(--gray-400)', marginTop: '1rem' }}>
            info@greenmeadows.com
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
