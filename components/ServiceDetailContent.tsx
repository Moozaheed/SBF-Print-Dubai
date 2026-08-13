"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Share2,
  Upload,
  Check,
  ShoppingCart,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ServiceDetail } from "@/data/serviceDetails";
import { ALL_PRODUCTS } from "@/data/productsCatalog";
import { getReviewsForProduct } from "@/data/reviews";

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailContent({ service }: Props) {
  // Image gallery state
  const samples = service.samples && service.samples.length > 0
    ? service.samples
    : [service.heroImage, "/commercial-services/business-cards.jpg", "/commercial-services/3d-signage.jpg"];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Customization Form Controls State
  const [selectedSize, setSelectedSize] = useState("A3");
  const [selectedMaterial, setSelectedMaterial] = useState("Standard / Sappi Magno White");
  const [selectedThickness, setSelectedThickness] = useState("150 gsm");
  const [selectedFinishing, setSelectedFinishing] = useState("Flat Satin Semi Matte");
  const [selectedPrinting, setSelectedPrinting] = useState("One Side");
  const [selectedLamination, setSelectedLamination] = useState("None");
  const [selectedOrientation, setSelectedOrientation] = useState<"landscape" | "portrait">("portrait");
  const [comments, setComments] = useState("");
  const [quantity, setQuantity] = useState(100);

  // Active Tab State (Info, Delivery, Payment, Tips)
  const [activeTab, setActiveTab] = useState<"info" | "delivery" | "payment" | "tips">("info");

  const reviews = getReviewsForProduct(service.slug, 3);
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  // Dynamic Price Calculation
  const basePricePerUnit = 1.14;
  const calculatedPrice = (basePricePerUnit * quantity).toFixed(2);

  // Construct WhatsApp Order Message
  const orderMessage = encodeURIComponent(
    `Hello SBF Print & Design,\nI would like to order ${service.title}:\n- Size: ${selectedSize}\n- Quantity: ${quantity} pcs\n- Material: ${selectedMaterial}\n- Thickness: ${selectedThickness}\n- Finishing: ${selectedFinishing}\n- Orientation: ${selectedOrientation}\n- Estimated Price: AED ${calculatedPrice}`
  );

  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-48 md:pt-52 pb-20 selection:bg-[#C68FE6] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* SECTION 1: TOP PRODUCT GALLERY & SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview Box */}
            <div className="relative aspect-square rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden flex items-center justify-center p-4">
              <Image
                src={samples[activeImageIndex]}
                alt={service.title}
                fill
                className="object-contain p-4 transition-all duration-300"
              />
            </div>

            {/* Thumbnail Selector Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {samples.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl bg-zinc-50 border-2 overflow-hidden flex-shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#C68FE6] shadow-md scale-95"
                      : "border-zinc-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Header Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm text-zinc-500 mt-1">
                starting at <span className="text-[#C68FE6] font-extrabold text-lg">AED {basePricePerUnit}</span>
              </p>
            </div>

            {/* Review Stars & Social Share Bar */}
            <div className="flex items-center justify-between border-y border-zinc-100 py-3">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-400">No reviews yet.</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                <span>Share:</span>
                <a href={`https://wa.me/?text=${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200">
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
                <div className="w-7 h-7 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Info Tabs Navigation */}
            <div className="space-y-3">
              <div className="flex border-b border-zinc-200 text-xs font-bold">
                {[
                  { id: "info", label: "Info" },
                  { id: "delivery", label: "Delivery" },
                  { id: "payment", label: "Payment" },
                  { id: "tips", label: "Tips" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-2.5 border-b-2 transition-all ${
                      activeTab === tab.id
                        ? "border-[#C68FE6] text-[#C68FE6] font-extrabold"
                        : "border-transparent text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-zinc-600 leading-relaxed min-h-[60px]">
                {activeTab === "info" && (
                  <p>{service.subtitle || service.description}</p>
                )}
                {activeTab === "delivery" && (
                  <p>Express 24-48 hours delivery available across Dubai and all 7 UAE Emirates via Aramex &amp; local courier dispatch.</p>
                )}
                {activeTab === "payment" && (
                  <p>We accept Visa, Mastercard, Google Pay, and Cash on Delivery.</p>
                )}
                {activeTab === "tips" && (
                  <p>For best color accuracy, submit print-ready CMYK artwork files with 3mm bleed at 300 DPI resolution.</p>
                )}
              </div>
            </div>

          </div>

        </div>


        {/* SECTION 2: CUSTOMIZE PRODUCT FORM & LIVE PRICE BOX */}
        <div className="border-t border-zinc-200 pt-12 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Customize Product
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Size Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">SIZE</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                >
                  <option value="A3">A3 (297 x 420 mm)</option>
                  <option value="A4">A4 (210 x 297 mm)</option>
                  <option value="A2">A2 (420 x 594 mm)</option>
                  <option value="Custom Size">Custom Size</option>
                </select>
              </div>

              {/* Material Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">MATERIAL</label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                >
                  <option value="Standard / Sappi Magno White">Standard / Sappi Magno White</option>
                  <option value="Kraft Liner Board">Standard / Kraft Liner Board</option>
                  <option value="Scheufelen Heaven 42 Soft Matt">Premium / Scheufelen Heaven 42 Soft Matt</option>
                  <option value="Fedrigoni Sirio Pearl">Luxury / Fedrigoni Sirio Pearl Ice White</option>
                </select>
              </div>

              {/* Thickness Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">THICKNESS</label>
                <select
                  value={selectedThickness}
                  onChange={(e) => setSelectedThickness(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                >
                  <option value="150 gsm">150 gsm Gloss / Matte</option>
                  <option value="250 gsm">250 gsm Heavy Art Card</option>
                  <option value="300 gsm">300 gsm Premium Cover Stock</option>
                  <option value="350 gsm">350 gsm Ultra Thick Premium</option>
                </select>
              </div>

              {/* Finishing Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">FINISHING</label>
                <select
                  value={selectedFinishing}
                  onChange={(e) => setSelectedFinishing(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                >
                  <option value="Flat Satin Semi Matte">Flat Satin Semi Matte</option>
                  <option value="Uncoated Flat Matte">Uncoated Flat Matte Brown</option>
                  <option value="Flat Gloss White Pearl">Flat Gloss White Pearl</option>
                </select>
              </div>

              {/* Printing & Lamination Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">PRINTING</label>
                  <select
                    value={selectedPrinting}
                    onChange={(e) => setSelectedPrinting(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                  >
                    <option value="One Side">One Side (Single Sided)</option>
                    <option value="Both Sides">Both Sides (Double Sided)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">LAMINATION</label>
                  <select
                    value={selectedLamination}
                    onChange={(e) => setSelectedLamination(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                  >
                    <option value="None">None</option>
                    <option value="Matte Lamination">Matte Lamination</option>
                    <option value="Gloss Lamination">Gloss Lamination</option>
                    <option value="Velvet Touch">Velvet Soft Touch</option>
                  </select>
                </div>
              </div>

              {/* Orientation Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">ORIENTATION</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedOrientation("landscape")}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                      selectedOrientation === "landscape"
                        ? "border-[#C68FE6] bg-purple-50/50 text-[#C68FE6] font-bold"
                        : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                    }`}
                  >
                    <div className="w-12 h-8 rounded border-2 border-current flex items-center justify-center text-xs font-bold">
                      A
                    </div>
                    <span className="text-xs font-semibold">Landscape</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedOrientation("portrait")}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                      selectedOrientation === "portrait"
                        ? "border-[#C68FE6] bg-purple-50/50 text-[#C68FE6] font-bold"
                        : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                    }`}
                  >
                    <div className="w-8 h-12 rounded border-2 border-current flex items-center justify-center text-xs font-bold">
                      A
                    </div>
                    <span className="text-xs font-semibold">Portrait</span>
                  </button>
                </div>
              </div>

              {/* Comments Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">ADDITIONAL COMMENTS OR REQUESTS</label>
                <textarea
                  rows={3}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Specify custom dimensions, Pantone color codes, or special finishing requests..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                />
              </div>

              {/* Upload Artwork Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/9710525069091?text=${encodeURIComponent(
                    `Hello SBF Print, I want to send my artwork file for ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-dashed border-zinc-300 hover:border-[#C68FE6] text-zinc-700 hover:text-[#C68FE6] font-bold text-xs transition-all bg-zinc-50"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Image / Send Artwork via WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Live Instant Pricing Summary Box (4 Cols) */}
            <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200 rounded-3xl p-6 space-y-6 shadow-sm sticky top-36">
              
              {/* Quantity Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">QUANTITY</label>
                <input
                  type="number"
                  min={10}
                  step={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(10, parseInt(e.target.value) || 10))}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm font-bold text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                />
                <span className="text-[11px] font-semibold text-[#C68FE6] cursor-pointer hover:underline block">
                  Quantity and Savings Chart
                </span>
              </div>

              {/* Price Calculation Box */}
              <div className="text-center py-4 space-y-1 border-y border-zinc-200">
                <div className="text-3xl sm:text-4xl font-black text-[#C68FE6]">
                  AED {calculatedPrice}
                </div>
                <span className="text-[11px] font-semibold text-zinc-500 block">
                  *All prices include 5% VAT
                </span>
              </div>

              {/* Primary Order Button */}
              <a
                href={`https://wa.me/9710525069091?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#C68FE6] hover:bg-[#b078d6] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart / Order Now</span>
              </a>

              {/* Order on WhatsApp Button */}
              <a
                href={`https://wa.me/9710525069091?text=${encodeURIComponent(`Hi SBF Print! I'd like to order:\n\n*${service.title}*\n\nPlease let me know the next steps and pricing details. Thank you!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Order on WhatsApp</span>
              </a>


            </div>

          </div>
        </div>


        {/* SECTION 3: PRODUCT DESCRIPTION */}
        <div className="border-t border-zinc-200 pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 text-center tracking-tight">
            Product description
          </h2>

          <div className="prose max-w-4xl mx-auto text-xs sm:text-sm text-zinc-600 leading-relaxed space-y-4">
            <p>
              {service.description} At SBF Print &amp; Design Dubai, we offer the best quality commercial printing solutions available across the Middle East. Our top-grade digital &amp; offset printing presses are engineered to deliver crisp text, vibrant CMYK color accuracy, and fast turnaround for all your business branding needs.
            </p>

            <h4 className="font-extrabold text-zinc-900 text-sm sm:text-base pt-2">
              Special Features of Our {service.title}
            </h4>

            <ul className="list-disc pl-5 space-y-1.5">
              <li>High-resolution 300 DPI pre-flight checked printing materials.</li>
              <li>Heavy-duty 150 GSM to 350 GSM premium paper stocks &amp; rigid materials.</li>
              <li>Waterproof, UV-resistant, and scratch-proof protective laminations.</li>
              <li>Available in custom sizes, portrait/landscape orientations, and die-cut shapes.</li>
            </ul>

            <p className="pt-2">
              If you have any questions or need custom quotation assistance, contact our Dubai press team directly at <strong className="text-zinc-900">+971 052 506 9091</strong> or email <strong className="text-zinc-900">sbfprintdesing@gmail.com</strong>.
            </p>
          </div>
        </div>


        {/* SECTION 4: CUSTOMER REVIEWS */}
        <div className="border-t border-zinc-200 pt-12 space-y-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 text-center tracking-tight uppercase">
            Customer Reviews
          </h2>

          {/* Aggregate Score */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl font-black text-zinc-900">{avgRating}</div>
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-5 h-5 ${parseFloat(avgRating) >= s ? "fill-amber-400" : "fill-zinc-200 text-zinc-200"}`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-zinc-500">{reviews.length} verified reviews</span>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C68FE6] text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{review.name}</p>
                    <p className="text-[11px] text-zinc-400 font-medium">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-3.5 h-3.5 ${review.rating >= s ? "fill-amber-400" : "fill-zinc-200 text-zinc-200"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>


        {/* SECTION 5: RELATED PRODUCTS SLIDER */}
        <div className="border-t border-zinc-200 pt-12 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 text-center tracking-tight">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ALL_PRODUCTS.slice(0, 4).map((item) => (
              <Link key={item.id} href={`/services/${item.slug}`} className="group bg-white rounded-2xl border border-zinc-200 p-4 space-y-3 text-center shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-square rounded-xl bg-zinc-50 p-2 overflow-hidden flex items-center justify-center">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-2 group-hover:scale-105 transition-transform" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold">
                    Starting At <span className="text-[#C68FE6] font-extrabold">{item.startingPrice}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
