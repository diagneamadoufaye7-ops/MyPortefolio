import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Monogram } from "@/components/ui/monogram";
import { profile } from "@/lib/content";
import { navItems } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-elevated">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Monogram />
              <span className="font-display text-sm font-semibold text-foreground">
                {profile.fullName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.role} basé à {profile.location}. Toujours partant pour
              discuter données, cloud et intelligence artificielle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Profils
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <FaGithub size={15} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <FaLinkedin size={15} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Mail size={15} /> Formulaire de contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.fullName}. Tous droits
            réservés.
          </p>
          <p className="text-xs text-muted">
            Conçu &amp; développé avec Next.js et TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
