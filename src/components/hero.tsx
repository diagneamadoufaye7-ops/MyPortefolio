"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/content";
import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="grid-glow absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.14),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-card px-4 py-1.5 text-xs font-medium text-muted"
          >
            <MapPin size={13} className="text-accent" />
            {profile.location} · Disponible pour de nouvelles opportunités
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.fullName}
            <span className="mt-3 block text-2xl font-medium text-gradient sm:text-3xl lg:text-4xl">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-background-card px-3.5 py-1.5 text-xs font-medium text-foreground/90"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#04121a] transition-transform hover:-translate-y-0.5"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Me contacter
            </a>
            <a
              href="/documents/Amadou-Faye-Diagne-CV.pdf"
              download
              className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <Download size={16} />
              Télécharger le CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Défiler vers la suite"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
