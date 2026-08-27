"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Send,
  CheckCircle2
} from "lucide-react";
import { SiteSettings } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";

interface ConsolidatedConsultationCardProps {
  settings: SiteSettings;
}

export const ConsolidatedConsultationCard: React.FC<
  ConsolidatedConsultationCardProps
> = ({ settings }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Custom Entrance Gate",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#07090B] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hrm-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Direct Consultation Pitch & Quick Contacts */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Direct Workshop Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Get a Precision Quote for Your Project
              </h2>

              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                Send us your architectural drawings, elevation dimensions, or reference designs. Our fabrication engineers will evaluate section weights, tolerances, and provide an itemized estimate within 24 hours.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a
                  href={`https://wa.me/${(settings.whatsapp_number || "919799647638").replace(/\D/g, "")}?text=${encodeURIComponent(
                    "Hello HRM Industries, I would like to request an estimate for custom metal fabrication."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Blueprint / Photos</span>
                </a>

                <a
                  href={`tel:${(settings.phone_primary || "+91 97996 47638").replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-hrm-orange" />
                  <span>Call {settings.phone_primary || "+91 97996 47638"}</span>
                </a>

                {settings.phone_secondary && (
                  <a
                    href={`tel:${settings.phone_secondary.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-800 transition-colors"
                  >
                    <span>Alt: {settings.phone_secondary}</span>
                  </a>
                )}
              </div>

              {/* Workshop Location & Timings Card */}
              <div className="mt-8 pt-8 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-hrm-orange flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Workshop Location
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {settings.full_address || "Udaipur, Rajasthan - 313001"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-hrm-orange flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Mon – Sat: 9:00 AM – 7:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Instant Estimate Form */}
            <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our fabrication team in Udaipur will review your request and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-hrm-orange font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Request a Fabrication Estimate
                    </h3>
                    <p className="text-xs text-slate-400">
                      Share your requirement and get a custom specification breakdown.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mehta / Architect"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-hrm-orange"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-hrm-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Requirement Type
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-hrm-orange"
                      >
                        <option>Custom Entrance Gate</option>
                        <option>Railings & Balustrades</option>
                        <option>Pressed Steel Door Frames</option>
                        <option>Laser Cut Architectural Screen</option>
                        <option>Complete Villa Metalwork</option>
                        <option>Commercial / Resort Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Notes / Approximate Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., Gate opening 14ft x 7ft, motorized sliding with matte black finish..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-hrm-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-hrm-orange hover:bg-hrm-orange-dark text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-hrm-orange/20 transition-colors"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Get Itemized Estimate</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
