import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings, getProductCategories, getProductBySlug, getProducts } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Wrench, ArrowRight, MessageCircle, FileText, ChevronRight } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | HRM Industries Udaipur`,
    description: product.excerpt || `Custom ${product.title} manufactured by HRM Industries in Udaipur, Rajasthan.`,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const [settings, categories, product] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getProductBySlug(resolvedParams.slug)
  ]);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter(p => p.slug !== product.slug).slice(0, 3);

  const whatsappNum = settings.whatsapp_number || "918290060885";
  const whatsappMsg = encodeURIComponent(`Hello HRM Industries, I am interested in ${product.title}. I would like to discuss my project requirements.`);
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
      />

      <main className="flex-grow py-12 sm:py-16 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Images & Gallery */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Desktop Hero Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 shadow-card">
                <Image
                  src={product.hero_desktop_image}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover"
                />
                {product.product_code && (
                  <span className="absolute top-4 left-4 bg-hrm-charcoal/90 text-white text-xs font-mono px-3 py-1.5 rounded-lg shadow-sm">
                    {product.product_code}
                  </span>
                )}
              </div>

              {/* Gallery Grid */}
              {product.gallery_images && product.gallery_images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery_images.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                      <Image
                        src={img}
                        alt={`${product.title} detail ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Description */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle mt-8">
                <h2 className="text-xl font-bold text-hrm-charcoal mb-4">Detailed Product Overview</h2>
                <div
                  className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-4"
                  dangerouslySetInnerHTML={{ __html: product.content || `<p>${product.excerpt}</p>` }}
                />
              </div>
            </div>

            {/* Right: Technical Specs & Conversion Form Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card sticky top-24">
                <span className="text-xs font-bold uppercase tracking-wider text-hrm-orange bg-hrm-orange-light px-3 py-1 rounded-full inline-block mb-3">
                  Technical Specifications
                </span>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-hrm-charcoal mb-2">
                  {product.title}
                </h1>

                {product.short_tagline && (
                  <p className="text-sm font-semibold text-slate-500 mb-6">
                    {product.short_tagline}
                  </p>
                )}

                {/* Specs List */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {product.material_info && (
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Material Profiles</span>
                      <p className="text-sm font-medium text-slate-800">{product.material_info}</p>
                    </div>
                  )}

                  {product.finish_info && (
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Surface Finish</span>
                      <p className="text-sm font-medium text-slate-800">{product.finish_info}</p>
                    </div>
                  )}

                  {product.applications && (
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Recommended Use</span>
                      <p className="text-sm font-medium text-slate-800">{product.applications}</p>
                    </div>
                  )}

                  {product.technical_notes && (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold uppercase text-hrm-orange flex items-center gap-1.5 mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        Planning & Engineering Notes
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">{product.technical_notes}</p>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <Button
                    href={`/contact?product=${encodeURIComponent(product.title)}`}
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon
                  >
                    Discuss This Product
                  </Button>

                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp Quote Inquiry</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-hrm-charcoal mb-8">Related Fabrication Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle hover:border-hrm-orange transition-all p-4 flex items-center gap-4 group"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image src={rel.hero_desktop_image} alt={rel.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors">{rel.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{rel.short_tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
