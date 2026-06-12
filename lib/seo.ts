import type { Metadata } from "next";
import { site } from "./site";

/**
 * Métadonnées par page : titre, description, canonical et Open Graph déclinés.
 * `path` est le chemin relatif de la page (ex. "/entreprise"), résolu via metadataBase.
 */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title + " | " + site.name,
      description,
      url: path,
      siteName: site.name,
      locale: "fr_FR",
      type: "website",
    },
  };
}
