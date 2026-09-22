import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { projects } from "@/lib/site-data";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug || toSlug(item.name) === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const pageTitle = `${loaderData?.name ?? "Project"} | UIP Africa`;
    const pageDescription = loaderData?.copy ?? "A delivered UIP Africa engineering project.";
    return { meta: [{ title: pageTitle }, { name: "description", content: pageDescription }, { property: "og:title", content: pageTitle }, { property: "og:description", content: pageDescription }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <PageShell>
    <PageHero eyebrow={project.sector} title={project.name} copy={project.meta} />
    <section className="shell py-20 md:py-28">
      <img src={project.image} alt={project.name} className="aspect-16/9 w-full object-cover" />
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7"><p className="text-xl leading-relaxed">{project.copy}</p>{project.details?.length ? <ul className="mt-8 space-y-3 border-t border-border pt-6">{project.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />{detail}</li>)}</ul> : null}</div>
        <aside className="lg:col-span-5"><dl className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">{[["Client", project.client], ["Location", project.location], ["Project value", project.value], ["Date", project.year], ["Duration", project.duration], ["Scale", project.size], ["Status", project.status]].filter((item) => item[1]).map(([label, value]) => <div key={label} className="bg-card p-5"><dt className="eyebrow">{label}</dt><dd className="mt-2 text-base">{value}</dd></div>)}</dl><Link to="/contact" className="link-underline mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-accent">Discuss a similar project →</Link></aside>
      </div>
    </section>
  </PageShell>;
}