import React from "react";
import { Metadata } from "next";
import { getSiteSettings, getProductCategories } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Manufacturing Capabilities | ${settings.company_name} Udaipur`,
    description: "Discover HRM Industries shop floor capabilities including precision cutting, MIG welding, surface prep, powder coating, and site fitment in Udaipur.",
  };
}

export default async function CapabilitiesPage() {
  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    getProductCategories()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Manufacturing Capabilities" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="In-House Workshop"
          title="Shop Floor & Fabrication Capabilities"
          subtitle="End-to-end metalworking setup in Udaipur equipped for structural steel cutting, MIG welding, trial fitting, high-durability coating, and site installation."
          primaryHref="/contact"
          primaryLabel="Start Technical Discussion"
          secondaryHref="/materials-finishes"
          secondaryLabel="See Materials"
        />

        <CapabilitiesSection />

        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <Container className="text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-hrm-charcoal mb-4">Need Custom Technical Fabrication?</h2>
            <p className="text-slate-600 mb-8">Discuss section sizing, tube thickness, and site fixing provisions with our technical team.</p>
            <Button href="/contact" variant="primary" size="lg" icon>
              Start Technical Discussion
            </Button>
          </Container>
        </section>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
