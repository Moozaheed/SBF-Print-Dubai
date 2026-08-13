import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AllProductsView from "@/components/AllProductsView";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Printing & Signage Services Dubai | SBF Print & Design",
  description: "Browse all printing & signage services in Dubai — business cards, 3D signage, LED neon, banners, stickers, frosted glass, rollup stands, t-shirts, packaging & more. Same-day printing in Downtown Dubai.",
  keywords: [
    "printing services dubai", "signage dubai", "business cards dubai", "3d signage dubai",
    "led neon sign dubai", "banner printing dubai", "sticker printing dubai", "frosted glass dubai",
    "rollup stand dubai", "t-shirt printing dubai", "packaging dubai", "stamp making dubai",
    "parking signage dubai", "elevator sign dubai", "printing company dubai",
  ],
  alternates: { canonical: "https://sbfprint.ae/all-products" },
  openGraph: {
    title: "All Printing & Signage Services Dubai | SBF Print",
    description: "Complete range of commercial printing & signage in Dubai. Same-day delivery across UAE.",
    url: "https://sbfprint.ae/all-products",
  },
};

export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AllProductsView />
      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
