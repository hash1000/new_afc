import type { MetadataRoute } from "next";

const siteUrl = "https://www.americasfoodcourt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/food-menu",
    "/locations",
    "/about",
    "/contact",
    "/franchising",
    "/careers",
    "/privacy",
    "/terms",
    "/sitemap",
    "/offer/welcome10",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}