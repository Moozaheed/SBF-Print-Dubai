import { MetadataRoute } from "next";
import { SERVICE_DETAILS_MAP } from "@/data/serviceDetails";
import { BLOG_POSTS } from "@/data/blogs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sbfprint.ae";
  const now = new Date();

  const serviceUrls: MetadataRoute.Sitemap = Object.keys(SERVICE_DETAILS_MAP).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
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
    ...serviceUrls,
    ...blogUrls,
  ];
}
