import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  switch (name) {
    case "access":
      return (
        <svg className={className} {...base}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4v16" />
          <circle cx="15" cy="12" r="1.6" />
        </svg>
      );
    case "video":
      return (
        <svg className={className} {...base}>
          <path d="M3 7l13-2v14L3 17z" />
          <circle cx="9.5" cy="11" r="2.3" />
          <path d="M16 9l5-3v12l-5-3" />
        </svg>
      );
    case "intrusion":
      return (
        <svg className={className} {...base}>
          <path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6z" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      );
    case "cabling":
      return (
        <svg className={className} {...base}>
          <path d="M4 7h6a4 4 0 0 1 4 4v6" />
          <path d="M20 17h-6" />
          <circle cx="4" cy="7" r="1.6" />
          <rect x="17" y="14" width="4" height="6" rx="1" />
        </svg>
      );
    case "arrow":
      return (
        <svg className={className} {...base}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} {...base}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
