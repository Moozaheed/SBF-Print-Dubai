import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomeMainView from "@/components/HomeMainView";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Printing Press Dubai | SBF Print & Design — Same Day Printing Downtown Dubai",
  description: "SBF Print & Design — #1 commercial printing press in Downtown Dubai. Business cards, 3D signage, LED neon, banners, stickers & custom packaging. Same-day printing & delivery across Dubai & UAE. Call +971 052 506 9091.",
  alternates: {
    canonical: "https://sbfprint.ae",
  },
  openGraph: {
    title: "Printing Press Dubai | SBF Print & Design — Same Day Printing",
    description: "Dubai's leading commercial printing press — business cards, 3D signage, banners, stickers & custom packaging. Same-day printing & delivery. Free artwork check. Call +971 052 506 9091.",
    url: "https://sbfprint.ae",
    images: [
      {
        url: "/portfolio/gold-foil-luxury-card.jpg",
        width: 1200,
        height: 630,
        alt: "SBF Print & Design — Commercial Printing Press Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Press Dubai | SBF Print & Design",
    description: "Same-day commercial printing in Downtown Dubai — business cards, signage, banners & more. +971 052 506 9091.",
    images: ["/portfolio/gold-foil-luxury-card.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeMainView />
      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
