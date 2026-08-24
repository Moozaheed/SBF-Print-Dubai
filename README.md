# SBF Print & Design Dubai

Official website for **SBF Print & Design** — Downtown Dubai's commercial printing press specialising in business cards, 3D signage, banners, stickers, packaging, and same-day printing across Dubai & UAE.

🌐 **Live site:** [sbfprint.ae](https://sbfprint.ae)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Netlify
- **SEO:** Schema.org JSON-LD, Next.js Metadata API, Sitemap, Robots.txt

---

## Features

- 190+ product & service pages with SEO metadata
- Dynamic service detail pages with pricing, reviews & WhatsApp ordering
- Blog with markdown-rendered content and comments
- Full Dubai SEO — LocalBusiness, Product, BlogPosting, FAQPage structured data
- Mobile WhatsApp conversion overlay
- Static sitemap generation
- Google Tag Manager integration

---

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with JSON-LD & GTM
│   ├── page.tsx          # Homepage
│   ├── all-products/     # All products listing page
│   ├── services/[slug]/  # Individual service detail pages
│   ├── blog/             # Blog listing & post pages
│   └── sitemap.ts        # Dynamic sitemap
├── components/           # Reusable UI components
├── data/                 # Product catalog, service details, blogs, reviews
│   ├── serviceDetails.ts # Full detail data for 190+ service pages
│   ├── productsCatalog.ts# Product cards for listing pages
│   ├── megaMenuData.ts   # Navigation & category structure
│   ├── blogs.ts          # Blog posts with content & comments
│   └── reviews.ts        # Customer review pool
└── public/               # Static assets & product images
    ├── products/         # Real product images organised by slug
    └── outdoor-3d-letters/
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

---

## Contact

- **WhatsApp:** +971 052 506 9091
- **Email:** sbfprintdesign@gmail.com
- **Instagram:** [@sbfprint](https://www.instagram.com/sbfprint)
- **Facebook:** [SBF Print & Design](https://www.facebook.com/share/1EnXu9Zsbj/)
- **Location:** Downtown Dubai, UAE
