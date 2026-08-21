"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductHighlightsProps {
  products: Product[];
}

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "gates-openings", label: "Entrance Gates" },
    { id: "railings-balustrades", label: "Balcony & Railings" },
    { id: "doors-frames", label: "Door Frames" },
    { id: "grills-windows", label: "Window Grills" },
    { id: "stairs-structures", label: "Steel Stairs" },
    { id: "sheds-canopies", label: "Facades & Canopies" }
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category_slugs?.includes(activeCategory));

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-hrm-orange bg-hrm-orange/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Catalog</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Explore Custom Architectural Metalwork
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select a category below to explore site-engineered metal fabrication solutions by HRM Industries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-2 border-hrm-orange text-hrm-orange bg-white shadow-sm font-bold scale-105"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 6-Column Grid Layout matching reference UI */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={product.id}
              >
                <Link href={`/products/${product.slug}`} className="group flex flex-col h-full">
                  {/* Card Image Box */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-hrm-orange/50">
                    <Image
                      src={product.hero_desktop_image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {product.product_code && (
                      <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                        {product.product_code}
                      </span>
                    )}
                  </div>

                  {/* Clean Uppercase Title below image */}
                  <h3 className="mt-3.5 text-center font-black text-xs sm:text-sm uppercase tracking-wider text-slate-800 group-hover:text-hrm-orange transition-colors">
                    {product.title}
                  </h3>

                  {product.short_tagline && (
                    <p className="mt-0.5 text-center text-[11px] font-medium text-slate-500 line-clamp-1 px-1">
                      {product.short_tagline}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Products CTA Link */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-hrm-orange hover:bg-hrm-orange-dark px-8 py-3.5 rounded-full shadow-lg shadow-hrm-orange/20 transition-all hover:scale-105"
          >
            <span>View Complete Product Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
