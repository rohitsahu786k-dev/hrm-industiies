import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { MessageCircle, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

interface MiddleBannerProps {
  banner: Banner | null;
}

export const MiddleBanner: React.FC<MiddleBannerProps> = ({ banner }) => {
  if (!banner) return null;

  const bgImage = banner.desktop_image || "/photos/workshop-1.png";

  return (
    <section className="py-14 sm:py-20 bg-white">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
          {/* Background Image with Crisp Visibilty & Gradient Overlay */}
          <div className="absolute inset-0 opacity-60 transition-transform duration-1000 hover:scale-105">
            <Image
              src={bgImage}
              alt={banner.banner_title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Multi-stage Gradient Overlays for High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          {/* Inner Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-hrm-orange bg-hrm-orange/20 border border-hrm-orange/40 px-3.5 py-1.5 rounded-full mb-5 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Manufacturing Standards • Udaipur Hub</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight font-heading">
                {banner.banner_title}
              </h2>

              {banner.banner_subtitle && (
                <p className="text-base sm:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl font-normal">
                  {banner.banner_subtitle}
                </p>
              )}

              {/* Guarantees Checkpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-slate-900/70 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                  <span>± 0.5mm Fitment Accuracy</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/70 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                  <span>7-Tank Anti-Rust Priming</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/70 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                  <span>Direct Workshop Pricing</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={banner.cta_url || "/contact"}
                  className="inline-flex items-center gap-2 bg-hrm-orange hover:bg-hrm-orange-dark text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-xl shadow-hrm-orange/30 transition-all hover:scale-105"
                >
                  <span>{banner.cta_label || "Discuss Your Project"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="https://wa.me/918290060885?text=Hello%20HRM%20Industries%2C%20I%20want%20to%20discuss%20custom%20fabrication."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Inquiry</span>
                </Link>
              </div>
            </div>

            {/* Right Quality Badge Column */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="bg-slate-900/80 border border-white/15 p-6 rounded-2xl backdrop-blur-xl shadow-2xl text-center max-w-xs">
                <div className="w-12 h-12 rounded-full bg-hrm-orange/20 border border-hrm-orange/40 text-hrm-orange flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-extrabold text-white">100% Workshop Controlled</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Every gate, frame, and railing undergoes shop-floor trial fitment before final site dispatch.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-hrm-orange font-bold uppercase tracking-wider">
                  IS 2062 MS / SS 304 Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
