"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Target, Award, Building2, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return () => controls.stop();
  }, [value, count]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export const CountUpStats: React.FC = () => {
  const stats = [
    {
      icon: Target,
      number: 500,
      suffix: "+",
      label: "Bespoke Metal Projects",
      subtext: "Villas, Resorts & Commercial Estates"
    },
    {
      icon: ShieldCheck,
      number: 100,
      suffix: "%",
      label: "In-House Manufacturing",
      subtext: "Zero Outsource Markup in Udaipur"
    },
    {
      icon: Award,
      number: 15,
      suffix: "+ Yrs",
      label: "Engineering Experience",
      subtext: "Master MIG Welding & Cold Sawing"
    },
    {
      icon: Building2,
      number: 100,
      suffix: "%",
      label: "Shop Floor Trial Assembly",
      subtext: "Fit-Tested Before Site Handover"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#07090D] border-t border-b border-slate-800/80 text-white relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(232,130,34,0.08),transparent)]" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-hrm-orange/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-hrm-orange/10 border border-hrm-orange/30 text-hrm-orange flex items-center justify-center mb-4 group-hover:bg-hrm-orange group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-1">
                  <AnimatedNumber value={s.number} suffix={s.suffix} />
                </div>

                <h4 className="text-sm font-bold text-slate-200 group-hover:text-hrm-orange transition-colors">
                  {s.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {s.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
