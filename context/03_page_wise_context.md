# 03 — Comprehensive Page-Wise Context & Component Specification

## Overview

This document provides the exhaustive specification for every user-facing page, embedded section, interactive widget, admin screen, and ad landing route in the **SBF Print And Design** application.

---

## 1. Homepage (`/`) — Section-by-Section Context

### Section 1: Hero Section (Above the Fold)
- **Goal**: Instantly capture Google Ads & organic traffic, build local trust in Dubai, and drive conversion actions.
- **Primary Headline**: `"Premium Printing & Custom Packaging Delivered in 48 Hours"`
- **Subheadline Value Highlights**: (Rendered using Lucide `<Check />` icons in green)
  - `<Check className="w-4 h-4 text-emerald-500" /> High-DPI Offset & Digital Print`
  - `<Check className="w-4 h-4 text-emerald-500" /> Free File Pre-flight Check (300 DPI & CMYK Verification)`
  - `<Check className="w-4 h-4 text-emerald-500" /> Eco-Friendly Inks & Recycled Paper Stock`
- **Dual Primary CTAs**:
  1. `[ Calculate Price / Instant Quote ]` (Triggers scroll to homepage calculator widget or links to `/calculator`)
  2. `[ Request Free Sample Kit ]` (Direct trigger to sample kit modal or `/sample-kit`)
- **Social Proof Banner**: Embedded strip under CTAs displaying corporate client logos (Emaar, Nakheel, Emirates B2B partners) and Lucide `<Star />` ratings: `4.9/5 Rating from 250+ Google Reviews in Dubai`.

### Section 2: Interactive Quick Price Calculator Widget (Advanced UI & Sliders)
- **Goal**: Provide instant price transparency with rich, interactive UI controls (Sliders, Glassmorphism, Real-Time Animated Counters).
- **Glassmorphism Container**: Frosted glass card UI (`backdrop-blur-md bg-white/90 shadow-2xl border border-zinc-200/80 rounded-2xl`).
- **Interactive Controls & Sliders**:
  1. **Product Dropdown & Visual Cards**: Business Cards, Flyers, Banners, Custom Packaging Boxes, Corporate Folders.
  2. **Interactive Dimension Sliders & Presets**: Standard dimension chips + dual interactive Width x Height range sliders (1" to 100") with live aspect-ratio canvas box preview.
  3. **Paper Stock GSM Slider & Chips**: Tactile paper GSM selection slider (100 GSM to 800 GSM) with thickness badges.
  4. **Finishing Selector Grid**: Glassmorphic selection cards for Gloss, Matte, Spot UV, Gold Foil, Silver Foil.
  5. **Quantity Tier Range Slider**: Smooth interactive volume slider (100, 250, 500, 1000, 2500, 5000 units) with animated discount badge.
- **Animated Live Price Counter**: Total price updates in real-time with smooth number counter animation and breakdown tooltip showing unit price vs total cost in AED/USD.
- **Direct Action Button**: `[ Upload File & Order Now <ArrowRight className="w-4 h-4 ml-2" /> ]` with subtle pulse micro-animation.

### Section 3: Core Printing Services Grid & Mobile Carousel (Expanded Categories)
- **Goal**: Enable single-tap category browsing for all commercial, event, signage, and merchandise printing solutions.
- **12 Product Categories**:
  1. **Luxury Business Cards**: 350-750 GSM velvet touch, gold foil, spot UV, rounded corners.
  2. **Flyers & Pamphlets**: Vibrant A4, A5, DL leaflets on high-gloss or matte art paper.
  3. **Round & Glass/Frosted Stickers**: Waterproof die-cut stickers, clear glass stickers, frosted office glass decals.
  4. **Self-Ink Rubber Stamps**: Sharp impressions for company logos, commercial verification, and official press seals.
  5. **Booklets & Catalogs**: Saddle-stitched booklets, company profiles, and exhibition marketing brochures.
  6. **Shopping Bags & Tote Bags**: Eco-friendly branded paper bags and canvas tote bags for retail boutiques & events.
  7. **Event Roll-Up Standies & Backdrops**: High-DPI retractable rollup banners, media backdrops, and exhibition displays.
  8. **Event Lanyards & Table Tents**: Branded event lanyards, ID badges, table tent cards, and custom printed tablecloths.
  9. **3D LED Signage & Reception Signs**: 3D acrylic letters, LED neon signs, reception wall signs, and acrylic door name plates.
  10. **Branded T-Shirts & Apparel**: Custom printed corporate T-shirts, polo shirts, and staff uniforms.
  11. **Tumblers & Mugs**: Custom stainless steel thermal tumblers, ceramic mugs, and beverage merchandise.
  12. **Notebooks, Pens & Corporate Gifts**: Hardcover branded notebooks, executive pens, caps, and promotional gift sets.

