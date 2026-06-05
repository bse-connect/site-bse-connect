"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled ? "border-b border-white/10 bg-navy-900/85 backdrop-blur" : "border-b border-transparent")
      }
    >
      <div className="container-bse flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-[14.5px] font-medium text-ink-muted transition-colors hover:text-ink">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-[10px] bg-brand-cta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-ctaHover sm:inline-block">
            Demander un devis
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="p-2 text-ink md:hidden" aria-label="Ouvrir le menu" aria-expanded={open}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-navy-900 md:hidden" aria-label="Navigation mobile">
          <div className="container-bse flex flex-col py-3">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2.5 text-ink-muted hover:text-ink">
                {i.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-[10px] bg-brand-cta px-4 py-2.5 text-center text-sm font-semibold text-white">
              Demander un devis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
