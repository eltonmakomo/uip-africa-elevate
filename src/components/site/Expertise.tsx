import { Reveal } from "./Reveal";
import { expertise } from "@/lib/site-data";

export function ExpertiseSections() {
  return (
    <>
      {expertise.map((block, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={block.slug}
            id={block.slug}
            className={
              dark
                ? "bg-ink py-24 text-ink-foreground md:py-32"
                : "border-t border-border bg-background py-24 md:py-32"
            }
          >
            <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start">
              <Reveal className="lg:col-span-6">
                <p
                  className={`font-mono text-[0.6875rem] uppercase tracking-[0.22em] ${
                    dark ? "text-ink-accent" : "text-accent"
                  }`}
                >
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

                <figure className="media-zoom relative mt-10 overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <figcaption
                  className={`mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] ${
                    dark ? "text-ink-muted" : "text-muted-foreground"
                  }`}
                >
                  {block.caption}
                </figcaption>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-6 lg:pt-4">
                <ol
                  className={`grid gap-px ${
                    dark ? "border border-ink-border bg-ink-border" : "border border-border bg-border"
                  }`}
                >
                  {block.stages.map((stage, i) => (
                    <li
                      key={stage.name}
                      className={`flex items-baseline gap-6 p-6 md:p-8 ${
                        dark ? "bg-ink" : "bg-card"
                      }`}
                    >
                      <span
                        className={`index-num text-sm ${
                          dark ? "text-ink-accent" : "text-accent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-lg leading-snug md:text-xl">{stage.name}</span>
                        <span
                          className={`mt-1 block text-sm leading-relaxed ${
                            dark ? "text-ink-muted" : "text-muted-foreground"
                          }`}
                        >
                          {stage.note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