---

### Section 7.5: Frequently Asked Questions (FAQ Accordion)
- **Goal**: Address common commercial printing questions and boost conversions.
- **Interactive FAQ Accordion (7 Core Questions)**:
  1. **Why choose SBF Print over other companies in Dubai?**: Serving Dubai businesses since 2012 with Heidelberg & HP Indigo machinery, color accuracy assurance, and 48-hour delivery.
  2. **Do you offer same-day or urgent printing?**: Yes, emergency same-day dispatch available for business cards, banners, stickers, and flyers.
  3. **What payment methods do you accept?**: Visa, Mastercard, Apple Pay, Google Pay, Tabby, Tamara BNPL, and B2B Cash/Bank Transfer on pickup.
  4. **What is the standard turnaround time?**: Standard dispatch in 48 hours; express same-day production available.
  5. **Do you offer delivery across Dubai & the UAE?**: Yes, door delivery across Dubai, Abu Dhabi, Sharjah, and all 7 UAE Emirates.
  6. **How do I place an order?**: Select specs in the online calculator, upload artwork (or request designer help), approve digital proof online.
  7. **Can you handle custom die-cut and 3D signage installation?**: Yes, full 3D LED signage, acrylic door name plates, and frosted glass sticker installation in Dubai.

### Section 4: Portfolio & Client Work Showcase Carousel
- **Goal**: Provide tangible proof of print sharpness, paper weight feel, and finishing quality using an interactive carousel.
- **Category Filter Tabs**: `[ All ]`, `[ Packaging ]`, `[ Cards ]`, `[ Banners ]`, `[ Foil & Special Finishes ]`.
- **Interactive Carousel & Lightbox**: High-res touch-swipe Carousel with slide transitions, click-to-zoom modal capability, and autoplay option.
- **Spec Overlay Badges**: Badges on hover detailing exact specs used: e.g. `350 GSM Velvet | Gold Foil | Spot UV`.
- **CTA Button**: `[ Explore Full Portfolio Page <ArrowRight /> ]`.

### Section 5: "Why Print With Us" & Machinery Showcase Carousel
- **Goal**: Eliminate B2B risk for corporate buyers by demonstrating machine capabilities via an interactive equipment carousel.
- **Machinery Fleet Carousel**: Interactive slides showcasing Heidelberg Offset 4-Color, HP Indigo Digital Press, and Roland Wide-Format Vinyl Plotters.
- **4 Value Props (Icon + Feature)**:
  1. **Color Precision Guarantee**: Calibrated high-DPI offset and digital machinery.
  2. **Express 48-Hour Turnaround**: Same-day emergency printing and 48-hour standard dispatch across UAE.
  3. **Free Pre-flight File Check**: Automatic validation of 300 DPI resolution, bleed lines, and CMYK color space.
  4. **Eco-Conscious Materials**: FSC-certified recycled paper stocks and non-toxic soy-based inks.

### Section 6: How It Works (3-Step Simple Process)
- **Step 1: Choose & Calculate**: Pick dimensions, paper stock, finishing, and view transparent bulk pricing.
- **Step 2: Upload Design**: Drag & drop .pdf / .ai artwork or check `"I need a designer (+ Fee)"`.
- **Step 3: Fast Delivery**: Instant artwork proof approval, press execution, and door delivery across Dubai & UAE.

