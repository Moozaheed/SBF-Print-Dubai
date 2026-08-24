import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivacyPolicyView from "@/components/PrivacyPolicyView";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | SBF Print & Design Dubai",
  description:
    "Read the Privacy Policy, Delivery Terms, and Quality Guarantee for SBF Print & Design Dubai. We protect customer data, guarantee secure transactions, and provide UAE-wide delivery.",
  alternates: { canonical: "https://sbfprint.ae/privacy-policy" },
  openGraph: {
    title: "Privacy Policy & Terms | SBF Print & Design Dubai",
    description:
      "Privacy Policy, Delivery Terms & Quality Guarantee for SBF Print & Design Dubai.",
    url: "https://sbfprint.ae/privacy-policy",
    type: "website",
    siteName: "SBF Print And Design",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyPolicyView />
      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
