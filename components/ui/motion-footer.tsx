"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUp,
  Instagram,
  Facebook,
  Linkedin,
  ShieldCheck,
  CheckCircle2,
  Building2
} from "lucide-react";
import { ProductCategory, SiteSettings } from "@/lib/types/wordpress";
import { Container } from "./Container";

interface CinematicFooterProps {
  settings: SiteSettings;
  categories: ProductCategory[];
}

export function CinematicFooter({ settings, categories }: CinematicFooterProps) {
  const phonePrimary = settings.phone_primary || "+91 8290060885";
  const whatsappNum = settings.whatsapp_number || "918290060885";
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
    settings.whatsapp_default_message || "Hello HRM Industries, I am interested in custom fabrication for my project."
  )}`;
  const email = settings.business_email || "hrmindustries2026@gmail.com";
  const address = settings.full_address || "Udaipur, Rajasthan, India - 313001";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const citiesServed = [
    "Udaipur", "Jaipur", "Jodhpur", "Kota", "Ajmer",
    "Bhilwara", "Chittorgarh", "Rajsamand", "Ahmedabad", "Gujarat & Rajasthan"
  ];

  return (
    <footer className="bg-[#f8fafc] text-slate-700 border-t border-slate-200/90 font-sans relative z-10">
      <Container className="pt-16 pb-12">
        {/* 5-Column Link Grid matching reference UI */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12">
          {/* Column 1: OUR COMPANY */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 font-heading">
              OUR COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/about" className="hover:text-hrm-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hrm-orange transition-colors">
                  Fabrication Studio
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-hrm-orange transition-colors">
                  Workshop Capabilities
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-hrm-orange transition-colors">
                  Fabrication Guides & Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-hrm-orange transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hrm-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: USEFUL LINKS */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 font-heading">
              USEFUL LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Custom Metal Fabrication
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Architectural Gates
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Balcony & Stair Railings
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Pressed Metal Door Frames
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Structural Steel Staircases
                </Link>
              </li>
              <li>
                <Link href="/materials-finishes" className="hover:text-hrm-orange transition-colors">
                  Materials & Finishes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SHOP BY CATEGORY */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 font-heading">
              SHOP BY CATEGORY
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Entrance Gates
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Balcony & Terrace Railings
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Metal Door Frames
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Window Security Grills
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Steel Staircases
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-hrm-orange transition-colors">
                  Laser Cut Facades & Canopies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: QUALITY & STANDARDS */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 font-heading">
              QUALITY STANDARDS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> IS 2062 MS Steel Grade
              </li>
              <li className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> SS 304 Certified Accents
              </li>
              <li className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange" /> 7-Tank Anti-Rust Prep
              </li>
              <li className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange" /> Thermoset Powder Coat
              </li>
              <li className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-hrm-orange" /> ± 0.5mm Fitment Accuracy
              </li>
            </ul>
          </div>

          {/* Column 5: NEED HELP & CONNECT */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 font-heading">
              NEED HELP?
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li>
                <a
                  href={`tel:${phonePrimary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-slate-900 hover:text-hrm-orange font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-hrm-orange" />
                  <span>{phonePrimary}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-hrm-orange transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="truncate">{email}</span>
                </a>
              </li>
            </ul>

            {/* Social Icons matching reference */}
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-3">
              {settings.instagram_url && (
                <a
                  href={settings.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-hrm-orange hover:text-hrm-orange text-slate-600 flex items-center justify-center transition-all shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              )}
              {settings.facebook_url && (
                <a
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-hrm-orange hover:text-hrm-orange text-slate-600 flex items-center justify-center transition-all shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              )}
              {settings.linkedin_url && (
                <a
                  href={settings.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-hrm-orange hover:text-hrm-orange text-slate-600 flex items-center justify-center transition-all shadow-xs"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Middle Footprint & Certifications Bar matching reference */}
        <div className="border-y border-slate-200 py-6 my-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center lg:text-left">
            <span className="font-bold text-slate-900">Delivery & Execution Across Rajasthan & Beyond:</span>
            {citiesServed.map((city, idx) => (
              <span key={city} className="text-slate-600">
                {city}{idx < citiesServed.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-bold text-slate-900">Quality Assured:</span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 font-mono font-bold text-[10px] text-slate-800 shadow-2xs">
              IS 2062 STEEL
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 font-mono font-bold text-[10px] text-slate-800 shadow-2xs">
              SS 304 GRADE
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 font-mono font-bold text-[10px] text-slate-800 shadow-2xs">
              7-TANK PRIMED
            </span>
          </div>
        </div>

        {/* Bottom Bar matching reference */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image src="/hrm-logo.png" alt="HRM Logo" fill className="object-contain" />
              </div>
              <span>HRM <span className="text-hrm-orange">INDUSTRIES</span></span>
            </Link>

            <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600">
              <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                Security & Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6 text-center md:text-right">
            <div className="text-[11px] text-slate-600">
              <p className="font-bold text-slate-800">Registered Office & Fabrication Workshop:</p>
              <p>{address}</p>
              <p>© {new Date().getFullYear()} HRM Industries. All rights reserved. | Powered by <a href="https://iprixmedia.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-hrm-orange transition-colors">iPrix Media</a></p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex-shrink-0 flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-300 text-slate-700 hover:border-hrm-orange hover:text-hrm-orange shadow-xs transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">TOP</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}