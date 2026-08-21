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

export const fallbackSiteSettings: SiteSettings = {
  company_name: "HRM Industries",
  tagline: "Metalwork that gives architecture its edge.",
  phone_primary: "+91 8290060885",
  phone_secondary: "+91 8290060885",
  whatsapp_number: "918290060885",
  whatsapp_default_message: "Hello HRM Industries, I am interested in custom metal fabrication for my project.",
  business_email: "hrmindustries2026@gmail.com",
  full_address: "Udaipur, Rajasthan, India",
  city: "Udaipur",
  state: "Rajasthan",
  pincode: "313001",
  google_maps_url: "https://maps.google.com/?q=Udaipur+Rajasthan",
  instagram_url: "https://www.instagram.com/hrm_industries",
  facebook_url: "https://www.facebook.com/hrmindustries/",
  linkedin_url: "https://www.linkedin.com/company/hrm-industries",
  header_cta_text: "Start a Project",
  header_cta_url: "/contact",
  footer_short_about: "HRM Industries specializes in architectural metalwork, custom iron gates, railings, doors, frames, and precision fabrication in Udaipur, Rajasthan.",
  footer_copyright_text: "© 2026 HRM Industries. All rights reserved.",
  contact_section_title: "Have a space. We’ll shape the metal.",
  contact_section_intro: "Send your dimensions, location, or reference design for an initial technical review and estimate.",
  form_name_label: "Your Name",
  form_phone_label: "Phone / WhatsApp Number",
  form_email_label: "Email Address",
  form_service_label: "Product / Requirement",
  form_message_label: "Project Details & Dimensions",
  form_submit_text: "Request Technical Quote",
  form_success_message: "Thank you for reaching out to HRM Industries. Our technical team will get back to you within 24 hours.",
  form_error_message: "Unable to send message right now. Please message us directly on WhatsApp."
};

export const fallbackHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Architectural Fabrication",
    eyebrow: "Custom Metalwork & Architectural Fabrication",
    heading: "Metalwork that gives architecture its edge.",
    description: "Custom gates, railings, doors and windows, designed around your space and fabricated with a sharp eye for proportion, finish and durability.",
    primary_cta_text: "Start a Project",
    primary_cta_url: "/contact",
    secondary_cta_text: "Explore Our Work",
    secondary_cta_url: "/projects",
    desktop_image: "/photos/hero-1.png",
    mobile_image: "/photos/hero-1.png",
    sort_order: 1,
    is_active: true
  },
  {
    id: 2,
    title: "Precision Engineering",
    eyebrow: "Udaipur, Rajasthan",
    heading: "Built like a fabricator. Think like a designer.",
    description: "Custom iron and architectural metalwork for residential, commercial and bespoke project requirements executed with engineering precision.",
    primary_cta_text: "View Products",
    primary_cta_url: "/products",
    secondary_cta_text: "Our Capabilities",
    secondary_cta_url: "/capabilities",
    desktop_image: "/photos/hero-2.png",
    mobile_image: "/photos/hero-2.png",
    sort_order: 2,
    is_active: true
  }
];

export const fallbackAnnouncements: Announcement[] = [
  {
    id: 1,
    announcement_text: "Custom Architectural Metal Fabrication Services across Rajasthan & Beyond",
    link_label: "Discuss Your Project",
    link_url: "/contact",
    sort_order: 1,
    is_active: true
  }
];

export const fallbackBanners: Banner[] = [
  {
    id: 1,
    banner_title: "Precision Architectural Fabrication",
    banner_subtitle: "From initial site measurement to trial assembly and final site fitment.",
    cta_label: "Start a Project",
    cta_url: "/contact",
    placement: "homepage_middle",
    desktop_image: "/photos/banner-1.png",
    mobile_image: "/photos/banner-1.png",
    sort_order: 1,
    is_active: true
  }
];

export const fallbackProductCategories: ProductCategory[] = [
  { id: 1, name: "Gates & Openings", slug: "gates-openings", count: 2 },
  { id: 2, name: "Railings & Balustrades", slug: "railings-balustrades", count: 2 },
  { id: 3, name: "Doors & Frames", slug: "doors-frames", count: 1 },
  { id: 4, name: "Grills & Windows", slug: "grills-windows", count: 1 },
  { id: 5, name: "Stairs & Structures", slug: "stairs-structures", count: 1 },
  { id: 6, name: "Sheds & Canopies", slug: "sheds-canopies", count: 1 },
  { id: 7, name: "Metal Furniture", slug: "metal-furniture", count: 1 }
];

