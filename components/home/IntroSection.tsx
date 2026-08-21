import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Layers,
  Sparkles,
  Compass,
  ArrowRight,
  Gauge
} from "lucide-react";

export const IntroSection: React.FC = () => {
  const highlights = [
    { title: "Site Dimensions & Precision Fixing", desc: "Digital site laser measurement and zero-tolerance masonry anchoring." },
    { title: "Material Grade & Section Selection", desc: "Heavy IS 2062 MS, GI hollow tubes & SS 304 architectural profiles." },
    { title: "Industrial Surface Prep & Coating", desc: "Anti-corrosive zinc primer with 7-tank treatment & thermoset powder coat." },
    { title: "On-Site Trial Alignment & Handover", desc: "Shop-floor trial fitment of hinges, locks, and frames before dispatch." }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Architectural Metal Fabrication Studio"
              title="Built like a fabricator. Think like a designer."
              subtitle="HRM Industries is a Udaipur-based metal fabrication studio focused on custom iron and architectural metalwork for residential villas, luxury resorts, and bespoke commercial requirements."
            />

            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              We approach each piece as an integral structural component of your architecture rather than a generic commodity. From massive motorized entrance gates to refined minimal railings and pressed steel door frames, our fabrication balances lasting structural stability with razor-sharp aesthetic execution.
            </p>

            {/* 4 Feature Value Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-hrm-orange/30 transition-colors"
                >
                  <div className="p-1 rounded-full bg-hrm-orange/10 text-hrm-orange flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary" icon className="shadow-lg shadow-hrm-orange/15">
                Our Fabrication Studio
              </Button>
              <Button href="/capabilities" variant="outline">
                Workshop & Machine Capabilities
              </Button>
            </div>
          </div>

          {/* Right Visual Feature Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[4/3] sm:aspect-[4/3]">
              <Image
                src="/photos/craftsmanship.png"
                alt="HRM Metalwork Fabrication Studio in Udaipur"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Bottom Card Glass Pill */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/60 shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-hrm-orange text-white shadow-md shadow-hrm-orange/30 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-slate-900">
                        100% Quality Inspected
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Every piece is trial-fitted on our Udaipur shop floor before dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md">
              <div className="p-2 rounded-xl bg-hrm-orange/20 text-hrm-orange">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-wider">
                  Fabrication Hub
                </span>
                <span className="text-sm font-extrabold text-white">
                  Udaipur, Rajasthan
                </span>
              </div>
            </div>

            {/* Floating Bottom Left Badge */}
            <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2.5 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200">
              <Gauge className="w-5 h-5 text-hrm-orange" />
              <span className="text-xs font-bold text-slate-800">
                ± 0.5mm Dimensional Accuracy
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

