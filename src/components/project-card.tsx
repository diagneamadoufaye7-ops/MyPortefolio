"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { TableauEmbed } from "@/components/tableau-embed";
import { AwsArchitectureDiagram } from "@/components/aws-architecture-diagram";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "glass-card overflow-hidden rounded-3xl transition-colors",
        expanded && "border-accent/40"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-4 p-6 text-left sm:p-7 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <span className="text-[11px] text-muted">· {project.period}</span>
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-[11px] text-foreground/80"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 self-start md:self-center">
          {project.highlight && (
            <div className="hidden gap-4 border-r border-border pr-4 sm:flex">
              {project.highlight.slice(0, 1).map((h) => (
                <div key={h.label}>
                  <p className="font-display text-lg font-semibold text-accent">
                    {h.value}
                  </p>
                  <p className="text-[10px] text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          )}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-muted"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-7 pt-6 sm:px-7">
              {project.highlight && (
                <div className="mb-6 grid grid-cols-3 gap-4 sm:max-w-md">
                  {project.highlight.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl border border-border bg-background px-3 py-3 text-center"
                    >
                      <p className="font-display text-lg font-semibold text-accent">
                        {h.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.proof === "live-embed" && project.tableauEmbeds && (
                <div className="mt-7">
                  <TableauEmbed embeds={project.tableauEmbeds} />
                </div>
              )}

              {project.proof === "diagram" && (
                <div className="mt-7">
                  <AwsArchitectureDiagram />
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
