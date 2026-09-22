import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { CallToAction, SiteFooter } from "./Sections";
import { Reveal } from "./Reveal";
import { TypewriterHeading } from "./TypewriterHeading";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section id="top" className="bg-background pt-32 md:pt-40">
      <div className="shell grid gap-8 pb-16 lg:grid-cols-12 lg:items-end md:pb-24">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">{eyebrow}</p>
          <TypewriterHeading
            text={title}
            className="mt-5 w-full whitespace-normal text-balance font-display text-4xl font-bold uppercase leading-[0.92] [overflow-wrap:normal] [word-break:normal] md:text-6xl lg:text-7xl"
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main">
        {children}
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}
