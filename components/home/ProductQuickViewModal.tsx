"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Ruler,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Product } from "@/lib/types/wordpress";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose
}) => {
  // Lock background scroll when open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const whatsappMessage = `Hello HRM Industries, I am interested in technical details and estimate for:
Product: ${product.title}
Code: ${product.product_code || "Custom"}
Material: ${product.material_info}
Finish: ${product.finish_info}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Image Column */}
            <div className="md:col-span-5 bg-slate-950 relative min-h-[280px] md:min-h-[500px] flex flex-col justify-between p-6 text-white">
              <Image
                src={product.hero_desktop_image}
                alt={product.title}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-hrm-orange text-white shadow-md">
                  {product.product_code || "HRM-CUSTOM"}
                </span>
                <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700">
                  Udaipur Workshop
                </span>
              </div>

              {/* Bottom Specs Overview */}
              <div className="relative z-10 mt-auto pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-hrm-orange font-bold">
                  Quality Standard
                </h4>
                <div className="flex items-center gap-2 mt-1 text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>±0.5mm Tolerance • Shop Trial Fit</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-900">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-hrm-orange font-bold">
                  Technical Specifications
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-4">
                  {product.short_tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {product.content || product.excerpt}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-hrm-orange text-xs font-bold uppercase tracking-wider mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Material Alloy</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      {product.material_info || "IS 2062 MS / SS 304 / GI Tubes"}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-hrm-orange text-xs font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Coating & Finish</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      {product.finish_info || "7-Tank Zinc Primer & Powder Coat"}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 sm:col-span-2">
                    <div className="flex items-center gap-2 text-hrm-orange text-xs font-bold uppercase tracking-wider mb-1">
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Application & Site Conditions</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      {product.applications || "Residential Villas, Resorts, High-Traffic Commercial Hubs"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/919799647638?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request WhatsApp Estimate</span>
                </a>

                <Link
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Full Page Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
