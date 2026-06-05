import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-14 pt-36">
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
