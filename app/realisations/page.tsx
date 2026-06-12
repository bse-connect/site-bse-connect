import { Container, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Réalisations",
  "Exemples représentatifs de projets de sûreté électronique, anonymisés : sous-traitance gros tertiaire, site institutionnel, réseau multi-sites, tourniquets sécurisés.",
  "/realisations"
);

const cases = [
  {
    tag: "Sous-traitance · gros tertiaire",
    title: "Chantier de sûreté multi-lots",
    desc: "Pour un grand intégrateur national : préparation et coordination, tranchées et fourreaux, contrôle d'accès, vidéosurveillance et VRD. Exécution propre, en coactivité, dans le respect des procédures du donneur d'ordre.",
  },
  {
    tag: "Direct · institutionnel",
    title: "Mise à niveau d'un site occupé",
    desc: "Contrôle d'accès sur de nombreuses portes, interphonie, tourniquets piétons sécurisés, badges, câblage et cheminements, avec essais, PV de recette et DOE.",
  },
  {
    tag: "Direct · réseau multi-sites",
    title: "Déploiement homogène en Île-de-France",
    desc: "Vidéosurveillance, contrôle d'accès et câblage RJ45 déployés site par site sur un même réseau, avec une logique de standardisation.",
  },
  {
    tag: "Projet phare · migration multi-sites",
    title: "Migration de contrôle d'accès et d'intrusion sur plusieurs sites",
    desc: "Reprise et migration des systèmes de contrôle d'accès et d'intrusion d'un parc multi-sites, sans interruption d'exploitation : audit de l'existant, bascule progressive, reprise des badges et des centrales, essais et recette. La sensibilité des installations imposait une discrétion absolue à chaque étape.",
  },
];

export default function Realisations() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets concrets, du petit chantier au lot à six chiffres."
        intro="Par souci de confidentialité, nous ne nommons ni nos clients ni nos sites. Voici des exemples représentatifs d'interventions."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="h-full rounded-xl2 border border-white/10 bg-navy-800 p-7">
                  <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-bright">{c.tag}</span>
                  <h2 className="mt-4 font-display text-xl font-semibold">{c.title}</h2>
                  <p className="mt-3 text-sm text-ink-muted">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-xl2 border border-white/10 bg-navy-800 p-8">
              <p className="max-w-[46ch] text-ink-muted">Un projet similaire ? Décrivez-nous votre site et vos contraintes, nous revenons vers vous rapidement.</p>
              <Button href="/contact">Demander un devis <Icon name="arrow" className="h-4 w-4" /></Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
