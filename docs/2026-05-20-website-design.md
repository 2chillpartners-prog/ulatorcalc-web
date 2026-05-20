# ulator-Calc Marketing Website — Design Spec

**Date:** 2026-05-20  
**Domain:** ulatorcalc.com  
**Repo:** 2chillpartners-prog/ulatorcalc-web  
**Stack:** Next.js (App Router) + Tailwind CSS  
**Host:** Vercel  

---

## Overview

A standalone marketing website for the ulator-Calc mobile app. Separate from the app repo (`ulator-calc`) and the existing legal static pages (`ulator-calc-www`). This site's job is to explain the product, drive App Store downloads, satisfy App Store legal requirements, and provide support pages. A web version of the calculator will be added as a future route — no rebuild required.

---

## Brand Voice & Spirit

| Quote | How it shapes the site |
|-------|----------------------|
| "By framers for framers" | Copy speaks to tradespeople as equals — no generic startup language. The people who built this have been on a job site. |
| "We want to give every professional the digital tools they need" | Inclusive across all 11 trade modes. Every electrician, HVAC tech, chef, and pilot deserves a real tool. |

Tone: Direct. Job-site readable. No fluff. Respect the professional.

---

## Customer Feedback

A `/feedback` page and a homepage section to collect input from tradespeople and potential users.

**Form fields:**
- Name (optional)
- Trade / profession (dropdown: Construction, Electrician, HVAC, Mechanic, Accountant, Pilot, Crane Operator, Chef, Scientist, Other)
- What's your biggest frustration with current calculator apps?
- What would make ulator-Calc a must-have for your work?
- Email (optional, for follow-up)

**Implementation (Phase 1):** Tally.so embed (free tier, no backend needed) or `mailto:` fallback.
**Homepage placement:** After the Modes Grid — "Built for your trade. Tell us what you need."

---

## What We Are NOT Building

- No calculator logic or code from the app
- No RevenueCat / in-app purchase flows
- No backend API
- No authentication
- No duplication of `ulator-calc-www` content (those pages stay as-is)

---

## Domain & Brand

| Item | Value |
|------|-------|
| Primary domain | `ulatorcalc.com` |
| App name on site | `ulator-Calc` |
| App Store listing | `https://apps.apple.com/app/calc-pal/id6759688305` (update when listing is renamed) |
| Support email | `support@ulatorcalc.com` |
| Brand colors | Navy `#0D1B2A`, Amber `#d97706` / `#F5A623`, Text `#C8D6E5` |
| Font | DM Sans (headings + body), JetBrains Mono (numbers/code snippets) |

---

## Site Map

### Phase 1 — Launch (build first)

| Route | Purpose |
|-------|---------|
| `/` | Homepage: hero, features, modes, download CTA |
| `/support` | FAQ + contact email (fixes App Store rejection) |
| `/pricing` | Pro vs free breakdown, App Store CTA |
| `/privacy` | Privacy policy (mirrors `ulator-calc-www/privacy`) |
| `/terms` | Terms of use |
| `/delete-data` | Data deletion instructions |

### Phase 2 — Growth

| Route | Purpose |
|-------|---------|
| `/features` | Deep-dive per major feature |
| `/modes` | One section per trade mode |
| `/download` | Smart redirect: iOS → App Store, Android when ready |
| `/changelog` | Release notes |
| `/feedback` | Customer & potential customer feedback form |

### Phase 3 — SEO + Web App

| Route | Purpose |
|-------|---------|
| `/construction`, `/electrician`, etc. | Per-mode SEO landing pages |
| `/app` | Web version of the calculator (future) |

---

## Homepage Structure