export const fallbackProducts: Product[] = [
  {
    id: 101,
    title: "Architectural Iron Gates",
    slug: "architectural-iron-gates",
    excerpt: "Heavy-duty custom iron gates with clean welds, weather-resistant finish options, and optional automation provisions.",
    content: "Our architectural iron gates combine structural strength with refined proportions. Each gate is custom fabricated based on exact site dimensions, fixing conditions, and privacy requirements. Available in swing, sliding, vertical slat, panelled, and folding configurations.",
    short_tagline: "Swing, Sliding & Folding Gates Custom Built to Site",
    product_code: "HRM-GT-01",
    material_info: "Mild Steel (MS), Galvanized Iron (GI), SS 304 accents",
    finish_info: "Industrial Powder Coating / Duco PU Finish / Enamel Paint",
    applications: "Residential Entrance, Villa Compounds, Commercial Estates",
    key_features: "Custom size dimensions, heavy-duty hinges/rollers, rust protection, automation ready provisions.",
    technical_notes: "Section size & tube thickness chosen based on span, weight, wind load, and automation motor specifications.",
    hero_desktop_image: "/photos/gate-1.png",
    hero_mobile_image: "/photos/gate-1.png",
    gallery_images: [
      "/photos/gate-1.png",
      "/photos/hero-1.png"
    ],
    show_on_home: true,
    home_sort_order: 1,
    cta_text: "Request Gate Estimate",
    cta_url: "/contact",
    category_slugs: ["gates-openings"]
  },
  {
    id: 102,
    title: "Modern Balcony & Stair Railings",
    slug: "modern-balcony-stair-railings",
    excerpt: "Contemporary metal and glass railing systems engineered for safety, structural rigidity, and architectural elegance.",
    content: "HRM railings are designed to accentuate architectural lines while ensuring uncompromising safety. Built using precise profile cuts, concealed anchor points, and durable surface treatments suitable for indoor and outdoor environments.",
    short_tagline: "Sleek Balcony, Staircase & Terrace Metal Railings",
    product_code: "HRM-RL-02",
    material_info: "MS Square/Round Pipe, SS 304, Toughened Glass options",
    finish_info: "Matte Black Powder Coat, Brushed Stainless, Textured PU",
    applications: "Balconies, Main Staircases, Terrace Edges, Void Railings",
    key_features: "Rigid base anchoring, seamless elbow joints, smooth handrail feel, rust-resistant coating.",
    technical_notes: "Post spacing and top rail height conform to standard architectural safety codes (minimum 1050mm height).",
    hero_desktop_image: "/photos/railing-1.png",
    hero_mobile_image: "/photos/railing-1.png",
    gallery_images: [
      "/photos/railing-1.png",
      "/photos/project-1.png"
    ],
    show_on_home: true,
    home_sort_order: 2,
    cta_text: "Discuss Railing Design",
    cta_url: "/contact",
    category_slugs: ["railings-balustrades"]
  },
  {
    id: 103,
    title: "Precision Metal Door Frames & Doors",
    slug: "precision-metal-door-frames",
    excerpt: "Precision-pressed metal door frames and metal shutters for residential, commercial, and utility applications.",
    content: "Metal door frames by HRM Industries provide high structural stability, zero warping, termite resistance, and crisp corner alignment. Ideal for high-traffic openings, main entrances, and service areas.",
    short_tagline: "Heavy Duty MS & GI Door Frames and Custom Metal Doors",
    product_code: "HRM-DF-03",
    material_info: "16G / 18G Pressed MS, GI Sheet & Pipe Sections",
    finish_info: "Red Oxide Primer / Powder Coated / Duco Painted",
    applications: "Main Doors, Utility Rooms, Commercial Passageways, Fire-rated enclosures",
    key_features: "Precision 45-degree mitered joints, holdfast anchors, rubber buffer slots, lock strike prep.",
    technical_notes: "Custom frame depths manufactured to match exact wall rebate and plaster thickness.",
    hero_desktop_image: "/photos/door-1.png",
    hero_mobile_image: "/photos/door-1.png",
    gallery_images: [
      "/photos/door-1.png"
    ],
    show_on_home: true,
    home_sort_order: 3,
    cta_text: "Enquire Frame Sizes",
    cta_url: "/contact",
    category_slugs: ["doors-frames"]
  },
  {
    id: 104,
    title: "Decorative Window & Security Grills",
    slug: "window-security-grills",
    excerpt: "Custom metal window grills combining light flow, security, and refined geometric aesthetics.",
    content: "Designed to protect without overwhelming your home exterior. Our window grills feature clean bar alignments, hidden fixing fasteners, and premium powder-coated finishes that withstand monsoon and summer exposure.",
    short_tagline: "Minimal, Geometric & Security Window Systems",
    product_code: "HRM-WG-04",
    material_info: "Solid Square Bars, Flat Bars, MS Hollow Pipes",
    finish_info: "Powder Coated Jet Black, Off-White, Charcoal, Metallic Gold",
    applications: "Residential Windows, Ventilation Louvers, Facade Screens",
    key_features: "Clean weld joints, concealed masonry anchors, zero shadow distortion, durable paint coating.",
    technical_notes: "Bar spacing kept at safety standards while allowing maximum light penetration and ventilation.",
    hero_desktop_image: "/photos/grill-1.png",
    gallery_images: [
      "/photos/grill-1.png"
    ],
    show_on_home: true,
    home_sort_order: 4,
    cta_text: "Get Grill Quote",
    cta_url: "/contact",
    category_slugs: ["grills-windows"]
  },
  {
    id: 105,
    title: "Custom Metal Staircases",
    slug: "custom-metal-staircases",
    excerpt: "Bespoke steel staircases engineered for interior lofts, exterior access, and industrial spaces.",
    content: "Structural metal staircases designed with precision engineering calculations. We fabricate central spine, double beam, and cantilever steel stairs with wood or checker plate treads.",
    short_tagline: "Straight, L-Shape & Spiral Structural Steel Staircases",
    product_code: "HRM-ST-05",
    material_info: "Heavy MS Channels, I-Beams, Tubular Stringers",
    finish_info: "Industrial Epoxy Primer, PU Matte Black, Galvanized",
    applications: "Duplex Houses, Roof Access, Office Mezzanines, Commercial Warehouses",
    key_features: "High load capacity, zero bounce deflection, modular bolt assembly options.",
    technical_notes: "Structural base plates and anchor bolts engineered according to total floor height and rise/run ratios.",
    hero_desktop_image: "/photos/staircase-1.png",
    gallery_images: [
      "/photos/staircase-1.png"
    ],
    show_on_home: true,
    home_sort_order: 5,
    cta_text: "Discuss Stair Plan",
    cta_url: "/contact",
    category_slugs: ["stairs-structures"]
  }
];

