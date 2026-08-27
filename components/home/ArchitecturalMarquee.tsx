"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  Layers,
  Building2,
  Ruler,
  Flame,
  Hammer
} from "lucide-react";

export const ArchitecturalMarquee: React.FC = () => {
  const credentials = [
    { icon: ShieldCheck, text: "IS 2062 MS Structural Steel Grade" },
    { icon: Award, text: "SS 304 Marine Stainless Accents" },
    { icon: Sparkles, text: "7-Tank Zinc Phosphate Anti-Rust Prep" },
    { icon: Ruler, text: "± 0.5 mm Laser Tolerance Guarantee" },
    { icon: Building2, text: "100% Shop Floor Trial Fitment" },
    { icon: Flame, text: "Heavy MIG & TIG Welded Joints" },
    { icon: Hammer, text: "Direct Udaipur Fabrication Studio" },
    { icon: Layers, text: "Thermoset UV Powder Coat Finishes" }
  ];

  return (
    <div className="w-full bg-[#050709] border-t border-b border-slate-800/80 py-4 overflow-hidden isolate relative z-20">
      <style>{`
        @keyframes marquee-slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee-slide 32s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Side gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050709] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050709] to-transparent z-10" />

      <div className="animate-marquee-slow flex items-center gap-8">
        {[...credentials, ...credentials, ...credentials].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold whitespace-nowrap hover:border-hrm-orange/50 hover:text-white transition-all cursor-default"
            >
              <Icon className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
