"use client";

import { useState } from "react";
import { PackageCheck, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function SampleKit() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="sample-kit" className="py-20 bg-gradient-to-b from-orange-600 to-amber-600 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Offer Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/20 text-white text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Free Paper Stock Swatch Folder</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Order Your Free Paper &amp; Finishing Sample Kit
            </h2>

            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              Undecided on paper weight or finishing? Request our physical swatch folder containing 100 GSM to 350 GSM paper samples, velvet lamination, metallic gold foil, and tactile spot UV swatches delivered anywhere in the UAE.
            </p>

            <ul className="space-y-2 text-sm text-orange-50 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>100 GSM Bond to 350 GSM Velvet Swatches</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Hot Stamped Gold &amp; Silver Foil Samples</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Free 100% Complimentary UAE Delivery</span>
              </li>
            </ul>
          </div>

          {/* Right Column: 3-Field Lead Magnet Form */}
          <div className="lg:col-span-5">
            <div className="bg-white text-zinc-900 p-8 rounded-3xl shadow-2xl space-y-6">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900">Sample Kit Requested!</h3>
                  <p className="text-xs text-zinc-600">
                    Thank you, <strong>{name}</strong>. Your physical sample folder will be dispatched to <strong>{address}</strong> via express courier.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-zinc-900">Get Free Sample Pack</h3>
                    <p className="text-xs text-zinc-500">Enter delivery details below (No credit card needed).</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Karim Ahmed"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1">UAE Delivery Address</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. Office 402, Downtown, Dubai"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1">Mobile Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 052 506 9091"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-zinc-900 hover:bg-zinc-950 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <PackageCheck className="w-5 h-5 text-orange-400" />
                    <span>Send Free Sample Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
