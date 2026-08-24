import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import QuoteRequestView from "@/components/QuoteRequestView";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Request a Quotation | SBF Print & Design Dubai",
  description:
    "Get a fast official quote for commercial printing, 3D building signage, luxury business cards, custom packaging & LED neon in Dubai. 30-minute rapid response & same-day delivery.",
  keywords: [
    "request quote printing dubai",
    "printing quotation dubai",
    "signage quotation dubai",
    "business cards quote dubai",
    "custom packaging quotation dubai",
    "same day printing dubai",
    "sbf print dubai",
  ],
  alternates: { canonical: "https://sbfprint.ae/request-quote" },
  openGraph: {
    title: "Request a Quotation | SBF Print & Design Dubai",
    description:
      "Get a fast official quote for commercial printing & 3D signage in Dubai within 30 minutes.",
    url: "https://sbfprint.ae/quote",
    images: [
      {
        url: "https://sbfprint.ae/portfolio/gold-foil-luxury-card.jpg",
        width: 1200,
        height: 630,
        alt: "SBF Print & Design — Request a Quotation Dubai",
      },
    ],
    type: "website",
    siteName: "SBF Print And Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quotation | SBF Print & Design Dubai",
    description:
      "Get a fast official quote for commercial printing & 3D signage in Dubai within 30 minutes.",
    images: ["https://sbfprint.ae/portfolio/gold-foil-luxury-card.jpg"],
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <QuoteRequestView />
      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
