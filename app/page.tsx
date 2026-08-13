import Navbar from "@/components/Navbar";
import HomeMainView from "@/components/HomeMainView";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";

export const dynamic = "force-static";

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
