"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolio";
import { Sparkles, ArrowRight, Maximize2, Check, FileCode, X } from "lucide-react";

const CATEGORIES = [
  "All",
  "Foil & Specialty Finishes",
  "Corporate Cards",
  "Executive & Cards",
  "Creative & Agency",
  "Eco & Corporate Cards",
  "Corporate Stationery",
] as const;

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Proven Print Sharpness &amp; Finishing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Real Client Work &amp; Print Samples
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Inspect our physical press output printed for corporate clients across Dubai &amp; the UAE.
          </p>
        </div>

        {/* Filterable Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Box with Spec Overlay Badges */}
              <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden cursor-pointer" onClick={() => setActiveLightboxItem(item)}>
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-zinc-950/90 text-orange-400 text-[11px] font-extrabold px-2.5 py-1 rounded-md border border-zinc-700 backdrop-blur-md">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightboxItem(item);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-950/80 text-white hover:bg-orange-600 transition-colors border border-zinc-700"
                  title="Zoom Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Overlay Specs */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-300 text-[11px]">{item.paperStock}</span>
                  <span className="font-bold text-amber-400">{item.startingPrice}</span>
                </div>
              </div>

              {/* Item Details Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Spec Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {item.finishing}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {item.sides}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                      {item.vectorSource}
                    </span>
                  </div>
                </div>

                {/* Action Direct Link */}
                <a
                  href="#sample-kit"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-orange-600 text-white text-xs font-bold transition-all group/btn"
                >
                  <span>Request Quote For This Style</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Click-to-Zoom Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-black text-white">{activeLightboxItem.title}</h3>
                <span className="text-xs text-orange-400 font-semibold">{activeLightboxItem.category}</span>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-zinc-950 rounded-xl overflow-hidden">
              <Image
                src={activeLightboxItem.imagePath}
                alt={activeLightboxItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div className="bg-zinc-800 p-2.5 rounded-lg">
                <span className="text-zinc-400 block text-[10px]">Paper Stock</span>
                <span className="font-bold text-white">{activeLightboxItem.paperStock}</span>
              </div>
              <div className="bg-zinc-800 p-2.5 rounded-lg">
                <span className="text-zinc-400 block text-[10px]">Finishing</span>
                <span className="font-bold text-amber-400">{activeLightboxItem.finishing}</span>
              </div>
              <div className="bg-zinc-800 p-2.5 rounded-lg">
                <span className="text-zinc-400 block text-[10px]">Source Files</span>
                <span className="font-bold text-emerald-400">{activeLightboxItem.vectorSource}</span>
              </div>
              <div className="bg-zinc-800 p-2.5 rounded-lg">
                <span className="text-zinc-400 block text-[10px]">Starting Rate</span>
                <span className="font-bold text-orange-400">{activeLightboxItem.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
