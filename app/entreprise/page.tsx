import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "L'entreprise",
  description:
    "BSE Connect, installateur de sûreté électronique et courants faibles en Île-de-France : entreprise de terrain, sérieuse, réactive, en direct comme en sous-traitance.",
};

const diff = [
  "La réactivité et la proximité d'une entreprise à taille humaine.",
  "Une vraie expertise terrain : pas seulement la pose d'équipements, mais aussi le câblage, les cheminements et le génie civil qui fiabilisent une installation.",
  "Une exigence forte sur la qualité de pose, le repérage et les finitions.",
  "Le sérieux documentaire : DOE, PV de recette, comptes-rendus d'intervention.",
  "La capacité à travailler en direct comme en sous-traitance.",
];

const valeurs = [
  "Réactivité", "Proximité client", "Qualité de finition", "Rigueur technique",
  "Confidentialité", "Sécurité", "Adaptabilité sur chantier",
];

export default function Entreprise() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title="Une entreprise de terrain, sérieuse et réactive."
        intro="Spécialisée en sûreté électronique et courants faibles, basée à Saint-Germain-sur-Morin (77) et intervenant sur toute l'Île-de-France."
      />
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">Qui sommes-nous</h2>
            <p className="mt-4 text-ink-muted">
              Jeune mais structurée, BSE Connect est dirigée par Lysandre Bavoux et s'appuie sur une organisation claire :
              suivi administratif rigoureux, sécurité chantier, procédures internes et démarche qualité. Nous intervenons
              en direct client comme en sous-traitance pour des donneurs d'ordre structurés.
            </p>
            <h3 className="mt-10 font-display text-xl font-semibold">Notre organisation</h3>
            <p className="mt-3 text-ink-muted">
              Une organisation à taille humaine et structurée, qui réunit la direction, un pôle administratif (suivi des
              devis et des fournisseurs, gestion des formations et des habilitations, préparation comptable), des équipes
              de terrain et des apprentis en formation. Selon les chantiers, nous mobilisons les renforts nécessaires.
            </p>
            <h3 className="mt-10 font-display text-xl font-semibold">Montée en qualification</h3>
            <p className="mt-3 text-ink-muted">
              Nous engageons une démarche de qualification <span className="text-ink">Qualifelec CFMGTI</span> (courants
              faibles moyen/gros tertiaire et industrie), domaine sûreté — <em>démarche en cours</em>. En parallèle :
              habilitations électriques, AIPR, CACES nacelle, SST, et un suivi QSE continu.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl2 border border-white/10 bg-navy-800 p-8">
              <h3 className="font-display text-xl font-semibold">Ce qui nous différencie</h3>
              <ul className="mt-5 space-y-3">
                {diff.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />{d}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-semibold">Nos valeurs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {valeurs.map((v) => (
                  <span key={v} className="rounded-full border border-white/15 bg-navy-900 px-3.5 py-1.5 text-sm text-ink">{v}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
