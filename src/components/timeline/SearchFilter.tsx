"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "youth", label: "Thời trẻ (1890-1910)" },
    { id: "abroad", label: "Bôn ba (1911-1940)" },
    { id: "leadership", label: "Lãnh đạo CM (1941-1945)" },
    { id: "anti-french", label: "Kháng Pháp (1946-1954)" },
    { id: "final-years", label: "Những năm cuối (1954-1969)" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full max-w-[1200px] mx-auto mb-10 bg-brand-paper/70 p-6 rounded-xl border border-brand-outline/30 backdrop-blur-md shadow-sm shadow-[#1a0f0a]/5">
      {/* Search Input - Minimalist with bottom border only as per spec */}
      <div className="relative w-full md:w-80">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-outline" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm kiếm sự kiện, cột mốc..."
          className="w-full h-10 pl-7 pr-4 bg-transparent border-b border-brand-outline text-brand-on-surface placeholder-brand-outline/65 focus:outline-none focus:border-brand-gold transition-colors text-sm font-sans"
        />
      </div>

      {/* Category Tabs - Rounded Pills */}
      <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer select-none",
                isActive
                  ? "bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/10"
                  : "bg-brand-surface border-brand-outline/30 text-brand-on-surface-variant hover:text-brand-on-surface hover:border-brand-outline"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
