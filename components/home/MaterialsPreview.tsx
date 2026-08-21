import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Shield, Layers, Palette, ArrowRight } from "lucide-react";

export const MaterialsPreview: React.FC = () => {
  const materials = [
    { code: "MS", name: "Mild Steel", desc: "General fabrication, structural frames, and heavy gate sections." },
    { code: "GI", name: "Galvanized Iron", desc: "Corrosion-resistant base material ideal for rainy and exposed exterior areas." },
    { code: "SS 304", name: "Stainless Steel 304", desc: "Premium grade exposed interior & exterior architectural highlights." },
    { code: "SS 202", name: "Stainless Steel 202", desc: "Selected interior decorative accents and dry environment railings." }
  ];

  const finishes = [
    { name: "Jet Black", color: "#11161B" },
    { name: "Charcoal Gray", color: "#334155" },
    { name: "Pure Off-White", color: "#F8FAFC" },
    { name: "HRM Industrial Orange", color: "#E88222" },
    { name: "Metallic Gold", color: "#D97706" },
    { name: "Bronze Tone", color: "#78350F" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Materials */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Materials & Finish Systems"
              title="Built with Engineering Grade Steel & Finishes"
              subtitle="Material selection and section thickness are customized based on site load, weather exposure, and structural span."
              lightMode
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {materials.map((m, idx) => (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 hover:border-hrm-orange transition-colors">
                  <span className="text-xs font-bold font-mono text-hrm-orange bg-hrm-orange/20 px-2 py-0.5 rounded inline-block mb-2">
                    {m.code}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1">{m.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/materials-finishes" variant="primary" icon>
                Explore All Profiles & Technical Specs
              </Button>
            </div>
          </div>

          {/* Right Finish Swatches */}
          <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-hrm-orange" />
              <h3 className="text-xl font-bold text-white">Popular Finish Options</h3>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              We offer industrial powder coating, enamel paints, Duco/PU matte & gloss systems, and faux wood texture finishes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {finishes.map((f, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700/80 rounded-xl p-3 flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full border border-white/20 flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: f.color }}
                  />
                  <span className="text-xs font-semibold text-slate-200 truncate">{f.name}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-700 italic">
              * Note: Final material, section size, and finish availability depend on approved project scope and site inspection.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
