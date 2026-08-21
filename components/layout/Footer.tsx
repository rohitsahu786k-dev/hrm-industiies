"use client";

import React from "react";
import { ProductCategory, SiteSettings } from "@/lib/types/wordpress";
import { CinematicFooter } from "../ui/motion-footer";

interface FooterProps {
  settings: SiteSettings;
  categories: ProductCategory[];
}

export const Footer: React.FC<FooterProps> = ({ settings, categories }) => (
  <CinematicFooter settings={settings} categories={categories} />
);
