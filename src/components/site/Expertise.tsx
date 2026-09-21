import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { expertise } from "@/lib/site-data";

export function ExpertiseSections() {
  return (
    <>
      {expertise.map((block, index) => (
        <ExpertiseBlock key={block.slug} block={block} index={index} />
      ))}
    </>
  );
}

type ExpertiseBlockProps = {
  block: (typeof expertise)[number];
  index: number;
};

function ExpertiseBlock({ block, index }: ExpertiseBlockProps) {
  const [activeStage, setActiveStage] = useState(0);
  const dark = index % 2 === 1;
  const currentStage = block.stages[activeStage] ?? block.stages[0];

  if (!currentStage) return null;

  const moveStage = (direction: number) => {
    setActiveStage((current) => (current + direction + block.stages.length) % block.stages.length);
  };

  return (
    <section
      id={block.slug}
      className={
        dark
          ? "bg-ink py-24 text-ink-foreground md:py-32"
          : "border-t border-border bg-background py-24 md:py-32"
      }
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <p className={`eyebrow ${dark ? "text-ink-accent" : "text-accent"}`}>
            {String(index + 1).padStart(2, "0")} · {block.eyebrow}
          </p>
          <h2 className="display-lg mt-5 text-balance">{block.title}</h2>
          <p
            className={`mt-7 max-w-xl text-base leading-relaxed ${
              dark ? "text-ink-muted" : "text-muted-foreground"
            }`}
          >
            {block.intro}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous stage"
              onClick={() => moveStage(-1)}
              className={`h-12 w-12 rounded-full shadow-none ${
                dark
                  ? "border-ink-border bg-transparent text-ink-foreground hover:bg-ink-foreground hover:text-ink"
                  : "border-border bg-background text-foreground hover:bg-secondary"
              }`}
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </Button>
            <p className="index-num text-sm">
              {String(activeStage + 1).padStart(2, "0")} / {String(block.stages.length).padStart(2, "0")}
            </p>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next stage"
              onClick={() => moveStage(1)}
              className={`h-12 w-12 rounded-full shadow-none ${
                dark
                  ? "border-ink-border bg-transparent text-ink-foreground hover:bg-ink-foreground hover:text-ink"
                  : "border-border bg-background text-foreground hover:bg-secondary"
              }`}
            >
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <figure className="media-zoom relative overflow-hidden bg-muted">
            <img
              key={currentStage.image}
              src={currentStage.image}
              alt={`${block.imageAlt}: ${currentStage.name}`}
              className="aspect-16/10 w-full object-cover motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 p-5 text-ink-foreground backdrop-blur-sm">
              <p className="font-mono text-[0.6875rem] uppercase text-ink-accent">
                {block.caption}
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                {currentStage.name} · {currentStage.note}
              </p>
            </figcaption>
          </figure>

          <ol
            className={`mt-px grid gap-px ${
              dark ? "border border-ink-border bg-ink-border" : "border border-border bg-border"
            }`}
          >
            {block.stages.map((stage, i) => {
              const active = i === activeStage;
              return (
                <li key={`${stage.name}-${i}`}>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setActiveStage(i)}
                    className={`group h-auto w-full justify-start rounded-none p-0 text-left shadow-none ${
                      active
                        ? dark
                          ? "bg-ink-foreground text-ink hover:bg-ink-foreground hover:text-ink"
                          : "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        : dark
                          ? "bg-ink text-ink-foreground hover:bg-ink/95 hover:text-ink-foreground"
                          : "bg-card text-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="flex w-full items-start gap-5 p-5 md:p-6">
                      <span
                        className={`index-num mt-1 text-xs ${
                          active
                            ? dark
                              ? "text-accent"
                              : "text-primary-foreground/80"
                            : dark
                              ? "text-ink-accent"
                              : "text-accent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block whitespace-normal text-lg leading-snug md:text-xl">
                          {stage.name}
                        </span>
                        <span
                          className={`mt-1 block whitespace-normal text-sm leading-relaxed ${
                            active
                              ? dark
                                ? "text-ink/75"
                                : "text-primary-foreground/80"
                              : dark
                                ? "text-ink-muted"
                                : "text-muted-foreground"
                          }`}
                        >
                          {stage.path ? `${stage.path} · ` : ""}
                          {stage.note}
                        </span>
                      </span>
                    </span>
                  </Button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
