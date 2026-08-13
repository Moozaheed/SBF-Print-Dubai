"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, PAPER_STOCKS, FINISHINGS, QUANTITY_TIERS, calculatePrice } from "@/data/pricing";
import { Calculator, Sliders, Info, ArrowRight, Check, Sparkles, AlertCircle, FileCheck } from "lucide-react";

export default function CalculatorWidget() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].id);
  const [width, setWidth] = useState(PRODUCTS[0].defaultWidth);
  const [height, setHeight] = useState(PRODUCTS[0].defaultHeight);
  const [selectedPaperGsm, setSelectedPaperGsm] = useState(350);
  const [selectedFinishing, setSelectedFinishing] = useState("gold-foil");
  const [sides, setSides] = useState<"single" | "double">("double");
  const [quantity, setQuantity] = useState(1000);
  const [designerHelp, setDesignerHelp] = useState(false);

  // Active product details
  const currentProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0],
    [selectedProduct]
  );

  // Handle product change and reset default dimensions
  const handleProductChange = (prodId: string) => {
    setSelectedProduct(prodId);
    const prod = PRODUCTS.find((p) => p.id === prodId);
    if (prod) {
      setWidth(prod.defaultWidth);
      setHeight(prod.defaultHeight);
    }
  };

  // Perform calculation
  const calcResult = useMemo(() => {
    return calculatePrice(
      selectedProduct,
      width,
      height,
      selectedPaperGsm,
      selectedFinishing,
      sides,
      quantity,
      designerHelp
    );
  }, [selectedProduct, width, height, selectedPaperGsm, selectedFinishing, sides, quantity, designerHelp]);

  return (
    <section id="calculator" className="py-16 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-4 h-4" />
            <span>Instant Price Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Dynamic Printing Cost Calculator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Select your specs below. Prices update in real-time with transparent bulk discount breakdowns.
          </p>
        </div>

        {/* Main Glassmorphic Widget Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (8 Columns) */}
          <div className="lg:col-span-8 bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-8 shadow-2xl">
            
            {/* Step 1: Select Product Category */}
            <div>
              <label className="block text-xs font-extrabold text-orange-400 tracking-wider uppercase mb-3">
                1. Select Product Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRODUCTS.map((prod) => {
                  const isSelected = prod.id === selectedProduct;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => handleProductChange(prod.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/30 font-bold"
                          : "bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 font-medium"
                      }`}
                    >
                      <span className="block text-sm leading-snug">{prod.name}</span>
                      <span className={`text-[11px] block mt-1 ${isSelected ? "text-orange-100" : "text-zinc-500"}`}>
                        From AED {prod.minPressFee.toFixed(0)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions & Custom Sliders */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">
                  2. Dimensions &amp; Size Presets
                </label>
                <span className="text-xs text-zinc-400 font-mono">
                  {width}" x {height}" ({calcResult.areaSqIn} sq. in)
                </span>
              </div>

              {/* Standard Presets Chips */}
              <div className="flex flex-wrap gap-2">
                {currentProduct.standardPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setWidth(preset.width);
                      setHeight(preset.height);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      width === preset.width && height === preset.height
                        ? "bg-zinc-800 text-white border-orange-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Custom Width & Height Range Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-zinc-300">
                    <span>Width (Inches):</span>
                    <span className="text-orange-400 font-mono">{width}"</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="96"
                    step="0.5"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-zinc-300">
                    <span>Height (Inches):</span>
                    <span className="text-orange-400 font-mono">{height}"</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="96"
                    step="0.5"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Paper Stock GSM & Sides */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <label className="block text-xs font-extrabold text-orange-400 tracking-wider uppercase">
                3. Paper Stock (GSM Weight) &amp; Print Sides
              </label>

              {/* GSM Selector Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PAPER_STOCKS.map((stock) => {
                  const isSelected = selectedPaperGsm === stock.gsm;
                  return (
                    <button
                      key={stock.id}
                      onClick={() => setSelectedPaperGsm(stock.gsm)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-zinc-800 border-orange-500 text-white shadow-md font-bold"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <span className="block text-xs font-bold text-orange-400">{stock.name}</span>
                      <span className="text-[10px] text-zinc-500 block mt-1">{stock.description}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sides Switch */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-semibold text-zinc-300">Printed Sides:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSides("single")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                      sides === "single"
                        ? "bg-orange-600 text-white border-orange-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    Single-Sided (4/0)
                  </button>
                  <button
                    onClick={() => setSides("double")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                      sides === "double"
                        ? "bg-orange-600 text-white border-orange-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    Double-Sided (4/4)
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Finishing Selection */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <label className="block text-xs font-extrabold text-orange-400 tracking-wider uppercase">
                4. Finishing &amp; Specialty Upgrades
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FINISHINGS.map((finish) => {
                  const isSelected = selectedFinishing === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinishing(finish.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-zinc-800 border-orange-500 text-white font-bold"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <span className="block text-xs font-bold text-white">{finish.name}</span>
                      <span className="text-[10px] text-zinc-500 block mt-1">{finish.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Quantity Tier Range Slider */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-extrabold text-orange-400 tracking-wider uppercase">
                  5. Order Quantity Tier
                </label>
                <span className="text-sm font-extrabold text-white font-mono bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700">
                  {quantity.toLocaleString()} Units
                </span>
              </div>

              {/* Quantity Preset Chips */}
              <div className="flex flex-wrap gap-2">
                {QUANTITY_TIERS.map((tier) => (
                  <button
                    key={tier.qty}
                    onClick={() => setQuantity(tier.qty)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      quantity === tier.qty
                        ? "bg-orange-600 text-white border-orange-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                    }`}
                  >
                    {tier.qty.toLocaleString()} pcs{" "}
                    {tier.discountPct > 0 && <span className="text-[10px] text-emerald-400">(-{tier.discountPct}%)</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Designer Help Option */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between bg-zinc-900/60 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="designerHelp"
                  checked={designerHelp}
                  onChange={(e) => setDesignerHelp(e.target.checked)}
                  className="w-4 h-4 accent-orange-500 rounded cursor-pointer"
                />
                <label htmlFor="designerHelp" className="text-xs sm:text-sm font-semibold text-zinc-200 cursor-pointer">
                  I need a professional designer to create / fix my layout (+ AED 100)
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Price Summary & Checkout Action (4 Columns) */}
          <div className="lg:col-span-4 sticky top-28 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">
                Live Price Summary
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                Instant Quote
              </span>
            </div>

            {/* Total Price Display */}
            <div className="space-y-1">
              <div className="text-xs text-zinc-400 font-medium">Estimated Total (Inc. 5% VAT)</div>
              <div className="text-4xl sm:text-5xl font-black text-orange-400 font-mono tracking-tight">
                AED {calcResult.totalPrice.toFixed(2)}
              </div>
              <div className="text-xs text-zinc-400 pt-1">
                Unit Price: <span className="text-white font-mono font-bold">AED {calcResult.unitPrice.toFixed(3)}</span> / unit
              </div>
            </div>

            {/* Breakdown Tooltip Block */}
            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal Price:</span>
                <span className="font-mono text-zinc-200">AED {calcResult.subtotal.toFixed(2)}</span>
              </div>

              {calcResult.tierDiscountPct > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Bulk Discount ({calcResult.tierDiscountPct}%):</span>
                  <span className="font-mono">- AED {calcResult.savingsAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-zinc-400">
                <span>UAE VAT (5%):</span>
                <span className="font-mono text-zinc-200">AED {calcResult.vatAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* File Pre-Flight Indicator */}
            <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-800/40 flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-200">
                <span className="font-bold block">Free Artwork Pre-Flight Included</span>
                We automatically verify 300 DPI resolution, bleed lines, and CMYK color mode.
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => {
                alert(`Order Configured: ${currentProduct.name} (${quantity} pcs) - Total: AED ${calcResult.totalPrice}. Navigating to artwork upload & checkout!`);
              }}
              className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Upload File &amp; Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-[11px] text-center text-zinc-500">
              No payment required until your artwork proof is approved.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
