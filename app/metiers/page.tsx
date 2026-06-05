import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { metiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos métiers",
  description:
    "Contrôle d'accès, vidéosurveillance, intrusion & interphonie, courants faibles & câblage : nos quatre expertises en sûreté électronique.",
};

export default function Metiers() {
  return (
    <>
      <PageHero
        eyebrow="Nos métiers"
        title="Quatre expertises, une exécution propre."
        intro="Du simple accès au chantier multi-lots : pose, raccordement, mise en service et documents de fin de chantier."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {metiers.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.08}>
                <Link
                  href={"/metiers/" + m.slug}
                  className="group flex h-full flex-col rounded-xl2 border border-white/10 bg-surface p-7 transition-all duration-200 hover:-translate-y-1.5 hover:border-brand-blue hover:bg-surface-light"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-blue/10 text-brand-bright transition-colors group-hover:bg-brand-green/10 group-hover:text-brand-green">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">{m.title}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{m.intro}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright">
                    En savoir plus <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
