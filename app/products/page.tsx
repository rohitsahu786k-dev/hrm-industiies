import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSiteSettings, getProductCategories, getProducts } from "@/lib/wordpress/api";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight, CheckCircle, SlidersHorizontal, ShieldCheck } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Products & Solutions | ${settings.company_name} Udaipur`,
    description: "Explore custom architectural iron gates, metal door frames, balcony railings, window grills, staircases, and metal furniture fabricated in Udaipur.",
  };
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams.category || "";

  const [settings, categories, products] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getProducts(selectedCategory || undefined)
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Products & Solutions" }]} />

      <main className="flex-grow">
        <PageHero
          eyebrow="Architectural Catalog"
          title="Custom Metal Products & Site-Ready Solutions"
          subtitle="High-end iron gates, pressed MS door frames, balcony railings, window screens, staircases, and custom structural steel fabricated to exact site dimensions."
          primaryHref="/contact"
          primaryLabel="Request Catalogue Quote"
          secondaryHref="/projects"
          secondaryLabel="View Installed Work"
          stats={[
            { value: `${categories.length}+`, label: "Product groups" },
            { value: `${products.length}+`, label: "Listed designs" },
            { value: "MS/GI/SS", label: "Material range" },
          ]}
        />

        {/* Category Filter & Listing */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
              <Link
                href="/products"
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  !selectedCategory
                    ? "bg-hrm-orange text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                All Categories ({products.length})
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.slug}`}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-hrm-orange text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="premium-card overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={product.hero_desktop_image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.product_code && (
                      <span className="absolute top-4 left-4 bg-hrm-charcoal/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-md shadow-sm">
                        {product.product_code}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors">
                      {product.title}
                    </h2>

                    {product.short_tagline && (
                      <p className="text-xs font-semibold text-hrm-orange mt-1">
                        {product.short_tagline}
                      </p>
                    )}

                    <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed flex-grow">
                      {product.excerpt}
                    </p>

                    {product.material_info && (
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle className="w-3.5 h-3.5 text-hrm-orange flex-shrink-0" />
                        <span className="truncate">{product.material_info}</span>
                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Button
                        href={`/contact?product=${encodeURIComponent(product.title)}`}
                        variant="primary"
                        size="sm"
                      >
                        Enquire Quote
                      </Button>
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
