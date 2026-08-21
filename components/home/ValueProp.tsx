import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Ruler, Hammer, MapPin, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

export const ValueProp: React.FC = () => {
  const props = [
    {
      icon: Ruler,
      tag: "Site-Exact Engineering",
      metric: "± 0.5 mm Tolerance",
      title: "Bespoke Site Dimensions",
      subtitle: "Fabricated strictly to site constraints.",
      description: "Every gate, frame, and railing is custom engineered around your precise on-site masonry dimensions, elevation height, and structural anchoring points."
    },
    {
      icon: Hammer,
      tag: "End-to-End Execution",
      metric: "100% In-House Control",
      title: "Direct Workshop Craftsmanship",
      subtitle: "From 3D CAD to final site fitment.",
      description: "Complete manufacturing lifecycle under one roof: profile cold cutting, heavy MIG welding, seam grinding, multi-stage anti-rust priming, and powder coating."
    },
    {
      icon: MapPin,
      tag: "Rajasthan Footprint",
      metric: "Udaipur Hub",
      title: "Local Presence & Fast Turnaround",
      subtitle: "Serving Udaipur, Rajasthan & beyond.",
      description: "Direct workshop based in Udaipur with complete project capabilities for luxury villas, boutique heritage resorts, commercial hubs, and private estates."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative z-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={idx}
                delay={idx * 0.08}
                className="group relative bg-white border border-slate-200/90 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-hrm-orange/50 hover:shadow-xl hover:shadow-hrm-orange/5 flex flex-col justify-between"
              >
                {/* Top Header with Icon & Technical Metric */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-hrm-orange/20 bg-hrm-orange/10 text-hrm-orange transition-all duration-300 group-hover:bg-hrm-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-hrm-orange/25 p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-hrm-orange/30 group-hover:text-hrm-orange transition-colors">
                      {p.metric}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-hrm-orange block mb-1">
                    {p.tag}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-hrm-orange transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mt-1">
                    {p.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Bottom Architectural Checkmark */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                  <span>Quality Inspected & Trial Assembled</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

