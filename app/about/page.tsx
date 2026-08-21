import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getSiteSettings, getProductCategories, getWhyHRMFeatures, getProcessSteps } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { WhyHRMSection } from "@/components/home/WhyHRMSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CheckCircle2, ShieldCheck, Hammer, MapPin } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `About Us | ${settings.company_name} Udaipur`,
    description: "Learn about HRM Industries - Udaipur based metal fabrication company focused on custom architectural gates, railings, door frames, and precision steelwork.",
  };
}

export default async function AboutPage() {
  const [settings, categories, features, processSteps] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getWhyHRMFeatures(),
    getProcessSteps()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Who We Are"
          title="Built Around Your Space. Made Around Your Purpose."
          subtitle="HRM Industries is a Udaipur-based metal fabrication studio for custom iron, steel, stainless steel, architectural gates, railings, frames, facades, and site-fitted metalwork."
          secondaryHref="/projects"
          secondaryLabel="See Projects"
          stats={[
            { value: "01", label: "Design-first shop" },
            { value: "360", label: "Fabrication support" },
            { value: "IN", label: "Udaipur based" },
          ]}
        />

        {/* Narrative Section */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <SectionHeading
                  eyebrow="Our Approach"
                  title="Built Like a Fabricator. Think Like a Designer."
                  subtitle="We treat metalwork as part of the architecture rather than an after-thought."
                />

                <div className="space-y-4 text-slate-600 leading-relaxed text-base mt-6">
                  <p>
                    Every architectural project demands individual attention to dimensions, structural weight, material grade, and weather exposure. At HRM Industries, we do not mass-produce generic off-the-shelf products.
                  </p>
                  <p>
                    Instead, we work directly with site dimensions, architect drawings, and homeowner requirements to cut, weld, grind, coat, and install metal components engineered specifically for that space.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" icon>
                    Start a Project
                  </Button>
                  <Button href="/products" variant="outline">
                    View Catalog
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                    alt="HRM Industries Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <WhyHRMSection features={features} />
        <ProcessSection steps={processSteps} />
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
