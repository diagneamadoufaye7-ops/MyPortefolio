import {
  Database,
  Cloud,
  BrainCircuit,
  BarChart3,
  Code2,
  Workflow,
} from "lucide-react";
import { skillGroups } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  databases: Database,
  cloud: Cloud,
  "data-ai": BrainCircuit,
  bi: BarChart3,
  dev: Code2,
  modeling: Workflow,
};

export function Skills() {
  return (
    <section id="competences" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Compétences
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un socle technique complet, du stockage à l&rsquo;intelligence
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.id] ?? Code2;
            return (
              <Reveal key={group.id} delay={(index % 3) * 0.08}>
                <div className="group glass-card h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-105">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
