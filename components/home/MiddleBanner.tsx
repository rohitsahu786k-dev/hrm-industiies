import React from "react";
import Image from "next/image";
import { Banner } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

interface MiddleBannerProps {
  banner: Banner | null;
}

export const MiddleBanner: React.FC<MiddleBannerProps> = ({ banner }) => {
  if (!banner) return null;

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-hrm-charcoal text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
          {/* Background Image */}
          <div className="hidden sm:block absolute inset-0 opacity-30">
            <Image
              src={banner.desktop_image}
              alt={banner.banner_title}
              fill
              className="object-cover"
            />
          </div>
          <div className="block sm:hidden absolute inset-0 opacity-30">
            <Image
              src={banner.mobile_image || banner.desktop_image}
              alt={banner.banner_title}
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-hrm-charcoal via-hrm-charcoal/90 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-hrm-orange bg-hrm-orange/20 border border-hrm-orange/30 px-3 py-1 rounded-full mb-4 inline-block">
              Manufacturing Standards
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              {banner.banner_title}
            </h2>

            {banner.banner_subtitle && (
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {banner.banner_subtitle}
              </p>
            )}

            <Button href={banner.cta_url || "/contact"} variant="primary" size="lg" icon>
              {banner.cta_label || "Discuss Your Project"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
