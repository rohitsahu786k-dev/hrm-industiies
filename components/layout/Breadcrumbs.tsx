import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "../ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-3">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center text-xs sm:text-sm text-slate-600">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-hrm-orange transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 flex-shrink-0" />
              {item.href ? (
                <Link href={item.href} className="hover:text-hrm-orange transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-hrm-charcoal font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </Container>
    </div>
  );
};
