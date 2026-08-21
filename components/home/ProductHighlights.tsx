"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Shield,
  SlidersHorizontal,
  MoveUpRight,
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductHighlightsProps {
  products: Product[];
}

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Metalwork" },
    { id: "gates-openings", label: "Entrance Gates" },
    { id: "railings-balustrades", label: "Balcony & Railings" },
    { id: "doors-frames", label: "Metal Door Frames" },
    { id: "grills-windows", label: "Window Grills" },
    { id: "stairs-structures", label: "Steel Stairs" }
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category_slugs?.includes(activeCategory));

  return (
    <section className="py-24 sm:py-32 bg-[#080b0e] text-white relative overflow-hidden dark-surface">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 metal-mesh opacity-20 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-hrm-orange/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hrm-orange/15 border border-hrm-orange/30 text-hrm-orange text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Metalwork Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineered for Structural Rigidity & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hrm-orange via-amber-400 to-orange-500">
                Architectural Distinction
              </span>
            </h2>
          </div>

          <Button
            href="/products"
            variant="primary"
            size="lg"
            icon
            className="self-start md:self-auto shadow-xl shadow-hrm-orange/20"
          >
            All Product Lines
          </Button>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-hrm-orange text-white border-hrm-orange shadow-lg shadow-hrm-orange/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group relative bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-hrm-orange/60 rounded-2xl overflow-hidden shadow-2xl hover:shadow-hrm-orange/15 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <Image
                    src={product.hero_desktop_image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

                  {/* Top Product Code Badge */}
                  {product.product_code && (
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-hrm-orange border border-hrm-orange/30 text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                      {product.product_code}
                    </span>
                  )}

                  {/* Top Right Custom Badge */}
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                    Custom to Site
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-hrm-orange uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{product.short_tagline || "Custom Site Fabrication"}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-hrm-orange transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed flex-grow">
                    {product.excerpt}
                  </p>

                  {/* Technical Material Specs */}
                  {product.material_info && (
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                      <Shield className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                      <span className="truncate">{product.material_info}</span>
                    </div>
                  )}

                  {/* Footer Action Links */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-hrm-orange transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href={`/contact?product=${encodeURIComponent(product.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-hrm-orange hover:bg-hrm-orange-dark text-white shadow-md shadow-hrm-orange/25 transition-all"
                    >
                      <Send className="w-3 h-3" />
                      <span>Get Estimate</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Helper Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span>Have custom architectural drawings or a specific section profile requirement?</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-hrm-orange hover:text-white px-4 py-2 rounded-xl bg-hrm-orange/10 hover:bg-hrm-orange border border-hrm-orange/30 transition-all flex-shrink-0"
          >
            <span>Submit Your Drawings For Review</span>
            <MoveUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

