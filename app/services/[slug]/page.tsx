import { notFound } from "next/navigation";
import { SERVICE_DETAILS_MAP } from "@/data/serviceDetails";
import Navbar from "@/components/Navbar";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS_MAP[slug];
  if (!service) return { title: "Service Not Found - SBF Print" };

  const canonicalUrl = `https://sbfprint.ae/services/${slug}`;

  return {
    title: `${service.title} | Same Day Printing Dubai | SBF Print`,
    description: `${service.subtitle} Free artwork check. Same-day & 48-hour delivery across Dubai & all UAE Emirates. Call +971 56 816 7269.`,
    keywords: [
      `${service.title.toLowerCase()}`,
      `${service.title.toLowerCase()} dubai`,
      `${service.title.toLowerCase()} uae`,
      "printing dubai",
      "same day printing dubai",
      "printing press dubai",
      "sbf print dubai",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${service.title} | SBF Print & Design Dubai`,
      description: `${service.subtitle} Same-day production & delivery across Dubai & UAE.`,
      url: canonicalUrl,
      images: [{ url: `https://sbfprint.ae${service.heroImage}`, width: 1200, height: 630, alt: service.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | SBF Print Dubai`,
      description: service.subtitle,
      images: [`https://sbfprint.ae${service.heroImage}`],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS_MAP[slug];

  if (!service) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": service.title,
        "description": service.description,
        "image": `https://sbfprint.ae${service.heroImage.startsWith("/") ? service.heroImage : "/" + service.heroImage}`,
        "brand": { "@type": "Brand", "name": "SBF Print & Design" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "AED",
          "price": service.pricingPackages?.[0]?.price?.replace(/[^0-9.]/g, "") || "35",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "SBF Print And Design" },
          "areaServed": { "@type": "City", "name": "Dubai" },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sbfprint.ae" },
          { "@type": "ListItem", "position": 2, "name": "All Products", "item": "https://sbfprint.ae/all-products" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://sbfprint.ae/services/${slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar />
      <ServiceDetailContent service={service} />
      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
