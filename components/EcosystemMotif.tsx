export function EcosystemMotif({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 460" aria-hidden="true" fill="none">
      <g stroke="#3f8fd6" strokeWidth="1.4" strokeLinecap="round">
        <path className="eco-wire" d="M300 222 H150 V104" />
        <path className="eco-wire" d="M340 222 H470 V96 H520" />
        <path className="eco-wire" d="M342 232 H548" />
        <path className="eco-wire" d="M338 244 H488 V388" />
        <path className="eco-wire" d="M300 242 H235 V392" />
        <path className="eco-wire" d="M300 236 H140 V296" />
      </g>
      <g stroke="#3f8fd6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="126" y="62" width="48" height="32" rx="2" />
        <path d="M143 94v7h14v-7M135 101h30" />
        <path d="M512 70a14 12 0 0 1 28 0z" />
        <rect x="520" y="70" width="14" height="9" rx="1" />
        <path d="M540 74h7l-2 6" />
        <rect x="540" y="206" width="34" height="50" rx="1" />
        <path d="M548 216h6M562 216h6M548 228h6M562 228h6M548 240h6M562 240h6" />
        <rect x="476" y="372" width="26" height="34" rx="3" />
        <circle cx="489" cy="386" r="4" />
        <path d="M485 396h8" />
        <path d="M214 372v34M214 384h34M248 380v12" />
        <rect x="120" y="280" width="26" height="34" rx="3" />
        <circle cx="133" cy="292" r="4" />
        <path d="M127 304h12" />
      </g>
      <g fill="#49a4f0">
        <circle cx="150" cy="104" r="3" />
        <circle cx="520" cy="96" r="3" />
        <circle cx="548" cy="232" r="3" />
        <circle cx="488" cy="388" r="3" />
        <circle cx="235" cy="392" r="3" />
        <circle cx="140" cy="296" r="3" />
      </g>
      <circle cx="320" cy="232" r="22" fill="#0b2840" stroke="#7fb6e8" strokeWidth="1.6" />
      <text x="320" y="236" textAnchor="middle" fontFamily="var(--font-sora)" fontSize="11" fill="#9fc4ec">BSE</text>
    </svg>
  );
}
