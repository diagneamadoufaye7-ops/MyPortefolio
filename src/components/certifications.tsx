import { Award, ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Certifications
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Des compétences validées
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.08}>
              <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {index === 0 ? (
                    <ShieldCheck size={22} />
                  ) : (
                    <Award size={22} />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
