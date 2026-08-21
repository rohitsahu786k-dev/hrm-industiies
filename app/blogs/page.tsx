import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSiteSettings, getProductCategories, getBlogPosts } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Technical Blog & Insights | ${settings.company_name}`,
    description: "Read technical articles on metal finishes, gate automation, door frame steel options, and balcony safety standards from HRM Industries.",
  };
}

export default async function BlogsPage() {
  const [settings, categories, posts] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getBlogPosts(12)
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Blogs & Technical Articles" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Technical Knowledge"
          title="Fabrication Insights & Guides"
          subtitle="Articles on metal finishing systems, steel profile selection, architectural door frames, balcony safety, custom gate details, and practical fabrication decisions."
          primaryHref="/contact"
          primaryLabel="Ask an Expert"
          secondaryHref="/materials-finishes"
          secondaryLabel="Material Guide"
          stats={[
            { value: `${posts.length}`, label: "Articles" },
            { value: "SS/MS", label: "Material notes" },
            { value: "Site", label: "Practical guides" },
          ]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="premium-card overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-3">
                      <Calendar className="w-3.5 h-3.5 text-hrm-orange" />
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="text-lg font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
