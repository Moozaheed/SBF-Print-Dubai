"use client";

import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  startingPrice: string;
  turnaround: string;
  badge: string;
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "business-cards",
    title: "Urgent Business Cards (350-750 GSM)",
    description: "Luxury business cards with gold foil, spot UV, matte lamination, and rounded corners.",
    image: "/commercial-services/business-cards.jpg",
    startingPrice: "AED 45 / 100 pcs",
    turnaround: "24-48 Hours",
    badge: "Most Popular",
  },
  {
    id: "packaging",
    title: "Custom Packaging & Gift Boxes",
    description: "Heavy rigid product packaging boxes, food takeaway packaging, and pastry gift boxes.",
    image: "/commercial-services/custom-packaging.jpg",
    startingPrice: "AED 150 / 50 pcs",
    turnaround: "48 Hours",
    badge: "B2B Choice",
  },
  {
    id: "stickers",
    title: "Round, Vinyl & Glass Stickers",
    description: "Waterproof product stickers, clear glass decals, and frosted office window stickers.",
    image: "/commercial-services/stickers.jpg",
    startingPrice: "AED 35 / 100 pcs",
    turnaround: "24 Hours",
    badge: "Waterproof",
  },
  {
    id: "stamps",
    title: "Urgent Self-Ink Rubber Stamps",
    description: "Durable high-impact rubber stamps for company seals, signatures, and commercial verification.",
    image: "/commercial-services/stamps.jpg",
    startingPrice: "AED 50 / unit",
    turnaround: "Same Day",
    badge: "Express",
  },
  {
    id: "booklets",
    title: "Booklets & Company Catalogs",
    description: "Saddle-stitched corporate booklets, event catalogs, and marketing brochures.",
    image: "/commercial-services/booklets.jpg",
    startingPrice: "AED 120 / 50 pcs",
    turnaround: "48 Hours",
    badge: "Corporate",
  },
  {
    id: "bags",
    title: "Shopping Bags & Tote Bags",
    description: "Eco-friendly branded paper bags and canvas tote bags for retail boutiques & events.",
    image: "/commercial-services/shopping-bags.jpg",
    startingPrice: "AED 95 / 50 pcs",
    turnaround: "48 Hours",
    badge: "Eco-Friendly",
  },
  {
    id: "rollups",
    title: "Event Rollup Banners & Backdrops",
    description: "High-DPI retractable rollup standies, media backdrops, and exhibition banners.",
    image: "/commercial-services/event-rollups.jpg",
    startingPrice: "AED 80 / unit",
    turnaround: "Same Day",
    badge: "Events",
  },
  {
    id: "lanyards",
    title: "Lanyards, Table Tents & Cloths",
    description: "Custom printed event lanyards, ID passes, table tent cards, and branded tablecloths.",
    image: "/commercial-services/lanyards.jpg",
    startingPrice: "AED 65 / 50 pcs",
    turnaround: "24 Hours",
    badge: "Exhibitions",
  },
  {
    id: "signage",
    title: "3D Signboard & Signage Services",
    description: "3D acrylic letters, LED neon signs, indoor reception wall signs, and door name plates.",
    image: "/commercial-services/3d-signage.jpg",
    startingPrice: "AED 250 / unit",
    turnaround: "3 Days",
    badge: "Installation",
  },
  {
    id: "apparel",
    title: "Urgent T-Shirt Printing Dubai",
    description: "Custom corporate T-shirts, polo shirts, staff uniforms, and promotional apparel.",
    image: "/commercial-services/t-shirts.jpg",
    startingPrice: "AED 35 / shirt",
    turnaround: "24 Hours",
    badge: "Apparel",
  },
  {
    id: "drinkware",
    title: "Tumblers & Coffee Mugs",
    description: "Custom stainless steel thermal tumblers, ceramic coffee mugs, and water bottles.",
    image: "/commercial-services/tumblers-mugs.jpg",
    startingPrice: "AED 25 / unit",
    turnaround: "48 Hours",
    badge: "Merchandise",
  },
  {
    id: "gifts",
    title: "Notebooks, Executive Pens & Caps",
    description: "Hardcover branded notebooks, executive metal pens, caps, and promotional gift sets.",
    image: "/commercial-services/notebooks-pens.jpg",
    startingPrice: "AED 18 / unit",
    turnaround: "48 Hours",
    badge: "Gifts",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-black uppercase tracking-widest">
              <Layers className="w-4 h-4 text-orange-600" />
              <span>Full Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Commercial Printing, Signage &amp; Corporate Gifts
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
              High-DPI digital and offset printing, 3D signage installation, and corporate promotional gifts in Dubai.
            </p>
          </div>

          <a
            href="#sample-kit"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid (12 Categories with Authentic Reference Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-zinc-50 rounded-2xl border border-zinc-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded backdrop-blur-md border border-zinc-700">
                  {service.badge}
                </div>

                <div className="absolute bottom-3 right-3 bg-orange-600 text-white text-xs font-black px-2 py-0.5 rounded shadow-md">
                  {service.startingPrice}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-zinc-500">
                    Dispatch: <strong className="text-zinc-800">{service.turnaround}</strong>
                  </span>

                  <a
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-orange-600 hover:text-orange-700"
                  >
                    <span>View Pricing &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
