import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteSettings } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MessageCircle, Phone, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  settings: SiteSettings;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ settings }) => {
  const title = settings.contact_section_title || "Great spaces deserve the right metalwork";
  const intro =
    settings.contact_section_intro ||
    "Custom gates, railings, door frames, and architectural steelwork engineered with precision in Udaipur, Rajasthan.";

  const whatsappNum = settings.whatsapp_number || "918290060885";
  const defaultMsg = encodeURIComponent(
    settings.whatsapp_default_message || "Hello HRM Industries, I am interested in custom fabrication."
  );
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${defaultMsg}`;
  const phone = settings.phone_primary || "+91 8290060885";

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-[#091322] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-800 overflow-hidden">
          {/* Subtle Ambient Radial Mesh Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(232,130,34,0.12),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-hrm-orange bg-hrm-orange/15 border border-hrm-orange/30 px-3.5 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HRM Metal Fabrication Studio</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.08] tracking-tight mb-4 font-heading">
                {title}
              </h2>

              <p className="text-xl sm:text-2xl font-light text-slate-200 mb-6 leading-snug">
                Experience zero-rattle precision with <span className="font-bold text-hrm-orange">HRM Site-Exact™</span> Engineering
              </p>

              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-xl">
                {intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-hrm-orange hover:bg-hrm-orange-dark text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-xl shadow-hrm-orange/25 transition-all hover:scale-105"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Enquiry</span>
                </Link>

                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hidden sm:inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-hrm-orange" />
                  <span>Call {phone}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column with Orange Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950">
                <Image
                  src="/photos/craftsmanship.png"
                  alt="HRM Industries Custom Metal Fabrication Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Orange Circular Badge overlay matching Penguin Sleep reference image */}
                <div className="absolute top-4 right-4 sm:-top-3 sm:-right-3 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-hrm-orange text-white p-2 shadow-2xl flex flex-col items-center justify-center text-center border-2 border-white/40 animate-pulse">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-tight">
                    100%
                  </span>
                  <span className="text-xs font-black uppercase tracking-tight leading-none mt-0.5">
                    IN-HOUSE
                  </span>
                  <span className="text-[9px] font-semibold text-white/90 leading-tight mt-0.5">
                    FABRICATION
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0" />
                  <span>± 0.5mm Dimensional Tolerance • Udaipur Workshop</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-3 text-right">
                *Free Site Dimension Review & Engineering Estimate across Udaipur & Rajasthan
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
