import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { EcosystemMotif } from "@/components/EcosystemMotif";
import { HeroCollage } from "@/components/HeroCollage";
import { metiers, brandsHighlight, secteurs } from "@/lib/site";

const secteurImages: Record<string, string> = {
  "Tertiaire": "/photos/controle-acces-tourniquets.webp",
  "Sites sensibles": "/photos/intrusion-barrieres-infrarouges.webp",
  "Institutionnel": "/photos/acces-vehicules-perimetrique.webp",
  "Industriel": "/photos/intrusion-detection-exterieure.webp",
  "ERP / site occupé": "/photos/controle-acces-pmr.webp",
  "Multi-occupants": "/photos/interphonie-platine.webp",
};

const trust = [
  "Démarche Qualifelec CFMGTI en cours",
  "Interventions en site occupé",
  "Confidentialité garantie",
];

const reassure = [
  { title: "Qualité d'exécution", desc: "Pose propre, repérage, étiquetage, finitions soignées, DOE et PV de recette." },
  { title: "Sécurité chantier", desc: "DUERP, EPI, habilitations, balisage, travail en binôme si nécessaire." },
  { title: "Confidentialité", desc: "Plans, accès et systèmes protégés. Discrétion sur les sites sensibles." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-40">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(620px 420px at 86% -8%, rgba(46,143,224,0.18), transparent 60%)" }}
        />
        <EcosystemMotif className="pointer-events-none absolute right-[-30px] top-24 hidden w-[58%] text-brand-blue opacity-30 [mask-image:linear-gradient(90deg,transparent,#000_44%)] md:block" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal><Eyebrow tricolor>Sûreté électronique &amp; courants faibles · Île-de-France</Eyebrow></Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 max-w-[16ch] font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
                  Vos installations de sûreté, <span className="text-brand-bright">conçues et posées avec rigueur.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-[46ch] text-lg text-ink-muted">
                  Contrôle d'accès, vidéosurveillance, intrusion et courants faibles pour les sites tertiaires, institutionnels et sensibles. En direct comme en sous-traitance, de l'étude terrain à la recette.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button href="/contact">Demander un devis <Icon name="arrow" className="h-4 w-4" /></Button>
                  <Button href="/metiers" variant="ghost">Découvrir nos métiers</Button>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-faint">
                  {trust.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />{t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <HeroCollage className="mx-auto max-w-[520px]" />
          </div>
        </Container>
      </section>

      {/* TECH BAND */}
      <div className="border-y border-white/10 bg-navy-800">
        <Container className="flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          <span className="text-xs font-semibold uppercase tracking-[0.13em] text-ink-faint">
            Technologies maîtrisées · approche indépendante
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {brandsHighlight.map((b) => (
              <span key={b} className="font-display text-sm font-semibold text-ink-muted">{b}</span>
            ))}
            <Link href="/technologies" className="font-display text-sm font-semibold text-brand-bright transition-colors hover:text-ink">
              + autres
            </Link>
          </div>
        </Container>
      </div>

      {/* METIERS */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Nos métiers</Eyebrow>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold sm:text-4xl">Quatre expertises, une exécution propre.</h2>
            <p className="mt-3 max-w-[62ch] text-ink-muted">Du simple accès au chantier multi-lots : pose, raccordement, mise en service et documents de fin de chantier.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metiers.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.08}>
                <Link
                  href={"/metiers/" + m.slug}
                  className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-xl2 border border-white/10 bg-surface transition-all duration-200 hover:-translate-y-1.5 hover:border-brand-blue"
                >
                  {m.cardImage && (
                    <>
                      <Image
                        src={m.cardImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-70 saturate-[0.9] transition duration-300 group-hover:scale-105 group-hover:opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/35 to-navy-900/5" />
                    </>
                  )}
                  <div className="relative p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[11px] bg-navy-900/60 text-brand-bright backdrop-blur-sm transition-colors group-hover:text-brand-green">
                      <Icon name={m.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{m.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright">
                      En savoir plus <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OFFRE COMPLETE */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[18px] border border-white/10">
              <Image
                src="/photos/ambiance-fibre-reseau.webp"
                alt=""
                fill
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-800/90 via-navy-800/70 to-navy-800/40" />
              <div className="relative flex flex-wrap items-center justify-between gap-8 p-10">
                <div className="max-w-[60ch]">
                  <div className="mb-4 h-1 w-14 rounded bg-brand-green" />
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">L'offre complète, jusqu'au moindre fourreau.</h2>
                  <p className="mt-3 text-ink-muted">
                    De l'étude terrain à la recette, nous prenons aussi en charge les travaux annexes — voirie, tranchées et génie civil — quand le chantier l'exige. Un seul interlocuteur, une installation propre et durable.
                  </p>
                </div>
                <Button href="/contact" variant="ghost">Parler de votre projet</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTEURS */}
      <section className="border-t border-white/10 py-24">
        <Container>
          <Reveal>
            <Eyebrow>Secteurs d'intervention</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Des environnements exigeants.</h2>
            <p className="mt-3 max-w-[62ch] text-ink-muted">Sites occupés, multi-accès ou sensibles, avec une attention forte portée à la sécurité, au repérage et à la confidentialité.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-xl2 border border-white/10 bg-navy-800 p-6 transition-colors hover:border-brand-blue/60">
                  {secteurImages[s.title] && (
                    <>
                      <Image
                        src={secteurImages[s.title]}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-40 saturate-[0.8] transition duration-300 group-hover:scale-105 group-hover:opacity-55"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/50 to-navy-800/15" />
                    </>
                  )}
                  <div className="relative">
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* REASSURANCE */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Qualité · Sécurité · Confidentialité</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Le sérieux d'une entreprise à taille humaine.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reassure.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full border-l-2 border-brand-blue bg-navy-800 p-7">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 py-28">
        <Image
          src="/photos/supervision-centre.webp"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover opacity-20 saturate-[0.8]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/70 to-navy-900" />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[18ch] font-display text-3xl font-bold sm:text-4xl lg:text-5xl">Un projet de sûreté à chiffrer ?</h2>
            <p className="mx-auto mt-4 max-w-[40ch] text-lg text-ink-muted">Parlons-en. Réponse rapide, étude sérieuse, devis clair.</p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Demander un devis <Icon name="arrow" className="h-4 w-4" /></Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
