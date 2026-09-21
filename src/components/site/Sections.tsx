import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  appointments,
  clients,
  differentiators,
  disciplines,
  featuredProject,
  insights,
  markets,
  projects,
  services,
  stats,
} from "@/lib/site-data";
import heroInterchange from "@/assets/hero-interchange.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";

function SectionHead({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <Reveal className="lg:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-lg mt-5 max-w-3xl text-balance">{title}</h2>
      </Reveal>
      {copy || action ? (
        <Reveal delay={80} className="lg:col-span-5">
          {copy ? (
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">{copy}</p>
          ) : null}
          {action ? (
            <a
              href={action.href}
              className="link-underline mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              {action.label} →
            </a>
          ) : null}
        </Reveal>
      ) : null}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative bg-background pt-20">
      <div className="shell pb-10 pt-20 md:pt-28">
        <Reveal>
          <h1 className="display-xl max-w-[13ch] text-foreground">
            Boundless
            <span className="block">Engineering</span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal delay={120} className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
              >
                Our projects
              </a>
              <a
                href="#services"
                className="border border-foreground/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-foreground"
              >
                What we do
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-muted-foreground">
              ▽ UIP Africa · Harare, Zimbabwe
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
              Civil and structural engineering consultancy, construction advisory and CAD drafting
              across Zimbabwe and the region, from engineers who stay on a project until it is
              built.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={100} className="shell">
        <div className="media-zoom relative overflow-hidden bg-ink">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroInterchange}
            className="h-[46vh] w-full object-cover md:h-[62vh]"
            aria-label="Aerial view of highway interchange engineering project"
          >
            <source src="/images/Video%20Project.mp4" type="video/mp4" />
            <source src="/images/Video Project.mp4" type="video/mp4" />
            <img
              src={heroInterchange}
              alt="Aerial view of a complex multi-level highway interchange with overlapping flyovers and curved ramps"
              className="h-[46vh] w-full object-cover md:h-[62vh]"
            />
          </video>
        </div>
      </Reveal>

      <div className="shell pt-px">
        <Reveal delay={140}>
          <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
            <div className="bg-background p-6">
              <p className="index-num text-4xl font-semibold">120+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Projects delivered
              </p>
            </div>
            <div className="bg-background p-6">
              <p className="index-num text-4xl font-semibold">10+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Years in practice
              </p>
            </div>
            <div className="col-span-2 flex items-center gap-4 bg-background p-6 sm:col-span-1">
              <img
                src="/images/badges/iso-9001-2015-light.svg"
                alt="ISO 9001:2015 certified quality management system badge"
                className="h-12 w-12 invert"
              />
              <p className="text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                ISO 9001:2015
                <br />
                Quality certified
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="shell py-24 md:py-32">
      <SectionHead
        eyebrow="Impact by numbers"
        title="Engineering that endures"
        copy="Measured in years on site, projects delivered, and disciplines working as one team."
      />
      <ul className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 90} className="bg-card p-8 md:p-10">
            <p className="display-lg text-primary">{s.value}</p>
            <h3 className="mt-4 text-lg">{s.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-secondary/60 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Who we are</p>
          <h2 className="display-lg mt-5 text-balance">
            Engineering infrastructure that shapes communities.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            Urban Infrastructure Projects Africa is a Harare-based civil and structural engineering
            consultancy with a legacy of delivery across property, public infrastructure, mining and
            energy.
          </p>
          <p className="mt-5 max-w-xl font-display text-xl leading-snug">
            We engineer more than drawings and specifications. We engineer assets that perform
            through seasonal rainfall, demanding traffic loads, and the materials market that
            actually exists on the ground.
          </p>
          <a
            href="#contact"
            className="link-underline mt-8 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Our story →
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <figure className="media-zoom relative">
            <img
              src={aboutEngineers}
              alt="Civil engineers in hard hats and high-visibility vests reviewing blueprints on a construction site with a city skyline behind them"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 p-6 text-ink-foreground backdrop-blur-sm">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-accent">
                Hillside, Harare · Zimbabwe
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                One accountable engineer from first sketch to final certificate.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="shell py-24 md:py-32">
      <SectionHead
        eyebrow="Why partner with us"
        title="Designed for today. Built for African conditions."
        copy="Firmly founded on a project implementation background with top local and international contracting firms, we anticipate the challenges between design intent and a completed asset, and we design them out before they cost time on site."
        action={{ label: "Talk to an engineer", href: "#contact" }}
      />
      <ul className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
        {differentiators.map((d, i) => (
          <Reveal
            as="li"
            key={d.title}
            delay={i * 70}
            className="group bg-card p-8 transition-colors hover:bg-secondary md:p-12"
          >
            <h3 className="text-xl md:text-2xl">{d.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {d.copy}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Disciplines() {
  const [active, setActive] = useState(0);
  const current = disciplines[active]!;

  return (
    <section id="disciplines" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-accent">
              Our disciplines
            </p>
            <h2 className="display-lg mt-5 text-balance">Four disciplines. One integrated team.</h2>
          </div>
          <p className="text-base leading-relaxed text-ink-muted lg:col-span-5">
            Structure, civils, water and delivery resolved together, so nothing of consequence falls
            between consultants.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-px border border-ink-border bg-ink-border">
          {disciplines.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex flex-1 items-center justify-center px-5 py-5 text-center text-sm font-medium transition-colors sm:px-7 ${
                i === active
                  ? "bg-ink-foreground text-ink"
                  : "bg-ink text-ink-muted hover:text-ink-foreground"
              }`}
            >
              <span className="whitespace-nowrap">{d.name}</span>
            </button>
          ))}
        </div>

        <div key={current.id} className="mt-px grid gap-px bg-ink-border lg:grid-cols-12">
          <div className="media-zoom bg-ink lg:col-span-5">
            <img
              src={current.image}
              alt={current.name}
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-ink p-8 md:p-12 lg:col-span-7">
            <p className="max-w-2xl font-display text-2xl leading-snug md:text-3xl">
              {current.lead}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">{current.copy}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-t border-ink-border pt-3 text-sm text-ink-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-ink-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="link-underline mt-9 inline-block font-mono text-xs uppercase tracking-[0.2em] text-ink-accent"
            >
              View related services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Markets() {
  return (
    <section id="markets" className="shell py-24 md:py-32">
      <SectionHead
        eyebrow="Markets"
        title="Client industries"
        copy="Each backed by work we have actually delivered, not a list of markets we hope to break into."
        action={{ label: "Explore all markets", href: "#contact" }}
      />
      <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((m, i) => (
          <Reveal as="li" key={m.name} delay={(i % 3) * 80} className="group bg-card">
            <article className="flex h-full flex-col">
              <div className="media-zoom">
                <img
                  src={m.image}
                  alt={m.name}
                  className="aspect-16/10 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl">{m.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{m.copy}</p>
                <span className="link-underline mt-6 self-start font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent">
                  Explore {m.name} →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Clients() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Trusted by</p>
          <h2 className="mt-4 font-display text-2xl">Clients who build at scale</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Property developers, municipalities, mining houses and energy operators, we engineer the
            infrastructure they depend on.
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:col-span-8">
          {clients.map((c) => (
            <li key={c.name} className="bg-card">
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-24 items-center justify-center px-6 opacity-60 transition-opacity hover:opacity-100"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="shell py-24 md:py-32">
      <SectionHead
        eyebrow="Services"
        title="Engineering services across the project life cycle"
        copy="From the first feasibility sketch through design, approvals and construction supervision."
        action={{ label: "Explore all services", href: "#contact" }}
      />
      <ul className="mt-14 border-t border-border">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.name}
            delay={i * 50}
            className="group border-b border-border transition-colors hover:bg-secondary/70"
          >
            <a href="#contact" className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
              <h3 className="text-2xl md:col-span-6 md:text-3xl">{s.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">{s.copy}</p>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent md:col-span-1 md:text-right">
                Read →
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={120}>
        <a
          href="#contact"
          className="mt-10 inline-block bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
        >
          All services
        </a>
      </Reveal>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/60 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Projects"
          title="Work that inspires and endures"
          copy="Sound engineering, sustainable practice and careful detailing, every project stands as proof of how we work."
          action={{ label: "All projects", href: "#contact" }}
        />

        <Reveal className="mt-16">
          <article className="grid gap-px border border-border bg-border lg:grid-cols-12">
            <div className="media-zoom bg-card lg:col-span-7">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="h-full min-h-80 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center bg-card p-8 md:p-12 lg:col-span-5">
              <p className="index-num text-xs text-accent">{featuredProject.meta}</p>
              <h3 className="mt-5 text-3xl leading-tight md:text-4xl">{featuredProject.name}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {featuredProject.copy}
              </p>
              <a
                href="#contact"
                className="link-underline mt-8 self-start font-mono text-xs uppercase tracking-[0.2em] text-accent"
              >
                View case study →
              </a>
            </div>
          </article>
        </Reveal>

        <ul className="mt-px grid gap-px border-x border-b border-border bg-border lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90} className="bg-card">
              <article className="flex h-full flex-col">
                <div className="media-zoom">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{p.sector}</p>
                  <p className="index-num mt-2 text-xs text-muted-foreground">{p.meta}</p>
                  <h3 className="mt-4 text-xl leading-snug">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.copy}
                  </p>
                  <a
                    href="#contact"
                    className="link-underline mt-6 self-start font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent"
                  >
                    View project →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section id="insights" className="shell py-24 md:py-32">
      <SectionHead
        eyebrow="Insights"
        title="Notes from the work"
        copy="What we are seeing on site and at the drawing board, written for the people who commission infrastructure."
        action={{ label: "All insights", href: "#contact" }}
      />
      <div className="mt-14 -mx-5 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10">
        <ul className="flex min-w-max gap-6">
          {insights.map((n) => (
            <li key={n.title} className="w-72 shrink-0 md:w-80">
              <a href="#contact" className="group block">
                <div className="media-zoom">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow mt-5">{n.tag}</p>
                <h3 className="mt-3 text-lg leading-snug">{n.title}</h3>
                <p className="index-num mt-3 text-xs text-muted-foreground">{n.date} · Read</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
        Drag or scroll →
      </p>
    </section>
  );
}

export function Appointments() {
  return (
    <section className="border-t border-border bg-secondary/60 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Find what you need"
          title="Consultancy engineering, civil structural engineering, advisory & drafting"
          copy="Searching for an engineering consultancy, civil and structural engineers, construction advisors or CAD drafters in Harare? These are the four ways clients most often appoint UIP Africa."
        />
        <ul className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {appointments.map((a, i) => (
            <Reveal as="li" key={a.name} delay={i * 70} className="bg-card p-8">
              <h3 className="text-xl leading-snug">{a.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
              <a
                href="#contact"
                className="link-underline mt-6 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent"
              >
                Learn more →
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section id="contact" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-accent">
            Partner with us
          </p>
          <h2 className="display-lg mt-5 text-balance">
            Boundless Engineering, from first sketch to final certificate.
          </h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <p className="text-base leading-relaxed text-ink-muted">
            Whether it is residential, commercial, industrial or public infrastructure, tell us
            where the project stands. We will bring the engineering clarity to move it forward.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="mailto:info@uipafrica.com"
              className="bg-ink-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink-accent"
            >
              Talk to an engineer
            </a>
            <a
              href="mailto:info@uipafrica.com"
              className="link-underline font-mono text-sm text-ink-accent"
            >
              info@uipafrica.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-12 text-ink-muted">
      <div className="shell flex flex-col gap-6 border-t border-ink-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <a href="#top" aria-label="UIP Africa Home">
            <img
              src="/uip-logo.png"
              alt="UIP Africa"
              className="h-8 w-auto rounded bg-background/90 px-2 py-0.5 object-contain"
            />
          </a>
          <p className="text-xs uppercase tracking-[0.18em]">
            Urban Infrastructure Projects Africa
          </p>
        </div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
          Harare, Zimbabwe · ISO 9001:2015 · ZACE member
        </p>
        <a href="#top" className="link-underline font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
