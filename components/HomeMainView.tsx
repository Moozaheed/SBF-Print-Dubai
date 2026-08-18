"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  Sparkles,
  Truck,
  Leaf,
  Headphones,
  Search,
  Upload,
  CheckCircle2,
  ShoppingCart,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Building2,
  Award,
  Tag,
  Star,
  BookOpen,
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/productsCatalog";
import { BLOG_POSTS } from "@/data/blogs";

export default function HomeMainView() {
  const [heroBannerIndex, setHeroBannerIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const heroBanners = [
    {
      title: "High-Tech Printing Press Dubai",
      image: "/hero/concept-1.jpg",
      href: "/all-products",
    },
    {
      title: "Luxury Print Showroom Dubai",
      image: "/hero/concept-2.jpg",
      href: "/all-products",
    },
  ];

  const featuredTiles = [
    { title: "PHOTOBOOKS", image: "/featured/photobooks.jpg", href: "/services/hardcover-photo-books" },
    { title: "JUTE & COTTON BAGS", image: "/featured/jute-bags.jpg", href: "/services/bags-print" },
    { title: "CANVAS", image: "/featured/canvas.jpg", href: "/services/photo-frame" },
    { title: "STICKERS & LABELS", image: "/featured/stickers.jpg", href: "/services/print-and-cut-sticker" },
  ];

  const bestSellerSlugs = [
    // Signage
    "outdoor-signboard-3d-letter", "safety-sign", "reception-letter", "banner-and-festoon", "flex-signboard",
    // Printing and Display
    "sticker-on-vehicles", "frosted-on-glass", "rollup-stand", "photo-frame", "sticker-on-wall",
    // Marketing & Gift
    "business-cards", "packaging", "menu", "print-and-cut-sticker", "mugs-print",
  ];
  const onSaleSlugs = ["flyers", "letterheads", "calendars", "sticker-on-forex-foam-board", "flag-print"];
  const bestSellers = bestSellerSlugs.map(s => ALL_PRODUCTS.find(p => p.slug === s)).filter(Boolean) as typeof ALL_PRODUCTS;
  const onSaleProducts = onSaleSlugs.map(s => ALL_PRODUCTS.find(p => p.slug === s)).filter(Boolean) as typeof ALL_PRODUCTS;

  const faqItems = [
    {
      question: "Why should I choose SBF Print over other printing companies in Dubai?",
      answer: "SBF Print & Design provides state-of-the-art 4-color offset and high-resolution digital printing at Nakheel Centre, Deira Dubai. We offer transparent instant pricing, free 300 DPI pre-flight artwork checks, 48-hour turnarounds, and direct WhatsApp order assistance with zero hidden fees."
    },
    {
      question: "Do you offer same-day or urgent printing services?",
      answer: "Yes! We offer express same-day and urgent 2-hour dispatch for business cards, flyers, roll-up stands, stickers, and promotional items from our Nakheel Centre, Deira Dubai location across all major UAE business hubs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, Apple Pay, Google Pay, Tabby (Split in 4 BNPL), Tamara (Split in 3 or 4 BNPL), and Cash or UAE Bank Transfer on press pickup for corporate B2B clients."
    },
    {
      question: "What is the standard turnaround time for printing orders?",
      answer: "Standard turnaround is 24 to 48 hours depending on product complexity, special finishing (such as Spot UV, Embossing, or Gold Foil), and order quantity."
    },
    {
      question: "Do you offer delivery across Dubai & all 7 UAE Emirates?",
      answer: "Yes, we provide reliable express courier delivery to Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
    },
    {
      question: "How can I place an order online?",
      answer: "Browse our catalog, select your product specifications (size, paper gsm, finishing, quantity), click 'Add to Cart / Order Now', and chat directly with our team on WhatsApp or checkout seamlessly online."
    },
    {
      question: "Do you handle 3D signage, reception signs, and frosted glass sticker installation?",
      answer: "Absolutely! Our specialized installation team handles outdoor 3D letter signboards, acrylic reception logos, indoor office nameplates, frosted window vinyls, and vehicle graphics installation on-site across Dubai."
    }
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-36 pb-20 selection:bg-[#C68FE6] selection:text-white">
      
      {/* SECTION 1: TOP HERO FULL-IMAGE BANNER CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-100 group aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]">
          
          {(() => {
            const currentBanner = heroBanners[heroBannerIndex % heroBanners.length] || heroBanners[0];
            return (
              <Link href={currentBanner.href} className="block relative w-full h-full">
                <Image
                  src={currentBanner.image}
                  alt={currentBanner.title}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700"
                />
              </Link>
            );
          })()}

          {/* Banner Prev Control */}
          <button
            type="button"
            onClick={() => setHeroBannerIndex((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all z-20"
            aria-label="Previous Banner"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Banner Next Control */}
          <button
            type="button"
            onClick={() => setHeroBannerIndex((prev) => (prev + 1) % heroBanners.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all z-20"
            aria-label="Next Banner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 pt-4">
          {heroBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroBannerIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                heroBannerIndex === idx ? "w-8 bg-[#C68FE6]" : "w-2.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>


      {/* SECTION 2: 4 FEATURED CATEGORY BANNER TILES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-zinc-200"
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center p-4">
                <h3 className="text-white text-base font-black tracking-wider text-center uppercase drop-shadow-md">
                  {tile.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION 3: BEST SELLERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <Star className="w-6 h-6 fill-[#C68FE6]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Best Sellers
            </h2>
          </div>
          <p className="text-xs text-zinc-500">
            Our most popular printing &amp; signage products across Dubai &amp; UAE
          </p>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {bestSellers.map((p) => (
            <Link
              key={p.id}
              href={`/services/${p.slug}`}
              className="group bg-white rounded-2xl border border-zinc-200 p-4 space-y-3 text-center shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative aspect-square rounded-xl bg-zinc-50 p-2 overflow-hidden flex items-center justify-center">
                  <span className="absolute top-2 left-2 z-10 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-white shadow">
                    BEST SELLER
                  </span>
                  <Image src={p.image} alt={p.title} fill className="object-contain p-2 group-hover:scale-105 transition-transform" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-semibold">
                    From <span className="text-[#C68FE6] font-extrabold">{p.startingPrice}</span>
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <span className="w-full py-2 rounded-xl bg-purple-50 text-[#C68FE6] font-bold text-xs inline-block group-hover:bg-[#C68FE6] group-hover:text-white transition-colors">
                  Customize Order
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION 4: WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <Award className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Why SBF Print &amp; Design ?
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Quality Custom Printing",
              desc: "Attention to detail. Crafted to perfection. Discover the art of exceptional printing!",
              icon: Sparkles,
            },
            {
              title: "Fast Delivery",
              desc: "Quick turnaround, fast delivery. Receive your prints in no time.",
              icon: Truck,
            },
            {
              title: "Eco-friendly",
              desc: "Reduce, reuse, print responsibly. Choose our eco-friendly printing service.",
              icon: Leaf,
            },
            {
              title: "Proactive Customer Support",
              desc: "Putting you first. We're here to guide you through every customization step.",
              icon: Headphones,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#C68FE6] text-[#C68FE6] flex items-center justify-center bg-[#C68FE6]/10 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* SECTION 5: ON SALE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <Tag className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              On Sale
            </h2>
          </div>
          <p className="text-xs text-zinc-500">
            Urgent same-day promotional discounts on top printing services
          </p>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {onSaleProducts.map((p) => (
            <Link
              key={p.id}
              href={`/services/${p.slug}`}
              className="group bg-white rounded-2xl border border-zinc-200 p-4 space-y-3 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-square rounded-xl bg-zinc-50 p-2 overflow-hidden flex items-center justify-center">
                <span className="absolute top-2 left-2 z-10 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white shadow">
                  SALE
                </span>
                <Image src={p.image} alt={p.title} fill className="object-contain p-2 group-hover:scale-105 transition-transform" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors line-clamp-1">
                  {p.title}
                </h3>
                <p className="text-[11px] text-zinc-500 font-semibold">
                  Starting At <span className="text-[#C68FE6] font-extrabold">{p.startingPrice}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION 6: HOW TO MAKE AN ORDER (5-STEP PROCESS FLOW) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              How to make an order?
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { step: "1", title: "Explore Options", desc: "Browse through our wide range of products.", icon: Search },
            { step: "2", title: "Upload Your Design", desc: "Bring your vision to life by uploading your design.", icon: Upload },
            { step: "3", title: "Review & Confirm", desc: "Make sure to review your order details.", icon: CheckCircle2 },
            { step: "4", title: "Checkout & Order", desc: "Enjoy a hassle-free checkout process.", icon: ShoppingCart },
            { step: "5", title: "Delivery & Enjoy", desc: "Sit back and relax as we deliver to your door.", icon: Truck },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#C68FE6] text-[#C68FE6] flex items-center justify-center bg-[#C68FE6]/10 font-black text-xl shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* SECTION 7: BLOG SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Blog
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-zinc-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <span className="text-[11px] font-bold text-[#C68FE6] group-hover:underline">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ) BEFORE FOOTER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 space-y-8">
        
        {/* FAQ Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#C68FE6] bg-[#C68FE6]/10 px-3.5 py-1 rounded-full inline-block">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our commercial printing press, turnarounds, and delivery across Dubai.
          </p>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#C68FE6] bg-purple-50/20 shadow-md"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-zinc-900 hover:text-[#C68FE6] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 ${isOpen ? "text-[#C68FE6]" : "text-zinc-400"}`} />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#C68FE6]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-purple-100/60 animate-in fade-in duration-150">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