export const fallbackProjectTypes: ProjectType[] = [
  { id: 1, name: "Residential", slug: "residential" },
  { id: 2, name: "Commercial", slug: "commercial" },
  { id: 3, name: "Architectural", slug: "architectural" }
];

export const fallbackProjects: Project[] = [
  {
    id: 201,
    title: "Luxury Villa Entrance Gate & Balcony Railings",
    slug: "luxury-villa-entrance-gate-railings",
    excerpt: "Custom automated sliding entrance gate and matching vertical slat balcony railings for a private residence in Udaipur.",
    content: "This project involved designing, fabricating, and installing a 14-foot wide main entrance sliding gate alongside 45 running feet of vertical slat balcony railings. All components were prepared with anti-rust zinc coating and finished in satin black powder coating.",
    location: "Fatehpura, Udaipur",
    year: "2025",
    scope: "Main Sliding Gate & Balcony Railings",
    cover_image: "/photos/project-1.png",
    mobile_hero_image: "/photos/project-1.png",
    gallery_images: [
      "/photos/project-1.png",
      "/photos/gate-1.png"
    ],
    type_slugs: ["residential"],
    show_on_home: true,
    home_sort_order: 1,
    is_active: true
  },
  {
    id: 202,
    title: "Commercial Complex Metal Door Frames & Façade Grills",
    slug: "commercial-complex-metal-doors-facade",
    excerpt: "Precision heavy-duty MS door frames and geometric façade security screens for a multi-storey commercial complex.",
    content: "HRM Industries supplied over 60 pressed MS door frames and custom laser-cut facade louvers for a commercial complex in Udaipur. Built strictly to architectural drawings with zero tolerance deviation.",
    location: "Shobhagpura, Udaipur",
    year: "2025",
    scope: "Pressed MS Door Frames & Window Louvers",
    cover_image: "/photos/project-2.png",
    mobile_hero_image: "/photos/project-2.png",
    gallery_images: [
      "/photos/project-2.png"
    ],
    type_slugs: ["commercial"],
    show_on_home: true,
    home_sort_order: 2,
    is_active: true
  },
  {
    id: 203,
    title: "Contemporary Steel Staircase & Terrace Glass Railing",
    slug: "contemporary-steel-staircase-terrace-railing",
    excerpt: "Structural steel central spine internal staircase with solid wooden treads and toughened glass handrail system.",
    content: "A flagship architectural metalwork project combining heavy structural channel beams with precision-engineered glass mounting shoe tracks for a luxury penthouse duplex.",
    location: "Bhuwana, Udaipur",
    year: "2026",
    scope: "Internal Steel Staircase & Glass Terrace Railing",
    cover_image: "/photos/project-3.png",
    gallery_images: [
      "/photos/project-3.png"
    ],
    type_slugs: ["architectural"],
    show_on_home: true,
    home_sort_order: 3,
    is_active: true
  }
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: 301,
    name: "Architect Rajesh Sharma",
    designation: "Principal Architect",
    company: "Studio Design Co.",
    rating: 5,
    testimonial_text: "HRM Industries executed our custom gate and railing drawings with extreme precision. Their attention to section thickness, weld grinding, and alignment is exceptional.",
    client_photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    show_on_home: true,
    home_sort_order: 1
  },
  {
    id: 302,
    name: "Vikram Singh",
    designation: "Managing Director",
    company: "Heritage Builders & Developers",
    rating: 5,
    testimonial_text: "Professional fabrication and clean site installation. They delivered heavy-duty GI door frames and window grills right on schedule for our residential project.",
    client_photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    show_on_home: true,
    home_sort_order: 2
  }
];

