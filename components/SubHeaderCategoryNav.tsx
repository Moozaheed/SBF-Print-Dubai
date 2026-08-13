"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { MEGA_MENU_CATEGORIES } from "@/data/megaMenuData";

export default function SubHeaderCategoryNav() {
  const [hoveredCategoryName, setHoveredCategoryName] = useState<string | null>(null);

  const activeCategory = MEGA_MENU_CATEGORIES.find(
    (c) => c.name === hoveredCategoryName
  );

  return (
    <div
      className="bg-white text-zinc-900 border-t border-b border-zinc-200 relative select-none z-40"
      onMouseLeave={() => setHoveredCategoryName(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Sub-Header Bar */}
        <div className="flex items-center justify-between text-xs font-semibold py-2.5 overflow-x-auto scrollbar-none">
          
          {/* All Products Tab */}
          <Link
            href="/all-products"
            onMouseEnter={() => setHoveredCategoryName(null)}
            className="px-3 py-1.5 text-zinc-800 hover:text-[#C68FE6] font-bold transition-colors whitespace-nowrap flex-shrink-0 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-[#C68FE6]" />
            <span>All Products</span>
          </Link>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {MEGA_MENU_CATEGORIES.map((cat) => {
              const isHovered = hoveredCategoryName === cat.name;
              return (
                <div key={cat.name} className="relative py-1">
                  <Link
                    href={`/all-products#${cat.slug}`}
                    onMouseEnter={() => setHoveredCategoryName(cat.name)}
                    className={`px-3 py-2 text-xs font-medium transition-all whitespace-nowrap inline-block relative ${
                      isHovered
                        ? "text-[#C68FE6] font-bold"
                        : "text-zinc-800 hover:text-[#C68FE6]"
                    }`}
                  >
                    {cat.name}

                    {/* Active Underline Bar in #C68FE6 matching screenshot */}
                    {isHovered && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C68FE6] rounded-full animate-in fade-in duration-150" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

        </div>

        {/* Floating Mega-Menu Popover Dropdown Panel matching screenshot */}
        {activeCategory && (
          <div
            className="absolute top-full left-0 right-0 bg-white border border-zinc-200 shadow-2xl z-50 p-8 animate-in fade-in duration-150"
            onMouseEnter={() => setHoveredCategoryName(activeCategory.name)}
            onMouseLeave={() => setHoveredCategoryName(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid gap-8 ${
                  activeCategory.subGroups.length >= 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : activeCategory.subGroups.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : activeCategory.subGroups.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {activeCategory.subGroups.map((subGroup) => (
                  <div key={subGroup.groupName} className="space-y-2.5">
                    
                    {/* Sub-Group Header Title in #C68FE6 */}
                    <h4 className="text-xs font-bold text-[#C68FE6] uppercase tracking-wider">
                      {subGroup.groupName}
                    </h4>

                    {/* Item List */}
                    <ul className="space-y-1.5 text-xs">
                      {subGroup.items.map((item) => (
                        <li key={item.slug} className="flex items-center gap-1.5">
                          <Link
                            href={`/services/${item.slug}`}
                            onClick={() => setHoveredCategoryName(null)}
                            className="text-zinc-700 hover:text-[#C68FE6] transition-colors font-medium hover:underline"
                          >
                            {item.title}
                          </Link>

                          {/* Badges in #C68FE6 / rose accent */}
                          {item.badge && (
                            <span
                              className={`text-[8.5px] font-black px-1.5 py-0.2 rounded uppercase tracking-wider text-white ${
                                item.badge === "SALE"
                                  ? "bg-[#C68FE6]"
                                  : "bg-[#C68FE6]"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
