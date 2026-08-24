"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Cookie,
  FileText,
  Truck,
  RotateCcw,
  Mail,
  Phone,
  Building2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function PrivacyPolicyView() {
  return (
    <div className="pt-48 md:pt-52 pb-24 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#C68FE6] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-900 font-bold">Privacy Policy & Terms</span>
        </nav>

        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#C68FE6] text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SBF Print & Design • Legal & Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Privacy Policy &amp; <span className="text-[#C68FE6]">Terms of Service</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            The privacy of our customers is of utmost importance to us. This Privacy Policy explains how <strong className="text-zinc-900">SBF Print &amp; Design</strong> (&quot;sbfprint.ae&quot;) collects, uses, and safeguards your personal data when you visit our website, submit quotation requests, or order custom printing and signage services across Dubai and the UAE.
          </p>

          <div className="text-xs text-zinc-400 font-medium pt-2 border-t border-zinc-100">
            Last Updated: August 2026 • Applicable for sbfprint.ae &amp; SBF Print And Design Dubai
          </div>
        </div>

        {/* POLICY CONTENT CARDS */}
        <div className="space-y-6">

          {/* 1. PERSONAL INFORMATION COMMITMENT */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">1. Personal Information &amp; Data Confidentiality</h2>
                <p className="text-xs text-zinc-500">How we protect your confidential information</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Your personal information—including your full name, company name, contact numbers, email address, delivery address, custom artwork files, and project specifications—will never be sold, rented, leased, or disclosed to unauthorized third parties under any circumstances.
            </p>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs text-zinc-800 space-y-1.5 font-medium">
              <div className="font-bold text-[#C68FE6] uppercase tracking-wide text-[11px]">Payment &amp; Card Security Guarantee:</div>
              <p>
                Your credit and/or debit card details are never stored on our servers, nor sold, shared, rented, or leased to any third-party under any circumstances. All digital transactions are processed through secure, encrypted payment channels.
              </p>
            </div>
          </div>

          {/* 2. INFORMATION WE COLLECT */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">2. Information We Collect &amp; Why We Need It</h2>
                <p className="text-xs text-zinc-500">Purpose and scope of collected data</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We collect information to provide accurate quotations, manufacture custom printing products, and deliver orders efficiently across the UAE:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
              <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <span><strong>Contact Details:</strong> Name, email, phone / WhatsApp number, and delivery location.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <span><strong>Print Artwork &amp; Specs:</strong> Design files (PDF, AI, PSD), dimensions, and materials.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <span><strong>Transaction Records:</strong> Invoices, quotation references, and order history.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
                <span><strong>Technical Site Data:</strong> Anonymous browsing metrics to improve site navigation and performance.</span>
              </li>
            </ul>
          </div>

          {/* 3. COOKIES & TRACKING */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">3. Use of Cookies &amp; Preferences</h2>
                <p className="text-xs text-zinc-500">Website optimization and analytics</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              SBF Print &amp; Design uses standard cookies to enable full functionality of our online catalog, save your shopping cart preferences, and analyze user navigation trends to continually improve our platform.
            </p>

            <div className="space-y-2 text-xs text-zinc-600">
              <p>• <strong>Essential Cookies:</strong> Required to preserve shopping cart contents and enable smooth navigation.</p>
              <p>• <strong>Analytics Cookies:</strong> Anonymous statistical data (Google Analytics / GTM) to evaluate site speed and popular product categories.</p>
              <p>• <strong>Managing Preferences:</strong> You can block or delete cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge).</p>
            </div>
          </div>

          {/* 4. ORDER CANCELLATION POLICY */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">4. Order Cancellation Policy</h2>
                <p className="text-xs text-zinc-500">Guidelines for order changes and cancellations</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Because commercial print jobs and bespoke signage are tailored to custom dimensions, logos, and specifications:
            </p>
            <div className="space-y-2 text-xs text-zinc-600 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
              <p>• You may cancel or modify your order <strong>prior to artwork approval and production plating</strong> by contacting our team immediately via WhatsApp or phone.</p>
              <p>• Once printing, cutting, or fabrication has started on custom-personalized goods, orders cannot be cancelled.</p>
            </div>
          </div>

          {/* 5. DELIVERY CONDITIONS */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">5. Delivery Conditions &amp; Turnaround</h2>
                <p className="text-xs text-zinc-500">Shipping across Dubai and all 7 UAE Emirates</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              <p>
                • <strong>Standard Delivery:</strong> Completed within 24 to 48 hours across Dubai and the UAE via trusted courier partners (Aramex, local express fleets).
              </p>
              <p>
                • <strong>Rush &amp; Same-Day Orders:</strong> Same-day rush delivery is available within Dubai for urgent orders placed before standard cutoff times.
              </p>
              <p>
                • <strong>Large Format &amp; Signage:</strong> Heavy media, structural 3D signage, and custom fabrication items are delivered and installed according to agreed project timelines (2 to 5 business days).
              </p>
            </div>
          </div>

          {/* 6. QUALITY GUARANTEE & REFUND POLICY */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-zinc-900">6. Quality Guarantee &amp; Replacement Policy</h2>
                <p className="text-xs text-zinc-500">Our commitment to print excellence</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              In the unlikely event that you receive damaged goods or an item with manufacturing/printing defects caused by our press, <strong className="text-zinc-900">SBF Print &amp; Design</strong> is committed to reprinting and exchanging the items at no extra cost, or issuing a full credit/refund for the affected quantity upon verification.
            </p>
          </div>

          {/* 7. CONTACT US & DATA REQUESTS */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#C68FE6] text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">7. Contact Information &amp; Data Inquiries</h2>
                <p className="text-xs text-zinc-400">Reach our team for any privacy or quotation questions</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              If you have any questions regarding this Privacy Policy, wish to update your details, or require custom order assistance, please reach out to us directly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Official Email</span>
                <a href="mailto:sbfprintdesign@gmail.com" className="font-bold text-white hover:text-[#C68FE6] transition-colors font-mono">
                  sbfprintdesign@gmail.com
                </a>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Phone / WhatsApp</span>
                <a href="tel:+971525069091" className="font-bold text-white hover:text-[#C68FE6] transition-colors font-mono">
                  +971 052 506 9091
                </a>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Press Location</span>
                <span className="font-semibold text-white">
                  Downtown &amp; Deira, Dubai, UAE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
