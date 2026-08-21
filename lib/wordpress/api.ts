import {
  SiteSettings,
  HeroSlide,
  Announcement,
  Banner,
  ProductCategory,
  Product,
  ProjectType,
  Project,
  Testimonial,
  WhyHRMFeature,
  ProcessStep,
  BlogPost
} from "../types/wordpress";
import {
  fallbackSiteSettings,
  fallbackHeroSlides,
  fallbackAnnouncements,
  fallbackBanners,
  fallbackProductCategories,
  fallbackProducts,
  fallbackProjectTypes,
  fallbackProjects,
  fallbackTestimonials,
  fallbackWhyHRM,
  fallbackProcessSteps,
  fallbackBlogPosts
} from "./mock-fallbacks";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "https://hrmindustries.in/wp-json";
const WP_AUTH = process.env.WP_AUTH || "Basic " + Buffer.from("hrmindustries2026@gmail.com:fEsQ qhRT i7Fn 1nRf Y6xY clIc").toString("base64");
const PREFER_LOCAL_FALLBACK = process.env.NEXT_PUBLIC_USE_REMOTE_WP !== "true";

async function fetchWP(endpoint: string, revalidate = 60) {
  if (PREFER_LOCAL_FALLBACK) return null;
  try {
    const res = await fetch(`${WP_API_URL}${endpoint}`, {
      headers: {
        "Authorization": WP_AUTH,
        "Accept": "application/json"
      },
      next: { revalidate }
    });

    if (!res.ok) {
      console.warn(`WP API Warning: ${endpoint} returned ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error(`WP API Fetch error for ${endpoint}:`, error);
    return null;
  }
}

// Media Resolver Helper
const mediaCache: Record<number, string> = {};
export async function getMediaUrl(mediaId: number | string | null | undefined): Promise<string> {
  if (!mediaId) return "";
  if (typeof mediaId === "string" && (mediaId.startsWith("http://") || mediaId.startsWith("https://"))) {
    return mediaId;
  }
  const idNum = Number(mediaId);
  if (isNaN(idNum) || idNum <= 0) return "";
  if (mediaCache[idNum]) return mediaCache[idNum];

  const data = await fetchWP(`/wp/v2/media/${idNum}`, 3600);
  if (data && data.source_url) {
    mediaCache[idNum] = data.source_url;
    return data.source_url;
  }
  return "";
}

// 1. Site Settings
export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchWP("/wp/v2/hrm_settings?per_page=1");
  if (Array.isArray(data) && data.length > 0 && data[0].acf) {
    const acf = data[0].acf;
    return {
      company_name: acf.company_name || fallbackSiteSettings.company_name,
      tagline: acf.tagline || fallbackSiteSettings.tagline,
      phone_primary: acf.phone_primary || fallbackSiteSettings.phone_primary,
      phone_secondary: acf.phone_secondary || fallbackSiteSettings.phone_secondary,
      whatsapp_number: acf.whatsapp_number || fallbackSiteSettings.whatsapp_number,
      whatsapp_default_message: acf.whatsapp_default_message || fallbackSiteSettings.whatsapp_default_message,
      business_email: acf.business_email || fallbackSiteSettings.business_email,
      full_address: acf.full_address || fallbackSiteSettings.full_address,
      city: acf.city || fallbackSiteSettings.city,
      state: acf.state || fallbackSiteSettings.state,
      pincode: acf.pincode || fallbackSiteSettings.pincode,
      google_maps_url: acf.google_maps_url || fallbackSiteSettings.google_maps_url,
      instagram_url: acf.instagram_url || fallbackSiteSettings.instagram_url,
      facebook_url: acf.facebook_url || fallbackSiteSettings.facebook_url,
      linkedin_url: acf.linkedin_url || fallbackSiteSettings.linkedin_url,
      header_cta_text: acf.header_cta_text || fallbackSiteSettings.header_cta_text,
      header_cta_url: acf.header_cta_url || fallbackSiteSettings.header_cta_url,
      footer_short_about: acf.footer_short_about || fallbackSiteSettings.footer_short_about,
      footer_copyright_text: acf.footer_copyright_text || fallbackSiteSettings.footer_copyright_text,
      contact_section_title: acf.contact_section_title || fallbackSiteSettings.contact_section_title,
      contact_section_intro: acf.contact_section_intro || fallbackSiteSettings.contact_section_intro,
      form_name_label: acf.form_name_label || fallbackSiteSettings.form_name_label,
      form_phone_label: acf.form_phone_label || fallbackSiteSettings.form_phone_label,
      form_email_label: acf.form_email_label || fallbackSiteSettings.form_email_label,
      form_service_label: acf.form_service_label || fallbackSiteSettings.form_service_label,
      form_message_label: acf.form_message_label || fallbackSiteSettings.form_message_label,
      form_submit_text: acf.form_submit_text || fallbackSiteSettings.form_submit_text,
      form_success_message: acf.form_success_message || fallbackSiteSettings.form_success_message,
      form_error_message: acf.form_error_message || fallbackSiteSettings.form_error_message,
    };
  }
  return fallbackSiteSettings;
}

// 2. Hero Slides
export async function getHeroSlides(): Promise<HeroSlide[]> {
  const data = await fetchWP("/wp/v2/hrm_hero_slide?per_page=20");
  if (Array.isArray(data) && data.length > 0) {
    const slides: HeroSlide[] = [];
    for (const item of data) {
      const acf = item.acf || {};
      if (acf.is_active === false) continue;
      const desktopUrl = await getMediaUrl(acf.desktop_image);
      const mobileUrl = await getMediaUrl(acf.mobile_image) || desktopUrl;
      slides.push({
        id: item.id,
        title: item.title?.rendered || "Hero Slide",
        eyebrow: acf.eyebrow || "",
        heading: acf.heading || item.title?.rendered || "",
        description: acf.description || "",
        primary_cta_text: acf.primary_cta_text || "Start a Project",
        primary_cta_url: acf.primary_cta_url || "/contact",
        secondary_cta_text: acf.secondary_cta_text || "",
        secondary_cta_url: acf.secondary_cta_url || "",
        desktop_image: desktopUrl || fallbackHeroSlides[0].desktop_image,
        mobile_image: mobileUrl || fallbackHeroSlides[0].mobile_image,
        sort_order: Number(acf.sort_order) || 10,
        is_active: acf.is_active !== false
      });
    }
    slides.sort((a, b) => a.sort_order - b.sort_order);
    if (slides.length > 0) return slides;
  }
  return fallbackHeroSlides;
}

// 3. Announcements
export async function getAnnouncements(): Promise<Announcement[]> {
  const data = await fetchWP("/wp/v2/hrm_announcement?per_page=10");
  if (Array.isArray(data) && data.length > 0) {
    const items: Announcement[] = data
      .filter((item: any) => item.acf?.is_active !== false)
      .map((item: any) => ({
        id: item.id,
        announcement_text: item.acf?.announcement_text || item.title?.rendered || "",
        link_label: item.acf?.link_label || "",
        link_url: item.acf?.link_url || "",
        sort_order: Number(item.acf?.sort_order) || 10,
        is_active: item.acf?.is_active !== false
      }));
    items.sort((a, b) => a.sort_order - b.sort_order);
    if (items.length > 0) return items;
  }
  return fallbackAnnouncements;
}

// 4. Banners
export async function getBanners(placement?: string): Promise<Banner[]> {
  const data = await fetchWP("/wp/v2/hrm_banner?per_page=10");
  if (Array.isArray(data) && data.length > 0) {
    const banners: Banner[] = [];
    for (const item of data) {
      const acf = item.acf || {};
      if (acf.is_active === false) continue;
      if (placement && acf.placement !== placement) continue;

      const desktopUrl = await getMediaUrl(acf.desktop_image);
      const mobileUrl = await getMediaUrl(acf.mobile_image) || desktopUrl;
      banners.push({
        id: item.id,
        banner_title: acf.banner_title || item.title?.rendered || "",
        banner_subtitle: acf.banner_subtitle || "",
        cta_label: acf.cta_label || "",
        cta_url: acf.cta_url || "",
        placement: acf.placement || "homepage_middle",
        desktop_image: desktopUrl || fallbackBanners[0].desktop_image,
        mobile_image: mobileUrl || fallbackBanners[0].mobile_image,
        sort_order: Number(acf.sort_order) || 10,
        is_active: true
      });
    }
    banners.sort((a, b) => a.sort_order - b.sort_order);
    if (banners.length > 0) return banners;
  }
  return fallbackBanners;
}

// 5. Product Categories
export async function getProductCategories(): Promise<ProductCategory[]> {
  const data = await fetchWP("/wp/v2/hrm_product_cat?per_page=50");
  if (Array.isArray(data) && data.length > 0) {
    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      description: item.description || "",
      count: item.count || 0
    }));
  }
  return fallbackProductCategories;
}

// 6. Products
export async function getProducts(categorySlug?: string, featuredOnly?: boolean): Promise<Product[]> {
  const endpoint = categorySlug ? `/wp/v2/hrm_product?per_page=50` : `/wp/v2/hrm_product?per_page=50`;
  const data = await fetchWP(endpoint);
  if (Array.isArray(data) && data.length > 0) {
    const products: Product[] = [];
    for (const item of data) {
      const acf = item.acf || {};
      if (featuredOnly && !acf.show_on_home) continue;

      const heroDesktop = await getMediaUrl(acf.hero_desktop_image);
      const heroMobile = await getMediaUrl(acf.hero_mobile_image) || heroDesktop;
      
      const galleryIds = [acf.gallery_image_1, acf.gallery_image_2, acf.gallery_image_3, acf.gallery_image_4].filter(Boolean);
      const galleryImages: string[] = [];
      for (const gId of galleryIds) {
        const url = await getMediaUrl(gId);
        if (url) galleryImages.push(url);
      }
      if (galleryImages.length === 0 && heroDesktop) {
        galleryImages.push(heroDesktop);
      }

      products.push({
        id: item.id,
        title: item.title?.rendered || "",
        slug: item.slug,
        excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || acf.short_tagline || "",
        content: item.content?.rendered || "",
        short_tagline: acf.short_tagline || "",
        product_code: acf.product_code || "",
        material_info: acf.material_info || "",
        finish_info: acf.finish_info || "",
        applications: acf.applications || "",
        key_features: acf.key_features || "",
        technical_notes: acf.technical_notes || "",
        hero_desktop_image: heroDesktop || fallbackProducts[0].hero_desktop_image,
        hero_mobile_image: heroMobile || fallbackProducts[0].hero_mobile_image,
        gallery_images: galleryImages,
        show_on_home: !!acf.show_on_home,
        home_sort_order: Number(acf.home_sort_order) || 10,
        cta_text: acf.cta_text || "Request Estimate",
        cta_url: acf.cta_url || "/contact",
        category_slugs: item.hrm_product_cat || []
      });
    }

    products.sort((a, b) => a.home_sort_order - b.home_sort_order);
    if (products.length > 0) return products;
  }
  return fallbackProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await fetchWP(`/wp/v2/hrm_product?slug=${slug}`);
  if (Array.isArray(data) && data.length > 0) {
    const item = data[0];
    const acf = item.acf || {};
    const heroDesktop = await getMediaUrl(acf.hero_desktop_image);
    const heroMobile = await getMediaUrl(acf.hero_mobile_image) || heroDesktop;
    
    const galleryIds = [acf.gallery_image_1, acf.gallery_image_2, acf.gallery_image_3, acf.gallery_image_4].filter(Boolean);
    const galleryImages: string[] = [];
    for (const gId of galleryIds) {
      const url = await getMediaUrl(gId);
      if (url) galleryImages.push(url);
    }
    if (galleryImages.length === 0 && heroDesktop) galleryImages.push(heroDesktop);

    return {
      id: item.id,
      title: item.title?.rendered || "",
      slug: item.slug,
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || acf.short_tagline || "",
      content: item.content?.rendered || "",
      short_tagline: acf.short_tagline || "",
      product_code: acf.product_code || "",
      material_info: acf.material_info || "",
      finish_info: acf.finish_info || "",
      applications: acf.applications || "",
      key_features: acf.key_features || "",
      technical_notes: acf.technical_notes || "",
      hero_desktop_image: heroDesktop || fallbackProducts[0].hero_desktop_image,
      hero_mobile_image: heroMobile || fallbackProducts[0].hero_mobile_image,
      gallery_images: galleryImages,
      show_on_home: !!acf.show_on_home,
      home_sort_order: Number(acf.home_sort_order) || 10,
      cta_text: acf.cta_text || "Request Estimate",
      cta_url: acf.cta_url || "/contact",
      category_slugs: item.hrm_product_cat || []
    };
  }
  const fallback = fallbackProducts.find(p => p.slug === slug);
  return fallback || null;
}

// 7. Projects
export async function getProjects(featuredOnly?: boolean): Promise<Project[]> {
  const data = await fetchWP("/wp/v2/hrm_project?per_page=50");
  if (Array.isArray(data) && data.length > 0) {
    const projects: Project[] = [];
    for (const item of data) {
      const acf = item.acf || {};
      if (acf.is_active === false) continue;
      if (featuredOnly && !acf.show_on_home) continue;

      const coverImg = await getMediaUrl(item.featured_media || acf.gallery_image_1);
      const mobileImg = await getMediaUrl(acf.mobile_hero_image) || coverImg;
      
      const galleryIds = [acf.gallery_image_1, acf.gallery_image_2, acf.gallery_image_3].filter(Boolean);
      const galleryImages: string[] = [];
      for (const gId of galleryIds) {
        const url = await getMediaUrl(gId);
        if (url) galleryImages.push(url);
      }
      if (galleryImages.length === 0 && coverImg) galleryImages.push(coverImg);

      projects.push({
        id: item.id,
        title: item.title?.rendered || "",
        slug: item.slug,
        excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || "",
        content: item.content?.rendered || "",
        location: acf.project_location || "Udaipur, Rajasthan",
        year: acf.project_year || "2025",
        scope: acf.project_scope || "Custom Metal Fabrication",
        cover_image: coverImg || fallbackProjects[0].cover_image,
        mobile_hero_image: mobileImg || fallbackProjects[0].mobile_hero_image,
        gallery_images: galleryImages,
        type_slugs: item.hrm_project_type || [],
        show_on_home: !!acf.show_on_home,
        home_sort_order: Number(acf.home_sort_order) || 10,
        is_active: true
      });
    }

    projects.sort((a, b) => a.home_sort_order - b.home_sort_order);
    if (projects.length > 0) return projects;
  }
  return fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const data = await fetchWP(`/wp/v2/hrm_project?slug=${slug}`);
  if (Array.isArray(data) && data.length > 0) {
    const item = data[0];
    const acf = item.acf || {};
    const coverImg = await getMediaUrl(item.featured_media || acf.gallery_image_1);
    const mobileImg = await getMediaUrl(acf.mobile_hero_image) || coverImg;
    
    const galleryIds = [acf.gallery_image_1, acf.gallery_image_2, acf.gallery_image_3].filter(Boolean);
    const galleryImages: string[] = [];
    for (const gId of galleryIds) {
      const url = await getMediaUrl(gId);
      if (url) galleryImages.push(url);
    }
    if (galleryImages.length === 0 && coverImg) galleryImages.push(coverImg);

    return {
      id: item.id,
      title: item.title?.rendered || "",
      slug: item.slug,
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || "",
      content: item.content?.rendered || "",
      location: acf.project_location || "Udaipur, Rajasthan",
      year: acf.project_year || "2025",
      scope: acf.project_scope || "Custom Metal Fabrication",
      cover_image: coverImg || fallbackProjects[0].cover_image,
      mobile_hero_image: mobileImg || fallbackProjects[0].mobile_hero_image,
      gallery_images: galleryImages,
      type_slugs: item.hrm_project_type || [],
      show_on_home: !!acf.show_on_home,
      home_sort_order: Number(acf.home_sort_order) || 10,
      is_active: true
    };
  }
  const fallback = fallbackProjects.find(p => p.slug === slug);
  return fallback || null;
}

// 8. Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchWP("/wp/v2/hrm_testimonial?per_page=20");
  if (Array.isArray(data) && data.length > 0) {
    const testimonials: Testimonial[] = [];
    for (const item of data) {
      const acf = item.acf || {};
      if (acf.is_active === false) continue;
      const photoUrl = await getMediaUrl(acf.client_photo);

      testimonials.push({
        id: item.id,
        name: item.title?.rendered || "Client",
        designation: acf.designation || "",
        company: acf.company || "",
        rating: Number(acf.rating) || 5,
        testimonial_text: acf.testimonial_text || "",
        client_photo: photoUrl || fallbackTestimonials[0].client_photo,
        show_on_home: acf.show_on_home !== false,
        home_sort_order: Number(acf.home_sort_order) || 10
      });
    }
    testimonials.sort((a, b) => a.home_sort_order - b.home_sort_order);
    if (testimonials.length > 0) return testimonials;
  }
  return fallbackTestimonials;
}

// 9. Why HRM Features
export async function getWhyHRMFeatures(): Promise<WhyHRMFeature[]> {
  const data = await fetchWP("/wp/v2/hrm_feature?per_page=20");
  if (Array.isArray(data) && data.length > 0) {
    const items: WhyHRMFeature[] = data
      .filter((item: any) => item.acf?.is_active !== false)
      .map((item: any) => ({
        id: item.id,
        title: item.title?.rendered || "",
        description: item.acf?.short_description || "",
        sort_order: Number(item.acf?.sort_order) || 10
      }));
    items.sort((a, b) => a.sort_order - b.sort_order);
    if (items.length > 0) return items;
  }
  return fallbackWhyHRM;
}

// 10. Process Steps
export async function getProcessSteps(): Promise<ProcessStep[]> {
  const data = await fetchWP("/wp/v2/hrm_process?per_page=20");
  if (Array.isArray(data) && data.length > 0) {
    const steps: ProcessStep[] = data
      .filter((item: any) => item.acf?.is_active !== false)
      .map((item: any) => ({
        id: item.id,
        step_number: item.acf?.step_number || "01",
        title: item.title?.rendered || "",
        description: item.acf?.step_description || "",
        sort_order: Number(item.acf?.sort_order) || 10
      }));
    steps.sort((a, b) => a.sort_order - b.sort_order);
    if (steps.length > 0) return steps;
  }
  return fallbackProcessSteps;
}

// 11. Blog Posts
export async function getBlogPosts(limit = 10): Promise<BlogPost[]> {
  const data = await fetchWP(`/wp/v2/posts?per_page=${limit}&_embed`);
  if (Array.isArray(data) && data.length > 0) {
    const posts: BlogPost[] = [];
    for (const item of data) {
      const featImg = await getMediaUrl(item.featured_media);
      posts.push({
        id: item.id,
        title: item.title?.rendered || "",
        slug: item.slug,
        excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || "",
        content: item.content?.rendered || "",
        date: item.date ? item.date.split("T")[0] : "2026-02-15",
        author: "HRM Technical Team",
        featured_image: featImg || fallbackBlogPosts[0].featured_image
      });
    }
    if (posts.length > 0) return posts;
  }
  return fallbackBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchWP(`/wp/v2/posts?slug=${slug}`);
  if (Array.isArray(data) && data.length > 0) {
    const item = data[0];
    const featImg = await getMediaUrl(item.featured_media);
    return {
      id: item.id,
      title: item.title?.rendered || "",
      slug: item.slug,
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || "",
      content: item.content?.rendered || "",
      date: item.date ? item.date.split("T")[0] : "2026-02-15",
      author: "HRM Technical Team",
      featured_image: featImg || fallbackBlogPosts[0].featured_image
    };
  }
  const fallback = fallbackBlogPosts.find(b => b.slug === slug);
  return fallback || null;
}
