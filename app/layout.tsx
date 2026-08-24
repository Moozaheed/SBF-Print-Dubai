import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbfprint.ae"),
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "Printing Press Dubai | SBF Print & Design — Same Day Printing Deira Dubai",
    template: "%s | SBF Print & Design Dubai",
  },
  description:
    "SBF Print & Design — commercial printing press at Nakheel Centre, Deira Dubai. Business cards, signage, banners, stickers, 3D letters & custom packaging. Same-day printing & delivery across Dubai & UAE. Call +971 56 816 7269.",
  keywords: [
    "printing press dubai",
    "printing company dubai",
    "same day printing dubai",
    "business cards printing dubai",
    "signage company dubai",
    "3d signage dubai",
    "banner printing dubai",
    "sticker printing dubai",
    "flyer printing dubai",
    "digital printing dubai",
    "offset printing dubai",
    "custom printing dubai",
    "vinyl sticker dubai",
    "led neon sign dubai",
    "rollup stand dubai",
    "frosted glass film dubai",
    "t-shirt printing dubai",
    "mug printing dubai",
    "packaging printing dubai",
    "printing downtown dubai",
    "commercial printing uae",
    "SBF Print And Design",
    "sbfprint.ae",
  ],
  authors: [{ name: "SBF Print And Design", url: "https://sbfprint.ae" }],
  creator: "SBF Print And Design",
  publisher: "SBF Print And Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sbfprint.ae",
  },
  openGraph: {
    title: "Printing Press Dubai | SBF Print & Design — Same Day Printing",
    description:
      "Dubai's leading commercial printing press — business cards, 3D signage, banners, stickers & custom packaging. Same-day printing & delivery. Free artwork check. Call +971 56 816 7269.",
    url: "https://sbfprint.ae",
    siteName: "SBF Print And Design",
    images: [
      {
        url: "/portfolio/gold-foil-luxury-card.jpg",
        width: 1200,
        height: 630,
        alt: "SBF Print And Design — Commercial Printing Press Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Press Dubai | SBF Print & Design",
    description: "Same-day commercial printing at Nakheel Centre, Deira Dubai — business cards, signage, banners & more. +971 056 816 7269.",
    images: ["/portfolio/gold-foil-luxury-card.jpg"],
  },
  verification: {
    google: "rcjqTmsiEMzrBvmhymV_wrDy8u17WPkiUWLJ4r-N_gk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "PrintingService"],
        "@id": "https://sbfprint.ae/#business",
        "name": "SBF Print And Design",
        "alternateName": ["SBF Print", "SBF Print Dubai"],
        "url": "https://sbfprint.ae",
        "logo": "https://sbfprint.ae/icon.svg",
        "image": [
          "https://sbfprint.ae/portfolio/gold-foil-luxury-card.jpg",
          "https://sbfprint.ae/commercial-services/3d-signage.jpg",
          "https://sbfprint.ae/commercial-services/business-cards.jpg",
        ],
        "description": "SBF Print & Design is located at Nakheel Centre, Deira Dubai — a leading commercial printing press offering business cards, 3D signage, banners, stickers, packaging, and same-day printing across Dubai & UAE.",
        "telephone": "+971568167269",
        "email": "sbfprintdesign@gmail.com",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Visa, Mastercard, Tabby, Bank Transfer",
        "priceRange": "AED 35 - AED 5000",
        "hasMap": "https://maps.app.goo.gl/E46BUEZRX81Duh6e9",
        "sameAs": [
          "https://maps.app.goo.gl/E46BUEZRX81Duh6e9",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nakheel Centre, Deira",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE",
          "postalCode": "00000",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.2697,
          "longitude": 55.3094,
        },
        "areaServed": [
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "City", "name": "Sharjah" },
          { "@type": "AdministrativeArea", "name": "United Arab Emirates" },
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
            "opens": "08:00",
            "closes": "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday"],
            "opens": "09:00",
            "closes": "18:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "287",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Printing & Signage Services Dubai",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Card Printing Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Signage Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Banner Printing Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sticker Printing Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Neon Signs Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Packaging Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frosted Glass Film Dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stamp Making Dubai" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sbfprint.ae/#website",
        "url": "https://sbfprint.ae",
        "name": "SBF Print & Design Dubai",
        "description": "Commercial printing press at Nakheel Centre, Deira Dubai offering same-day printing for business cards, signage, banners, stickers, packaging and more.",
        "publisher": { "@id": "https://sbfprint.ae/#business" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://sbfprint.ae/all-products?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is SBF Print & Design located in Dubai?",
            "acceptedAnswer": { "@type": "Answer", "text": "SBF Print & Design is located at Nakheel Centre, Deira Dubai, UAE. We offer same-day delivery across all Dubai areas including Business Bay, DIFC, JBR, and all 7 UAE Emirates." },
          },
          {
            "@type": "Question",
            "name": "Do you offer same-day printing in Dubai?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer same-day and express 2-hour printing for business cards, flyers, stickers, roll-up stands, and most marketing materials from our Nakheel Centre, Deira Dubai location across all major UAE business hubs." },
          },
          {
            "@type": "Question",
            "name": "What printing services does SBF Print offer in Dubai?",
            "acceptedAnswer": { "@type": "Answer", "text": "SBF Print offers business card printing, 3D signage, LED neon signs, banner printing, sticker printing, frosted glass film, vehicle wrapping, t-shirt printing, custom packaging, stamps, parking signage, elevator signs, and much more — all in Dubai." },
          },
          {
            "@type": "Question",
            "name": "What is the turnaround time for printing orders?",
            "acceptedAnswer": { "@type": "Answer", "text": "Standard turnaround is 24-48 hours. Same-day and express delivery is available for most products. Signage and 3D letters take 2-5 business days depending on complexity." },
          },
          {
            "@type": "Question",
            "name": "Do you deliver printing orders across UAE?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We deliver to all 7 UAE Emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain via Aramex and local couriers." },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2697;55.3094" />
        <meta name="ICBM" content="25.2697, 55.3094" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PR8GVW9C');`}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18394263279"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18394263279');`}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-white text-zinc-900 antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PR8GVW9C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