```
┌─────────────────────────────────────────────────────┐
│  NAV: Logo | Features | Pricing | Support | Download │
├─────────────────────────────────────────────────────┤
│  HERO                                                │
│  Headline: "The calculator built for your trade"    │
│  Sub: Exact feet, inches, fractions + AI that       │
│       knows construction, electrical, HVAC & more   │
│  CTA: [Download on App Store]                       │
│  Visual: Phone mockup (dark navy, amber keypad)     │
├─────────────────────────────────────────────────────┤
│  3 FEATURE PILLARS (cards)                           │
│  1. Exact math — 7′-5 3/16″, no float rounding     │
│  2. 11 trade modes — construction, electric, HVAC…  │
│  3. AI assistant — step-by-step, trade-aware (Pro)  │
├─────────────────────────────────────────────────────┤
│  MODES GRID (11 icons, construction featured)        │
│  Construction · Electrician · HVAC · Mechanic        │
│  Accountant · Pilot · Crane · Chef · Scientist       │
│  Detective · Plain                                   │
├─────────────────────────────────────────────────────┤
│  FEATURE DEEP-DIVES (alternating layout)             │
│  • 50+ professional formulas (studs, stairs, etc.)  │
│  • Running tape & calculation history               │
│  • Deep-link sharing — share any calculation        │
│  • Pro: AI chat with trade knowledge                │
├─────────────────────────────────────────────────────┤
│  PRICING TEASER → /pricing                           │
│  Free tier | Pro ($4.99/mo or $49.99/yr, free trial)│
├─────────────────────────────────────────────────────┤
│  AI TRANSPARENCY STRIP                               │
│  "Powered by OpenAI & Deepgram. You control what    │
│   data is shared. See our privacy policy."          │
├─────────────────────────────────────────────────────┤
│  DOWNLOAD CTA (repeat)                               │
│  [App Store badge]                                  │
├─────────────────────────────────────────────────────┤
│  FOOTER                                              │
│  Privacy · Terms · Delete Data · Support             │
│  © 2026 ulator-Calc                                 │
└─────────────────────────────────────────────────────┘
```

---

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#0D1B2A` |
| `--surface` | `#1B2838` |
| `--accent` | `#d97706` |
| `--accent-light` | `#F5A623` |
| `--text` | `#C8D6E5` |
| `--text-muted` | `#8B9CB3` |
| `--radius` | `12px` |

Personality: **rugged, professional, job-site readable**. Not a generic startup gradient page. Large text, high contrast, amber on navy.

---

## Technical Architecture

```
ulatorcalc-web/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage
│   ├── support/page.tsx    
│   ├── pricing/page.tsx    
│   ├── privacy/page.tsx    
│   ├── terms/page.tsx      
│   └── delete-data/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── FeaturePillars.tsx
│   ├── ModesGrid.tsx
│   ├── FeatureDeepDive.tsx
│   ├── PricingTeaser.tsx
│   └── DownloadCTA.tsx
├── content/
│   ├── privacy.mdx         # Legal content as MDX
│   ├── terms.mdx
│   └── delete-data.mdx
├── public/
│   ├── app-icon.png
│   ├── og-image.png        # 1200×630 OG image
│   └── screenshots/        # App screenshots for feature sections
├── lib/
│   └── constants.ts        # APP_STORE_URL, SUPPORT_EMAIL, etc.
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## SEO & Metadata

Every page gets:
- `<title>` and `<meta description>`
- `og:image`, `og:title`, `og:description`
- `twitter:card`
- JSON-LD `SoftwareApplication` schema on homepage
- `sitemap.xml` and `robots.txt` via `next-sitemap`

---

## Integrations

| Service | How |
|---------|-----|
| App Store | Static link in `constants.ts`, update when listing renamed |
| Analytics | Vercel Analytics (privacy-friendly, no cookie banner needed) |
| Contact | `mailto:support@ulatorcalc.com` — no form in v1 |
| Legal pages in app | After DNS moves, update `lib/urls.ts` in the app repo to point to `ulatorcalc.com/privacy` etc. |

---

## App Store Compliance Notes

These are the items Apple flagged — the website directly addresses them:

| Apple Issue | Website fix |
|-------------|-------------|
| Support URL `calc-pal.com/support` broken | `/support` page live on `ulatorcalc.com` |
| AI data sharing not disclosed | AI transparency strip on homepage + privacy page |
| App name mismatch | Site uses "ulator-Calc" consistently |

---

## Relationship to Other Repos

| Repo | Role | Touch it? |
|------|------|-----------|
| `ulator-calc` | The mobile app | No — only update `lib/urls.ts` after DNS switch |
| `ulator-calc-www` | Existing GitHub Pages static legal site | No — leave as-is |
| `ulatorcalc-web` | This project — new marketing site | Yes — build here |

---

## Deployment

1. Connect `ulatorcalc-web` repo to Vercel
2. Vercel auto-deploys every push to `main`
3. Add `ulatorcalc.com` custom domain in Vercel dashboard
4. Update DNS at registrar to point to Vercel
5. SSL handled automatically by Vercel

---

## Phase 1 Build Order

1. Repo setup: Next.js, Tailwind, fonts, design tokens
2. Layout: Nav + Footer shell
3. Legal pages: `/privacy`, `/terms`, `/delete-data`, `/support` (App Store blockers first)
4. Homepage: Hero → Pillars → Modes → Features → Pricing teaser → CTA
5. Pricing page
6. OG image, sitemap, JSON-LD
7. Connect to Vercel, point DNS
