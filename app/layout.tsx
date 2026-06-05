import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BSE Connect — Sûreté électronique & courants faibles en Île-de-France",
    template: "%s | BSE Connect",
  },
  description: site.description,
  openGraph: {
    title: "BSE Connect — Sûreté électronique & courants faibles",
    description: site.description,
    url: site.url,
    siteName: "BSE Connect",
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BSE Connect",
  description: site.description,
  url: site.url,
  telephone: "+33659895122",
  email: site.contact.email,
  areaServed: "Île-de-France",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.street,
    postalCode: site.contact.postalCode,
    addressLocality: site.contact.city,
    addressCountry: "FR",
  },
  knowsAbout: ["Contrôle d'accès", "Vidéosurveillance", "Intrusion", "Courants faibles", "VDI"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="skip-link">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