### Section 7: Customer Reviews & Case Studies Carousel
- **Google Reviews Carousel**: Interactive touch-swipe testimonial carousel displaying real client quotes, star counts (using Lucide `<Star />`), and verified buyer badges.
- **Corporate Case Spotlights**: Quotes from Dubai agency procurement heads highlighting print precision and delivery speed with smooth slide transitions.

### Section 8: Free Paper Sample Kit Lead Magnet
- **Visual Banner**: Physical sample kit folder showcasing paper weights (100 GSM to 350 GSM), velvet lamination, gold foil, and spot UV swatches.
- **3-Field Form**: Name, Address, Mobile Number + `[ Get Free Sample Pack ]` action button.

### Section 9: Footer & Local SEO Schema
- **Company Details**: SBF Print And Design, Downtown, Dubai, UAE, 0000. Phone & WhatsApp: +971 052 506 9091, Email: sbfkarim@gmail.com.
- **Google Map Embed**: Interactive location viewer for physical press pick-up.
- **SEO Keyword Navigation**: Direct clean links to print categories.
- **Security & Payment Badges**: SSL Encryption, Visa, Mastercard, Apple Pay, Stripe, Cash / Bank Transfer on Pickup.

### Section 10: Persistent Mobile Conversion Overlays (Advanced Glassmorphism)
- **Sticky Bottom Bar (Mobile Viewports Only)**: Fixed frosted glass bar (`backdrop-blur-lg bg-zinc-900/90 text-white border-t border-zinc-800 p-3 shadow-2xl`):
  `[ <MessageSquare className="w-4 h-4 text-emerald-400 mr-2" /> WhatsApp Direct ]` (Deep link to `https://wa.me/971525069091`) | `[ <Zap className="w-4 h-4 text-amber-400 mr-2" /> Instant Quote ]` (Triggers quote modal).
- **Floating Back-to-Top Button**: Smooth scroll back to top navigation with `<ArrowUp className="w-5 h-5" />` icon and hover glass elevation.

---

## 2. Dynamic Printing Calculator Page (`/calculator`)

- **Full Price Calculator Engine**:
  - **Product Selection**: Business Cards, Flyers, Brochures, Banners, Rigid Boxes, Labels.
  - **Dimensions**: Standard Presets (A4, A5, 3.5"x2", 8.5"x11") + Custom Width x Height (Inches / CM).
  - **Paper Stock**: 100 GSM Bond, 150 GSM Gloss, 300 GSM Matte, 350 GSM Velvet, 400 GSM Kraft, Rigid Board, Vinyl Banner.
  - **Finishing Options**: Matte Lamination, Gloss Lamination, Spot UV, Gold Foil, Silver Foil, Die-Cut Corners, Embossing.
  - **Sides**: Single-Sided (4/0) vs. Double-Sided (4/4).
  - **Quantity Tiers**: 100, 250, 500, 1000, 2500, 5000 units.
- **Real-Time Price Engine**: Updates price total instantaneously (< 16ms) without full-page reloads.
- **Price Breakdown Tooltip**: Displays base paper cost + square-inch ink cost + finishing add-on + volume tier discount breakdown.

---

## 3. Artwork Upload & Pre-Press Proofing Module (`/artwork`)

- **Drag & Drop Upload Zone**: Accepts `.pdf`, `.ai`, `.psd`, `.png`, `.jpg` up to 100MB per file.
- **Pre-Flight File Checks**:
  - Resolution Warning: Checks if resolution is under 300 DPI and flags low-res warning.
  - Color Mode Check: Flags RGB color space and recommends CMYK conversion for press accuracy.
  - Bleed & Margin Check: Validates 3mm bleed margin safety boundaries.
- **Post-Purchase Artwork Selection**:
  - Option A: `"Upload Artwork Now"`
  - Option B: `"Send Artwork Later via Email (sbfkarim@gmail.com) / WhatsApp (+971 052 506 9091)"`
