# SBF Print And Design — Context Architecture & ADLC Master Index

Welcome to the master context repository for **SBF Print And Design**. This folder contains the complete, single-source-of-truth technical, functional, page-by-page, and backend context specifications for building the high-converting printing e-commerce platform and store manager admin portal.

---

## 🏢 Business & Contact Identity

- **Company Name**: SBF Print And Design
- **Address**: Down town, Dubai, United Arab Emirates, 0000
- **Mobile & WhatsApp**: +971 052 506 9091
- **Email**: sbfkarim@gmail.com
- **Core Market**: Dubai, UAE & GCC Corporate B2B and Direct B2C Printing & Packaging Market

---

## 📁 Context File Structure & Sitemap

The context directory is structured following the **AWS ADLC (Application & Agentic Development Life Cycle)** standards:

```text
context/
├── README.md                          # Master context index, business identity, and ADLC sitemap (This file)
├── 01_project_overview.md             # Business scope, technical stack, target personas, and design tokens
├── 02_adlc_workflow.md                # AWS ADLC workflow phases, task backlog, verification criteria, and governance
├── 03_page_wise_context.md            # Detailed specs for Homepage, Calculator, Artwork Pre-Flight, Portfolio, Checkout, LP routes
├── 04_backend_and_database_context.md # Database schemas, API endpoints, S3/Cloudinary storage, PDF invoice generator, Admin APIs
├── 05_pricing_engine_matrix.md        # Mathematical pricing formulas, GSM multipliers, finishing fees, tier discount curves
├── 06_seo_ads_analytics_context.md    # GTM/Conversion API, Google Ads LP tracking, Merchant Feed XML/JSON, JSON-LD schemas
├── 07_portfolio_showcase_matrix.md   # Catalog & specs for 12 unzipped real client work samples & vector templates
├── 08_client_logos_matrix.md         # Catalog & specs for 10 authentic Dubai & UAE corporate client logos
└── 09_payment_and_maps_context.md    # Verified Google Maps profile URL & Visa/Mastercard/Apple Pay/Google Pay/Tabby/Tamara options
```

---

## ⚙️ Core Technical Infrastructure Stack

| Layer | Technology | Specification / Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | React 19, TypeScript, Server Components & Route Handlers |
| **Styling** | Tailwind CSS + Shadcn UI | Minimalist theme, dark charcoal typography, high-contrast CTAs (#F97316 orange / #22C55E green) |
| **Icons & UI** | Lucide React | Clean, scalable vector icons with zero layout shift |
| **Database** | PostgreSQL (Supabase / Neon) | Relational store for products, pricing matrices, orders, artworks, and CRM leads |
| **Cache & Engine** | Redis | Sub-millisecond caching for real-time printing price calculation engine |
| **Admin CMS** | Payload CMS 3.0 / Custom Admin | Embedded in Next.js for pricing matrix manager, order tracker, and portfolio CMS |
| **Storage & Proofing** | AWS S3 / Cloudinary | Vector PDF/AI thumbnail rendering and pre-press file upload storage |
| **Hosting & Edge** | Vercel / Cloudflare Pages | Sub-second Global TTFB, Edge SSR, dynamic image compression |

---

## 🎯 AWS ADLC (Application Development Life Cycle) Workflow Principles

1. **Context First**: No code implementation without full context alignment recorded in this `context/` directory.
2. **Zero Emoji Policy**: **STRICT RULE**: Do NOT use any native Unicode emojis in the UI. Always use vector SVG icons from `lucide-react` for all visual cues, ratings, action buttons, and badges.
3. **Immutable Traceability**: Every route, API, pricing formula, and component spec maps directly to user-validated requirements.
4. **Pre-Press Reliability**: File pre-flight checks (DPI, color mode, bleed) are guaranteed prior to order state transition.
5. **Sub-Second Performance**: Zero Cumulative Layout Shift (CLS < 0.1), instant pricing calculation without page reloads.
6. **Conversion Optimization**: Frictionless 1-page guest checkout, fixed mobile conversion overlay bars, and native WhatsApp integration.
