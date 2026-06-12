import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { metiers } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return metiers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = metiers.find((x) => x.slug === params.slug);
  if (!m) return {};
  return pageMeta(m.title, m.intro, "/metiers/" + m.slug);
}

export default function MetierPage({ params }: { params: { slug: string } }) {
  const m = metiers.find((x) => x.slug === params.slug);
  if (!m) notFound();
  const others = metiers.filter((x) => x.slug !== m.slug);
  return (
    <>
      <PageHero eyebrow="Nos métiers" title={m.title} intro={m.intro} image={m.image} imageAlt={m.imageAlt} />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">Ce que nous réalisons</h2>
            <ul className="mt-6 space-y-3">
              {m.items.map((it) => (
                <li key={it} className="flex gap-3 text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-bright" />{it}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-2 border-brand-green bg-navy-800 p-6">
              <h3 className="font-display text-lg font-semibold">Notre engagement</h3>
              <p className="mt-2 text-ink-muted">{m.engage}</p>
            </div>
            <div className="mt-8"><Button href="/contact">Demander un devis <Icon name="arrow" className="h-4 w-4" /></Button></div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl2 border border-white/10 bg-navy-800 p-7">
              <h3 className="font-display text-lg font-semibold">Autres métiers</h3>
              <ul className="mt-4 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={"/metiers/" + o.slug} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink-muted transition-colors hover:bg-navy-700 hover:text-ink">
                      <Icon name={o.icon} className="h-5 w-5 text-brand-bright" />{o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
      {m.gallery && m.gallery.length > 0 && (
        <section className="border-t border-white/10 pb-24 pt-16">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">En images</h2>
              <p className="mt-2 text-sm text-ink-faint">Visuels d&apos;illustration.</p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {m.gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 0.07}>
                  <figure className="group overflow-hidden rounded-xl2 border border-white/10 bg-surface">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-navy-900/15 transition-opacity duration-300 group-hover:opacity-0" />
                    </div>
                    <figcaption className="px-5 py-4 text-sm text-ink-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
