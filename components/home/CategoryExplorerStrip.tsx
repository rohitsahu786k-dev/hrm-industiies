"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DoorClosed,
  Shield,
  SquareDashedBottomCode,
  Grid,
  TrendingUp,
  Sun,
  Warehouse,
  Armchair,
  Sparkles
} from "lucide-react";

interface CategoryExplorerStripProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const CategoryExplorerStrip: React.FC<CategoryExplorerStripProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  const categories = [
    {
      name: "All Products",
      slug: "all",
      count: "9 Lines",
      icon: Sparkles,
      image: "/photos/hero-1.png"
    },
    {
      name: "Entrance Gates",
      slug: "gates-openings",
      count: "Swing & Sliding",
      icon: DoorClosed,
      image: "/photos/gate-1.png"
    },
    {
      name: "Balcony Railings",
      slug: "railings-balustrades",
      count: "SS 304 & MS",
      icon: Shield,
      image: "/photos/railing-1.png"
    },
    {
      name: "Steel Door Frames",
      slug: "doors-frames",
      count: "Pressed Choukhat",
      icon: SquareDashedBottomCode,
      image: "/photos/door-1.png"
    },
    {
      name: "Window Grills",
      slug: "grills-windows",
      count: "Minimal & Security",
      icon: Grid,
      image: "/photos/grill-1.png"
    },
    {
      name: "Custom Stairs",
      slug: "stairs-structures",
      count: "Spine & Cantilever",
      icon: TrendingUp,
      image: "/photos/staircase-1.png"
    },
    {
      name: "Facades & Canopies",
      slug: "facades-canopies",
      count: "CNC Laser Cut",
      icon: Sun,
      image: "/photos/banner-1.png"
    },
    {
      name: "Tin Shades & Roofs",
      slug: "sheds-canopies",
      count: "Terrace & Parking",
      icon: Warehouse,
      image: "/photos/craftsmanship.png"
    },
    {
      name: "Luxury Metal Furniture",
      slug: "metal-furniture",
      count: "Bespoke & Brass",
      icon: Armchair,
      image: "/photos/project-2.png"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          const Icon = cat.icon;

          return (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`group flex items-center gap-3.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 flex-shrink-0 cursor-pointer text-left ${
                isActive
                  ? "bg-slate-900 text-white border-hrm-orange shadow-lg shadow-hrm-orange/15 scale-105"
                  : "bg-white text-slate-800 border-slate-200/90 hover:border-hrm-orange/50 hover:bg-slate-50"
              }`}
            >
              {/* Category Thumbnail */}
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/60">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-bold whitespace-nowrap">
                    {cat.name}
                  </h4>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-hrm-orange" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-mono block ${
                    isActive ? "text-hrm-orange" : "text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
