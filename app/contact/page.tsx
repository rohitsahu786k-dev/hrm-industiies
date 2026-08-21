import React from "react";
import { Metadata } from "next";
import { getSiteSettings, getProductCategories } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Contact Us | ${settings.company_name} Udaipur`,
    description: "Start your custom metal fabrication project. Share dimensions, location, and reference designs for an initial review with HRM Industries Udaipur.",
  };
}

interface ContactPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = await searchParams;
  const initialProduct = resolvedParams.product || "";

  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    getProductCategories()
  ]);

  const primaryPhone = settings.phone_primary || "+91 8290060885";
  const secondaryPhone = settings.phone_secondary || "+91 8290060885";
  const email = settings.business_email || "hrmindustries2026@gmail.com";
  const address = settings.full_address || "Udaipur, Rajasthan, India";
  const whatsappNum = settings.whatsapp_number || "918290060885";
  const defaultMsg = encodeURIComponent("Hello HRM Industries, I want to discuss a fabrication project.");
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${defaultMsg}`;

  const prepChecklist = [
    "Project location & site access conditions",
    "Opening width × height (approximate or architectural plan)",
    "Reference photo or design style preference",
    "Preferred material (MS, GI, SS) and finish color",
    "Expected project installation timeframe"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Start a Conversation"
          title="Start With a Measurement"
          subtitle="Send your opening size, location, and reference photos for an initial review. A clear brief helps design, engineering, quotation, and installation move faster."
          primaryHref={whatsappUrl}
          primaryLabel="WhatsApp Brief"
          secondaryHref={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          secondaryLabel="Call Workshop"
          stats={[
            { value: "24h", label: "Initial response" },
            { value: "5", label: "Brief inputs" },
            { value: "UDA", label: "Workshop base" },
          ]}
        />

        {/* Contact Form & Contact Details */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Form Card */}
              <div className="lg:col-span-7 premium-card p-6 sm:p-10">
                <h2 className="text-2xl font-bold text-hrm-charcoal mb-2">
                  Request Technical Quotation
                </h2>
                <p className="text-sm text-slate-500 mb-8">
                  Fill out your project details below and our fabrication team will respond within 24 hours.
                </p>

                <ContactForm settings={settings} initialProduct={initialProduct} />
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-5 space-y-8">
                {/* Contact Cards */}
                <div className="bg-hrm-charcoal text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Udaipur Office & Workshop
                  </h3>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-hrm-orange flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Address</span>
                        <span className="text-white font-medium">{address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-hrm-orange flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Phone Numbers</span>
                        <a href={`tel:${primaryPhone.replace(/\s+/g, '')}`} className="text-white font-bold hover:text-hrm-orange transition-colors block">
                          {primaryPhone}
                        </a>
                        {secondaryPhone && (
                          <a href={`tel:${secondaryPhone.replace(/\s+/g, '')}`} className="text-slate-300 font-medium hover:text-hrm-orange transition-colors block">
                            {secondaryPhone}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-hrm-orange flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Email</span>
                        <a href={`mailto:${email}`} className="text-white font-bold hover:text-hrm-orange transition-colors">
                          {email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1EBE57] transition-all shadow-md"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Preparation Checklist */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-subtle">
                  <h4 className="text-base font-bold text-hrm-charcoal mb-4">
                    Quotation Preparation Checklist
                  </h4>
                  <ul className="space-y-3">
                    {prepChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-hrm-orange flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
