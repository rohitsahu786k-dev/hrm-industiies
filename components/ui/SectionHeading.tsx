import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  lightMode?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  lightMode = false,
  className = ""
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";
  const textColor = lightMode ? "text-white" : "text-hrm-charcoal";
  const subtitleColor = lightMode ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-hrm-orange animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-hrm-orange">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${textColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${subtitleColor} leading-relaxed font-normal`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
