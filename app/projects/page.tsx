import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSiteSettings, getProductCategories, getProjects } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Selected Projects | ${settings.company_name} Udaipur`,
    description: "View custom metal fabrication projects executed across Udaipur and Rajasthan including villa entrance gates, commercial door frames, and floating staircases.",
  };
}

export default async function ProjectsPage() {
  const [settings, categories, projects] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getProjects()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Selected Projects" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Project Portfolio"
          title="Executed Metalwork Case Studies"
          subtitle="Real architectural fabrication projects executed for luxury residences, commercial complexes, and modern villas across Udaipur and Rajasthan."
          primaryHref="/contact"
          primaryLabel="Discuss Similar Work"
          secondaryHref="/products"
          secondaryLabel="Browse Solutions"
          stats={[
            { value: `${projects.length}+`, label: "Featured works" },
            { value: "RJA", label: "Rajasthan sites" },
            { value: "CAD", label: "Drawing-led fitment" },
          ]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="premium-card overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={project.cover_image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-hrm-orange text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-hrm-orange" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="truncate">{project.scope}</span>
                    </div>

                    <h2 className="text-xl font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed flex-grow">
                      {project.excerpt}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
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
