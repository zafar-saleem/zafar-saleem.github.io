import type { MetadataRoute } from "next";
import { RESOURCES } from "@/lib/resources";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/resources", "/services/landing-page-development", "/services/website-development", "/services/figma-to-code"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...RESOURCES.map((r) => ({ url: `${SITE.url}/resources/${r.slug}`, lastModified: r.updated ?? r.published, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
