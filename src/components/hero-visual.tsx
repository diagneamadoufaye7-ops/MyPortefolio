import Image from "next/image";
import { profile } from "@/lib/content";

const PORTRAIT_SRC = "/images/profile.jpg";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="glow-ring absolute inset-[12%] overflow-hidden rounded-[2rem] border border-border-strong transition-shadow duration-500 hover:shadow-[0_0_0_1px_var(--border-strong),0_25px_70px_-15px_rgba(34,211,238,0.4)]">
        <Image
          src={PORTRAIT_SRC}
          alt={profile.fullName}
          fill
          sizes="(max-width: 768px) 60vw, 400px"
          className="object-cover object-top transition-[filter] duration-500 hover:brightness-[1.06]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
      </div>
    </div>
  );
}
