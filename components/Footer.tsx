"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-zinc-900 border-t border-zinc-200 pt-16 pb-24 selection:bg-[#C68FE6] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div>
              <Image
                src="/logo.png"
                alt="SBF Print & Design Dubai"
                width={160}
                height={46}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed">
              Nakheel Centre, Deira Dubai — commercial printing press specializing in offset business cards, luxury gold foil packaging, vinyl banners, and fast 48-hour delivery across the UAE.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Color Accuracy Assurance &amp; Same-Day Dispatch</span>
            </div>

          </div>

          {/* Column 2: Direct Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C68FE6]">
              Contact Us
            </h3>

            <ul className="space-y-3 text-xs text-zinc-600">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
                <a href="tel:+971568167269" className="hover:text-[#C68FE6] font-mono font-bold text-zinc-900 transition-colors">
                  +971 052 506 9091
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a
                  href="https://wa.me/971568167269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 font-mono font-bold text-emerald-600 transition-colors"
                >
                  WhatsApp: +971 052 506 9091
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
                <a href="mailto:sbfprintdesign@gmail.com" className="hover:text-[#C68FE6] font-mono text-zinc-700 transition-colors">
                  sbfprintdesign@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5 pt-1">
                <InstagramIcon className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/sbfprint?igsh=MXJ3MWhiM256aWxqdQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C68FE6] transition-colors"
                >
                  @sbfprint
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <FacebookIcon className="w-4 h-4 text-[#1877F2] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.facebook.com/share/1EnXu9Zsbj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1877F2] transition-colors"
                >
                  SBF Print & Design
                </a>
              </li>

              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/E46BUEZRX81Duh6e9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C68FE6] transition-colors leading-snug"
                >
                  Nakheel Centre, Deira Dubai, UAE
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C68FE6]">
              Print Categories
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li><Link href="/all-products#large-format" className="hover:text-[#C68FE6] transition-colors">Large Format Printing</Link></li>
              <li><Link href="/all-products#marketing-materials" className="hover:text-[#C68FE6] transition-colors">Marketing &amp; Business Cards</Link></li>
              <li><Link href="/all-products#stickers-labels" className="hover:text-[#C68FE6] transition-colors">Stickers &amp; Labels</Link></li>
              <li><Link href="/all-products#displays" className="hover:text-[#C68FE6] transition-colors">Displays &amp; Roll Up Stands</Link></li>
              <li><Link href="/all-products#textile" className="hover:text-[#C68FE6] transition-colors">Textile &amp; Custom Apparel</Link></li>
              <li><Link href="/all-products#custom-made" className="hover:text-[#C68FE6] transition-colors">3D Signage &amp; Custom Boards</Link></li>
            </ul>
          </div>

          {/* Column 4: Payment Methods Accepted */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C68FE6]">
              Accepted Payment Methods
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              We accept Visa, Mastercard, Google Pay, and Cash on Delivery.
            </p>

            {/* Payment Logos */}
            <div className="flex flex-wrap gap-2">
              {/* Visa */}
              <div className="flex items-center justify-center bg-white border border-zinc-200 rounded-lg px-3 py-1.5 shadow-sm">
                <svg viewBox="0 0 780 500" className="h-6 w-auto" aria-label="Visa">
                  <rect width="780" height="500" rx="40" fill="#1A1F71" />
                  <path d="M316.5 361.5H263l33-201h53.5z" fill="#fff" />
                  <path d="M524 164.5c-10.5-4-27-8.5-47.5-8.5-52.5 0-89.5 27-89.5 65.5 0 28.5 25.5 44.5 45 54 20 9.5 26.5 15.5 26.5 24 0 13-16 19-30.5 19-20.5 0-31.5-3-48-10.5l-6.5-3-7 43c11.5 5 33 9.5 55.5 9.5 58.5 0 96.5-28.5 96.5-68.5 0-23-13.5-40.5-43.5-55-18-9.5-29-15.5-29-25 0-8.5 9.5-17.5 30-17.5 17 0 29 3.5 38.5 7.5l4.5 2 7-35z" fill="#fff" />
                  <path d="M641 160.5h-41c-12.5 0-22 3.5-27.5 16.5l-78 186H548l10.5-29h64l6 29h52zm-61 127.5 26.5-72.5 15 72.5z" fill="#fff" />
                  <path d="M236 160.5l-52 138-5.5-28c-9.5-32.5-39.5-67.5-73-85l47.5 175.5H208l76-200.5z" fill="#fff" />
                  <path d="M136 160.5H51l-1 4.5c66.5 17 110.5 57.5 128.5 106.5l-18.5-94.5c-3.5-12.5-13-16-24-16.5z" fill="#F9A533" />
                </svg>
              </div>

              {/* Mastercard */}
              <div className="flex items-center justify-center bg-white border border-zinc-200 rounded-lg px-3 py-1.5 shadow-sm">
                <svg viewBox="0 0 152.4 108" className="h-6 w-auto" aria-label="Mastercard">
                  <rect width="152.4" height="108" rx="8" fill="#252525" />
                  <circle cx="58.8" cy="54" r="31" fill="#EB001B" />
                  <circle cx="93.6" cy="54" r="31" fill="#F79E1B" />
                  <path d="M76.2 28.7a31 31 0 0 1 0 50.6 31 31 0 0 1 0-50.6z" fill="#FF5F00" />
                </svg>
              </div>

              {/* Google Pay */}
              <div className="flex items-center justify-center bg-white border border-zinc-200 rounded-lg px-3 py-1.5 shadow-sm gap-1">
                <span className="text-sm font-bold leading-none" style={{ fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#34A853" }}>g</span>
                  <span style={{ color: "#EA4335" }}>l</span>
                  <span style={{ color: "#4285F4" }}>e</span>
                </span>
                <span className="text-sm font-semibold text-zinc-700 leading-none">Pay</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            Beautifully crafted with{" "}
            <a
              href="https://www.linkedin.com/company/craftsmenit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#C68FE6] hover:underline"
            >
              Craftsmen.it
            </a>
          </p>
          <div className="flex flex-wrap gap-4 text-zinc-600 font-medium">
            <Link href="/quote" className="text-[#C68FE6] font-bold hover:underline">Request a Quote</Link>
            <Link href="/all-products" className="hover:text-[#C68FE6]">All Products</Link>
            <Link href="/privacy-policy" className="hover:text-[#C68FE6]">Privacy Policy</Link>
            <a href="https://wa.me/971568167269" target="_blank" rel="noreferrer" className="hover:text-[#C68FE6]">WhatsApp Support</a>
            <a href="mailto:sbfprintdesign@gmail.com" className="hover:text-[#C68FE6]">Email Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
