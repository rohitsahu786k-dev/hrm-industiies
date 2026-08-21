import React from "react";
import { SiteSettings } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MessageCircle, Phone, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  settings: SiteSettings;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ settings }) => {
  const title = settings.contact_section_title || "Have a space. We’ll shape the metal.";
  const intro =
    settings.contact_section_intro ||
    "Tell us what you are building, renovating or replacing. Share dimensions, a reference image or simply your idea.";

  const whatsappNum = settings.whatsapp_number || "918290060885";
  const defaultMsg = encodeURIComponent(
    settings.whatsapp_default_message || "Hello HRM Industries, I am interested in custom fabrication."
  );
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${defaultMsg}`;
  const phone = settings.phone_primary || "+91 8290060885";

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <Container>
        <div className="dark-surface text-white p-8 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* 21st.dev Radial Glowing Accents */}
          <div className="absolute inset-0 metal-mesh opacity-25" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-hrm-orange bg-hrm-orange/15 border border-hrm-orange/30 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Your Custom Fabrication</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              {title}
            </h2>

            <p className="text-base sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
              {intro}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon className="shadow-xl">
                Start a Project
              </Button>

              <Button href={whatsappUrl} variant="whatsapp" size="lg" className="shadow-xl">
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </Button>

              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-700 hover:border-hrm-orange bg-slate-900/60 backdrop-blur-md transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-hrm-orange" />
                <span>Call {phone}</span>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-hrm-orange" /> Free Engineering Estimate
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:flex items-center gap-1.5">
                Quick 24-Hour Quotation Response
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
