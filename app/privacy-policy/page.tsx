import React from "react";
import { Metadata } from "next";
import { getSiteSettings, getProductCategories } from "@/lib/wordpress/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Privacy Policy | ${settings.company_name}`,
    description: "Privacy policy and data handling guidelines for HRM Industries Udaipur.",
  };
}

export default async function PrivacyPolicyPage() {
  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    getProductCategories()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-hrm-charcoal">
      <Header settings={settings} categories={categories} />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <main className="flex-grow py-16 bg-slate-50">
        <Container>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-subtle max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl font-extrabold text-hrm-charcoal mb-4">Privacy Policy</h1>
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Last updated: February 2026</p>

            <div className="prose prose-slate text-sm leading-relaxed text-slate-600 space-y-4">
              <p>
                HRM Industries ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us through our website.
              </p>
              
              <h3 className="text-base font-bold text-hrm-charcoal pt-2">1. Information Collection</h3>
              <p>
                We collect information you voluntarily provide through our project enquiry form, contact forms, or WhatsApp interactions, including your name, phone number, email address, project location, and size dimensions.
              </p>

              <h3 className="text-base font-bold text-hrm-charcoal pt-2">2. Use of Information</h3>
              <p>
                The information collected is strictly used to evaluate your project scope, provide technical quotations, coordinate site measurement visits, and complete metal fabrication services.
              </p>

              <h3 className="text-base font-bold text-hrm-charcoal pt-2">3. Data Sharing</h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties. Information may only be shared with verified installation technicians or logistics providers directly involved in fulfilling your project.
              </p>

              <h3 className="text-base font-bold text-hrm-charcoal pt-2">4. Contact Us</h3>
              <p>
                If you have questions regarding this Privacy Policy, contact us at <strong>hrmindustries2026@gmail.com</strong> or call <strong>+91 97996 47638</strong>.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer settings={settings} categories={categories} />
    </div>
  );
}
