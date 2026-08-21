import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings, getProductCategories, getProjectBySlug, getProjects } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Calendar, Layers, ShieldCheck, ArrowRight } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | HRM Industries Case Study`,
    description: project.excerpt || `Detailed case study of ${project.title} fabricated by HRM Industries in ${project.location}.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const [settings, categories, project] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getProjectBySlug(resolvedParams.slug)
  ]);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  const relatedProjects = allProjects.filter(p => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title }
        ]}
      />

      <main className="flex-grow py-12 sm:py-16 bg-slate-50">
        <Container>
          {/* Main Case Study Header */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-hrm-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                {project.year} Case Study
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-hrm-orange" />
                {project.location}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-hrm-charcoal leading-tight mb-6">
              {project.title}
            </h1>

            {/* Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Project Scope</span>
                <p className="text-sm font-semibold text-slate-800">{project.scope}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Location</span>
                <p className="text-sm font-semibold text-slate-800">{project.location}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Execution Year</span>
                <p className="text-sm font-semibold text-slate-800">{project.year}</p>
              </div>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-200 border border-slate-300 shadow-2xl mb-12">
            <Image
              src={project.cover_image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Narrative & Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle">
                <h2 className="text-2xl font-bold text-hrm-charcoal mb-4">Project Narrative & Execution</h2>
                <div
                  className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-4"
                  dangerouslySetInnerHTML={{ __html: project.content || `<p>${project.excerpt}</p>` }}
                />
              </div>

              {/* Gallery Grid */}
              {project.gallery_images && project.gallery_images.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-hrm-charcoal mb-6">Site Fitment Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.gallery_images.map((img, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                        <Image
                          src={img}
                          alt={`${project.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right CTA Card */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-hrm-charcoal text-white rounded-2xl p-8 border border-slate-800 shadow-2xl">
                <span className="text-xs font-bold uppercase text-hrm-orange bg-hrm-orange/20 border border-hrm-orange/30 px-3 py-1 rounded-full inline-block mb-4">
                  Have a Similar Project?
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Let's Discuss Your Space & Dimensions
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Share your architectural drawings, site photos, or size requirements for a quick estimate.
                </p>

                <Button href="/contact" variant="primary" size="lg" className="w-full" icon>
                  Start Project Enquiry
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
