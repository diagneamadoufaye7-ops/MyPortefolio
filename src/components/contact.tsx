"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { sendContactMessage } from "@/app/actions/contact";

const schema = z.object({
  name: z.string().min(2, "Ton nom est un peu court"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Un message un peu plus détaillé serait utile"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "not_configured"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    setStatus("idle");
    startTransition(async () => {
      const result = await sendContactMessage(values);
      if (result.ok) {
        setStatus("success");
        reset();
      } else if (result.error === "not_configured") {
        setStatus("not_configured");
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Discutons de votre prochain projet data
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Basé à {profile.location}, ouvert aux opportunités en DBA,
                Data Engineering, Data Science ou IA. Passez par le
                formulaire, je réponds rapidement.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-3xl p-7 sm:p-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-muted"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-danger">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="vous@exemple.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-danger">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Parlez-moi de votre projet..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-danger">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#04121a] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {isPending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                Envoyer le message
              </button>

              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 size={16} /> Message envoyé, merci ! Je vous
                  réponds rapidement.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-danger">
                  Une erreur est survenue. Réessayez ou contactez-moi via
                  LinkedIn.
                </p>
              )}
              {status === "not_configured" && (
                <p className="mt-4 text-sm text-muted">
                  Le service d&rsquo;envoi n&rsquo;est pas encore configuré
                  côté serveur. En attendant, contactez-moi via LinkedIn ou
                  GitHub ci-contre.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
