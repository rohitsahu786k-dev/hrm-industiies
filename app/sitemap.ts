import { MetadataRoute } from "next";
import { getProducts, getProjects, getBlogPosts } from "@/lib/wordpress/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hrmindustries.in";

  const [products, projects, posts] = await Promise.all([
    getProducts(),
    getProjects(),
    getBlogPosts()
  ]);

  const staticPages = [
    "",
    "/about",
    "/products",
    "/projects",
    "/capabilities",
    "/materials-finishes",
    "/blogs",
    "/contact",
    "/privacy-policy"
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const productUrls = products.map(p => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const projectUrls = projects.map(p => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const blogUrls = posts.map(b => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...productUrls, ...projectUrls, ...blogUrls];
}
