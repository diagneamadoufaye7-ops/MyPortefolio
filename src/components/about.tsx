import { Compass, Sparkles } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            À propos
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un profil hybride entre données, cloud et intelligence
            artificielle
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Aujourd&rsquo;hui Administrateur de bases de données chez Sina
              Distribution, j&rsquo;évolue au quotidien entre fiabilisation
              des systèmes de données et exploration de leur potentiel
              analytique et prédictif — de la migration cloud sécurisée à la
              détection intelligente par vision par ordinateur.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card rounded-2xl p-4"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {lang.name}
                  </p>
                  <p className="mt-1 text-xs text-muted">{lang.level}</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-violet"
                      style={{ width: `${lang.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-2.5 text-accent">
                <Sparkles size={18} />
                <p className="text-sm font-semibold">Centres d&rsquo;intérêt</p>
              </div>
              <ul className="mt-5 space-y-3">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {interest}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-2.5 border-t border-border pt-6 text-violet">
                <Compass size={18} />
                <p className="text-sm font-semibold">Ce qui me guide</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                L&rsquo;optimisation des systèmes, l&rsquo;automatisation des
                tâches, et la création de solutions data concrètement utiles
                aux entreprises.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
