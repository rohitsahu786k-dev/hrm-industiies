import React from "react";
import { ProcessStep } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Workflow Sequence"
          title="From Idea to Site Installation"
          subtitle="Our systematic step-by-step workflow ensures zero surprises in dimensions, finish, or delivery."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, idx) => (
            <div
              key={step.id || idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-subtle relative flex flex-col justify-between group hover:border-hrm-orange transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-hrm-orange">
                    {step.step_number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-500 uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-hrm-charcoal mb-3 group-hover:text-hrm-orange transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
