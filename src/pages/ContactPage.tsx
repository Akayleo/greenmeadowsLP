import React, { useState } from 'react';
import '../styles.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from '../components/Icons';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  useScrollReveal();
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-hero" style={{ background: 'var(--navy)' }}>
        <div className="container page-hero__inner">
          <p className="eyebrow text-gold reveal">Let's Talk</p>
          <div className="gold-rule reveal reveal-delay-1" />
          <h1 className="display-xl text-white reveal reveal-delay-2">
            Get in<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Touch</em>
          </h1>
          <p className="body-lg reveal reveal-delay-3" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, marginTop: '1.5rem' }}>
            We'd love to hear from you. Book a consultation, ask a question, or simply start a conversation about your legal needs.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact__grid">

            {/* Info Panel */}
            <div className="contact__info">
              <div className="reveal">
                <p className="eyebrow">Reach Us Directly</p>
                <div className="gold-rule" />
                <h2 className="display-md" style={{ marginBottom: '2rem' }}>Our Offices</h2>
              </div>

              <div className="contact__info-cards">
                {[
                  {
                    Icon: MapPinIcon,
                    label: 'Head Office – Abuja',
                    value: 'Plot 14, Adetokunbo Ademola Crescent, Wuse II, Abuja, FCT, Nigeria.',
                  },
                  {
                    Icon: MapPinIcon,
                    label: 'Lagos Office',
                    value: '25th Floor, Civic Towers, Ozumba Mbadiwe Avenue, Victoria Island, Lagos.',
                  },
                  {
                    Icon: PhoneIcon,
                    label: 'Telephone',
                    value: '+234 800 000 0000\n+234 900 000 0001',
                  },
                  {
                    Icon: MailIcon,
                    label: 'Email',
                    value: 'info@greenmeadows.com\nnew@greenmeadows.com',
                  },
                ].map(({ Icon, label, value }, i) => (
                  <div key={label} className={`contact__info-card reveal reveal-delay-${i + 1}`}>
                    <div className="contact__info-icon"><Icon size={20} color="var(--gold)" /></div>
                    <div>
                      <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.35rem' }}>{label}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__hours reveal">
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Business Hours</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>Saturday: 9:00 AM – 1:00 PM (by appointment)</p>
              </div>
            </div>

            {/* Form */}
            <div className="contact__form-wrap reveal reveal-delay-2">
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✓</div>
                  <h3 className="display-md" style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>Thank You</h3>
                  <p className="body-lg" style={{ color: 'var(--gray-600)' }}>
                    Your enquiry has been received. A member of our team will contact you within one business day.
                  </p>
                </div>
              ) : (
                <div className="contact__form">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                    Send an Enquiry
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                    Fill in the form and one of our partners will respond within 24 hours.
                  </p>

                  <div className="form__row">
                    <div className="form__field">
                      <label className="form__label">Full Name *</label>
                      <input className="form__input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                    </div>
                    <div className="form__field">
                      <label className="form__label">Email Address *</label>
                      <input className="form__input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label className="form__label">Phone Number</label>
                      <input className="form__input" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" />
                    </div>
                    <div className="form__field">
                      <label className="form__label">Company / Organisation</label>
                      <input className="form__input" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="form__field">
                    <label className="form__label">Practice Area of Interest</label>
                    <select className="form__input form__select" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Corporate & Commercial Law</option>
                      <option>Dispute Resolution & Litigation</option>
                      <option>Regulatory & Compliance Advisory</option>
                      <option>Employment & Labour Law</option>
                      <option>International Transactions & Finance</option>
                      <option>Private Client & Wealth Advisory</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form__field">
                    <label className="form__label">How Can We Help? *</label>
                    <textarea className="form__input form__textarea" name="message" value={form.message} onChange={handleChange} placeholder="Please describe your legal matter or enquiry..." rows={5} />
                  </div>

                  <button
                    className={`btn btn-primary contact__submit ${loading ? 'loading' : ''}`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Sending…' : <>Send Enquiry <ArrowRightIcon size={16} /></>}
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: '1rem' }}>
                    Your information is kept strictly confidential and protected under attorney-client privilege.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
