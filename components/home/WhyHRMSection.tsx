import React from "react";
import { WhyHRMFeature } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, Award, Wrench, Sparkles, Compass, Layers } from "lucide-react";

interface WhyHRMSectionProps {
  features: WhyHRMFeature[];
}

export const WhyHRMSection: React.FC<WhyHRMSectionProps> = ({ features }) => {
  const icons = [ShieldCheck, Wrench, Award, Compass, Layers, Sparkles];

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Why HRM Industries"
          title="Designed Around Your Purpose & Space"
          subtitle="Six core reasons architects, structural contractors, and luxury homeowners partner with HRM Industries."
          align="center"
        />

        {/* 21st.dev Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={feature.id || idx}
                className="group relative bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-800 rounded-3xl p-8 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Accent Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-hrm-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white group-hover:bg-hrm-orange text-hrm-orange group-hover:text-white border border-slate-200 group-hover:border-hrm-orange transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-slate-700 transition-colors font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
