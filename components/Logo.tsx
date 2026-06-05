import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ showBaseline = true }: { showBaseline?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={site.name + " — accueil"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-bse.png" alt="Emblème BSE Connect" width={161} height={100} className="h-10 w-auto" />
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
