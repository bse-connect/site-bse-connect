import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { metiers, type MetierImage } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return metiers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = metiers.find((x) => x.slug === params.slug);
  if (!m) return {};
  return pageMeta(m.title, m.intro, "/metiers/" + m.slug);
}

function PhotoCard({ photo, aspect, delay = 0 }: { photo: MetierImage; aspect: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <figure className={"group relative overflow-hidden rounded-xl2 border border-white/10 " + aspect}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover saturate-[0.92] transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-900/90 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-ink">
          {photo.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function MetierPage({ params }: { params: { slug: string } }) {
  const m = metiers.find((x) => x.slug === params.slug);
  if (!m) notFound();
  const others = metiers.filter((x) => x.slug !== m.slug);
  const gallery = m.gallery ?? [];
  const photosTop = gallery.slice(0, 2);
  const photosWide = gallery.slice(2);
  return (
    <>
      <PageHero eyebrow="Nos métiers" title={m.title} intro={m.intro} image={m.image} imageAlt={m.imageAlt} />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
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
          {photosTop.length > 0 && (
            <div className="flex flex-col gap-5">
              {photosTop.map((g, i) => (
                <PhotoCard key={g.src} photo={g} aspect={i === 0 ? "aspect-[16/11]" : "aspect-[16/10]"} delay={0.1 + i * 0.08} />
              ))}
              <p className="text-right text-xs text-ink-faint">Visuels d&apos;illustration.</p>
            </div>
          )}
        </Container>
      </section>
      {photosWide.length > 0 && (
        <section className="pb-20">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2">
              {photosWide.map((g, i) => (
                <PhotoCard key={g.src} photo={g} aspect="aspect-[16/9]" delay={i * 0.08} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <section className="border-t border-white/10 py-14">
        <Container>
          <Reveal>
            <h2 className="font-display text-xl font-semibold">Autres métiers</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={"/metiers/" + o.slug}
                  className="group relative flex h-28 items-end overflow-hidden rounded-xl2 border border-white/10 bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue"
                >
                  {o.cardImage && (
                    <>
                      <Image
                        src={o.cardImage}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover opacity-50 saturate-[0.85] transition duration-300 group-hover:scale-105 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-navy-900/10" />
                    </>
                  )}
                  <span className="relative flex items-center gap-2 p-4 font-display text-sm font-semibold">
                    <Icon name={o.icon} className="h-5 w-5 text-brand-bright" />
                    {o.title}
                    <Icon name="arrow" className="h-4 w-4 text-brand-bright transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
