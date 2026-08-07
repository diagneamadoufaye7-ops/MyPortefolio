import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mono-gradient" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="none"
        stroke="url(#mono-gradient)"
        strokeWidth="1.5"
      />
      <path
        d="M12 27L18 13H21L27 27H23.6L22.3 23.8H16.5L15.2 27H12ZM17.5 21.2H21.3L19.4 16.4L17.5 21.2Z"
        fill="url(#mono-gradient)"
      />
    </svg>
  );
}
