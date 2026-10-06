import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { TypewriterHeading } from "./TypewriterHeading";
import { ContactForm } from "./ContactForm";
import {
  appointments,
  clients,
  differentiators,
  disciplines,
  insights,
  markets,
  projects,
  services,
} from "@/lib/site-data";
import heroInterchange from "@/assets/hero-interchange.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";

const toSlug = (value: string) =>
  value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
            <Link
              to={action.href}
              className="link-underline mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              {action.label} →
            </Link>
          ) : null}
        </Reveal>
      ) : null}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroInterchange}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/Video%20Project.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-14">
        <Reveal>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-ink-accent">
            Civil &amp; structural engineering consultancy · Harare, Zimbabwe
          </p>
          <TypewriterHeading
            text={"Engineering built for the realities of today and the needs of tomorrow."}
            className="mt-6 max-w-[22ch] text-balance font-display text-[2.1rem] font-bold uppercase leading-[0.98] tracking-[-0.025em] sm:text-5xl lg:text-[4rem]"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={120} className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-ink-foreground/85 md:text-lg">
              Sustainable, technically rigorous infrastructure for African communities — roads, structures,
              water and serviced land, designed by engineers who stay with the project until it is built.
            </p>
          </Reveal>
          <Reveal delay={180} className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
            <Link to="/projects" className="bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-ink-foreground hover:text-ink">
              View our projects
            </Link>
            <Link to="/contact" className="border border-ink-foreground/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink">
              Talk to an engineer
            </Link>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <dl className="mt-12 grid grid-cols-2 border-t border-ink-foreground/25 md:grid-cols-4">
            {[
              ["10+", "Years in practice"],
              ["120+", "Projects delivered"],
              [String(projects.length), "Featured case studies"],
              [String(services.length), "Engineering services"],
            ].map(([value, label]) => (
              <div key={label} className="border-ink-foreground/25 py-5 pr-4 md:border-r md:last:border-r-0 md:[&:not(:first-child)]:pl-6">
                <dt className="sr-only">{label}</dt>
                <dd className="index-num text-3xl font-semibold md:text-4xl">{value}</dd>
                <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-foreground/70">{label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-24">
      <div className="shell">
        <SectionHead
          eyebrow="Impact"
          title="Measured in assets that work."
          copy="Verified figures from projects UIP Africa has engineered across Zimbabwe."
        />
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {[
            ["±98M m³", "Water storage engineered", "Ziminya Dam, Matabeleland North", "ziminya-dam-water-security-irrigation-project"],
            ["7,000+", "Residential stands serviced", "Northgate Estate, Harare", "northgate-estate-integrated-housing-development"],
            ["352", "Apartments structurally designed", "WestProp Pomona City Flats", "westprop-pomona-city-flats"],
            ["±3 months", "Emergency market rebuild", "Mbare Musika, Harare", "mbare-musika-temporary-traders-market-redevelopment"],
          ].map(([value, label, where, slug], i) => (
            <Reveal as="li" key={label} delay={i * 70} className="bg-card">
              <Link to="/projects/$slug" params={{ slug: slug ?? "" }} className="group flex h-full flex-col p-7 md:p-8">
                <p className="index-num text-4xl font-semibold text-accent md:text-5xl">{value}</p>
                <p className="mt-4 text-base font-semibold">{label}</p>
                <p className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
                  {where}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-secondary/60">
      <div className="grid lg:grid-cols-2">
        <Reveal className="media-zoom relative min-h-[22rem] lg:min-h-[40rem]">
          <img
            src={aboutEngineers}
            alt="Civil engineers in hard hats reviewing blueprints on a construction site"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <p className="absolute bottom-0 left-0 bg-accent px-5 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent-foreground">
            Hillside, Harare · Zimbabwe
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16 xl:px-24">
          <p className="eyebrow">Who we are</p>
          <h2 className="display-lg mt-5 max-w-xl text-balance">Engineering infrastructure that shapes communities.</h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Urban Infrastructure Projects Africa is a Harare-based civil and structural engineering
            consultancy with a legacy of delivery across property, public infrastructure, mining and energy.
          </p>
          <p className="mt-5 max-w-xl border-l-2 border-accent pl-5 font-display text-xl leading-snug">
            We engineer assets that perform through seasonal rainfall, demanding traffic loads, and the
            materials market that actually exists on the ground.
          </p>
          <div className="mt-9 flex flex-wrap gap-6">
            <Link to="/about" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-accent">Our story →</Link>
            <Link to="/people" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-accent">Meet the team →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Statement() {
  const img = projects.find((p) => p.slug === "ziminya-dam-water-security-irrigation-project")?.image ?? heroInterchange;
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img src={img} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-45" loading="lazy" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="shell relative py-24 md:py-36">
        <Reveal>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-accent">Our purpose</p>
          <blockquote className="mt-6 max-w-5xl font-display text-3xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            “Every development we embark on is done with sustainability and respect for the environment in mind.”
          </blockquote>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 border-b border-ink-foreground/60 pb-2 text-sm font-semibold">
            Our vision &amp; mission <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const whyTiles = [
  "bg-muted text-foreground",
  "bg-ink text-ink-foreground",
  "bg-teal text-accent-foreground",
  "bg-card text-foreground border border-border",
];

export function Why() {
  const img = projects.find((p) => p.slug === "northgate-estate-integrated-housing-development")?.image ?? heroInterchange;
  return (
    <section className="shell py-16 md:py-24">
      <SectionHead
        eyebrow="Why partner with us"
        title="Designed for today. Built for African conditions."
        copy="Firmly founded on a project implementation background with top local and international contracting firms, we anticipate the challenges between design intent and a completed asset."
        action={{ label: "Talk to an engineer", href: "/contact" }}
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 md:mt-12">
        <Reveal as="li" className="media-zoom relative min-h-80 overflow-hidden bg-ink text-ink-foreground sm:col-span-2 lg:row-span-2">
          <img src={img} alt="Northgate Estate serviced stands, Harare" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
            <p className="index-num text-5xl font-semibold md:text-6xl">7,000+</p>
            <p className="mt-2 max-w-xs text-sm text-ink-foreground/85">Residential stands serviced at Northgate Estate — civil design and project management by UIP.</p>
          </div>
        </Reveal>
        {differentiators.map((d, i) => (
          <Reveal
            as="li"
            key={d.title}
            delay={i * 70}
            className={`group flex cursor-default flex-col p-7 transition-colors duration-300 hover:bg-accent hover:text-accent-foreground ${whyTiles[i] ?? whyTiles[0]}`}
          >
            <p className="index-num text-xs opacity-75">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-auto pt-10 text-xl">{d.title}</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-80">{d.copy}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Disciplines({ showHead = true }: { showHead?: boolean } = {}) {
  return (
    <section id="disciplines" className="py-16 md:py-24">
      <div className="shell">
        {showHead && (
          <SectionHead
            eyebrow="What we specialise in"
            title="Four engineering disciplines."
            copy="The technical fields our engineers are trained and registered in. Every project draws on one or more of them."
            action={{ label: "Explore disciplines", href: "/disciplines" }}
          />
        )}
        <ul className={`grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 ${showHead ? "mt-10 md:mt-12" : ""}`}>
          {disciplines.map((d, i) => {
            const count = projects.filter((p) => d.match.some((m) => p.sector.includes(m))).length;
            return (
              <Reveal as="li" key={d.id} delay={i * 70} className="group bg-card">
                <article className="flex h-full flex-col">
                  <div className="media-zoom">
                    <img src={d.image} alt={`${d.name} engineering`} className="aspect-4/3 w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="index-num text-xs text-teal">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl">{d.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.lead}</p>
                    <p className="mt-6 border-t border-border pt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {count} projects · {d.services.length} services
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function DisciplineDetails() {
  return (
    <div className="pb-8">
      {disciplines.map((d, i) => {
        const related = services.filter((s) => d.services.includes(toSlug(s.name)));
        const work = projects.filter((p) => d.match.some((m) => p.sector.includes(m))).slice(0, 3);
        return (
          <section key={d.id} id={d.id} className="border-t border-border py-16 md:py-20">
            <div className="shell grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · Discipline</p>
                <h2 className="display-lg mt-4">{d.name}</h2>
                <p className="mt-6 text-lg leading-relaxed">{d.lead}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.copy}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-3 border-t border-border pt-3 text-sm"><span className="mt-2 h-1 w-1 shrink-0 bg-accent" />{p}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-7">
                <img src={d.image} alt={`${d.name} project`} className="aspect-16/9 w-full object-cover" loading="lazy" />
                <div className="mt-px grid gap-px border border-border bg-border sm:grid-cols-2">
                  <div className="bg-card p-6">
                    <p className="eyebrow">Related services</p>
                    <ul className="mt-4 space-y-2">
                      {related.map((s) => (
                        <li key={s.name}><Link to="/services/$slug" params={{ slug: toSlug(s.name) }} className="link-underline text-sm font-semibold">{s.name} →</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card p-6">
                    <p className="eyebrow">Selected projects</p>
                    <ul className="mt-4 space-y-2">
                      {work.map((p) => (
                        <li key={p.slug}><Link to="/projects/$slug" params={{ slug: p.slug }} className="link-underline text-sm">{p.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function Markets() {
  return (
    <section id="markets" className="shell py-16 md:py-24">
      <SectionHead
        eyebrow="Markets"
        title="Client industries"
        copy="Each backed by work we have actually delivered, not a list of markets we hope to break into."
      />
      <ul className="mt-10 grid gap-px border border-border bg-border md:mt-12 sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Clients() {
  const marquee = [...clients, ...clients];
  return (
    <section className="overflow-hidden border-y border-border bg-secondary/60 py-16 md:py-20">
      <div className="shell grid gap-8 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">Trusted by</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Clients who build at scale</h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:pt-10">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Property developers, municipalities, mining houses and energy operators, we engineer the
            infrastructure they depend on.
          </p>
        </Reveal>
      </div>
      <div className="marquee mt-12">
        <ul className="marquee-track">
          {marquee.map((c, i) => (
            <li key={`${c.name}-${i}`} className="shrink-0">
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-hidden={i >= clients.length}
                tabIndex={i >= clients.length ? -1 : undefined}
                className="flex h-20 w-56 items-center justify-center px-8 opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-12 w-auto object-contain"
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


const serviceTiles = [
  "bg-muted text-foreground",
  "bg-teal text-accent-foreground",
  "bg-ink text-ink-foreground",
  "bg-card text-foreground",
  "bg-accent text-accent-foreground",
  "bg-secondary text-foreground",
  "bg-slate-tile text-ink-foreground",
];

export function Services({ showHead = true }: { showHead?: boolean } = {}) {
  return (
    <section id="services" className="py-16 md:py-24">
      {showHead && (
        <div className="shell">
          <SectionHead
            eyebrow="Services"
            title="Engineering that stays connected"
            copy="From the appointed engineer to the team on site, our services carry one line of technical responsibility through the project."
            action={{ label: "Explore all services", href: "/services" }}
          />
        </div>
      )}
      <ul className={`grid sm:grid-cols-2 lg:grid-cols-3 ${showHead ? "mt-10 md:mt-12" : ""}`}>
        {services.map((s, i) => {
          const tone = serviceTiles[i % serviceTiles.length];
          return (
            <li key={s.name} className={`flip-card min-h-[26rem] md:min-h-[30rem] ${i === services.length - 1 && services.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}>
              <Link
                to="/services/$slug"
                params={{ slug: toSlug(s.name) }}
                aria-label={`${s.name} — read more`}
                className="flip-card-inner group block h-full min-h-[26rem] md:min-h-[30rem]"
              >
                <div className={`flip-face flex flex-col p-8 md:p-10 ${tone}`}>
                  <h3 className="max-w-[14ch] text-3xl uppercase leading-[1.05] md:text-4xl">{s.name}</h3>
                  <p className="mt-auto font-mono text-[0.625rem] uppercase tracking-[0.2em] opacity-60">Hover to explore</p>
                </div>
                <div className={`flip-face flip-back flex flex-col p-8 md:p-10 ${tone}`}>
                  <h3 className="max-w-[16ch] text-2xl uppercase leading-[1.05]">{s.name}</h3>
                  <p className="mt-5 text-base leading-relaxed opacity-85">{s.copy}</p>
                  <ul className="mt-6 space-y-2 text-sm opacity-85">
                    {s.offers.map((o) => <li key={o} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 bg-current" />{o}</li>)}
                  </ul>
                  <span className="mt-auto flex items-center justify-between border-t border-current/35 pt-4 text-xs font-semibold uppercase tracking-[0.16em]">
                    Read more
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const SELECTED = [
  "northgate-estate-integrated-housing-development",
  "ziminya-dam-water-security-irrigation-project",
  "mbare-musika-temporary-traders-market-redevelopment",
  "dacomb-drive-cluster-housing-development",
  "westprop-pomona-city-flats",
  "totalenergies-kadoma-service-station-quick-service-restaurant-project",
];

function ProjectCard({ p, delay = 0 }: { p: (typeof projects)[number]; delay?: number }) {
  const where = "location" in p && p.location ? p.location : p.meta;
  return (
    <Reveal as="li" delay={delay} className="bg-card">
      <Link to="/projects/$slug" params={{ slug: p.slug }} className="group flex h-full flex-col">
        <div className="media-zoom">
          <img src={p.image} alt={p.name} className="aspect-4/3 w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <p className="eyebrow">{p.sector}</p>
          <h3 className="mt-3 text-xl leading-snug group-hover:text-accent">{p.name}</h3>
          <p className="mt-3 line-clamp-1 pb-6 text-xs text-muted-foreground">{where}</p>
          <span className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            View case study
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function Projects({ limit }: { limit?: number } = {}) {
  const selected = SELECTED.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as typeof projects;
  const list = limit ? selected.slice(0, limit) : selected;
  const [lead, second, third, ...rest] = list;
  const Feature = ({ p, tall = false }: { p: (typeof projects)[number]; tall?: boolean }) => (
    <Link to="/projects/$slug" params={{ slug: p.slug }} className={`media-zoom group relative block h-full overflow-hidden bg-ink text-ink-foreground ${tall ? "min-h-[28rem] lg:min-h-[40rem]" : "min-h-[19rem]"}`}>
      <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-accent">{p.sector}</p>
        <h3 className={`mt-3 max-w-xl leading-tight ${tall ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>{p.name}</h3>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
          View case study <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="shell">
        <SectionHead
          eyebrow="Selected projects"
          title="Work that inspires and endures."
          copy="Housing, water security, public markets and energy — a cross-section of the portfolio."
          action={{ label: `All ${projects.length} projects`, href: "/projects" }}
        />
        <div className="mt-10 grid gap-3 md:mt-12 lg:grid-cols-12">
          {lead ? <Reveal className="lg:col-span-7"><Feature p={lead} tall /></Reveal> : null}
          <div className="grid gap-3 lg:col-span-5">
            {second ? <Reveal delay={80}><Feature p={second} /></Reveal> : null}
            {third ? <Reveal delay={140}><Feature p={third} /></Reveal> : null}
          </div>
        </div>
        {rest.length ? (
          <ul className="mt-3 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => <ProjectCard key={p.slug} p={p} delay={i * 80} />)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function ProjectIndex() {
  const sectors = ["All", ...disciplines.map((d) => d.name)];
  const [filter, setFilter] = useState("All");
  const d = disciplines.find((x) => x.name === filter);
  const list = d ? projects.filter((p) => d.match.some((m) => p.sector.includes(m))) : projects;
  return (
    <section className="py-10 md:py-14">
      <div className="shell">
        <div role="group" aria-label="Filter projects by discipline" className="flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => setFilter(s)}
              className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${filter === s ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card hover:border-foreground"}`}
            >
              {s}
            </button>
          ))}
          <p className="ml-auto self-center text-xs text-muted-foreground">{list.length} projects</p>
        </div>
        <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <ProjectCard key={p.slug} p={p} delay={(i % 3) * 60} />)}
        </ul>
      </div>
    </section>
  );
}

export function Insights({ showHead = true }: { showHead?: boolean } = {}) {
  return (
    <section id="insights" className="bg-background py-16 md:py-24">
      <div className="shell">
        {showHead && (
          <Reveal className="flex items-end justify-between gap-8 border-b border-border pb-7">
            <h2 className="font-display text-5xl font-normal leading-none md:text-7xl">Thinking forward.</h2>
            <a
              href="/insights"
              className="group hidden min-w-28 items-center justify-between border-b border-foreground pb-3 text-sm font-semibold sm:flex"
            >
              All insights
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>
        )}

        <ul className="mt-11 grid gap-12 md:grid-cols-3 md:gap-6">
          {insights.map((n, i) => (
            <Reveal as="li" key={n.title} delay={i * 80}>
              <article className="group flex h-full flex-col">
                <Link to="/insights/$slug" params={{ slug: toSlug(n.title) }} className="media-zoom block bg-muted">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="aspect-3/2 w-full object-cover"
                    loading="lazy"
                  />
                </Link>
                <p className="mt-5 text-xs text-muted-foreground">{n.tag}</p>
                <h3 className="mt-4 min-h-20 text-2xl font-normal leading-[1.12] lg:text-[1.7rem]">
                  {n.title}
                </h3>
                <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <img
                    src={n.portrait}
                    alt={n.author}
                    className="h-11 w-11 rounded-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight">{n.author}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{n.role}</p>
                  </div>
                </div>
                <Link
                  to="/insights/$slug"
                  params={{ slug: toSlug(n.title) }}
                  className="mt-7 flex w-28 items-center justify-between border-b border-transparent pb-2 text-sm transition-colors hover:border-foreground"
                >
                  Read insight
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>

        <a
          href="/insights"
          className="mt-12 flex items-center justify-between border-b border-foreground pb-3 text-sm font-semibold sm:hidden"
        >
          All insights
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

export function Appointments() {
  return (
    <section className="border-t border-border bg-secondary/60 py-16 md:py-24">
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
              <Link
                to="/contact"
                className="link-underline mt-6 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent"
              >
                Learn more →
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="bg-accent py-14 text-accent-foreground md:py-20">
      <div className="shell grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] opacity-80">Partner with us</p>
          <h2 className="display-lg mt-4 text-balance">Have a project in mind? Let’s engineer it properly.</h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <Link to="/contact" className="bg-accent-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-opacity hover:opacity-90">
            Start a conversation
          </Link>
          <a href="tel:+263242709222" className="border border-accent-foreground/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] hover:border-accent-foreground">
            Call us
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h2 className="display-lg mt-5 text-balance">Tell us what you’re building.</h2>
          <dl className="mt-8 space-y-5 text-sm">
            <div><dt className="eyebrow-muted">Office</dt><dd className="mt-1 text-base">39 Hillside Road, Hillside, Harare, Zimbabwe</dd></div>
            <div><dt className="eyebrow-muted">Phone</dt><dd className="mt-1 text-base"><a href="tel:+263242709222" className="link-underline">+263 (0) 242 709 222</a></dd></div>
            <div><dt className="eyebrow-muted">Email</dt><dd className="mt-1 text-base"><a href="mailto:info@uipafrica.com" className="link-underline">info@uipafrica.com</a></dd></div>
          </dl>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-7">
          <ContactForm compact />
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const primaryLinks = [
    ["About", "/about"], ["Projects", "/projects"], ["People", "/people"],
  ] as const;
  const secondaryLinks = [
    ["Disciplines", "/disciplines"], ["Services", "/services"], ["Insights", "/insights"], ["Contact", "/contact"],
  ] as const;

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell border-t border-ink-border py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link to="/" aria-label="UIP Africa Home" className="inline-block">
              <img src="/uip-logo-white.png?v=2" alt="UIP Africa" className="h-20 w-auto object-contain md:h-24" />
            </Link>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-ink-muted">Integrated infrastructure engineering. Boundless possibilities.</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            <div className="col-span-2 grid grid-cols-2 gap-8 sm:col-span-2">
            <ul className="space-y-3">{primaryLinks.map(([label, to]) => <li key={to}><Link to={to} className="footer-link">{label}</Link></li>)}</ul>
            <ul className="space-y-3">{secondaryLinks.map(([label, to]) => <li key={to}><Link to={to} className="footer-link">{label}</Link></li>)}</ul>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-accent">Services</p>
              <ul className="mt-4 space-y-2 text-sm">{services.map((sv) => <li key={sv.name}><Link to="/services/$slug" params={{ slug: toSlug(sv.name) }} className="footer-link">{sv.name}</Link></li>)}</ul>
            </div>
          </nav>
          <div className="lg:col-span-2">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-accent">Harare, Zimbabwe</p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-ink-muted">
              <p>39 Hillside Road<br />Hillside, Harare<br />Zimbabwe</p>
              <a href="mailto:info@uipafrica.com" className="footer-link block">info@uipafrica.com</a>
              <a href="tel:+263242709222" className="footer-link block">+263 (0) 242 709 222</a>
              <a href="tel:+2638677009615" className="footer-link block">+263 (0) 867 700 9615</a>
            </address>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-ink-border pt-8 text-xs text-ink-muted md:mt-16 md:grid-cols-2">
          <p>© {new Date().getFullYear()} Urban Infrastructure Projects Africa</p>
          <p className="md:text-right">Engineering a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
