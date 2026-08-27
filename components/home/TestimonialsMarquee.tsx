"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Building2 } from "lucide-react";
import { Testimonial } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({
  testimonials
}) => {
  // If testimonials are few, duplicate for smooth infinite visual flow
  const items = testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-hrm-orange" />
            <span>Client & Architect Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Rajasthan&apos;s Leading Architects & Homeowners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Hear from clients who chose HRM Industries for their luxury villas, resorts, and architectural projects.
          </p>
        </div>

        {/* 21st.dev Testimonial Grid / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-hrm-orange/40 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-hrm-orange/30 transition-colors" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.testimonial_text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                  {t.client_photo ? (
                    <Image
                      src={t.client_photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-slate-600 bg-slate-200 text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500">
                    {t.designation} {t.company ? `• ${t.company}` : ""}
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
