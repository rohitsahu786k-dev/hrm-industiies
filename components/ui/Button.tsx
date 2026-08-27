import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outlineOnDark" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  icon = false,
  className = "",
  type = "button",
  disabled = false
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wide",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-semibold tracking-wide"
  };

  const variantClasses = {
    primary: "bg-hrm-orange text-white hover:bg-hrm-orange-dark shadow-[0_18px_40px_-18px_rgba(232,130,34,0.85)] hover:-translate-y-0.5 border border-hrm-orange transition-all duration-300",
    secondary: "bg-hrm-charcoal text-white hover:bg-slate-800 shadow-md border border-hrm-charcoal transition-all duration-300",
    outline: "bg-white text-hrm-charcoal border border-slate-300 hover:border-hrm-orange hover:text-hrm-orange hover:-translate-y-0.5 transition-all duration-300",
    outlineOnDark: "bg-white/[0.03] text-white border border-white/15 hover:border-hrm-orange hover:bg-hrm-orange/10 hover:text-white hover:-translate-y-0.5 transition-all duration-300",
    ghost: "bg-transparent text-slate-700 hover:text-hrm-orange hover:bg-slate-50 transition-all duration-300",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE57] shadow-md border border-[#25D366] transition-all duration-300"
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-lg font-sans text-center whitespace-nowrap transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("https://wa.me") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
          {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {icon && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
};
