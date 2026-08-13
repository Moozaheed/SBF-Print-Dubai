"use client";

import Image from "next/image";
import { Check, Star, ArrowRight, Sparkles, Printer, MessageSquare } from "lucide-react";
import { CLIENT_LOGOS } from "@/data/clients";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 overflow-hidden">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Downtown Dubai's Premier Commercial Printing &amp; Signage House</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight leading-[1.1]">
            Professional Printing &amp; 3D Signage Services in Dubai —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Fast Delivery &amp; Premium Quality
            </span>
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-zinc-600 text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            High-quality offset &amp; digital printing for branding, custom packaging, 3D illuminated signage, rollups, apparel, and corporate gift materials — delivered fast across Dubai and all 7 UAE Emirates.
          </p>

          {/* Value Highlights Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-zinc-800 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Same-Day &amp; 24-Hour Express Production</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Free Pre-Flight Artwork Check (300 DPI)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Guaranteed CMYK Color Accuracy</span>
            </div>
          </div>

          {/* WhatsApp Primary CTA Button */}
          <div className="pt-4 flex items-center justify-center">
            <a
              href="https://wa.me/9710525069091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-6 h-6" />
              <span>WhatsApp Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Google Reviews Trust Card */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[
                {
                  src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
                  alt: "Corporate Client 1",
                },
                {
                  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
                  alt: "Corporate Client 2",
                },
                {
                  src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
                  alt: "Corporate Client 3",
                },
                {
                  src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
                  alt: "Corporate Client 4",
                },
              ].map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm flex-shrink-0 bg-zinc-200"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-black text-zinc-900">4.9 / 5.0</span>
              </div>
              <span className="text-xs font-semibold text-zinc-500">
                Trusted by 250+ Corporate &amp; Retail Clients across Dubai
              </span>
            </div>
          </div>

        </div>

        {/* Client Logos Infinite Ticker Section */}
        <div className="mt-14 pt-10 border-t border-zinc-200/80">
          <p className="text-center text-xs font-extrabold text-zinc-400 tracking-widest uppercase mb-6">
            Trusted Printing Partner for UAE Brands &amp; Businesses
          </p>

          <div className="relative overflow-hidden w-full">
            <div className="flex space-x-12 animate-marquee items-center whitespace-nowrap">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex-shrink-0"
                >
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100">
                    <Image
                      src={client.imagePath}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-800">{client.name}</span>
                    <span className="text-[10px] text-zinc-500 font-medium">{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
