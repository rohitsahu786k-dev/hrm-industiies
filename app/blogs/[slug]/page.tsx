import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings, getProductCategories, getBlogPostBySlug, getBlogPosts } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | HRM Technical Articles`,
    description: post.excerpt || `Read ${post.title} on HRM Industries blog.`,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const resolvedParams = await params;
  const [settings, categories, post] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
    getBlogPostBySlug(resolvedParams.slug)
  ]);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts(4);
  const relatedPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs
        items={[
          { label: "Blogs", href: "/blogs" },
          { label: post.title }
        ]}
      />

      <main className="flex-grow py-12 sm:py-16 bg-slate-50">
        <Container className="max-w-4xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-card mb-12">
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-hrm-orange" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-hrm-orange" />
                {post.author}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-hrm-charcoal leading-tight mb-6">
              {post.title}
            </h1>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-8">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-hrm-orange transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>

              <Button href="/contact" variant="primary" size="sm">
                Discuss Your Fabrication Project
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-hrm-charcoal mb-6">Related Technical Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/blogs/${rel.slug}`}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle hover:border-hrm-orange transition-all group"
                  >
                    <span className="text-xs text-hrm-orange font-bold block mb-2">{rel.date}</span>
                    <h4 className="text-base font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors">{rel.title}</h4>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{rel.excerpt}</p>
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
