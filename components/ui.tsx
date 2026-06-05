import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={"container-bse " + className}>{children}</div>;
}

export function Eyebrow({ children, tricolor = false }: { children: ReactNode; tricolor?: boolean }) {
  return (
    <p
      className={
        "text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-bright " +
        (tricolor
          ? "inline-block border-b-2 pb-1.5 [border-image:linear-gradient(90deg,#1B57B0_0_33%,#ffffff_33%_66%,#E4384A_66%)_1]"
          : "")
      }
    >
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand-cta text-white hover:bg-brand-ctaHover"
      : "border border-white/20 text-ink hover:border-brand-bright hover:text-brand-bright";
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-[15px] font-semibold transition-all duration-150 hover:-translate-y-0.5 " +
        styles + " " + className
      }
    >
      {children}
    </Link>
  );
}
