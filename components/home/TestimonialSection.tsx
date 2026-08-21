"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Default fallback if no testimonials provided
  const items = testimonials && testimonials.length > 0 ? testimonials : [];
  const total = items.length;

  useEffect(() => {
    if (total <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total, isPaused]);

  if (total === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Get current pair of testimonials for 2-card view on desktop
  const firstIndex = currentIndex;
  const secondIndex = (currentIndex + 1) % total;

  const activeTestimonials = total === 1 ? [items[0]] : [items[firstIndex], items[secondIndex]];

  return (
    <section
      className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by Architects, Builders & Homeowners"
            subtitle="What project owners and principal architects say about working with HRM Industries."
            align="left"
            className="mb-0 max-w-2xl"
          />

          {/* Navigation Control Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition-all hover:border-hrm-orange hover:bg-hrm-orange hover:text-white hover:shadow-md"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition-all hover:border-hrm-orange hover:bg-hrm-orange hover:text-white hover:shadow-md"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content Container */}
        <div className="relative min-h-[340px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activeTestimonials.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 relative flex flex-col justify-between"
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-hrm-orange"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
