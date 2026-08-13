"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Sparkles, CheckCircle2 } from "lucide-react";
import { ALL_PRODUCTS, MAIN_CATEGORIES } from "@/data/productsCatalog";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Full Print &amp; Signage Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
              All Products &amp; Services
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl font-medium">
              Explore our complete printing catalog in Dubai. Select any product below to view transparent package pricing, specifications, and instant WhatsApp ordering.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-zinc-200 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Main Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {MAIN_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex-shrink-0 shadow-sm ${
                selectedCategory === cat
                  ? "bg-zinc-900 text-white shadow-md"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-zinc-200 p-8 space-y-3">
            <p className="text-base font-bold text-zinc-800">No products match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Products");
              }}
              className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg inline-block"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Object Contain */}
                <div className="relative aspect-[4/3] bg-zinc-100 p-2 overflow-hidden border-b border-zinc-100 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[10px] font-black px-2.5 py-0.5 rounded backdrop-blur-md border border-zinc-700 shadow-md">
                    {product.badge}
                  </div>

                  {/* Starting Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-orange-600 text-white text-xs font-black px-2.5 py-1 rounded shadow-md">
                    {product.startingPrice}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600 block">
                      {product.category}
                    </span>
                    <h3 className="text-base font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer & Direct Product Details Link */}
                  <div className="pt-3 border-t border-zinc-100 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 font-semibold">
                      <span>Dispatch: <strong className="text-zinc-800 font-bold">{product.turnaround}</strong></span>
                      <span className="text-emerald-600 font-extrabold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Ready</span>
                      </span>
                    </div>

                    <Link
                      href={`/services/${product.slug}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-orange-600 text-white text-xs font-extrabold flex items-center justify-between transition-all group/btn shadow-sm"
                    >
                      <span>View Pricing &amp; Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
