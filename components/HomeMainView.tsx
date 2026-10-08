"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
  Wrench,
  Clock,
  Zap,
  MessageSquare,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/productsCatalog";
import { BLOG_POSTS } from "@/data/blogs";

export default function HomeMainView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);


  const bestSellerSlugs = [
    // Top 20 Requested by User in strict serial order:
    "print-and-cut-sticker",        // 1. Print & Cut Stickers
    "t-shirt-print",                // 2. Custom T-Shirt Printing
    "safety-sign",                  // 3. Safety & Warning Signs
    "sticker-on-wall",              // 4. Wall Graphics & Stickers
    "frosted-on-glass",             // 5. Frosted Glass Stickers
    "office-name-plate",            // 6. Office Nameplates
    "sticker-on-glass",             // 7. Glass Stickers & Graphics
    "awards-making",                // 8. Acrylic & Wooden Awards
    "photo-frame",                  // 9. Photo Frames & Canvas Prints
    "banner-stand",                 // 10. Banner Stands
    "acrylic-display-stand",        // 11. Acrylic Display Stand
    "laser-engraving",              // 12. Laser Engraving
    "reception-letter",             // 13. Reception & Office Signage
    "business-cards",               // 14. Business Cards
    "outdoor-signboard-3d-letter",  // 15. Outdoor 3D Letter Signs
    "one-way-vision-on-glass",      // 16. One Way Vision Film
    "flatbed-uv-printing",          // 17. Flatbed UV Printing
    "dtf-printing",                 // 18. DTF Printing
    "screen-printing",              // 19. Screen Printing
    "flag-print",                   // 20. Custom Flag Printing
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
    <div className="bg-white text-zinc-900 min-h-screen pt-32 sm:pt-36 md:pt-20 pb-20 selection:bg-[#C68FE6] selection:text-white">
      
      {/* SECTION 1: HERO BANNER (WELCOME TO SIGNAGE & ALL-IN-ONE PRINT SOLUTIONS) */}
      <div className="w-full">
        <Link
          href="/all-products"
          className="block relative w-full aspect-[3378/1501] overflow-hidden bg-white transition-opacity hover:opacity-95"
        >
          <Image
            src="/finalhome.webp"
            alt="Welcome to SBF Print - Signage & All-in-One Print Solutions Dubai"
            fill
            priority
            className="object-cover object-center"
          />
        </Link>
      </div>

      {/* 4 Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="bg-[#FAF9FE] rounded-2xl border border-purple-100/80 p-4 sm:p-5 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            
            {/* Badge 1: Premium Quality */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#8E44EB] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Premium
                </span>
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Quality
                </span>
              </div>
            </div>

            {/* Badge 2: Fast Delivery */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:border-l md:border-purple-200/60 md:pl-6">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#8E44EB] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Fast
                </span>
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Delivery
                </span>
              </div>
            </div>

            {/* Badge 3: UAE-Wide Service */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:border-l md:border-purple-200/60 md:pl-6">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#8E44EB] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  UAE-Wide
                </span>
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Service
                </span>
              </div>
            </div>

            {/* Badge 4: Expert Support */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:border-l md:border-purple-200/60 md:pl-6">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-[#8E44EB] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Expert
                </span>
                <span className="block text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Support
                </span>
              </div>
            </div>

          </div>
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
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION 4: PRINTING PRESS & INSTALLATION SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2.5 text-[#C68FE6]">
            <Printer className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Printing &amp; Installation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl mx-auto">
            Precision manufacturing backed by a skilled team ensuring seamless installation across the UAE.
          </p>
          <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
        </div>

        {/* 4 Service Cards Grid (Left: Naming, Right: Visual Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {[
            {
              id: "installation",
              title: "Expert Installation",
              tag: "In-House Crew",
              description: "Seamless on-site mounting and finishing across the UAE.",
              image: "/installservice/installation-expert.webp",
              icon: Wrench,
              badgeBg: "bg-amber-500/10 text-amber-700 border-amber-300/60",
              hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
              link: "https://wa.me/971525069091?text=Hello%20SBF%20Print,%20I%20would%20like%20to%20request%20an%20on-site%20measurement%20and%20installation.",
              action: "Book Site Setup",
              isExternal: true,
            },
            {
              id: "quality",
              title: "Top Notch Quality",
              tag: "1440 DPI HD",
              description: "Precision prints with luxury coatings and fine finishing.",
              image: "/installservice/top-quality.webp",
              icon: Award,
              badgeBg: "bg-purple-500/10 text-[#8b4cb0] border-purple-300/60",
              hoverBorder: "hover:border-[#C68FE6] hover:shadow-purple-500/10",
              link: "/all-products",
              action: "Explore Quality",
              isExternal: false,
            },
            {
              id: "delivery",
              title: "On Time Delivery",
              tag: "Fast Response",
              description: "Instant communication and guaranteed UAE delivery.",
              image: "/installservice/on-time-delivery.webp",
              icon: Clock,
              badgeBg: "bg-blue-500/10 text-blue-700 border-blue-300/60",
              hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
              link: "https://wa.me/971525069091?text=Hello%20SBF%20Print,%20I%20would%20like%20to%20inquire%20about%20delivery%20and%20lead%20times.",
              action: "Instant WhatsApp",
              isExternal: true,
            },
            {
              id: "urgent",
              title: "Urgent Order Handling",
              tag: "Same-Day Rush",
              description: "Fast-track rush printing and express dispatch.",
              image: "/installservice/urgent-delivery.webp",
              icon: Zap,
              badgeBg: "bg-rose-500/10 text-rose-700 border-rose-300/60",
              hoverBorder: "hover:border-rose-400 hover:shadow-rose-500/10",
              link: "https://wa.me/971525069091?text=Hello%20SBF%20Print,%20I%20have%20an%20urgent%20rush%20printing%20order.",
              action: "Rush Order",
              isExternal: true,
            },
          ].map((card) => {
            const CardIcon = card.icon;
            const content = (
              <div
                className={`group relative h-full bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 p-3.5 sm:p-4.5 lg:p-5 shadow-sm hover:shadow-md ${card.hoverBorder} transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 overflow-hidden`}
              >
                {/* Left Side: Naming & Concise Info */}
                <div className="flex-1 space-y-1 sm:space-y-1.5 z-10 min-w-0">
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider border ${card.badgeBg}`}>
                    <CardIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span className="truncate">{card.tag}</span>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-black text-zinc-900 tracking-tight leading-snug group-hover:text-[#C68FE6] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-zinc-500 leading-snug sm:leading-relaxed font-medium line-clamp-2">
                    {card.description}
                  </p>

                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-zinc-800 group-hover:text-[#C68FE6] transition-colors">
                      <span>{card.action}</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Right Side: 3D Visual Image from installservice */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain drop-shadow-sm group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </div>
            );

            return card.isExternal ? (
              <a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              <Link key={card.id} href={card.link} className="block h-full">
                {content}
              </Link>
            );
          })}
        </div>

        {/* Book Site Installation button at the bottom of the 4 cards */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <a
            href="https://wa.me/971525069091?text=Hello%20SBF%20Print,%20I%20would%20like%20to%20inquire%20about%20your%20expert%20on-site%20installation%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C68FE6] hover:bg-[#b078d6] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book Site Installation</span>
          </a>
        </div>
      </div>


      {/* SECTION 5: HOW TO MAKE AN ORDER (5-STEP PROCESS FLOW) */}
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
