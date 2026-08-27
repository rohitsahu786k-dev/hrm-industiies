"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  MoveUpRight,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  Compass,
  CheckCircle2
} from "lucide-react";
import { HeroSlide } from "@/lib/types/wordpress";
import { Button } from "../ui/Button";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 6500; // ms

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const intervalStep = 50;
    const increment = (intervalStep / SLIDE_DURATION) * 100;

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => window.clearInterval(timer);
  }, [slides.length, isPaused, currentIndex]);

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  const selectSlide = (index: number) => {
    setProgress(0);
    setCurrentIndex((index + slides.length) % slides.length);
  };

  const stats = [
    { label: "Execution Precision", val: "± 0.5 mm" },
    { label: "Bespoke Metal Projects", val: "500+" },
    { label: "Steel & GI Grades", val: "IS 2062 / SS 304" },
    { label: "Udaipur In-House Workshop", val: "100%" }
  ];

  return (
    <section
      className="relative isolate min-h-[680px] overflow-hidden bg-[#07090b] text-white lg:min-h-[720px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Crossfade Animation */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={currentSlide.desktop_image}
            alt={currentSlide.heading}
            fill
            priority
            className="object-cover object-center brightness-[0.75]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layered Architectural Ambient Overlays */}
      <div className="absolute inset-0 -z-[5] bg-[linear-gradient(90deg,rgba(7,9,11,0.98)_0%,rgba(7,9,11,0.88)_42%,rgba(7,9,11,0.35)_75%,rgba(7,9,11,0.7)_100%)]" />
      <div className="absolute inset-0 -z-[4] bg-[linear-gradient(0deg,rgba(7,9,11,0.95)_0%,rgba(7,9,11,0.1)_45%,rgba(7,9,11,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-[3] opacity-35 metal-mesh" />

      {/* Main Hero Content Area */}
      <div className="mx-auto flex w-[90%] flex-col justify-between py-8 sm:py-12 lg:py-14 flex-grow">
        {/* Top Floating Workshop Status Pill */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 backdrop-blur-md text-[11px] font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-semibold">Udaipur Workshop Operational</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">Taking Custom Metalwork Commissions Across Rajasthan</span>
          </div>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Left Hero Copy */}
          <motion.div
            key={`${currentSlide.id}-copy`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl"
          >
            {/* Eyebrow / Tag */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-hrm-orange" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-hrm-orange-light/90">
                {currentSlide.eyebrow || "Custom Architectural Metalwork"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
              {currentSlide.heading}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              {currentSlide.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={currentSlide.primary_cta_url || "/contact"}
                variant="primary"
                size="lg"
                icon
                className="shadow-xl shadow-hrm-orange/20"
              >
                {currentSlide.primary_cta_text || "Request Site Quote"}
              </Button>

              {currentSlide.secondary_cta_text ? (
                <Button
                  href={currentSlide.secondary_cta_url || "/projects"}
                  variant="outlineOnDark"
                  size="lg"
                  className="group"
                >
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    <span>{currentSlide.secondary_cta_text}</span>
                    <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                  </span>
                </Button>
              ) : (
                <Button href="/products" variant="outlineOnDark" size="lg" className="group">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    <span>Explore Products</span>
                    <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                  </span>
                </Button>
              )}

              <a
                href="tel:+919799647638"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white px-4 py-3 rounded-xl border border-white/10 hover:border-hrm-orange/40 bg-white/5 backdrop-blur-sm transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-hrm-orange" />
                <span>Quick Call: +91 97996 47638</span>
              </a>
            </div>

            {/* Quick Guarantees Checkpoints */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 border-t border-white/10 pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hrm-orange" /> Free Dimension & Site Review
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hrm-orange" /> Anti-Rust Primer & Powder Coating
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hrm-orange" /> Direct Workshop Pricing
              </span>
            </div>
          </motion.div>

          {/* Right Perspective Card / Next Slide Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 p-3.5 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={nextSlide.desktop_image}
                  alt={nextSlide.heading}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                  <Maximize2 className="h-3 w-3 text-hrm-orange" /> Next Preview
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-hrm-orange">
                    0{(currentIndex + 2) > slides.length ? 1 : currentIndex + 2} of 0{slides.length}
                  </span>
                  <p className="mt-1 text-base font-bold leading-snug text-white line-clamp-2">
                    {nextSlide.heading}
                  </p>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-1">
                    {nextSlide.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => selectSlide(currentIndex + 1)}
                className="mt-3 flex w-full items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition-all hover:bg-hrm-orange hover:text-white"
                aria-label="View next slide"
              >
                <span>Switch View</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Stats & Carousel Controls Bar */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-md py-4">
        <div className="mx-auto flex w-[90%] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => selectSlide(currentIndex - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-all hover:border-hrm-orange hover:bg-hrm-orange hover:text-white"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => selectSlide(currentIndex + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-all hover:border-hrm-orange hover:bg-hrm-orange hover:text-white"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Slide Index Pills with Progress Indicator */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => selectSlide(i)}
                  className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    i === currentIndex ? "w-10 bg-white/20" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === currentIndex && (
                    <div
                      className="absolute inset-0 bg-hrm-orange transition-all ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
              <span className="ml-1 font-mono text-xs text-slate-400">
                0{currentIndex + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 gap-4 text-xs sm:grid-cols-4 sm:gap-6">
            {stats.map((st, i) => (
              <div key={i} className="border-l border-white/15 pl-3">
                <span className="font-mono text-xs font-extrabold text-hrm-orange block leading-tight">
                  {st.val}
                </span>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

