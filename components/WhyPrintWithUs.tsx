"use client";

import { ShieldCheck, Zap, FileCheck, Leaf, Cpu, Award } from "lucide-react";

export default function WhyPrintWithUs() {
  const VALUE_PROPS = [
    {
      icon: ShieldCheck,
      title: "Color Precision Guarantee",
      description: "Heidelberg 4-color offset and HP Indigo digital presses calibrated to exact CMYK color spaces.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Zap,
      title: "Express 48-Hour Turnaround",
      description: "Same-day emergency dispatch and standard 48-hour door delivery across Dubai and all 7 UAE Emirates.",
      color: "text-amber-600 bg-amber-100",
    },
    {
      icon: FileCheck,
      title: "Free Pre-Flight File Verification",
      description: "Free automated check of artwork margins, 3mm bleed safety boundaries, and 300 DPI resolution before printing.",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious Soy Inks",
      description: "FSC-certified recycled paper stock, eco-solvent vinyls, and non-toxic soy-based inks.",
      color: "text-teal-600 bg-teal-100",
    },
  ];

  const MACHINERY_FLEET = [
    {
      name: "Heidelberg Speedmaster 4-Color Offset",
      category: "High-Volume Commercial Press",
      specs: "High-speed offset printing for 10,000+ volume corporate runs with razor-sharp CMYK dot precision.",
    },
    {
      name: "HP Indigo Digital Press Engine",
      category: "Short-Run & Variable Digital Press",
      specs: "Instant 24-hour dispatch for business cards, flyers, and luxury soft-touch laminated products.",
    },
    {
      name: "Roland & Mimaki Eco-Solvent Plotters",
      category: "Wide-Format Outdoor Vinyl",
      specs: "Waterproof vinyl banners, vehicle wraps, roll-up exhibition stands, and die-cut product decals.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-black uppercase tracking-widest">
            <Award className="w-4 h-4 text-orange-600" />
            <span>Built For Corporate B2B Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Why Commercial Buyers Choose SBF Print
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            We combine high-DPI European offset press technology with fast digital dispatch in Downtown, Dubai.
          </p>
        </div>

        {/* 4 Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VALUE_PROPS.map((prop, idx) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${prop.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{prop.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{prop.description}</p>
              </div>
            );
          })}
        </div>

        {/* Machinery Fleet Showcase Banner */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-black text-white">Press Fleet &amp; Production Technology</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MACHINERY_FLEET.map((machine, i) => (
              <div key={i} className="bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/60 space-y-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
                  {machine.category}
                </span>
                <h4 className="text-base font-bold text-white leading-snug">{machine.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{machine.specs}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
