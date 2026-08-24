"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Phone, MessageSquare } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Why should I choose SBF Print over other printing companies in Dubai?",
    answer: "Since 2012, SBF Print And Design has been providing high-quality printing services in Dubai for businesses of all sizes. We specialize in sticker printing, 3D LED signage, business cards, flyers, banners, and custom corporate branding. With calibrated Heidelberg 4-color offset and HP Indigo digital technology, we guarantee color accuracy and fast 48-hour delivery across the UAE.",
  },
  {
    question: "Do you offer same-day or urgent printing services?",
    answer: "Yes! We offer express 24-hour and same-day emergency printing services in Dubai for business cards, flyers, vinyl banners, stickers, and event materials. Select express production in our online calculator or WhatsApp us directly for immediate dispatch.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, Apple Pay, Google Pay, Tabby (Split in 4 BNPL), Tamara (Split in 3 or 4 BNPL), and Cash or UAE Bank Transfer on press pickup for corporate B2B clients.",
  },
  {
    question: "What is the standard turnaround time for printing orders?",
    answer: "Standard production and dispatch take 24 to 48 hours depending on quantity and special finishes (e.g. gold foil or spot UV). Express same-day production is available for urgent commercial orders.",
  },
  {
    question: "Do you offer delivery across Dubai & all 7 UAE Emirates?",
    answer: "Yes, we deliver directly to your office, hotel, exhibition center, or home address across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
  },
  {
    question: "How can I place an order online?",
    answer: "Placing an order is simple: 1) Select your product specs in our instant price calculator, 2) Drag and drop your artwork file (or request our designer help service for AED 100), 3) Approve your digital pre-flight proof online, and 4) Complete checkout.",
  },
  {
    question: "Do you handle 3D signage, reception signs, and frosted glass sticker installation?",
    answer: "Yes, our specialized signage installation team designs, manufactures, and installs 3D acrylic letters, LED neon signs, indoor reception wall signs, and frosted glass privacy stickers for shops, offices, and commercial spaces across Dubai.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-black uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-sm">
            Everything you need to know about our commercial printing press, turnarounds, and delivery across Dubai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 text-sm sm:text-base hover:text-orange-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA Card */}
        <div className="mt-12 bg-zinc-900 text-white p-6 sm:p-8 rounded-2xl border border-zinc-800 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-extrabold">Still Have Questions or Custom Specifications?</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Speak directly with our Dubai press team. Call us or send your project details via WhatsApp for an immediate quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+971568167269"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-extrabold text-sm hover:bg-zinc-100 transition-all"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call +971 56 816 7269</span>
            </a>

            <a
              href="https://wa.me/971568167269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
