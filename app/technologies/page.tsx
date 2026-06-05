import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { brandsAll } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technologies maîtrisées",
  description:
    "Une expertise indépendante, multi-marques : contrôle d'accès, vidéosurveillance, intrusion, interphonie et courants faibles. Nous privilégions la solution adaptée à votre site.",
};

export default function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technologies maîtrisées"
        title="Une expertise indépendante, multi-marques."
        intro="Selon les projets, nous installons, raccordons, remplaçons, adaptons ou intégrons des équipements des principales marques du marché — en privilégiant la solution adaptée au besoin réel, à l'existant technique et au niveau de sûreté attendu."
      />
      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">Marques rencontrées ou compatibles</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {brandsAll.map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-navy-800 px-4 py-2 text-sm font-medium text-ink">{b}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[78ch] rounded-xl2 border border-white/10 bg-navy-800 p-6 text-sm text-ink-muted">
              Les marques citées le sont uniquement à titre d'exemples d'environnements techniques rencontrés ou compatibles.
              Leur mention ne signifie pas que BSE Connect est distributeur officiel, intégrateur certifié ou partenaire agréé
              de chacune de ces marques, sauf indication contraire.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
