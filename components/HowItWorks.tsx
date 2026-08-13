"use client";

import { Sliders, Upload, Truck, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const STEPS = [
    {
      step: "Step 01",
      icon: Sliders,
      title: "Choose & Calculate",
      description: "Select your product, preset or custom dimensions, paper GSM, finishing options, and view instant volume pricing.",
    },
    {
      step: "Step 02",
      icon: Upload,
      title: "Upload Design / Request Help",
      description: "Attach your press-ready .pdf, .ai, or .psd artwork (or check 'Designer Help' if you need a custom layout created).",
    },
    {
      step: "Step 03",
      icon: Truck,
      title: "Fast Proofing & Delivery",
      description: "Approve your digital pre-flight proof online. We print on calibrated Heidelberg presses and ship directly to your door in 48 hours.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
            Frictionless Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            How Online Printing Works in 3 Simple Steps
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            No lengthy quotes or wait times. Get instant cost transparency and fast dispatch.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-zinc-50 p-8 rounded-2xl border border-zinc-200 space-y-4 shadow-sm hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black font-mono text-zinc-300">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900">{s.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/9710525069091"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <span>WhatsApp Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
