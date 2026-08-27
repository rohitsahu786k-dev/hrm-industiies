"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  Hammer,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Target,
  Flame,
  Maximize2,
  Compass,
  Factory
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const ArchitecturalBentoGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tolerance" | "materials" | "finishes">("tolerance");

  return (
    <section className="py-20 sm:py-28 bg-[#090D11] text-white relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(232,130,34,0.15),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Factory className="w-3.5 h-3.5" />
            <span>The Fabrication Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Precision. <br />
            <span className="bg-gradient-to-r from-hrm-orange to-amber-300 bg-clip-text text-transparent">
              Built for Generations.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            By unifying CAD engineering, heavy-gauge steel profiles, in-house MIG welding, and industrial anti-rust finishes under one Udaipur roof, we eliminate guesswork and delivery delays.
          </p>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
          {/* Card 1: Main Feature (Span 7 cols) - Site-Exact Laser Precision */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group hover:border-hrm-orange/50 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-hrm-orange/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-hrm-orange font-bold">
                      Site-Exact Tolerance
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      ± 0.5 mm Dimensional Guarantee
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs font-bold">
                  Zero Masonry Gaps
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every architectural entrance gate, balcony railing, and steel door frame is digitally measured on-site. We fabricate with millimeter-level tolerances to guarantee flawless anchoring and seamless mechanical pivot action.
              </p>
            </div>

            {/* Interactive Visual Blueprint Simulation */}
            <div className="bg-slate-950/90 rounded-2xl p-5 border border-slate-800/80 mt-4 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800 pb-3 mb-3">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  CAD Verified Profile
                </span>
                <span>UDAIPUR WORKSHOP SPEC</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block">STEEL GRADE</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">IS 2062 E250</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block">CORNER MITER</span>
                  <span className="text-sm font-bold text-hrm-orange mt-0.5 block">45° Cold-Cut</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block">WELD JOINT</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">Full Penetration MIG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 100% In-House Udaipur Workshop (Span 5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group hover:border-hrm-orange/50 transition-all duration-300 shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange flex items-center justify-center mb-5">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-hrm-orange font-bold">
                Direct Manufacturing
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                100% In-House Workshop
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Direct fabricator pricing with no middleman margins. Custom cutting, shaping, heavy welding, and surface treatment are all executed by our specialized master craftsmen in Udaipur.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-400">Location: Udaipur, Rajasthan</span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-hrm-orange hover:text-amber-300 transition-colors"
              >
                <span>Visit Our Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Material Standards (Span 4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 relative overflow-hidden group hover:border-hrm-orange/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-hrm-orange flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-hrm-orange font-bold">
                Certified Alloys
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Heavy-Duty Raw Materials
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                We reject flimsy thin-gauge metals. We work exclusively with heavy MS hollow sections, hot-rolled steel, and SS 304 architectural grade tubing.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
                <span>IS 2062 Structural Mild Steel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
                <span>SS 304 Marine-Grade Stainless</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
                <span>Heavy Galvanized Iron (GI) Tubing</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Pre-Dispatch Trial Assembly (Span 4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 relative overflow-hidden group hover:border-hrm-orange/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-hrm-orange flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-hrm-orange font-bold">
                Quality Verification
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Shop Floor Trial Fitment
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Before any product leaves for site installation, it is 100% assembled on our shop floor to check hinge play, smooth latching, and plumb geometry.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Zero on-site cutting or rework</span>
            </div>
          </div>

          {/* Card 5: Multi-Stage Anti-Rust Finish (Span 4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 relative overflow-hidden group hover:border-hrm-orange/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-hrm-orange flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-hrm-orange font-bold">
                All-Weather Protection
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Multi-Stage Anti-Rust Coating
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                7-tank chemical pre-treatment, zinc chromate primer, and UV-stable powder coat or Duco PU paint designed for Rajasthan heat and monsoon moisture.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300">
                Matte Black
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300">
                Powder Coat
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300">
                Duco PU
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
