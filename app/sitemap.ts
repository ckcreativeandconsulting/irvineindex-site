import type { MetadataRoute } from "next";
import { categories, listings } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/${SITE_CONFIG.city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/${SITE_CONFIG.city.slug}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...listings.map((listing) => ({
      url: `${baseUrl}/${SITE_CONFIG.city.slug}/listings/${listing.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    }))
  ];
}
