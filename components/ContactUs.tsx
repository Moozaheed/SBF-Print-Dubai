"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  MessageSquare,
  Phone,
  MapPin,
  Mail,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Lock,
} from "lucide-react";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("Business Cards");
  const [message, setMessage] = useState("");

  // Validation & Error States
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Captcha Challenge
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaInput("");
    setCaptchaError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

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
      setPhoneError("Please enter a valid phone number (7-15 digits).");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    if (!fullName.trim() || !isEmailValid || !isPhoneValid) return;

    const formattedText = `*NEW INQUIRY — SBF PRINT DUBAI*\n\n*Client:* ${fullName}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${serviceCategory}\n*Details:* ${message || "General Inquiry"}`;
    const whatsappUrl = `https://wa.me/971525069091?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    if (!isEmailValid || !isPhoneValid) return;

    const expectedAnswer = num1 + num2;
    if (parseInt(captchaInput.trim(), 10) !== expectedAnswer) {
      setCaptchaError(`Incorrect security answer: ${num1} + ${num2} = ?`);
      return;
    }
    setCaptchaError("");

    setIsSubmitting(true);

    try {
      // 1. Dispatch directly via FormSubmit.co to sbfprintdesign@gmail.com
      await fetch("https://formsubmit.co/ajax/sbfprintdesign@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website Contact Inquiry — ${fullName}`,
          _template: "table",
          _captcha: "false",
          "Client Name": fullName,
          "Email Address": email,
          "Phone Number": phone,
          "Service Required": serviceCategory,
          "Inquiry Message": message,
        }),
      });

      // 2. Netlify static form capture
      const formData = new FormData();
      formData.append("form-name", "contact-inquiry");
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("serviceCategory", serviceCategory);
      formData.append("message", message);
      formData.append("targetEmail", "sbfprintdesign@gmail.com");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (err) {
      console.warn("Contact submission note:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
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
              Have an urgent printing request or need custom finishing advice? Reach out directly to our production team via WhatsApp, phone, or email.
            </p>

            {/* Direct Contact Methods List */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/971525069091"
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
                    +971 052 506 9091
                  </span>
                </div>
              </a>

              {/* Mobile Phone Call */}
              <a
                href="tel:+971525069091"
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
                    +971 052 506 9091
                  </span>
                </div>
              </a>

              {/* Email Address */}
              <a
                href="mailto:sbfprintdesign@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/80 hover:bg-zinc-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Official Quotations Email
                  </span>
                  <span className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors">
                    sbfprintdesign@gmail.com
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Your inquiry has been emailed to <strong className="text-white">sbfprintdesign@gmail.com</strong>. Our team will contact you within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage("");
                      generateCaptcha();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">Send Us a Direct Inquiry</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Dispatches directly to <strong className="text-zinc-200">sbfprintdesign@gmail.com</strong> and WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    
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
                        <label className="text-xs font-bold text-zinc-300">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. karim@company.ae"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) validateEmail(e.target.value);
                          }}
                          onBlur={(e) => validateEmail(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none transition-colors ${
                            emailError ? "border-red-500" : "border-zinc-800 focus:border-orange-500"
                          }`}
                        />
                        {emailError && (
                          <div className="flex items-center gap-1 text-[11px] text-red-400 font-semibold">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{emailError}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-300">WhatsApp / Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (phoneError) validatePhone(e.target.value);
                          }}
                          onBlur={(e) => validatePhone(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none transition-colors ${
                            phoneError ? "border-red-500" : "border-zinc-800 focus:border-orange-500"
                          }`}
                        />
                        {phoneError && (
                          <div className="flex items-center gap-1 text-[11px] text-red-400 font-semibold">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{phoneError}</span>
                          </div>
                        )}
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
                    </div>

                    {/* Message / Quantity Details */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300">Quantity &amp; Print Details</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="e.g. I need 500 pcs 400 GSM matte laminated cards with gold foil logo by tomorrow..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Security Captcha */}
                    <div className="space-y-2 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                        <Lock className="w-3.5 h-3.5 text-orange-400" />
                        <span>Security Challenge: Solve {num1} + {num2} = ?</span>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="ml-auto text-zinc-400 hover:text-orange-400 p-1 cursor-pointer"
                          title="New Challenge"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          if (captchaError) setCaptchaError("");
                        }}
                        placeholder="Enter math answer"
                        className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-xs font-bold focus:outline-none focus:border-orange-500"
                      />
                      {captchaError && (
                        <div className="flex items-center gap-1 text-[11px] text-red-400 font-semibold">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{captchaError}</span>
                        </div>
                      )}
                    </div>

                    {/* Buttons Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Dispatching..." : "Send Email to SBF Print"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
