"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";

const PORTRAIT_SRC = "/images/profile-placeholder.svg";

const nodes = [
  { x: 12, y: 18 },
  { x: 88, y: 10 },
  { x: 92, y: 70 },
  { x: 6, y: 78 },
  { x: 50, y: 4 },
  { x: 96, y: 40 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(34,211,238,0.22), transparent 60%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#ring-gradient)"
          strokeWidth="0.4"
          strokeDasharray="1.2 3"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.3"
        />
        {nodes.map((n, i) => (
          <g key={i}>
            <line
              x1={n.x}
              y1={n.y}
              x2="50"
              y2="50"
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="0.25"
            />
            <circle cx={n.x} cy={n.y} r="1.4" fill="#22d3ee" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-[12%] overflow-hidden rounded-[2rem] border border-border-strong glow-ring">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PORTRAIT_SRC}
          alt={profile.fullName}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </div>
  );
}
