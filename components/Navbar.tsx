"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Printer,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MEGA_MENU_CATEGORIES } from "@/data/megaMenuData";
import SubHeaderCategoryNav from "./SubHeaderCategoryNav";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  // Collect all searchable products from megaMenuData
  const allProducts = MEGA_MENU_CATEGORIES.flatMap((cat) =>
    cat.subGroups.flatMap((subGroup) =>
      subGroup.items.map((item) => ({
        ...item,
        category: cat.name,
      }))
    )
  );

  const searchResults = searchQuery.trim() === ""
    ? []
    : allProducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      
      {/* TOP HEADER ROW matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* BRAND LOGO on Left */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="SBF Print & Design Dubai"
              width={220}
              height={64}
              priority
              className="h-7 md:h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* SEARCH BAR in Center matching screenshot */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8 relative">
            <div className="relative w-full flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search Products..."
                className="w-full pl-4 pr-12 py-2.5 rounded-l-md bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] transition-colors"
              />
              <button
                type="button"
                className="px-5 py-2.5 bg-[#C68FE6] hover:bg-[#b078d6] text-white rounded-r-md transition-colors flex items-center justify-center"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Live Autocomplete Search Results Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 mt-1 bg-white border border-zinc-200 rounded-xl shadow-2xl py-2 z-50 max-h-96 overflow-y-auto"
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                <div className="px-4 py-2 border-b border-zinc-100 flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase">
                  <span>Found {searchResults.length} Products</span>
                  <button onClick={() => setIsSearchOpen(false)} className="hover:text-zinc-700">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                {searchResults.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-purple-50/50 transition-colors text-xs"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900">{item.title}</span>
                      <span className="text-[10px] font-medium text-zinc-400">{item.category}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#C68FE6] text-white uppercase">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT ACTIONS: GET A QUOTE & SHOPPING CART */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">

            {/* Request a Quote Button */}
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#C68FE6] border border-purple-200 text-xs font-bold transition-all shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </Link>

            {/* Shopping Cart Button with Counter */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Open Shopping Cart"
              className="relative p-2.5 rounded-xl border border-zinc-200 hover:border-[#C68FE6] text-zinc-700 hover:text-[#C68FE6] transition-all bg-zinc-50 cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C68FE6] text-white text-[10px] font-black flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* SUB-HEADER CATEGORY NAVIGATION SLIDER */}
      <SubHeaderCategoryNav />

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Mobile Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products..."
              className="w-full pl-4 pr-10 py-2.5 rounded-l-md bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-900"
            />
            <button className="px-4 py-2.5 bg-[#C68FE6] text-white rounded-r-md">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Product Categories</h4>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-purple-50 text-[#C68FE6] font-bold text-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Request a Quotation</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/all-products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-zinc-100 text-zinc-800 font-bold text-xs flex items-center justify-between"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {MEGA_MENU_CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/all-products#${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl hover:bg-zinc-50 text-zinc-800 font-semibold text-xs flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-zinc-400 font-bold">{cat.subGroups.length} Subgroups</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
