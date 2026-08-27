"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { Container } from "../ui/Container";

export const MaterialFinishesStrip: React.FC = () => {
  const [selectedFinish, setSelectedFinish] = useState(0);

  const finishes = [
    {
      name: "Matte Jet Black",
      code: "RAL 9005",
      type: "Thermoset Powder Coat",
      desc: "Deep non-reflective satin finish with UV resistance for modern villas and minimalist frames.",
      bgColor: "#111215",
      borderCol: "#374151"
    },
    {
      name: "Textured Anthracite",
      code: "RAL 7016",
      type: "Micro-Textured Coat",
      desc: "Scratch-resistant textured finish engineered for exterior gates and high-traffic railings.",
      bgColor: "#293241",
      borderCol: "#4b5563"
    },
    {
      name: "Antique Brass Patina",
      code: "HRM-BR-03",
      type: "Hand-Rubbed Metal Finish",
      desc: "Rich burnished brass and copper accents with protective polyurethane clear seal.",
      bgColor: "#9d7a46",
      borderCol: "#d4af37"
    },
    {
      name: "Corten Weathered Rust",
      code: "HRM-CR-04",
      type: "Architectural Patina",
      desc: "Industrial oxidized iron appearance sealed with weatherproof exterior topcoat.",
      bgColor: "#7b3f1d",
      borderCol: "#b45309"
    },
    {
      name: "Brushed Stainless Steel",
      code: "SS 304 / 316",
      type: "Satin Hairline Finish",
      desc: "Corrosion-proof marine grade stainless steel for pool deck railings and luxury interiors.",
      bgColor: "#cbd5e1",
      borderCol: "#94a3b8"
    },
    {
      name: "Duco Architectural White",
      code: "RAL 9016",
      type: "Duco PU Gloss/Matte",
      desc: "Smooth automotive-grade polyurethane spray coating for interior doors and partition screens.",
      bgColor: "#f8fafc",
      borderCol: "#e2e8f0"
    }
  ];

  const current = finishes[selectedFinish];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white mt-12 shadow-xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-hrm-orange text-xs font-mono font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Coating Laboratory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Custom Architectural Finishes & Swatches
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Every product can be customized in custom RAL shades and weather-tested coatings.
          </p>
        </div>

        {/* Selected Finish Badge */}
        <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-slate-800 self-start md:self-auto">
          <span
            className="w-5 h-5 rounded-full border shadow-sm flex-shrink-0"
            style={{ backgroundColor: current.bgColor, borderColor: current.borderCol }}
          />
          <div>
            <span className="text-xs font-bold text-white block">
              {current.name}
            </span>
            <span className="text-[10px] font-mono text-hrm-orange block">
              {current.code} • {current.type}
            </span>
          </div>
        </div>
      </div>

      {/* Swatch Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-6">
        {finishes.map((f, idx) => {
          const isSelected = selectedFinish === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedFinish(idx)}
              className={`p-3.5 rounded-2xl border transition-all duration-200 text-left cursor-pointer flex flex-col justify-between h-28 relative ${
                isSelected
                  ? "bg-slate-800/90 border-hrm-orange shadow-lg shadow-hrm-orange/15 scale-102"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-7 h-7 rounded-xl border shadow-inner"
                  style={{ backgroundColor: f.bgColor, borderColor: f.borderCol }}
                />
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange" />
                )}
              </div>

              <div>
                <h5 className="text-xs font-bold text-white truncate">
                  {f.name}
                </h5>
                <span className="text-[10px] font-mono text-slate-400 block truncate">
                  {f.code}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
