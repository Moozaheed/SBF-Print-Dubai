"use client";

import { Star, Quote, Building2 } from "lucide-react";

export default function Testimonials() {
  const REVIEWS = [
    {
      name: "Tariq Al-Maktoum",
      role: "Procurement Manager, Dubai Hospitality Group",
      quote: "SBF Print delivered 5,000 custom gold foil date packaging boxes for our Ramadan event in under 48 hours. Color precision and velvet finish were flawless.",
      rating: 5,
      verified: "Verified B2B Client",
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Director, Creative Agency UAE",
      quote: "The real-time price calculator gave us instant clarity without waiting for sales quotes. Artwork pre-flight caught an RGB color issue before we went to press!",
      rating: 5,
      verified: "Verified Agency Client",
    },
    {
      name: "Rashed Hassan",
      role: "Operations Head, Roll DXB",
      quote: "We order all our large format vinyl event banners and promotional stickers from SBF. High-DPI print quality and incredible fast emergency dispatch.",
      rating: 5,
      verified: "Verified Dubai Partner",
    },
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest">
            <Quote className="w-4 h-4" />
            <span>Social Proof &amp; Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            What Corporate Clients Say About SBF Print
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            ⭐ 4.9/5 Rating based on 250+ Google Reviews in Downtown, Dubai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">{review.name}</h3>
                  <span className="text-[11px] text-zinc-400 block">{review.role}</span>
                </div>

                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800/40">
                  {review.verified}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
