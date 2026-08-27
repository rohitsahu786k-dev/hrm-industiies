"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  FileCode,
  Flame,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Container } from "../ui/Container";

export const InteractiveProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Site Survey & Laser Scan",
      subtitle: "Zero-error physical measurement",
      desc: "Our engineering team visits your site in Udaipur or surrounding regions to take exact digital laser measurements, verify plumb line variations, and survey masonry anchor points.",
      highlights: ["Laser dimension capture", "Structural anchor check", "Elevation alignment"]
    },
    {
      num: "02",
      icon: FileCode,
      title: "3D CAD & Proportion Approval",
      subtitle: "Custom architectural shop drawings",
      desc: "We generate detailed CAD shop drawings outlining exact section gauges, bar spacings, hinge placements, and locking mechanisms for client and architect review.",
      highlights: ["Clear bar spacing details", "Architect review drawings", "Motorization routing"]
    },
    {
      num: "03",
      icon: Flame,
      title: "Precision Workshop Fabrication",
      subtitle: "Cold cutting, MIG welding & coating",
      desc: "Executed in our Udaipur facility: 45° cold miter sawing, deep penetration MIG welding, flush seam grinding, and multi-stage anti-corrosive primer + powder coating.",
      highlights: ["IS 2062 heavy steel", "Seamless miter welds", "7-tank zinc phosphate prep"]
    },
    {
      num: "04",
      icon: Wrench,
      title: "Shop Trial & Site Installation",
      subtitle: "Pre-assembled before handover",
      desc: "Every gate, frame, or railing is trial-fitted on the shop floor first. Our experienced crew then carries out on-site anchoring, plumb alignment, and smooth operation sign-off.",
      highlights: ["Zero on-site cutting", "Heavy duty anchor bolts", "Smooth pivot testing"]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(232,130,34,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fabrication Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Site Measurement to Seamless Installation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            A transparent 4-stage engineering lifecycle that ensures every piece fits on site without last-minute grinding or modification.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-slate-800/90 border-hrm-orange shadow-xl shadow-hrm-orange/10 -translate-y-1.5"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-hrm-orange transition-colors">
                      {step.num}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? "bg-hrm-orange text-white shadow-lg shadow-hrm-orange/30"
                          : "bg-slate-800 text-hrm-orange border border-slate-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-hrm-orange mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800 space-y-1.5">
                  {step.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
