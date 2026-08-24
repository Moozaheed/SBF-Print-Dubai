"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Building2,
  Mail,
  Phone,
  Plus,
  Trash2,
  Upload,
  Info,
  ChevronRight,
  ArrowLeft,
  Layers,
  RefreshCw,
  AlertCircle,
  Lock,
} from "lucide-react";

const POPULAR_PRODUCTS = [
  "Outdoor Signboard 3D Letter",
  "Indoor Reception Letters & Lobby Signs",
  "Luxury Business Cards (Spot UV / Gold Foil)",
  "Custom Rigid Packaging & Gift Boxes",
  "Rollup Banner Stand & Pop-Up Displays",
  "Stickers, Decals & Product Labels",
  "Frosted Privacy Glass & One-Way Vision Film",
  "Custom LED Neon Signs",
  "Custom T-Shirts & Corporate Uniforms",
  "Executive Diary & Pen Gift Sets",
  "Ceramic Coffee Mugs & Water Bottles",
  "Brochures, Flyers & Catalogs",
  "Vehicle Branding & Fleet Decals",
  "Acrylic 3D Board & Wall Signs",
  "Other Custom Printing Service",
];

const SPEED_OPTIONS = [
  { id: "rush", title: "Same-Day Rush", desc: "Urgent production within 12 hours" },
  { id: "express", title: "Express Production", desc: "24 to 48 hours delivery" },
  { id: "standard", title: "Standard Turnaround", desc: "3 to 5 business days" },
];

interface QuoteItem {
  id: string;
  productName: string;
  quantity: string;
  dimensions: string;
  notes: string;
}

