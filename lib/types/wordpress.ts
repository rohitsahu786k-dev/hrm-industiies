export interface ACFMedia {
  id: number;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface SiteSettings {
  company_name: string;
  tagline: string;
  phone_primary: string;
  phone_secondary?: string;
  whatsapp_number: string;
  whatsapp_default_message: string;
  business_email: string;
  full_address: string;
  city: string;
  state: string;
  pincode?: string;
  google_maps_url?: string;
  instagram_url?: string;
  facebook_url?: string;
  linkedin_url?: string;
  header_cta_text: string;
  header_cta_url: string;
  footer_short_about: string;
  footer_copyright_text: string;
  contact_section_title?: string;
  contact_section_intro?: string;
  form_name_label?: string;
  form_phone_label?: string;
  form_email_label?: string;
  form_service_label?: string;
  form_message_label?: string;
  form_submit_text?: string;
  form_success_message?: string;
  form_error_message?: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  primary_cta_text: string;
  primary_cta_url: string;
  secondary_cta_text?: string;
  secondary_cta_url?: string;
  desktop_image: string;
  mobile_image: string;
  sort_order: number;
  is_active: boolean;
}

export interface Announcement {
  id: number;
  announcement_text: string;
  link_label?: string;
  link_url?: string;
  sort_order: number;
  is_active: boolean;
}

export interface Banner {
  id: number;
  banner_title: string;
  banner_subtitle?: string;
  cta_label?: string;
  cta_url?: string;
  placement: string;
  desktop_image: string;
  mobile_image: string;
  sort_order: number;
  is_active: boolean;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  short_tagline?: string;
  product_code?: string;
  material_info?: string;
  finish_info?: string;
  applications?: string;
  key_features?: string;
  technical_notes?: string;
  hero_desktop_image: string;
  hero_mobile_image?: string;
  gallery_images: string[];
  show_on_home: boolean;
  home_sort_order: number;
  cta_text: string;
  cta_url: string;
  category_slugs: string[];
}

export interface ProjectType {
  id: number;
  name: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  location: string;
  year: string;
  scope: string;
  cover_image: string;
  mobile_hero_image?: string;
  gallery_images: string[];
  type_slugs: string[];
  show_on_home: boolean;
  home_sort_order: number;
  is_active: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  designation?: string;
  company?: string;
  rating: number;
  testimonial_text: string;
  client_photo?: string;
  show_on_home: boolean;
  home_sort_order: number;
}

export interface WhyHRMFeature {
  id: number;
  title: string;
  description: string;
  icon?: string;
  sort_order: number;
}

export interface ProcessStep {
  id: number;
  step_number: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featured_image: string;
}
