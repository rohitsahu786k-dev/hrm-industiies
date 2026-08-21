import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { ThreeForgeScene } from "./ThreeForgeScene";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  stats?: Array<{ value: string; label: string }>;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/contact",
  primaryLabel = "Start a Project",
  secondaryHref = "/products",
  secondaryLabel = "View Work",
  stats = [
    { value: "20mm", label: "Cut capacity" },
    { value: "304", label: "SS grade options" },
    { value: "24h", label: "Brief review" },
  ],
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0b0f12] text-white">
      <div className="absolute inset-0 metal-mesh opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hrm-orange/70 to-transparent" />
      <Container className="relative z-10 grid min-h-[520px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-hrm-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-hrm-orange shadow-[0_0_18px_rgba(232,130,34,0.9)]" />
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="primary" size="lg" icon>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outlineOnDark" size="lg">
              {secondaryLabel}
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 bg-white/[0.03]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4">
                <div className="font-heading text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative min-h-[300px] lg:col-span-5 lg:min-h-[440px]" delay={0.12}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,130,34,0.24),transparent_58%)]" />
          <ThreeForgeScene className="absolute inset-0" />
          <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Live Capability</div>
            <div className="mt-1 text-sm font-semibold text-white">Laser cutting, welding, finishing and site fitment under one roof.</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
