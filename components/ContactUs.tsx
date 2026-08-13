"use client";

import { useState, FormEvent } from "react";
import { MessageSquare, Phone, MapPin, Mail, Clock, Send, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("Business Cards");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedText = `Hi SBF Print %26 Design,%0A%0AMy Name: ${encodeURIComponent(
      fullName
    )}%0APhone/WhatsApp: ${encodeURIComponent(
      phone
    )}%0APrint Service Required: ${encodeURIComponent(
      serviceCategory
    )}%0ADetails/Quantity: ${encodeURIComponent(message)}`;

    const whatsappUrl = `https://wa.me/9710525069091?text=${formattedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Decorative Gradient Spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact Info & Press Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Downtown Dubai Press House</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Contact Us for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Instant Quotes &amp; Orders
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Have an urgent printing request or need custom finishing advice? Reach out directly to our production team via WhatsApp, phone, or visit our press in Downtown Dubai.
            </p>

            {/* Direct Contact Methods List */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/9710525069091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Fastest Response (WhatsApp)
                  </span>
                  <span className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    +971 56 816 7269
                  </span>
                </div>
              </a>

              {/* Mobile Phone Call */}
              <a
                href="tel:+9710525069091"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/80 hover:bg-zinc-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Press Desk Direct Call
                  </span>
                  <span className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors">
                    +971 56 816 7269
                  </span>
                </div>
              </a>

              {/* Email Address */}
              <a
                href="mailto:sbfprintdesing@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/80 hover:bg-zinc-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Email Official Quotations
                  </span>
                  <span className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors">
                    sbfprintdesing@gmail.com
                  </span>
                </div>
              </a>

              {/* Google Maps Location */}
              <a
                href="https://www.google.com/maps?cid=4646316211352300491&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=AE&source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/80 hover:bg-zinc-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Press Location
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                    Down town, Dubai, United Arab Emirates
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Form Sending Direct Message to WhatsApp */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Send Us a Direct Message</h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Fill in your requirements below and tap submit to send your request straight to our WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karim Ahmed"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300">WhatsApp / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">Print Product Needed</label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="Luxury Business Cards (350-750 GSM)">Luxury Business Cards (350-750 GSM)</option>
                    <option value="Custom Packaging & Gift Boxes">Custom Packaging &amp; Gift Boxes</option>
                    <option value="Round, Vinyl & Glass Stickers">Round, Vinyl &amp; Glass Stickers</option>
                    <option value="Self-Ink Rubber Stamps">Self-Ink Rubber Stamps</option>
                    <option value="Booklets & Catalogs">Booklets &amp; Catalogs</option>
                    <option value="Shopping & Tote Bags">Shopping &amp; Tote Bags</option>
                    <option value="Event Rollup Banners & Backdrops">Event Rollup Banners &amp; Backdrops</option>
                    <option value="Lanyards & Table Tents">Lanyards &amp; Table Tents</option>
                    <option value="3D Signboard & Signage">3D Signboard &amp; Signage</option>
                    <option value="T-Shirt Printing">T-Shirt Printing</option>
                    <option value="Tumblers & Mugs">Tumblers &amp; Mugs</option>
                    <option value="Notebooks & Executive Gifts">Notebooks &amp; Executive Gifts</option>
                  </select>
                </div>

                {/* Message / Quantity Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">Quantity &amp; Print Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="e.g. I need 500 pcs 400 GSM matte laminated cards with gold foil logo by tomorrow..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Message to WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

              </form>

              <p className="text-[11px] text-zinc-500 text-center font-medium">
                ⚡ Tapping submit opens WhatsApp directly with your filled inquiry details.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
