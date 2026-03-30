# Owolebichambers Legal Advisory — Website

A professional multi-page TypeScript React website for Grean Meadow, a Nigerian legal advisory firm.

---

## 🏗 Project Structure

```
owolebichambers/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Icons.tsx          # All SVG icons as typed React components
│   │   ├── Navbar.tsx         # Sticky nav with scroll effect & mobile drawer
│   │   ├── Hero.tsx           # Full-screen animated hero with slide carousel
│   │   └── Footer.tsx         # CTA band + grid footer
│   ├── pages/
│   │   ├── HomePage.tsx       # Landing page — services, stats, testimonials
│   │   ├── AboutPage.tsx      # Story, values, team
│   │   ├── ServicesPage.tsx   # Accordion practice areas + process steps
│   │   ├── PricingPage.tsx    # 3-tier pricing cards + add-ons + FAQ
│   │   └── ContactPage.tsx    # Split layout contact form
│   ├── hooks/
│   │   └── useScrollReveal.ts # IntersectionObserver-based scroll animation
│   ├── data/
│   │   └── index.ts           # All site content (services, team, pricing, etc.)
│   ├── types/
│   │   └── index.ts           # Shared TypeScript types
│   ├── styles.css             # Design tokens, global styles, utilities
│   ├── App.tsx                # Root component with page routing & transitions
│   └── index.tsx              # React DOM entry point
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary dark | `#0a0f1e` (deep navy) |
| Mid dark | `#111827` |
| Accent | `#c9a84c` (antique gold) |
| Background | `#faf8f3` (ivory) |
| Display font | Cormorant Garamond (serif) |
| Body font | Jost (geometric sans) |

---

## ✨ Features

- **5 full pages**: Home, About, Services, Pricing, Contact
- **Animated hero** with auto-rotating slide carousel and geometric pattern overlay
- **Scroll reveal animations** via IntersectionObserver (zero dependencies)
- **Sticky navbar** with scroll-triggered glass effect and mobile drawer
- **Accordion services** with smooth expand/collapse animations
- **Interactive pricing cards** with hover lift effects
- **Working contact form** with loading state and success confirmation
- **SVG icon library** — 20+ custom icons as typed React components
- **Fully responsive** — mobile, tablet, desktop breakpoints
- **Page transitions** — fade + slide between pages
- **Gold stats bar** with animated counters
- **Testimonials** with star ratings
- **Footer** with CTA band, office info, and social links

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Requires Node.js 16+ and npm 8+.

---

## 📁 Customisation

All site content lives in `src/data/index.ts` — update services, team members, pricing plans, testimonials, and contact info there without touching component code.

Colours and spacing tokens are defined in `src/styles.css` under `:root {}`.

---

## 📄 Pages

| Page | Route (client-side) | Key sections |
|------|---------------------|--------------|
| Home | `home` | Hero, Why Us, Services grid, Stats bar, Testimonials |
| About | `about` | Story, Founding quote, Core values, Partner team |
| Services | `services` | Accordion practice areas, 4-step process |
| Pricing | `pricing` | 3-tier plans, Add-ons table, FAQ accordion |
| Contact | `contact` | Office info cards, Enquiry form with validation |

---

© 2024 Owolebichambers Legal Advisory. All rights reserved.
