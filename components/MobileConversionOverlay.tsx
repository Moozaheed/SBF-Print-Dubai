"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function MobileConversionOverlay() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating WhatsApp Button with Text */}
      <a
        href="https://wa.me/9710525069091"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 relative z-10 flex-shrink-0 fill-white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.769L0 32l8.469-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.288-5.028 1.189 1.213-4.9-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.865c-.398-.199-2.354-1.161-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.299-.862.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.361-2.214-2.759-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.958-.323-.778-.652-.672-.896-.684l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.361-1.394 3.322s1.427 3.853 1.626 4.119c.199.265 2.806 4.283 6.799 6.007.95.41 1.691.655 2.269.839.953.304 1.821.261 2.507.158.765-.114 2.354-.962 2.686-1.891.333-.929.333-1.726.232-1.891-.099-.165-.365-.265-.763-.464z"/>
        </svg>

        {/* Text */}
        <span className="relative z-10 text-sm font-extrabold tracking-wide whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-[#C68FE6] text-white flex items-center justify-center shadow-lg border border-zinc-700/80 transition-all hover:scale-110"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
