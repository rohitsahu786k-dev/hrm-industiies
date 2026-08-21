import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "dark" | "outline" | "slate";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  className = ""
}) => {
  const variantStyles = {
    orange: "bg-hrm-orange-light text-hrm-orange border-hrm-orange/20",
    dark: "bg-hrm-charcoal text-white border-transparent",
    outline: "bg-white text-slate-700 border-slate-300",
    slate: "bg-slate-100 text-slate-700 border-slate-200"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
