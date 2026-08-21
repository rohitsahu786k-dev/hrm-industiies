import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Scissors, Flame, Sparkles, Paintbrush, Layers, Truck, Wrench, ShieldCheck } from "lucide-react";

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    { icon: Scissors, name: "Cutting", desc: "Precision section and sheet preparation using cold cut saws & plasma profiling." },
    { icon: Flame, name: "Welding", desc: "Heavy-duty MIG & ARC welding for high structural joint strength and penetration." },
    { icon: Sparkles, name: "Grinding", desc: "Seamless joint clean-up, corner blending, and edge radiusing before coating." },
    { icon: Layers, name: "Surface Prep", desc: "Chemical degreasing, rust treatment, and abrasive sanding for maximum paint adhesion." },
    { icon: Paintbrush, name: "Paint / Coat", desc: "Industrial powder coating, Duco PU, or anti-corrosive primer systems." },
    { icon: Wrench, name: "Trial Assembly", desc: "Full shop floor trial fitment of hinges, locks, and frames prior to dispatch." },
    { icon: Truck, name: "Packing", desc: "Protective film wrapping and edge padding to prevent transit damage." },
    { icon: ShieldCheck, name: "Site Fitment", desc: "Precision anchoring, plumb alignment, and final operational sign-off." }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Shop Floor & Workshop Capabilities"
          title="End-to-End In-House Manufacturing Workflow"
          subtitle="Our workshop in Udaipur handles every stage of metal fabrication with uncompromising quality control."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:shadow-card hover:border-hrm-orange transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-hrm-orange/10 text-hrm-orange flex items-center justify-center mb-4 group-hover:bg-hrm-orange group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-hrm-charcoal mb-2 group-hover:text-hrm-orange transition-colors">
                  {cap.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
