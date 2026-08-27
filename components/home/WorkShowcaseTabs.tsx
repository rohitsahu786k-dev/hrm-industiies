"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MoveUpRight,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import { Product, Project } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";

interface WorkShowcaseTabsProps {
  products: Product[];
  projects: Project[];
}

export const WorkShowcaseTabs: React.FC<WorkShowcaseTabsProps> = ({
  products,
  projects
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "Featured Work" },
    { id: "gates", label: "Entrance Gates" },
    { id: "railings", label: "Railings & Balustrades" },
    { id: "frames", label: "Steel Door Frames" },
    { id: "projects", label: "Architectural Projects" }
  ];

  // Filter items based on active tab
  const getFilteredItems = () => {
    if (activeTab === "projects") {
      return projects.slice(0, 6).map((p) => ({
        type: "project" as const,
        id: `proj-${p.id}`,
        title: p.title,
        subtitle: p.location || "Udaipur, Rajasthan",
        tag: p.scope || "Architectural Project",
        image: p.cover_image,
        url: `/projects/${p.slug}`,
        meta: `${p.year || "2025"} • Custom Built`
      }));
    }

    if (activeTab === "gates") {
      const filtered = products.filter(
        (p) =>
          p.slug.includes("gate") ||
          p.title.toLowerCase().includes("gate") ||
          p.category_slugs?.includes("gates")
      );
      return (filtered.length ? filtered : products.slice(0, 4)).map((p) => ({
        type: "product" as const,
        id: `prod-${p.id}`,
        title: p.title,
        subtitle: p.short_tagline || p.material_info || "Heavy MS / GI Profile",
        tag: "Entrance Gate",
        image: p.hero_desktop_image,
        url: `/products/${p.slug}`,
        meta: p.product_code ? `Code: ${p.product_code}` : "Custom Size"
      }));
    }

    if (activeTab === "railings") {
      const filtered = products.filter(
        (p) =>
          p.slug.includes("railing") ||
          p.title.toLowerCase().includes("railing") ||
          p.category_slugs?.includes("railings")
      );
      return (filtered.length ? filtered : products.slice(2, 6)).map((p) => ({
        type: "product" as const,
        id: `prod-${p.id}`,
        title: p.title,
        subtitle: p.short_tagline || p.material_info || "SS 304 / Heavy MS",
        tag: "Architectural Railing",
        image: p.hero_desktop_image,
        url: `/products/${p.slug}`,
        meta: "Laser Cut & MIG Welded"
      }));
    }

    if (activeTab === "frames") {
      const filtered = products.filter(
        (p) =>
          p.slug.includes("frame") ||
          p.slug.includes("door") ||
          p.title.toLowerCase().includes("frame")
      );
      return (filtered.length ? filtered : products.slice(0, 4)).map((p) => ({
        type: "product" as const,
        id: `prod-${p.id}`,
        title: p.title,
        subtitle: p.short_tagline || "Pressed Steel Choukhat / Door Frame",
        tag: "Steel Door Frame",
        image: p.hero_desktop_image,
        url: `/products/${p.slug}`,
        meta: "Anti-Rust Coated"
      }));
    }

    // Default "all" tab: 3 featured products + 3 featured projects
    const topProducts = products.slice(0, 3).map((p) => ({
      type: "product" as const,
      id: `prod-${p.id}`,
      title: p.title,
      subtitle: p.short_tagline || p.material_info || "Custom Metalwork",
      tag: "Custom Product",
      image: p.hero_desktop_image,
      url: `/products/${p.slug}`,
      meta: p.product_code || "Fabricated in Udaipur"
    }));

    const topProjects = projects.slice(0, 3).map((p) => ({
      type: "project" as const,
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: p.location || "Udaipur, Rajasthan",
      tag: p.scope || "Architectural Project",
      image: p.cover_image,
      url: `/projects/${p.slug}`,
      meta: p.year || "2025"
    }));

    return [...topProducts, ...topProjects];
  };

  const items = getFilteredItems();

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <Container>
        {/* Header with Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-hrm-orange" />
              <span>Portfolio & Product Lines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Metalwork & Completed Projects
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-xl">
              Engineered for luxury residences, boutique resorts, and commercial elevations in Udaipur and across Rajasthan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-hrm-orange transition-colors"
            >
              <span>View All Projects</span>
              <MoveUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 21st.dev Style Interactive Filter Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-white shadow-md shadow-hrm-orange/20"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 rounded-full bg-hrm-orange"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Showcase */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-hrm-orange/40 transition-all duration-300"
              >
                {/* Image Card Box */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold">
                      {item.meta}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-hrm-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.url}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-hrm-orange transition-colors"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`https://wa.me/919929828456?text=${encodeURIComponent(
                        `Hello HRM Industries, I am inquiring about: ${item.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-500 hover:text-white transition-colors"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
