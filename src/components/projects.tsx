"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string>(projects[0].id);

  return (
    <section id="projets" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Projets
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Des cas concrets, du cloud à l&rsquo;intelligence artificielle
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Cinq projets représentatifs de mon parcours : administration et
            migration de bases de données, data science, business
            intelligence et vision par ordinateur.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.06}>
              <ProjectCard
                project={project}
                expanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId((current) =>
                    current === project.id ? "" : project.id
                  )
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
