import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbfprint.ae"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "Printing Press Dubai | SBF Print & Design — Same Day Printing Downtown Dubai",
    template: "%s | SBF Print & Design Dubai",
  },
  description:
    "SBF Print & Design — #1 commercial printing press in Downtown Dubai. Business cards, signage, banners, stickers, 3D letters & custom packaging. Same-day printing & delivery across Dubai & UAE. Call +971 56 816 7269.",
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
    description: "Same-day commercial printing in Downtown Dubai — business cards, signage, banners & more. +971 56 816 7269.",
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
        "description": "SBF Print & Design is Downtown Dubai's leading commercial printing press offering business cards, 3D signage, banners, stickers, packaging, and same-day printing across Dubai & UAE.",
        "telephone": "+9710525069091",
        "email": "sbfprintdesing@gmail.com",
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
          "latitude": 25.1972,
          "longitude": 55.2744,
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
        "description": "Commercial printing press in Downtown Dubai offering same-day printing for business cards, signage, banners, stickers, packaging and more.",
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
            "acceptedAnswer": { "@type": "Answer", "text": "SBF Print & Design is located in Downtown Dubai, UAE. We offer same-day delivery across all Dubai areas including Business Bay, DIFC, JBR, Deira, and all 7 UAE Emirates." },
          },
          {
            "@type": "Question",
            "name": "Do you offer same-day printing in Dubai?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer same-day and express 2-hour printing for business cards, flyers, stickers, roll-up stands, and most marketing materials across Downtown Dubai and Business Bay." },
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
        <meta name="geo.position" content="25.1972;55.2744" />
        <meta name="ICBM" content="25.1972, 55.2744" />
        <link rel="canonical" href="https://sbfprint.ae" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PR8GVW9C');`}
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
        {children}
      </body>
    </html>
  );
}
