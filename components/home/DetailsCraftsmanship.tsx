import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Scale, Target, Sparkles, ShieldCheck } from "lucide-react";

export const DetailsCraftsmanship: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      title: "Proportion",
      description: "Section sizes, bar spacing, and frame thickness are engineered around your architectural elevation rather than arbitrary standard sizes."
    },
    {
      icon: Target,
      title: "Precision",
      description: "45-degree mitered corners, seamless MIG weld joints, and flush grinding eliminate sharp edges and rough seams."
    },
    {
      icon: Sparkles,
      title: "Finish",
      description: "Multi-stage anti-rust primer and UV-stable powder coat or PU paint systems built to withstand extreme summer heat and monsoon moisture."
    },
    {
      icon: ShieldCheck,
      title: "Installation",
      description: "Pre-planned masonry anchor points, floor hinge leveling, and site fitment testing to guarantee smooth mechanical operation."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Craftsmanship Standard"
          title="The difference is in the details."
          subtitle="How HRM Industries approaches custom architectural fabrication differently."
          lightMode
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-8 hover:border-hrm-orange transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-hrm-orange/10 text-hrm-orange flex items-center justify-center mb-6 group-hover:bg-hrm-orange group-hover:text-white transition-colors duration-300 border border-hrm-orange/30">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-hrm-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
