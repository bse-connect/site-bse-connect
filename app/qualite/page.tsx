import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Qualité, sécurité & confidentialité",
  "Qualité d'exécution, sécurité chantier (DUERP, EPI, habilitations), confidentialité et assurance décennale : le sérieux d'une entreprise à taille humaine.",
  "/qualite"
);

const blocks = [
  { icon: "shield", title: "Qualité d'exécution", desc: "Pose propre, repérage clair, étiquetage, finitions soignées, comptes-rendus d'intervention, essais et recette, DOE lorsque demandé." },
  { icon: "shield", title: "Sécurité chantier", desc: "DUERP à jour, port des EPI, habilitations, balisage, nettoyage de fin de chantier, travail en binôme si nécessaire. Risques identifiés et maîtrisés." },
  { icon: "shield", title: "Confidentialité", desc: "Plans, accès, systèmes installés et documents clients protégés. La discrétion fait partie de notre méthode." },
  { icon: "shield", title: "Assurance & garanties", desc: "Responsabilité décennale (SMABTP — contrat Global Constructeur) : terrassement, électricité-télécommunications et réseaux souterrains, en France métropolitaine et DROM." },
];

export default function Qualite() {
  return (
    <>
      <PageHero
        eyebrow="Qualité · Sécurité · Confidentialité"
        title="Le sérieux d'une entreprise à taille humaine."
        intro="Nos interventions concernent la sécurité des bâtiments, des accès, des personnes et des biens. Nous y apportons rigueur et discrétion."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="flex h-full gap-4 rounded-xl2 border border-white/10 bg-navy-800 p-7">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-brand-blue/10 text-brand-bright"><Icon name={b.icon} className="h-6 w-6" /></span>
                  <div>
                    <h2 className="font-display text-lg font-semibold">{b.title}</h2>
                    <p className="mt-2 text-sm text-ink-muted">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
