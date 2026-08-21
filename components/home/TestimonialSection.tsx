import React from "react";
import Image from "next/image";
import { Testimonial } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Star, Quote } from "lucide-react";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Architects, Builders & Homeowners"
          subtitle="What project owners and principal architects say about working with HRM Industries."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-subtle hover:shadow-card hover:bg-white transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-hrm-orange/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-hrm-orange text-hrm-orange" />
                  ))}
                </div>

                <p className="text-slate-700 italic text-base leading-relaxed mb-6">
                  "{t.testimonial_text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                {t.client_photo ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-slate-300">
                    <Image
                      src={t.client_photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-hrm-orange/20 text-hrm-orange font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    {t.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h4 className="text-base font-bold text-hrm-charcoal">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.designation ? `${t.designation}, ` : ""}{t.company || "Udaipur Project"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
