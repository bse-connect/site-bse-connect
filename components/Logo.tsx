import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2.5" y="2.5" width="27" height="27" rx="8" fill="none" stroke="#C9CDD2" strokeWidth="2" />
      <ellipse cx="16" cy="9" rx="3.1" ry="6" fill="#2E8FE0" transform="rotate(0 16 16)" />
      <ellipse cx="16" cy="9" rx="3.1" ry="6" fill="#34B45A" transform="rotate(120 16 16)" />
      <ellipse cx="16" cy="9" rx="3.1" ry="6" fill="#3C4A57" transform="rotate(240 16 16)" />
      <circle cx="16" cy="16" r="3.4" fill="#071a2e" stroke="#C9CDD2" strokeWidth="1.4" />
    </svg>
  );
}

export function Logo({ showBaseline = true }: { showBaseline?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={site.name + " — accueil"}>
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-xl font-bold tracking-wide text-brand-silver">
          BSE <span className="text-brand-bright">Connect</span>
        </span>
        {showBaseline && (
          <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-ink-faint">
            {site.baseline}
          </span>
        )}
      </span>
    </Link>
  );
}
