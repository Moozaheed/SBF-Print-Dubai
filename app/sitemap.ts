import { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/data/productsCatalog";
import { BLOG_POSTS } from "@/data/blogs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sbfprint.ae";
  const now = new Date();

  const serviceUrls: MetadataRoute.Sitemap = ALL_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/services/${prod.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/quote`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/request-quote`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/all-products`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...serviceUrls,
    ...blogUrls,
  ];
}
