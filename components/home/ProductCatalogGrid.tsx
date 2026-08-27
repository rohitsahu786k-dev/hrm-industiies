"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Eye,
  MessageSquare,
  MoveUpRight,
  Filter
} from "lucide-react";
import { Product } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { CategoryExplorerStrip } from "./CategoryExplorerStrip";
import { ProductQuickViewModal } from "./ProductQuickViewModal";
import { MaterialFinishesStrip } from "./MaterialFinishesStrip";

interface ProductCatalogGridProps {
  products: Product[];
}

export const ProductCatalogGrid: React.FC<ProductCatalogGridProps> = ({
  products
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on selected category slug
  const filteredProducts = products.filter((p) => {
    if (activeCategory === "all") return true;

    if (activeCategory === "gates-openings") {
      return (
        p.slug.includes("gate") ||
        p.category_slugs?.includes("gates-openings") ||
        p.title.toLowerCase().includes("gate")
      );
    }
    if (activeCategory === "railings-balustrades") {
      return (
        p.slug.includes("railing") ||
        p.category_slugs?.includes("railings-balustrades") ||
        p.title.toLowerCase().includes("railing")
      );
    }
    if (activeCategory === "doors-frames") {
      return (
        p.slug.includes("door") ||
        p.slug.includes("frame") ||
        p.category_slugs?.includes("doors-frames") ||
        p.title.toLowerCase().includes("frame")
      );
    }
    if (activeCategory === "grills-windows") {
      return (
        p.slug.includes("grill") ||
        p.slug.includes("window") ||
        p.category_slugs?.includes("grills-windows") ||
        p.title.toLowerCase().includes("grill")
      );
    }
    if (activeCategory === "stairs-structures") {
      return (
        p.slug.includes("stair") ||
        p.category_slugs?.includes("stairs-structures") ||
        p.title.toLowerCase().includes("stair")
      );
    }
    if (activeCategory === "facades-canopies") {
      return (
        p.slug.includes("facade") ||
        p.slug.includes("canop") ||
        p.title.toLowerCase().includes("laser") ||
        p.title.toLowerCase().includes("canop")
      );
    }
    if (activeCategory === "sheds-canopies") {
      return (
        p.slug.includes("shade") ||
        p.slug.includes("roof") ||
        p.category_slugs?.includes("sheds-canopies") ||
        p.title.toLowerCase().includes("shade")
      );
    }
    if (activeCategory === "metal-furniture") {
      return (
        p.slug.includes("furniture") ||
        p.slug.includes("custom-items") ||
        p.category_slugs?.includes("metal-furniture") ||
        p.title.toLowerCase().includes("furniture") ||
        p.title.toLowerCase().includes("custom")
      );
    }

    return true;
  });

  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Workshop Product Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Bespoke Architectural Metalwork
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered and fabricated at our Udaipur studio. Custom built to site dimensions with 100% shop floor fitment testing.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-hrm-orange text-white text-xs sm:text-sm font-bold shadow-md transition-all self-start md:self-auto"
          >
            <span>Explore All 9 Product Lines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Category Explorer Strip */}
        <div className="mb-10">
          <CategoryExplorerStrip
            activeCategory={activeCategory}
            onSelectCategory={(slug) => setActiveCategory(slug)}
          />
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-hrm-orange/50 transition-all duration-300 relative"
              >
                {/* Product Image Area */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={p.hero_desktop_image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white border border-white/20">
                      {p.product_code || "HRM-CUSTOM"}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-md shadow-sm">
                      Udaipur Built
                    </span>
                  </div>

                  {/* Hover Quick Specs Trigger Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-hrm-orange text-white text-xs font-bold shadow-lg shadow-hrm-orange/30 hover:bg-hrm-orange-dark transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Quick View Specs</span>
                    </button>
                  </div>
                </div>

                {/* Product Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-hrm-orange transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 line-clamp-1">
                      {p.short_tagline}
                    </p>
                    <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                      {p.excerpt || p.content}
                    </p>

                    {/* Alloy and Coating Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-4">
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80">
                        {p.material_info?.split(",")[0] || "IS 2062 MS"}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80">
                        {p.finish_info?.split("/")[0] || "Anti-Rust Coated"}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-hrm-orange transition-colors cursor-pointer"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/919799647638?text=${encodeURIComponent(
                        `Hello HRM Industries, I am inquiring about product: ${p.title} (${p.product_code || "Custom"})`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200/80 transition-colors text-xs font-bold"
                      title="Instant WhatsApp Estimate"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Estimate</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Material Finishes & Powder Coating Swatches Strip */}
        <MaterialFinishesStrip />
      </Container>

      {/* Quick View Engineering Specs Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
