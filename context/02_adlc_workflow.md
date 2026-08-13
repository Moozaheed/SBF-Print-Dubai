# 02 — AWS ADLC (Application Development Life Cycle) Workflow & Governance

## 1. AWS ADLC Overview & Architectural Lifecycle

The development of the **SBF Print And Design** platform is executed following the **AWS ADLC (Application Development Life Cycle)** framework. This framework guarantees structured, verifiable, and predictable progress across every phase of system creation.

```mermaid
flowchart LR
    P1[Phase 1: Context & Requirements] --> P2[Phase 2: System & DB Architecture]
    P2 --> P3[Phase 3: Core Infrastructure & Design System]
    P3 --> P4[Phase 4: Pricing Calculator & Pre-Flight Engine]
    P4 --> P5[Phase 5: Page-Wise Componentry & Showcase]
    P5 --> P6[Phase 6: Checkout Pipeline & Invoice Generator]
    P6 --> P7[Phase 7: Store Manager Admin Portal]
    P7 --> P8[Phase 8: Ads Engine, SEO & Analytics]
    P8 --> P9[Phase 9: Verification & Production Release]
```

---

## 2. ADLC Phase Roadmap & Task Backlog Matrix

| Phase | Description | Key Deliverables | Verification Gate | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1** | Requirements & Context Ingestion | Setup `context/` directory with project overview, page specs, backend specs, pricing engine specs, and SEO matrix. | Complete context files written in project root | **COMPLETED** |
| **Phase 2** | Architecture & Data Schemas | Database entity definitions (Postgres), Dynamic pricing mathematical formula models, API contract definitions. | Validated TypeScript interfaces & DB schema docs | **COMPLETED** |
| **Phase 3** | Core Infrastructure & UI System | Next.js 15 App Router setup, Tailwind CSS theme tokens, Shadcn UI primitive components, Lucide icons. | Build succeeds without error, sub-second initial load | **READY** |
| **Phase 4** | Pricing Calculator & Proofing Engine | 4-step embedded calculator, standard presets + custom dimensions, GSM paper stock selection, real-time formula update, pre-flight file check engine (DPI, CMYK). | Real-time price updates < 16ms, pre-flight warning triggers on invalid files | **READY** |
| **Phase 5** | Page-Wise Componentry & Showcase | Homepage sections 1-10, `/portfolio` filterable masonry grid, `/about` machinery showcase, `/sample-kit` 3-field form, `/contact` Dubai map & WhatsApp. | Responsive viewport validation (mobile 375px & desktop 1440px) | **READY** |
| **Phase 6** | E-Commerce & Checkout Pipeline | 1-Page distraction-free checkout, guest checkout, B2B cash/bank transfer, Stripe online gateway simulation, automated PDF invoice generation, order confirmation page. | Successful checkout loop test with PDF generation | **READY** |
| **Phase 7** | Store Manager Admin Portal | `/admin/pricing` matrix manager, `/admin/orders` pipeline tracker (5 stages), `/admin/artwork` approval module, `/admin/portfolio` CMS manager, `/admin/leads` CSV export. | CRUD operations on pricing matrix & order status transitions | **READY** |
| **Phase 8** | Google Ads Engine & Technical SEO | Dedicated LP routes (`/lp/business-cards`), Google Merchant Center XML/JSON feed (`/api/feed.xml`), JSON-LD schema markup, GTM conversion event hooks. | Feed validation & JSON-LD schema parsing check | **READY** |
| **Phase 9** | Production Audit & Verification | Performance testing (LCP < 1.2s, CLS < 0.1), mobile touch target audit (min 48px), cross-browser validation, final user delivery. | Zero linter/type errors, production bundle verification | **READY** |

---

## 3. ADLC Quality Assurance & Governance Rules

1. **Pre-Flight Validation Guarantee**: No print order can be transition to `[ In Press ]` without an approved pre-flight status (300 DPI, CMYK color space, valid bleed parameters).
2. **Mobile Target Compliance**: Every button, input, and touch chip must pass a strict min-width/height check of 48px to prevent touch mis-clicks on mobile devices.
3. **Zero Layout Shift Policy**: All dynamic pricing updates, image lazy-loading, and modal overlays must utilize skeleton loaders and aspect-ratio reservation boxes.
4. **Data Privacy & B2B Invoicing**: PDF invoices generated upon purchase must contain legal company details, Dubai VAT formatting compliance, and customer delivery specs.
