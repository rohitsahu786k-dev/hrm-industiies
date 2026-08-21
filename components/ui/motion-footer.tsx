"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  ShieldCheck,
  Compass
} from "lucide-react";
import { ProductCategory, SiteSettings } from "@/lib/types/wordpress";

interface CinematicFooterProps {
  settings: SiteSettings;
  categories: ProductCategory[];
}

export function CinematicFooter({ settings, categories }: CinematicFooterProps) {
  const phonePrimary = settings.phone_primary || "+91 8290060885";
  const phoneSecondary = settings.phone_secondary || "+91 9799647638";
  const whatsappNum = settings.whatsapp_number || "918290060885";
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
    settings.whatsapp_default_message || "Hello HRM Industries, I am interested in custom fabrication for my project."
  )}`;
  const email = settings.business_email || "hrmindustries2026@gmail.com";
  const address = settings.full_address || "Udaipur, Rajasthan, India - 313001";
  const mapUrl = settings.google_maps_url || "https://maps.google.com/?q=Udaipur+Rajasthan";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Capabilities", href: "/capabilities" },
    { label: "Product Catalog", href: "/products" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Materials & Finishes", href: "/materials-finishes" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const defaultCategories = categories.length > 0 ? categories : [
    { id: 1, name: "Gates & Openings", slug: "gates-openings", count: 2 },
    { id: 2, name: "Railings & Balustrades", slug: "railings-balustrades", count: 2 },
    { id: 3, name: "Doors & Frames", slug: "doors-frames", count: 1 },
    { id: 4, name: "Grills & Windows", slug: "grills-windows", count: 1 },
    { id: 5, name: "Stairs & Structures", slug: "stairs-structures", count: 1 },
    { id: 6, name: "Sheds & Canopies", slug: "sheds-canopies", count: 1 },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top Ticker Bar */}
      <div className="relative z-10 border-b border-slate-800/60 bg-slate-900/60 backdrop-blur-md py-3 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-semibold uppercase tracking-widest text-slate-400">
          <div className="flex items-center space-x-6 shrink-0">
            <span>Precision Architectural Metalwork</span>
            <span className="text-amber-500">✦</span>
            <span>Custom Iron Gates & Sliding Systems</span>
            <span className="text-amber-500">✦</span>
            <span>Glass & Steel Balcony Railings</span>
            <span className="text-amber-500">✦</span>
            <span>Pressed Metal Door Frames</span>
            <span className="text-amber-500">✦</span>
            <span>Fabricated in Udaipur, Rajasthan</span>
            <span className="text-amber-500">✦</span>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <span>Precision Architectural Metalwork</span>
            <span className="text-amber-500">✦</span>
            <span>Custom Iron Gates & Sliding Systems</span>
            <span className="text-amber-500">✦</span>
            <span>Glass & Steel Balcony Railings</span>
            <span className="text-amber-500">✦</span>
            <span>Pressed Metal Door Frames</span>
            <span className="text-amber-500">✦</span>
            <span>Fabricated in Udaipur, Rajasthan</span>
            <span className="text-amber-500">✦</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-16 pb-12">
        {/* Call to Action Highlight Box */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-slate-900/90 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Ready for your next project?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white font-outfit">
              Have architectural drawings or custom site dimensions?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Send your project specifications for an initial technical estimate and profile consultation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 shrink-0">
            <a
              href={`tel:${phonePrimary.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all duration-300 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-slate-700/30"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {phonePrimary}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Estimate</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Column 1: Company Profile & Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/30 p-2 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                <Image
                  src="/hrm-logo.png"
                  alt="HRM Industries Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide font-outfit block">
                  HRM INDUSTRIES
                </span>
                <span className="text-xs text-amber-400 tracking-widest uppercase font-medium">
                  Architectural Metalwork
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              {settings.footer_short_about ||
                "HRM Industries specializes in architectural metalwork, custom iron gates, modern railings, steel door frames, window grills, and precision fabrication in Udaipur, Rajasthan."}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Custom to Site</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Udaipur & All Rajasthan</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-outfit border-l-2 border-amber-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-outfit border-l-2 border-amber-500 pl-3">
              Product Range
            </h4>
            <ul className="space-y-2.5 text-sm">
              {defaultCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Detailed Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-outfit border-l-2 border-amber-500 pl-3">
              Contact & Location
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  {address}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${phonePrimary.replace(/\s+/g, "")}`}
                    className="hover:text-amber-300 transition-colors text-white font-medium"
                  >
                    {phonePrimary}
                  </a>
                  <a
                    href={`tel:${phoneSecondary.replace(/\s+/g, "")}`}
                    className="hover:text-amber-300 transition-colors text-xs text-slate-400"
                  >
                    {phoneSecondary} (Alt)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-amber-300 transition-colors text-slate-300 break-all"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {settings.instagram_url && (
                <a
                  href={settings.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 flex items-center justify-center border border-slate-800 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.facebook_url && (
                <a
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 flex items-center justify-center border border-slate-800 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.linkedin_url && (
                <a
                  href={settings.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 flex items-center justify-center border border-slate-800 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            {settings.footer_copyright_text ||
              `© ${new Date().getFullYear()} HRM Industries. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group cursor-pointer"
            >
              <span>Back to top</span>
              <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 group-hover:border-amber-500 flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}