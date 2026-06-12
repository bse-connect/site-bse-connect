import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { secteurs } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Secteurs d'intervention",
  "Tertiaire, sites sensibles, institutionnel, industriel, ERP et bâtiments multi-occupants : des environnements exigeants en Île-de-France.",
  "/secteurs"
);

export default function Secteurs() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs d'intervention"
        title="Des environnements exigeants, en site occupé ou sensible."
        intro="Nous intervenons sur des bâtiments aux fortes contraintes techniques et de sécurité, en direct ou en sous-traitance."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-xl2 border border-white/10 bg-navy-800 p-7">
                  <h2 className="font-display text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
