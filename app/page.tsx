import React from "react";
import { Metadata } from "next";
import {
  getSiteSettings,
  getHeroSlides,
  getAnnouncements,
  getProductCategories,
  getProducts,
  getProjects,
  getTestimonials,
  getBlogPosts
} from "@/lib/wordpress/api";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ArchitecturalMarquee } from "@/components/home/ArchitecturalMarquee";
import { ProductCatalogGrid } from "@/components/home/ProductCatalogGrid";
import { ArchitecturalBentoGrid } from "@/components/home/ArchitecturalBentoGrid";
import { CountUpStats } from "@/components/home/CountUpStats";
import { WorkShowcaseTabs } from "@/components/home/WorkShowcaseTabs";
import { InteractiveProcessTimeline } from "@/components/home/InteractiveProcessTimeline";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { BlogHighlights } from "@/components/home/BlogHighlights";
import { ConsolidatedConsultationCard } from "@/components/home/ConsolidatedConsultationCard";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `${settings.company_name} | Custom Metal Fabrication & Architectural Metalwork Udaipur`,
    description: `${settings.tagline} Custom gates, railings, doors, frames, and precision architectural metalwork in Udaipur, Rajasthan.`,
    keywords: [
      "Metal Fabrication Udaipur",
      "Custom Gates Udaipur",
      "Iron Gate Manufacturer Udaipur",
      "Metal Railings Udaipur",
      "Architectural Metalwork Rajasthan",
      "Metal Door Frames Udaipur"
    ],
    openGraph: {
      title: `${settings.company_name} | Architectural Metalwork`,
      description: settings.tagline,
      url: "https://hrmindustries.in",
      siteName: settings.company_name,
      locale: "en_IN",
      type: "website"
    }
  };
}

export default async function HomePage() {
  const [
    settings,
    heroSlides,
    announcements,
    categories,
    allProducts,
    projects,
    testimonials,
    blogPosts
  ] = await Promise.all([
    getSiteSettings(),
    getHeroSlides(),
    getAnnouncements(),
    getProductCategories(),
    getProducts(), // Load all products
    getProjects(true),
    getTestimonials(),
    getBlogPosts(3)
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <AnnouncementBar announcements={announcements} />
      <Header settings={settings} categories={categories} />

      <main className="flex-grow">
        {/* 1. Hero Master Showcase */}
        <HeroCarousel slides={heroSlides} />

        {/* 2. 21st-Style Infinite Architectural Credentials Marquee */}
        <ArchitecturalMarquee />

        {/* 3. Interactive Workshop Product Catalog & Category Explorer */}
        <ProductCatalogGrid products={allProducts} />

        {/* 4. 21st-Style Architectural 3D Bento Grid */}
        <ArchitecturalBentoGrid />

        {/* 5. 21st-Style Animated Count Up Key Metrics */}
        <CountUpStats />

        {/* 6. Interactive Tabbed Portfolio & Recent Projects Showcase */}
        <WorkShowcaseTabs products={allProducts} projects={projects} />

        {/* 7. 4-Step Interactive Execution Journey */}
        <InteractiveProcessTimeline />

        {/* 8. Verified Testimonials & Client Reviews */}
        <TestimonialsMarquee testimonials={testimonials} />

        {/* 9. Technical Guides & Architectural Insights */}
        <BlogHighlights posts={blogPosts} />

        {/* 10. Consolidated Luxury Consultation & Instant Estimate Hub */}
        <ConsolidatedConsultationCard settings={settings} />
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}



