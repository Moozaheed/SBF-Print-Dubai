"use client";

import Link from "next/link";
import { MEGA_MENU_CATEGORIES } from "@/data/megaMenuData";

export default function AllProductsView() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-48 md:pt-52 pb-20 selection:bg-[#C68FE6] selection:text-white">
      
      {/* Top Main Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 pb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#C68FE6] tracking-tight">
          All Products
        </h1>
      </div>

      {/* All 3 Categories Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEGA_MENU_CATEGORIES.map((category) => (
            <section
              key={category.name}
              id={category.slug}
              className="border border-zinc-200 rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="border-b border-zinc-200 pb-3 mb-5">
                <h2 className="text-lg font-extrabold text-zinc-900 tracking-tight">
                  {category.name}
                </h2>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {category.subGroups[0].items.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68FE6] flex-shrink-0" />
                    <Link
                      href={`/services/${item.slug}`}
                      className="text-sm font-medium text-zinc-800 hover:text-[#C68FE6] hover:underline transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.badge && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider text-white bg-[#C68FE6] flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* Newsletter Section matching screenshot */}
      <div className="mt-20 border-t border-zinc-200 bg-zinc-50/80 py-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <span className="text-sm font-bold text-zinc-700">
            Sign Up To Our Newsletter
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-4 py-2.5 rounded-lg border border-zinc-300 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-[#C68FE6] bg-white"
            />
            <button className="px-6 py-2.5 rounded-lg bg-[#C68FE6] hover:bg-[#b078d6] text-white font-bold text-xs transition-colors shadow-sm flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
