import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora", display: "swap" });

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
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BSE Connect",
  description: site.description,
  url: site.url,
  email: site.contact.email,
  areaServed: "Île-de-France",
  knowsAbout: ["Contrôle d'accès", "Vidéosurveillance", "Intrusion", "Courants faibles", "VDI"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable + " " + sora.variable}>
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
