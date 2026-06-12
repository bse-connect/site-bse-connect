import Link from "next/link";
import { Logo } from "./Logo";
import { site, metiers } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="container-bse py-14">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-ink-faint">
              Installateur de sûreté électronique et courants faibles. Île-de-France, en direct comme en sous-traitance.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">Métiers</h2>
            <ul className="space-y-2 text-sm text-ink-faint">
              {metiers.map((m) => (
                <li key={m.slug}>
                  <Link href={"/metiers/" + m.slug} className="hover:text-ink">{m.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/technologies" className="hover:text-ink">Technologies maîtrisées</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">Contact</h2>
            <ul className="space-y-2 text-sm text-ink-faint">
              <li><a href={"mailto:" + site.contact.email} className="hover:text-ink">{site.contact.email}</a></li>
              <li>{site.contact.area}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-ink-faint">
          <span>© {new Date().getFullYear()} BSE Connect — Tous droits réservés.</span>
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
