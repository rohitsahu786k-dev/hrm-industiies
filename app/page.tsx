import React from "react";
import { Metadata } from "next";
import {
  getSiteSettings,
  getHeroSlides,
  getAnnouncements,
  getBanners,
  getProductCategories,
  getProducts,
  getProjects,
  getTestimonials,
  getWhyHRMFeatures,
  getProcessSteps,
  getBlogPosts
} from "@/lib/wordpress/api";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ValueProp } from "@/components/home/ValueProp";
import { IntroSection } from "@/components/home/IntroSection";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { MiddleBanner } from "@/components/home/MiddleBanner";
import { ProjectHighlights } from "@/components/home/ProjectHighlights";
import { DetailsCraftsmanship } from "@/components/home/DetailsCraftsmanship";
import { WhyHRMSection } from "@/components/home/WhyHRMSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { MaterialsPreview } from "@/components/home/MaterialsPreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { BlogHighlights } from "@/components/home/BlogHighlights";
import { FinalCTA } from "@/components/home/FinalCTA";

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
    middleBanners,
    categories,
    products,
    projects,
    testimonials,
    whyFeatures,
    processSteps,
    blogPosts
  ] = await Promise.all([
    getSiteSettings(),
    getHeroSlides(),
    getAnnouncements(),
    getBanners("homepage_middle"),
    getProductCategories(),
    getProducts(undefined, true),
    getProjects(true),
    getTestimonials(),
    getWhyHRMFeatures(),
    getProcessSteps(),
    getBlogPosts(3)
  ]);

  const middleBanner = middleBanners.length > 0 ? middleBanners[0] : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <AnnouncementBar announcements={announcements} />
      <Header settings={settings} categories={categories} />

      <main className="flex-grow">
        <HeroCarousel slides={heroSlides} />
        <ProductHighlights products={products} />
        <ValueProp />
        <IntroSection />
        <MiddleBanner banner={middleBanner} />
        <ProjectHighlights projects={projects} />
        <DetailsCraftsmanship />
        <WhyHRMSection features={whyFeatures} />
        <ProcessSection steps={processSteps} />
        <CapabilitiesSection />
        <MaterialsPreview />
        <TestimonialSection testimonials={testimonials} />
        <BlogHighlights posts={blogPosts} />
        <FinalCTA settings={settings} />
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
