import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & devis",
  description:
    "Un projet de sûreté à chiffrer ? Contactez BSE Connect en Île-de-France. Réponse rapide, étude sérieuse, devis clair.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un projet de sûreté à chiffrer ? Parlons-en."
        intro="Réponse rapide, étude sérieuse, devis clair. Décrivez votre besoin, nous revenons vers vous."
      />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl2 border border-white/10 bg-navy-800 p-8">
              <h2 className="font-display text-lg font-semibold">Coordonnées</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <div className="text-ink-faint">Téléphone</div>
                  <a href={site.contact.phoneHref} className="text-ink hover:text-brand-bright">{site.contact.phone}</a>
                </li>
                <li>
                  <div className="text-ink-faint">Email</div>
                  <a href={"mailto:" + site.contact.email} className="text-ink hover:text-brand-bright">{site.contact.email}</a>
                </li>
                <li>
                  <div className="text-ink-faint">Secteur</div>
                  <div className="text-ink">{site.contact.city} (77)</div>
                </li>
                <li>
                  <div className="text-ink-faint">Zone d&apos;intervention</div>
                  <div className="text-ink">{site.contact.area}</div>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
