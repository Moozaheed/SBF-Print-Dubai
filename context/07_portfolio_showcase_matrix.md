# 07 — User-Facing Portfolio & Sample Showcase Matrix

## Overview

The extracted assets from `content/` contain **12 real client work samples and high-res vector design templates**. Each item has been cataloged into the platform matrix for deployment on:
1. **Homepage Portfolio Carousel (Section 4)**: Displaying top showcase cards with spec badges and zoom lightboxes.
2. **Full Portfolio Gallery Page (`/portfolio`)**: Category-filterable masonry grid.
3. **Preset Calculator Auto-Fill**: Clicking `[ Order This Exact Style ]` on any item auto-prefills the `/calculator` with the item's exact dimensions, paper stock, finishing, and pricing.

---

## 📋 Cataloged Sample Works Matrix

| # | Item Title & ID | Category | Paper Stock & GSM | Finishing & Specs | Vector Files | Starting Price | Portfolio Usage |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Premium Metallic Gold Foil Luxury Card**<br>`gold-foil-luxury-card` | Foil & Specialty Finishes | 350 GSM Velvet Touch | Hot Stamped Metallic Gold Foil (4/4) | `.ai`, `.eps` | AED 120 / 100 pcs | **Featured Hero Carousel & Luxury Filter** |
| **2** | **Luxury Gold Accent Business Card**<br>`elegant-gold-accent-card` | Foil & Specialty Finishes | 350 GSM Velvet Stock | Precision Gold Foil & Matte Laminate | `.ai`, `.eps` | AED 115 / 100 pcs | **Foil Filter & Special Finishes** |
| **3** | **Spot UV Professional Velvet Card**<br>`professional-elegant-business-card` | Corporate Cards | 350 GSM Velvet Stock | Spot UV Logo Highlight & Soft Touch | `.eps` | AED 90 / 100 pcs | **Homepage Showcase & Corporate Filter** |
| **4** | **Abstract Executive Photo Card**<br>`abstract-executive-photo-card` | Executive & Cards | 350 GSM Soft-Touch | Soft-Touch Lamination + Photo Slot | `.ai`, `.eps` | AED 85 / 100 pcs | **Executive Category & Photo Print** |
| **5** | **Real Estate Executive Card**<br>`template-photo-executive-card` | Executive & Cards | 350 GSM Velvet Card | Velvet Lamination & Photo Coating | `.ai`, `.eps` | AED 80 / 100 pcs | **Real Estate & Executive Showcase** |
| **6** | **Creative Agency Yellow Card**<br>`creative-agency-yellow-card` | Creative & Agency | 350 GSM Silk Art | Vibrant Yellow Offset Ink & Matte | `.eps` | AED 75 / 100 pcs | **Creative Category Filter** |
| **7** | **Modern Professional Dark Charcoal Card**<br>`modern-professional-card-charcoal` | Corporate Cards | 350 GSM Matte Stock | Spot UV Highlight & Dark Charcoal | `.eps` | AED 70 / 100 pcs | **Corporate Cards Showcase** |
| **8** | **Medical & Healthcare Visiting Card**<br>`modern-medical-doctor-card` | Corporate Cards | 300 GSM Matte Stock | Spot UV Logo & Clean CMYK Offset | `.eps` | AED 65 / 100 pcs | **Medical & Corporate Category** |
| **9** | **Abstract Green Eco Visiting Card**<br>`abstract-green-eco-visiting-card` | Eco & Corporate Cards | 300 GSM Eco Recycled | Non-Toxic Soy-Based Green Ink | `.eps` | AED 65 / 100 pcs | **Eco-Friendly Printing Showcase** |
| **10** | **Flat Geometry Abstract Corporate Card**<br>`flat-abstract-geometry-card` | Corporate Cards | 300 GSM Silk Stock | Satin Soft Finish & 4/4 Offset | `.ai`, `.eps` | AED 60 / 100 pcs | **Stationery & Standard Cards** |
| **11** | **Modern Minimalist Business Card**<br>`modern-minimalist-business-card` | Corporate Cards | 300 GSM Matte Stock | Precision Clean Edge Trim | `.eps` | AED 55 / 100 pcs | **Standard Corporate Cards** |
| **12** | **Corporate Employee ID & Lanyard Pass**<br>`corporate-id-card-stationery` | Corporate Stationery | 400 GSM Laminated PVC | Gloss Heavy Lamination & Slot | `.eps` | AED 150 / 50 pcs | **Corporate Stationery & PVC Pass** |

---

## 🎨 Interactive User-Facing Features for Unzipped Works

1. **Spec Overlay Badges**: Each unzipped item displays badges on hover detailing exact paper stock (`350 GSM Velvet`), finishing (`Gold Foil / Spot UV`), and vector availability (`AI/EPS Ready`).
2. **Click-to-Zoom Lightbox**: Users can tap any image to view the unzipped high-res preview `.jpg` in full screen with zoom controls.
3. **`[ Order This Exact Style ]` Direct Link**: Clicking this action button on any unzipped portfolio item pre-populates the interactive price calculator with:
   - Selected Product Category
   - Exact GSM Paper Stock ID
   - Selected Finishing Option ID
   - Preset Dimensions & Unit Quantity

---

## 📁 Storage & Asset Locations

- **Source Unzipped Directories**: `content/extracted/` (Contains vector `.ai` and `.eps` press-ready files)
- **Web-Ready Images**: `content/portfolio_showcase/` (Organized clean `.jpg` assets)
- **JSON Metadata**: `context/07_portfolio_showcase_matrix.json`
