import type { MetadataRoute } from "next";
import { site, metiers } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ["", "/entreprise", "/metiers", "/secteurs", "/realisations", "/qualite", "/technologies", "/contact", "/mentions-legales"];
  const pages = routes.map((r) => ({ url: base + r, lastModified: new Date() }));
  const metierPages = metiers.map((m) => ({ url: base + "/metiers/" + m.slug, lastModified: new Date() }));
  return [...pages, ...metierPages];
}
