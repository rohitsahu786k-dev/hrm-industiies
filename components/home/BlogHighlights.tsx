import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogHighlightsProps {
  posts: BlogPost[];
}

export const BlogHighlights: React.FC<BlogHighlightsProps> = ({ posts }) => {
  const displayPosts = posts.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Technical Articles & Insights"
            title="Fabrication Guides & Material Advice"
            subtitle="Read our latest articles on metal finishes, gate automation, and structural door frame choices."
          />
          <Button href="/blogs" variant="outline" icon className="self-start md:self-auto">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col group"
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

                <h3 className="text-lg font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
