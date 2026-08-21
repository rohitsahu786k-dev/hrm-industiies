import React from "react";
import { Metadata } from "next";
import { getSiteSettings, getProductCategories } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { MaterialsPreview } from "@/components/home/MaterialsPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Materials & Finishes | ${settings.company_name} Udaipur`,
    description: "Technical guide to steel grades (MS, GI, SS 304, SS 202), structural profiles, and powder coating finishes at HRM Industries Udaipur.",
  };
}

export default async function MaterialsFinishesPage() {
  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    getProductCategories()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Materials & Finishes" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Material Standards"
          title="Steel Grades, Profiles & Surface Finishes"
          subtitle="A practical guide to Mild Steel, Galvanized Iron, Stainless Steel profiles, wall thickness selection, powder coating, PU systems, and long-life exterior finishes."
          primaryHref="/contact"
          primaryLabel="Ask Material Advice"
          secondaryHref="/capabilities"
          secondaryLabel="See Workshop"
          stats={[
            { value: "MS", label: "Structural steel" },
            { value: "GI", label: "Weather use" },
            { value: "SS", label: "Premium finish" },
          ]}
        />

        <MaterialsPreview />

        {/* Section Profiles Overview */}
        <section className="py-16 sm:py-24 bg-white">
          <Container>
            <SectionHeading
              eyebrow="Available Profiles"
              title="Structural Sections & Tube Profiles"
              subtitle="All profiles available in multiple gauge wall thicknesses based on engineering load requirements."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {[
                { name: "Square Pipe", desc: "Main gate frames & railings" },
                { name: "Round Pipe", desc: "Balcony handrails & sheds" },
                { name: "Angle Steel", desc: "Frame support & masonry anchors" },
                { name: "C-Channel", desc: "Stair stringers & heavy beams" },
                { name: "Flat Bar", desc: "Grills, ties & ornamental detail" },
                { name: "Steel Sheet", desc: "Panelled doors & privacy gates" }
              ].map((p, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-hrm-orange transition-all">
                  <div className="w-10 h-10 rounded-lg bg-hrm-orange/10 text-hrm-orange font-bold flex items-center justify-center mx-auto mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-hrm-charcoal mb-1">{p.name}</h4>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