export default function QuoteRequestView() {
  // Contact Information State
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation Error States
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Captcha State
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // Multi-product Items State
  const [items, setItems] = useState<QuoteItem[]>([
    {
      id: "item-1",
      productName: POPULAR_PRODUCTS[0],
      quantity: "100",
      dimensions: "Standard Size",
      notes: "",
    },
  ]);

  // Turnaround Speed & General Project Notes
  const [speed, setSpeed] = useState("express");
  const [generalNotes, setGeneralNotes] = useState("");
  const [fileName, setFileName] = useState<string>("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  // Generate randomized Captcha challenge
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaInput("");
    setIsCaptchaVerified(false);
    setCaptchaError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Validation Helpers
  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!val.trim()) {
      setEmailError("Email address is required.");
      return false;
    }
    if (!emailRegex.test(val.trim())) {
      setEmailError("Please enter a valid email address (e.g. name@company.ae).");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = (val: string): boolean => {
    const cleaned = val.replace(/[^0-9]/g, "");
    if (!val.trim()) {
      setPhoneError("Phone/WhatsApp number is required.");
      return false;
    }
    if (/[a-zA-Z]/.test(val)) {
      setPhoneError("Phone number cannot contain alphabetic letters.");
      return false;
    }
    if (cleaned.length < 7 || cleaned.length > 15) {
      setPhoneError("Please enter a valid phone number (7-15 digits, e.g. +971 50 123 4567).");
      return false;
    }
    setPhoneError("");
    return true;
  };

  // Item Management Handlers
  const addItem = () => {
    const nextIndex = items.length + 1;
    const defaultProduct = POPULAR_PRODUCTS[(nextIndex - 1) % POPULAR_PRODUCTS.length];
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        productName: defaultProduct,
        quantity: "100",
        dimensions: "Standard Size",
        notes: "",
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof QuoteItem, value: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // WhatsApp Message Formatter
  const buildWhatsAppMessage = () => {
    const selectedSpeed = SPEED_OPTIONS.find((s) => s.id === speed)?.title || speed;
    
    let itemsText = "";
    items.forEach((item, idx) => {
      itemsText += `\n[Item ${idx + 1}] ${item.productName}\n- Quantity: ${item.quantity || "Not specified"}\n- Size: ${item.dimensions || "Standard"}` + (item.notes ? `\n- Note: ${item.notes}` : "") + "\n";
    });

    const lines = [
      "*OFFICIAL QUOTATION REQUEST — SBF PRINT DUBAI*",
      "----------------------------------------",
      `*Client Name:* ${fullName || "Not provided"}`,
      `*Company:* ${company || "Individual"}`,
      `*Email:* ${email || "Not provided"}`,
      `*Phone / WhatsApp:* ${phone || "Not provided"}`,
      "",
      "*Requested Products & Services:*",
      itemsText,
      `*Turnaround Speed:* ${selectedSpeed}`,
      `*Demo File / Artwork:* ${fileName ? fileName : "Will attach in chat / email"}`,
      `*Additional Notes:* ${generalNotes || "None"}`,
      "----------------------------------------",
      "Please provide an official quotation and timeline.",
    ];

    return lines.join("\n");
  };

  const handleWhatsAppDirect = () => {
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    if (!fullName.trim()) {
      alert("Please enter your Full Name.");
      return;
    }
    if (!isEmailValid || !isPhoneValid) {
      return;
    }
    const msg = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/971568167269?text=${msg}`, "_blank");
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Quotation Request #${quoteId || "New"} — ${fullName} (${company || "Individual"})`);
    const body = encodeURIComponent(buildWhatsAppMessage().replace(/\*/g, ""));
    window.open(`mailto:sbfprintdesign@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate Email & Phone
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    if (!isEmailValid || !isPhoneValid) {
      return;
    }

    // 2. Validate Security Captcha
    const expectedAnswer = num1 + num2;
    if (parseInt(captchaInput.trim(), 10) !== expectedAnswer) {
      setCaptchaError(`Incorrect security answer. Please solve: ${num1} + ${num2} = ?`);
      return;
    }
    setCaptchaError("");

    setIsSubmitting(true);
    const generatedId = `SBF-Q-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteId(generatedId);

    // Build structured summary for email
    let itemsEmailText = "";
    items.forEach((item, idx) => {
      itemsEmailText += `Item ${idx + 1}: ${item.productName} (Qty: ${item.quantity}, Size: ${item.dimensions}${item.notes ? `, Note: ${item.notes}` : ""})
`;
    });

    try {
      // 1. Dispatch directly via FormSubmit.co to sbfprintdesign@gmail.com
      await fetch("https://formsubmit.co/ajax/sbfprintdesign@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Quotation Request #${generatedId} — ${fullName}`,
          _template: "table",
          _captcha: "false",
          "Quote Reference": generatedId,
          "Full Name": fullName,
          "Company / Brand": company || "Individual",
          "Email Address": email,
          "Phone / WhatsApp": phone,
          "Turnaround Speed": SPEED_OPTIONS.find((s) => s.id === speed)?.title,
          "Products & Quantities": itemsEmailText,
          "Demo File / Artwork": fileName || "None attached",
          "Project Notes": generalNotes || "None",
        }),
      });

      // 2. Also send to Netlify Forms static capture
      const formData = new FormData();
      formData.append("form-name", "quotation-request");
      formData.append("quoteId", generatedId);
      formData.append("fullName", fullName);
      formData.append("company", company);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("itemsSummary", itemsEmailText);
      formData.append("speed", speed);
      formData.append("generalNotes", generalNotes);
      formData.append("targetEmail", "sbfprintdesign@gmail.com");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (err) {
      console.warn("Form dispatch note:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-48 md:pt-52 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#C68FE6] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <Link href="/all-products" className="hover:text-[#C68FE6] transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-900 font-bold">Request a Quotation</span>
        </nav>

        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#C68FE6] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Quotation • Downtown Dubai</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Request a Custom <span className="text-[#C68FE6]">Quotation</span>
          </h1>

          <p className="text-sm text-zinc-600 max-w-3xl leading-relaxed">
            Submit your printing, signage, or packaging requirements below. You can add one or multiple products in a single request. Our press team in Downtown Dubai will prepare your official quote within 30 minutes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-100 text-xs font-bold text-zinc-800">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
              <span>30-Min Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
              <span>Free Artwork Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
              <span>Same-Day UAE Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C68FE6] flex-shrink-0" />
              <span>Multi-Product Orders</span>
            </div>
          </div>
        </div>

        {/* SUCCESS CONFIRMATION VIEW */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 text-center space-y-6 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C68FE6] uppercase tracking-wider">
                Reference Number: {quoteId}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                Quotation Request Received
              </h2>
              <p className="text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-zinc-900">{fullName}</strong>. Your request for {items.length} {items.length === 1 ? "product" : "products"} has been dispatched to our estimation team at <strong className="text-zinc-900">sbfprintdesign@gmail.com</strong>.
              </p>
            </div>

            {/* Items Summary Table */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 text-left space-y-4 max-w-2xl mx-auto">
              <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-200 pb-2">
                Requested Products Summary
              </h3>
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={item.id} className="text-xs flex justify-between items-start border-b border-zinc-100 pb-2">
                    <div>
                      <span className="font-bold text-zinc-900">Item {idx + 1}: {item.productName}</span>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Size: {item.dimensions} {item.notes && `• Note: ${item.notes}`}</p>
                    </div>
                    <span className="font-bold text-[#C68FE6] whitespace-nowrap ml-4">{item.quantity} units</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-between text-xs text-zinc-600 font-medium">
                <span>Required Speed: {SPEED_OPTIONS.find((s) => s.id === speed)?.title}</span>
                <span>Contact Email: {email}</span>
              </div>
            </div>

            {/* Note box */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-5 text-xs text-zinc-700 max-w-2xl mx-auto flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-[#C68FE6] flex-shrink-0 mt-0.5" />
              <p>
                Our press specialists will review your requirements and contact you directly via Phone, WhatsApp, or Email to confirm any additional technical details or artwork checks before proceeding.
              </p>
            </div>

            {/* Dual Instant Bridges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp (+971 56 816 7269)</span>
              </button>

              <button
                type="button"
                onClick={handleEmailDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#C68FE6]" />
                <span>Open in Email App</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-semibold text-zinc-500">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setGeneralNotes("");
                  setFileName("");
                  generateCaptcha();
                }}
                className="hover:text-[#C68FE6] inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
              <span>•</span>
              <Link href="/all-products" className="text-[#C68FE6] hover:underline">
                Browse All Products
              </Link>
            </div>
          </div>
        ) : (
          /* QUOTATION FORM */
          <form
            name="quotation-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xs space-y-8"
          >
            <input type="hidden" name="form-name" value="quotation-request" />
            <p className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            {/* 1. CONTACT INFORMATION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#C68FE6] font-bold text-xs flex items-center justify-center">
                  1
                </div>
                <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-tight">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Mohammed Al Mansoori"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] focus:bg-white transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Company / Brand Name <span className="text-zinc-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Royal Star LLC"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] focus:bg-white transition-all"
                  />
                </div>

                {/* Email with Verification */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    placeholder="e.g. mohammed@company.ae"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border text-xs font-semibold text-zinc-900 focus:outline-none focus:bg-white transition-all ${
                      emailError ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-[#C68FE6]"
                    }`}
                  />
                  {emailError && (
                    <div className="flex items-center gap-1 text-[11px] text-red-500 font-semibold mt-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{emailError}</span>
                    </div>
                  )}
                </div>

                {/* Phone / Mobile with Verification */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) validatePhone(e.target.value);
                    }}
                    onBlur={(e) => validatePhone(e.target.value)}
                    placeholder="e.g. +971 50 123 4567"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border text-xs font-semibold text-zinc-900 focus:outline-none focus:bg-white transition-all ${
                      phoneError ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-[#C68FE6]"
                    }`}
                  />
                  {phoneError && (
                    <div className="flex items-center gap-1 text-[11px] text-red-500 font-semibold mt-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{phoneError}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. MULTIPLE PRODUCTS / ITEMS */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#C68FE6] font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-tight">
                    Select Products & Quantities ({items.length} {items.length === 1 ? "Item" : "Items"})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={addItem}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#C68FE6] text-xs font-bold transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Another Product</span>
                </button>
              </div>

              {/* Items Card List */}
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-4 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-zinc-700 uppercase tracking-wider">
                        Product {index + 1}
                      </span>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-400 hover:text-red-500 text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Product Selector */}
                      <div className="sm:col-span-1">
                        <label className="block text-[11px] font-bold text-zinc-600 mb-1">
                          Product / Service
                        </label>
                        <select
                          value={item.productName}
                          onChange={(e) => updateItem(item.id, "productName", e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] transition-all"
                        >
                          {POPULAR_PRODUCTS.map((prod) => (
                            <option key={prod} value={prod}>
                              {prod}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-600 mb-1">
                          Quantity
                        </label>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                          placeholder="e.g. 100, 500, 1000"
                          className="w-full px-3 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] transition-all"
                        />
                      </div>

                      {/* Dimensions / Size */}
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-600 mb-1">
                          Size / Dimensions
                        </label>
                        <input
                          type="text"
                          value={item.dimensions}
                          onChange={(e) => updateItem(item.id, "dimensions", e.target.value)}
                          placeholder="e.g. Standard, A4, 2x1m, Custom"
                          className="w-full px-3 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] transition-all"
                        />
                      </div>
                    </div>

                    {/* Item Specific Notes */}
                    <div>
                      <input
                        type="text"
                        value={item.notes}
                        onChange={(e) => updateItem(item.id, "notes", e.target.value)}
                        placeholder="Specific material or finishing for this item (e.g. Matte Lamination, Gold Foil, 350 GSM)..."
                        className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-200 text-[11px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#C68FE6] transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add More Items Button */}
              <button
                type="button"
                onClick={addItem}
                className="w-full py-3 rounded-xl border border-dashed border-[#C68FE6] text-[#C68FE6] hover:bg-purple-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Product to Quotation</span>
              </button>
            </div>

            {/* 3. TURNAROUND SPEED */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#C68FE6] font-bold text-xs flex items-center justify-center">
                  3
                </div>
                <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-tight">
                  Turnaround Speed
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SPEED_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSpeed(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      speed === opt.id
                        ? "border-[#C68FE6] bg-purple-50/50 shadow-xs"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="text-xs font-bold text-zinc-900">{opt.title}</div>
                    <div className="text-[11px] text-zinc-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. SUPPORTING / DEMO FILE & PROJECT NOTES */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#C68FE6] font-bold text-xs flex items-center justify-center">
                  4
                </div>
                <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-tight">
                  Supporting File & Project Notes
                </h2>
              </div>

              {/* File Attachment Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-700">
                  Supporting or Demo File <span className="text-zinc-400 font-normal">(Artwork, logo, mockup, or reference photo)</span>
                </label>
                <div className="relative border-2 border-dashed border-zinc-200 hover:border-[#C68FE6] rounded-2xl p-5 text-center transition-colors bg-zinc-50 group cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.ai,.psd,.eps,.jpg,.jpeg,.png,.zip"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-6 h-6 text-zinc-400 group-hover:text-[#C68FE6] transition-colors" />
                    {fileName ? (
                      <span className="text-xs font-bold text-[#C68FE6]">Selected: {fileName}</span>
                    ) : (
                      <>
                        <span className="text-xs font-bold text-zinc-700">Click or drag file to attach</span>
                        <span className="text-[11px] text-zinc-400">Supported: PDF, AI, PSD, EPS, PNG, JPEG, ZIP (Up to 25MB)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* General Project Notes */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Project Notes / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  placeholder="Enter any specific requirements such as paper type, finishing, installation location in Dubai, or delivery requests..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#C68FE6] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* 5. SECURITY CAPTCHA VERIFICATION */}
            <div className="space-y-3 pt-4 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C68FE6]" />
                <h3 className="text-xs font-extrabold text-zinc-900 uppercase tracking-tight">
                  Security Verification <span className="text-red-500">*</span>
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-white border border-zinc-300 font-mono font-bold text-sm text-zinc-900 shadow-inner tracking-widest select-none">
                    {num1} + {num2} = ?
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    title="Generate new challenge"
                    className="p-2 rounded-lg text-zinc-500 hover:text-[#C68FE6] hover:bg-purple-50 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 max-w-xs">
                  <input
                    type="text"
                    required
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      if (captchaError) setCaptchaError("");
                    }}
                    placeholder="Enter answer"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs font-bold text-zinc-900 focus:outline-none transition-all ${
                      captchaError ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-[#C68FE6]"
                    }`}
                  />
                </div>
              </div>
              {captchaError && (
                <div className="flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{captchaError}</span>
                </div>
              )}
            </div>

            {/* NOTICE BOX */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-zinc-700">
              <Info className="w-4 h-4 text-[#C68FE6] flex-shrink-0 mt-0.5" />
              <p>
                Our press team will review your specifications and contact you directly via Phone, WhatsApp, or Email if any additional technical details or artwork checks are required before printing.
              </p>
            </div>

            {/* SUBMISSION BUTTONS */}
            <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-2/3 py-4 rounded-2xl bg-[#C68FE6] hover:bg-[#b078d6] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Quotation Request..." : "Submit Quotation Request"}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-1/3 py-4 rounded-2xl border-2 border-[#C68FE6] text-[#C68FE6] hover:bg-purple-50 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-zinc-400">
              Downtown Dubai Press • Direct Line: <strong className="text-zinc-600 font-mono">+971 56 816 7269</strong> • Email: <strong className="text-zinc-600 font-mono">sbfprintdesign@gmail.com</strong>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
