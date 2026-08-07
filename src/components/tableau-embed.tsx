"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { toTableauEmbedSrc } from "@/lib/tableau";

export function TableauEmbed({
  embeds,
}: {
  embeds: { title: string; url: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = embeds[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex flex-wrap items-center gap-1 border-b border-border bg-background-elevated p-2">
        {embeds.map((embed, index) => (
          <button
            key={embed.title}
            type="button"
            onClick={() => setActive(index)}
            className={
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors " +
              (index === active
                ? "bg-accent-soft text-accent"
                : "text-muted hover:text-foreground")
            }
          >
            {embed.title}
          </button>
        ))}
        <a
          href={current.url}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto flex items-center gap-1.5 px-2 py-1 text-xs text-muted transition-colors hover:text-accent"
        >
          Plein écran <ExternalLink size={12} />
        </a>
      </div>
      <div className="aspect-[16/10] w-full bg-background-elevated sm:aspect-[16/9]">
        <iframe
          key={current.url}
          src={toTableauEmbedSrc(current.url)}
          title={current.title}
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