- **Designer Help Request**: Checkbox `"I need a designer to create or fix my layout (+ AED 100 Fee)"`.

---

## 4. Portfolio & Showcase Page (`/portfolio`)

- **Filterable Category Tabs**: Business Cards, Corporate Packaging, Large Format Banners, Brochures, Foil Specials.
- **High-Res Lightbox Modal**: Zoomable physical press sample photos.
- **Spec Badges**: Tags detailing paper weight, finishing, and machine used.
- **Direct Action Link**: `[ Order This Exact Style ]` — Auto-populates the `/calculator` with the portfolio item's specs.

---

## 5. About Us & Machinery Showcase (`/about`)

- **Equipment Fleet**:
  - Offset Press: Heidelberg Speedmaster 4-Color (High-volume corporate runs).
  - Digital Press: HP Indigo Digital Press (Fast 24-hr short runs).
  - Wide-Format: Roland & Mimaki Eco-Solvent Vinyl Banners & Plotters.
- **Quality Badges**: Color Accuracy Assurance, Same-Day Emergency Dispatch, Eco-Friendly Non-Toxic Soy Inks.
- **Client Logo Showcase**: Emaar, Damac, Nakheel, Emirates B2B procurement logos.

---

## 6. Free Sample Kit Page (`/sample-kit`)

- **Low-Friction Form**: 3 inputs (Full Name, Delivery Address in UAE, Contact Mobile Number).
- **Physical Sample Content**: Paper stock swatch book (100 GSM to 350 GSM), matte/gloss lamination samples, gold/silver foil swatches, and spot UV tactile cards.

---

## 7. Contact & Physical Press Location (`/contact`)

- **Interactive Map**: Google Maps embed for Downtown, Dubai, UAE location.
- **Direct Contact Info**: Phone & WhatsApp (+971 052 506 9091), Email (sbfkarim@gmail.com).
- **Instant WhatsApp Chat Widget**: Floating responsive widget launching direct chat.

---

## 8. E-Commerce & Checkout Pipeline (`/checkout` & `/order-confirmation`)

- **Distraction-Free 1-Page Checkout**: Header and footer main menus removed to prevent checkout drop-off.
- **Guest Checkout**: Allows instant checkout without requiring user account creation.
- **Payment Gateway Integrations**:
  - Credit / Debit Card (Stripe integration mock).
  - Cash / Bank Transfer on Pick-up for corporate B2B clients.
- **Automated PDF Invoice Generation**: Auto-generated PDF invoice emailed to client upon order placement.
- **Instant Order Confirmation Page (`/order-confirmation`)**: Displays order ID, full print specs, file pre-flight status, payment status, and estimated delivery date.

---

## 9. Store Manager Admin Portal (`/admin/*`)

- **`/admin/pricing` — Dynamic Pricing Matrix Manager**: UI to adjust paper stock costs, per-square-inch banner rates, finishing fees, and tier discount percentages without touching code.
- **`/admin/orders` — Print Order Pipeline Tracker**: 5-stage pipeline tracker:
  `[ Order Received ] ➔ [ Artwork Review ] ➔ [ In Press ] ➔ [ Quality Check ] ➔ [ Ready for Pickup / Shipped ]`.
- **`/admin/artwork` — Artwork Approval Module**: Admin tool to inspect uploaded client files, mark proof as Approved/Rejected, or upload modified pre-press proofs for client confirmation.
- **`/admin/portfolio` — Portfolio CMS Manager**: Drag-and-drop builder to upload new project photos, select material tags, and publish directly to `/portfolio`.
- **`/admin/leads` — Client & Lead Management CRM**: View customer orders, sample kit requests, and export leads to CSV.

---

## 10. Dedicated Google Ads Landing Page Routes (`/lp/*`)

- **`/lp/business-cards`**: High-converting, streamlined landing route focused exclusively on custom business cards.
- **`/lp/custom-packaging`**: Dedicated landing route for corporate boxes and packaging with zero header distractions to maximize Google Ads Quality Score.