export const fallbackWhyHRM: WhyHRMFeature[] = [
  { id: 1, title: "Custom to Site", description: "Built exactly around your site dimensions, opening constraints, and architectural layout.", sort_order: 1 },
  { id: 2, title: "Buildable Design", description: "Engineered for structural stability, correct weight distribution, and reliable anchorage.", sort_order: 2 },
  { id: 3, title: "Material Options", description: "MS, GI, SS 304, and SS 202 profiles selected according to structural exposure.", sort_order: 3 },
  { id: 4, title: "Finish Control", description: "High-durability powder coating, Duco PU finishes, and anti-corrosive primer systems.", sort_order: 4 },
  { id: 5, title: "Installation Planning", description: "Carefully planned site access, alignment verification, and clean structural fixing.", sort_order: 5 },
  { id: 6, title: "Clear Coordination", description: "Direct, transparent coordination from initial enquiry to final project handover.", sort_order: 6 }
];

export const fallbackProcessSteps: ProcessStep[] = [
  { id: 1, step_number: "01", title: "Enquiry", description: "Share location, opening size, and reference photos or architectural drawings.", sort_order: 1 },
  { id: 2, step_number: "02", title: "Site Measure", description: "Verify dimensions, wall fixing conditions, floor levels, and site access.", sort_order: 2 },
  { id: 3, step_number: "03", title: "Design Approval", description: "Freeze section profiles, material grades, finish choice, and scope cost.", sort_order: 3 },
  { id: 4, step_number: "04", title: "Fabrication", description: "Precision cutting, MIG welding, joint grinding, trial assembly, and surface prep.", sort_order: 4 },
  { id: 5, step_number: "05", title: "Finish & QC", description: "Apply selected powder coat or PU paint system and conduct quality alignment check.", sort_order: 5 },
  { id: 6, step_number: "06", title: "Installation", description: "Transport, position, anchor, align, and hand over the completed metalwork.", sort_order: 6 }
];

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 401,
    title: "Choosing the Right Metal & Finish for Outdoor Gates in Rajasthan",
    slug: "choosing-right-metal-finish-outdoor-gates-rajasthan",
    excerpt: "A comprehensive guide on selecting MS, GI, or Stainless Steel and picking between powder coating and PU paints for long-lasting exterior gates.",
    content: "<p>When fabricating main entrance gates in Rajasthan, temperature variations and monsoon humidity demand careful material and coating selection. Galvanized Iron (GI) or zinc-primed Mild Steel (MS) paired with high-grade powder coating provides exceptional rust protection and aesthetic longevity...</p>",
    date: "2026-02-15",
    author: "HRM Technical Team",
    featured_image: "/photos/gate-1.png"
  },
  {
    id: 402,
    title: "Architectural Guide: Custom Metal Door Frames vs Traditional Wood Frames",
    slug: "custom-metal-door-frames-vs-traditional-wood-frames",
    excerpt: "Explore why modern architects choose pressed MS and GI metal door frames for superior dimensional stability and zero termite risk.",
    content: "<p>Metal door frames have become the preferred structural choice for modern residential villas and commercial developments. Unlike wood, pressed steel frames do not swell during rainy seasons or warp under extreme heat...</p>",
    date: "2026-02-08",
    author: "HRM Technical Team",
    featured_image: "/photos/door-1.png"
  },
  {
    id: 403,
    title: "Modern Balcony Railings: Safety Standards, Profiles & Material Options",
    slug: "modern-balcony-railings-safety-standards-profiles",
    excerpt: "Key considerations for balcony railings including minimum structural heights, glass integration, and handrail ergonomics.",
    content: "<p>Balcony railings are both a critical safety barrier and a primary architectural facade element. Combining square pipe steel sections with toughened glass or vertical minimalist bars creates a contemporary aesthetic without compromising safety...</p>",
    date: "2026-01-20",
    author: "HRM Technical Team",
    featured_image: "/photos/railing-1.png"
  }
];
