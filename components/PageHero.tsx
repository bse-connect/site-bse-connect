import Image from "next/image";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className={
        "relative overflow-hidden border-b border-white/10 " +
        (image ? "pb-20 pt-44" : "pb-14 pt-36")
      }
    >
      {image && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60 saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/75 to-navy-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-navy-900/45" />
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(560px 320px at 88% -20%, rgba(46,143,224,0.16), transparent 60%)" }}
      />
      <Container className="relative">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-[22ch] font-display text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}><p className="mt-5 max-w-[62ch] text-lg text-ink-muted">{intro}</p></Reveal>
        )}
      </Container>
    </section>
  );
}
