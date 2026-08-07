"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="parcours" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Parcours
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Formation et expérience professionnelle
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute left-[15px] top-0 h-full w-px bg-border sm:left-[19px]" />
          <motion.div
            className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-accent to-violet sm:left-[19px]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <Reveal key={item.id} delay={(index % 4) * 0.05}>
                <div className="relative flex gap-6 pl-10 sm:pl-14">
                  <div
                    className={
                      "absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10 " +
                      (item.kind === "experience"
                        ? "border-accent/40 bg-accent-soft text-accent"
                        : "border-violet/40 bg-violet-soft text-violet")
                    }
                  >
                    {item.kind === "experience" ? (
                      <Briefcase size={15} />
                    ) : (
                      <GraduationCap size={15} />
                    )}
                  </div>

                  <div className="glass-card w-full rounded-2xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-xs uppercase tracking-wide text-muted">
                        {item.period}
                      </p>
                      <span
                        className={
                          "rounded-full px-2.5 py-1 text-[11px] font-medium " +
                          (item.kind === "experience"
                            ? "bg-accent-soft text-accent"
                            : "bg-violet-soft text-violet")
                        }
                      >
                        {item.kind === "experience"
                          ? "Expérience"
                          : "Formation"}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {item.organization} · {item.location}
                    </p>
                    {item.detail && (
                      <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    )}

                    {item.bullets && (
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
