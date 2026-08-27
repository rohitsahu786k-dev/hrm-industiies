"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SiteSettings, ProductCategory } from "@/lib/types/wordpress";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  ShieldCheck,
  Building2,
  Compass
} from "lucide-react";
import { Container } from "../ui/Container";

interface HeaderProps {
  settings: SiteSettings;
  categories: ProductCategory[];
}

export const Header: React.FC<HeaderProps> = ({ settings, categories }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMegaOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products", isMega: true },
    { label: "Projects", href: "/projects" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Materials", href: "/materials-finishes" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const primaryPhone = settings.phone_primary || "+91 97996 47638";
  const secondaryPhone = settings.phone_secondary || "+91 82900 60885";
  const whatsappNum = settings.whatsapp_number || "919799647638";
  const defaultMsg = encodeURIComponent(
    settings.whatsapp_default_message || "Hello HRM Industries, I am interested in custom metal fabrication."
  );
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${defaultMsg}`;

  const featuredSolutions = [
    { name: "Laser Cutting & CNC Sheet Metal", href: "/products", desc: "Precision laser processing up to 20mm thickness", icon: Wrench },
    { name: "Architectural Gates & Railings", href: "/products", desc: "Custom decorative SS, MS & Brass structures", icon: Building2 },
    { name: "Industrial Steel Enclosures", href: "/products", desc: "Heavy-duty custom chassis & machinery frames", icon: Layers },
    { name: "Custom Metal Art & Facades", href: "/products", desc: "Bespoke hotel & interior metalwork installations", icon: Compass }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-10 sm:w-14 sm:h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/hrm-logo.png"
                alt="HRM Industries Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                HRM <span className="text-hrm-orange">INDUSTRIES</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-hrm-orange inline-block"></span>
                Custom Metal Fabrication
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with 21st.dev Mega Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.isMega) {
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setProductsMegaOpen(true)}
                    onMouseLeave={() => setProductsMegaOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        isActive || productsMegaOpen
                          ? "text-hrm-orange bg-hrm-orange-light/80 shadow-sm"
                          : "text-slate-700 hover:text-hrm-orange hover:bg-slate-100/70"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 text-slate-400 ${
                          productsMegaOpen ? "rotate-180 text-hrm-orange" : ""
                        }`}
                      />
                    </Link>

                    {/* 21st.dev Styled Mega Menu Dropdown */}
                    <AnimatePresence>
                      {productsMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full -left-20 w-[780px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 z-50"
                        >
                          {/* Column 1: Product Categories */}
                          <div className="col-span-5 border-r border-slate-100 pr-5">
                            <div className="flex items-center justify-between mb-3 px-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-hrm-orange" />
                                Product Categories
                              </span>
                              <Link
                                href="/products"
                                className="text-xs font-bold text-hrm-orange hover:underline flex items-center gap-0.5"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="space-y-1">
                              {categories.slice(0, 6).map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/products?category=${cat.slug}`}
                                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-hrm-orange-light/50 transition-all duration-200"
                                >
                                  <div>
                                    <div className="text-sm font-bold text-slate-800 group-hover:text-hrm-orange transition-colors">
                                      {cat.name}
                                    </div>
                                    <div className="text-[11px] text-slate-500 line-clamp-1">
                                      {cat.description || "Custom architectural & industrial fabrication"}
                                    </div>
                                  </div>
                                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 group-hover:bg-hrm-orange/10 group-hover:text-hrm-orange px-2 py-0.5 rounded-full transition-colors">
                                    {cat.count || 0}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 2: Featured Solutions */}
                          <div className="col-span-4 border-r border-slate-100 pr-4">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-hrm-orange" />
                              Key Capabilities
                            </div>
                            <div className="space-y-2">
                              {featuredSolutions.map((sol, idx) => {
                                const IconComponent = sol.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={sol.href}
                                    className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
                                  >
                                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-hrm-orange group-hover:text-white text-slate-600 transition-colors">
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-xs font-bold text-slate-800 group-hover:text-hrm-orange transition-colors">
                                        {sol.name}
                                      </div>
                                      <div className="text-[10px] text-slate-500 leading-tight">
                                        {sol.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 3: Quick Action Card */}
                          <div className="col-span-3 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-4 relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-hrm-orange/20 rounded-full blur-xl pointer-events-none" />
                            <div>
                              <div className="inline-flex items-center gap-1 bg-hrm-orange/20 border border-hrm-orange/40 text-hrm-orange text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                                <ShieldCheck className="w-3 h-3" /> ISO 9001 Certified
                              </div>
                              <h4 className="text-sm font-bold leading-snug mb-1">
                                Need Custom Fabrication?
                              </h4>
                              <p className="text-[11px] text-slate-300 leading-tight">
                                Get instant estimates & CAD consultations from our Udaipur engineering team.
                              </p>
                            </div>
                            <div className="mt-4 space-y-2">
                              <Link
                                href="/contact"
                                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-hrm-orange text-white text-xs font-bold rounded-lg hover:bg-hrm-orange-dark shadow-md transition-colors"
                              >
                                <span>Request Quote</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold rounded-lg transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                                <span>WhatsApp Us</span>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-hrm-orange bg-hrm-orange-light/80 shadow-sm"
                      : "text-slate-700 hover:text-hrm-orange hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-hrm-orange transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 text-hrm-orange" />
              <span>{primaryPhone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <Link
              href={settings.header_cta_url || "/contact"}
              className="relative group bg-hrm-orange text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-hrm-orange-dark shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{settings.header_cta_text || "Start a Project"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-emerald-50 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-4 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                      isActive ? "text-hrm-orange bg-hrm-orange-light" : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl text-slate-800 font-bold text-sm bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-hrm-orange" />
                  <span>Call {primaryPhone} (Primary)</span>
                </a>

                {secondaryPhone && (
                  <a
                    href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-slate-700 font-medium text-xs bg-slate-50/50"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Alt Call: {secondaryPhone}</span>
                  </a>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>

                <Link
                  href={settings.header_cta_url || "/contact"}
                  className="flex items-center justify-center gap-2 py-3.5 bg-hrm-orange text-white rounded-xl font-bold text-sm text-center shadow-md"
                >
                  <span>{settings.header_cta_text || "Start a Project"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
