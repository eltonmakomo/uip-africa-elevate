import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";
import { buildProjectStory } from "@/lib/project-story";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug || toSlug(item.name) === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const pageTitle = `${loaderData?.name ?? "Project"} | UIP Africa`;
    const pageDescription = (loaderData?.copy ?? "A delivered UIP Africa engineering project.").slice(0, 160);
    return { meta: [{ title: pageTitle }, { name: "description", content: pageDescription }, { property: "og:title", content: pageTitle }, { property: "og:description", content: pageDescription }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: ProjectDetail,
});

function Block({ index, title, lines }: { index: string; title: string; lines: string[] }) {
  if (!lines.length) return null;
  const [lead, ...rest] = lines;
  const bullets = rest.filter((l) => l.length <= 160);
  const paras = rest.filter((l) => l.length > 160);
  return (
    <Reveal as="section" className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="index-num text-xs text-accent">{index}</p>
        <h2 className="mt-2 text-2xl md:text-3xl">{title}</h2>
      </div>
      <div className="md:col-span-8">
        <p className="text-lg leading-relaxed">{lead}</p>
        {paras.map((p) => <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">{p}</p>)}
        {bullets.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => <li key={b} className="flex gap-3 border-t border-border pt-3 text-sm leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />{b}</li>)}
          </ul>
        ) : null}
      </div>
    </Reveal>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData();
  const p = project as typeof project & Partial<Record<"client" | "location" | "value" | "year" | "duration" | "size" | "status", string>>;
  const story = buildProjectStory(project.details ?? [], project.copy);
  const facts: [string, string | undefined][] = [
    ["Client", p.client],
    ["Location", p.location],
    ["Discipline", project.sector],
    ["Status", p.status],
    ["Date", p.year],
    ["Duration", p.duration],
    ["Value", p.value],
    ["Scale", p.size],
  ];
  const related = projects.filter((x) => x.slug !== project.slug && x.sector === project.sector).slice(0, 3);
  const sections = [
    ["Overview", story.overview],
    ["The challenge", story.challenge],
    ["UIP’s contribution", story.contribution],
    ["Engineering solution", story.solution],
    ["Outcomes", story.outcomes],
  ].filter(([, l]) => (l as string[]).length) as [string, string[]][];

  return (
    <PageShell>
      <PageHero eyebrow={`Project · ${project.sector}`} title={project.name} copy={project.copy.length > 220 ? `${project.copy.slice(0, 217)}…` : project.copy} />
      <section className="shell py-10 md:py-14">
        <img src={project.image} alt={project.name} className="aspect-[16/8] w-full object-cover" />
        <dl className="grid grid-cols-2 border-l border-border bg-card md:grid-cols-4">
          {facts.filter(([, v]) => v && v !== "-").map(([label, value]) => (
            <div key={label} className="border-b border-r border-border p-5"><dt className="eyebrow">{label}</dt><dd className="mt-2 text-sm leading-snug">{value}</dd></div>
          ))}
        </dl>

        <div className="mt-12">
          {sections.map(([title, lines], i) => <Block key={title} index={String(i + 1).padStart(2, "0")} title={title} lines={lines} />)}
          {story.facts.length ? <Block index={String(sections.length + 1).padStart(2, "0")} title="Project details" lines={["Key facts and scope items as published.", ...story.facts]} /> : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/projects" className="link-underline text-sm font-semibold">← All projects</Link>
          <Link to="/contact" className="bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground hover:opacity-90">Discuss a similar project</Link>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-border bg-secondary/60 py-14 md:py-20">
          <div className="shell">
            <p className="eyebrow">Related projects</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug} className="border border-border bg-card">
                  <Link to="/projects/$slug" params={{ slug: r.slug }} className="group block">
                    <img src={r.image} alt={r.name} className="aspect-4/3 w-full object-cover" loading="lazy" />
                    <div className="flex items-start justify-between gap-4 p-6"><h3 className="text-lg leading-snug group-hover:text-accent">{r.name}</h3><ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
