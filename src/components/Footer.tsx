import React from 'react';
import '../styles.css';
import { ScalesIcon, MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, TwitterIcon, ArrowRightIcon } from './Icons';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer__cta-band">
        <div className="container footer__cta-inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>Ready to Begin?</p>
            <h2 className="display-md text-white" style={{ marginTop: '0.75rem' }}>
              Let's Protect What Matters Most
            </h2>
          </div>
          <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
            Book a Consultation
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <ScalesIcon size={22} color="var(--gold)" />
              <span className="footer__logo-text">Green Meadows LP</span>
            </div>
            <p className="body-sm footer__tagline">
              Excellence in Legal Advisory. We deliver clarity, strategy, and protection for businesses and individuals across Nigeria and beyond.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Twitter"><TwitterIcon size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              {(['home','about','services','pricing','contact'] as Page[]).map((p) => (
                <li key={p}>
                  <button className="footer__link" onClick={() => navigateTo(p)}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Practice Areas</h4>
            <ul className="footer__col-links">
              {['Corporate Law','Contract Review','Dispute Resolution','Regulatory Advisory','Intellectual Property','Employment Law'].map(s => (
                <li key={s}><span className="footer__link">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPinIcon size={16} color="var(--gold)" />
                <span>Plot 14, Adetokunbo Ademola Crescent, Wuse II, Abuja, Nigeria</span>
              </li>
              <li>
                <PhoneIcon size={16} color="var(--gold)" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </li>
              <li>
                <MailIcon size={16} color="var(--gold)" />
                <a href="mailto:info@greenmeadows.com">info@greenmeadows.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container footer__bottom">
          <p className="body-sm">© {year} Green Meadows LP Legal Advisory. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="footer__link">Terms of Service</a>
            <span>·</span>
            <a href="#" className="footer__link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
