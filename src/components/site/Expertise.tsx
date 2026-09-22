import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { TypewriterHeading } from "./TypewriterHeading";
import { expertise } from "@/lib/site-data";

const STAGE_DURATION = 8;

export function ExpertiseSections() {
  return (
    <div className="bg-background">
      {expertise.map((block, index) => (
        <ExpertiseBlock key={block.slug} block={block} index={index} />
      ))}
    </div>
  );
}

type ExpertiseBlockProps = {
  block: (typeof expertise)[number];
  index: number;
};

function ExpertiseBlock({ block, index }: ExpertiseBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const currentStage = block.stages[activeStage] ?? block.stages[0];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || !isVisible) return;
    const timer = window.setInterval(() => {
      setElapsed((current) => {
        if (current >= STAGE_DURATION - 1) {
          setActiveStage((stage) => (stage + 1) % block.stages.length);
          return 0;
        }
        return current + 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [block.stages.length, isPlaying, isVisible]);

  if (!currentStage) return null;

  const selectStage = (stage: number) => {
    setActiveStage(stage);
    setElapsed(0);
  };

  return (
    <section
      ref={sectionRef}
      id={block.slug}
      className={`border-border bg-background pb-24 pt-20 md:pb-32 md:pt-28 ${index > 0 ? "border-t" : "pt-36 md:pt-44"}`}
    >
      <div className="shell">
        <div className="grid gap-8 pb-12 md:pb-16 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">{String(index + 1).padStart(2, "0")} · {block.eyebrow}</p>
            {index === 0 ? (
              <TypewriterHeading
                as="h2"
                text={block.title}
                className="mt-5 max-w-[12ch] text-balance font-display text-4xl font-semibold uppercase leading-[0.92] md:text-6xl lg:text-7xl"
              />
            ) : (
              <h2 className="mt-5 max-w-[10ch] text-balance font-display text-5xl font-semibold leading-[0.92] md:text-7xl lg:text-[5.75rem]">
                {block.title}
              </h2>
            )}
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:pt-10">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              {block.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="h-px bg-accent" />
          <figure className="relative overflow-hidden bg-muted">
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8.9]">
              {block.stages.map((stage, stageIndex) => (
                <img
                  key={stage.image}
                  src={stage.image}
                  alt={stageIndex === activeStage ? `${block.imageAlt}: ${stage.name}` : ""}
                  aria-hidden={stageIndex !== activeStage}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${
                    stageIndex === activeStage
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-[1.015] opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-ink-foreground md:p-7">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] drop-shadow-md">
                  Construction film&nbsp;&nbsp; {String(elapsed).padStart(2, "0")}:00 / {STAGE_DURATION.toString().padStart(2, "0")}:00
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsPlaying((playing) => !playing)}
                  aria-label={isPlaying ? "Pause film" : "Play film"}
                  className="h-10 rounded-none border-ink-muted bg-ink/70 px-3 text-xs text-ink-foreground backdrop-blur-sm hover:bg-ink hover:text-ink-foreground"
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
                  <span className="hidden sm:inline">{isPlaying ? "Pause film" : "Play film"}</span>
                </Button>
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent px-5 pb-6 pt-24 text-ink-foreground md:px-8 md:pb-9 md:pt-36">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-accent">
                  Stage {String(activeStage + 1).padStart(2, "0")} / {String(block.stages.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-none md:text-5xl">{currentStage.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-foreground/90 md:text-base">
                  {"path" in currentStage && currentStage.path ? `${currentStage.path}. ` : ""}{currentStage.note}
                </p>
              </figcaption>
            </div>
          </figure>

          <div className="flex items-center justify-between border-x border-b border-border px-5 py-3 text-xs text-muted-foreground">
            <span>Construction timeline</span>
            <span className="font-semibold text-foreground">{currentStage.note}</span>
          </div>

          <div className="overflow-x-auto border-b border-border">
            <ol
              className="grid min-w-[54rem]"
              style={{ gridTemplateColumns: `repeat(${block.stages.length}, minmax(0, 1fr))` }}
            >
              {block.stages.map((stage, stageIndex) => {
                const active = stageIndex === activeStage;
                return (
                  <li key={`${stage.name}-${stageIndex}`} className="relative border-r border-border first:border-l">
                    <span
                      aria-hidden="true"
                      className={`absolute -top-1 left-0 h-2 w-2 -translate-x-1/2 rotate-45 border ${active ? "border-primary-foreground bg-accent" : "border-accent bg-background"}`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => selectStage(stageIndex)}
                      aria-current={active ? "step" : undefined}
                      className={`h-32 w-full justify-start rounded-none px-5 py-4 text-left shadow-none transition-colors ${
                        active
                          ? "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                          : "bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
                      }`}
                    >
                      <span className="flex h-full min-w-0 flex-col items-start">
                        <span className={`font-mono text-[0.625rem] ${active ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
                          {String(stageIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-auto block whitespace-normal text-base font-semibold leading-tight">{stage.name}</span>
                        <span className={`mt-1 block whitespace-normal font-mono text-[0.5625rem] uppercase leading-relaxed ${active ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
                          {stage.note}
                        </span>
                      </span>
                    </Button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}