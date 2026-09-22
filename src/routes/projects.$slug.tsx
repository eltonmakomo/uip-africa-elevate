import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { projects } from "@/lib/site-data";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => toSlug(item.name) === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Project"} | UIP Africa` }] }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <PageShell>
    <PageHero eyebrow={project.sector} title={project.name} copy={project.meta} />
    <section className="shell py-20 md:py-28">
      <img src={project.image} alt={project.name} className="aspect-16/9 w-full object-cover" />
      <div className="mt-10 grid gap-8 lg:grid-cols-12"><p className="text-xl leading-relaxed lg:col-span-7">{project.copy}</p><div className="lg:col-span-5 lg:text-right"><Link to="/contact" className="link-underline text-sm font-semibold uppercase tracking-[0.16em] text-accent">Discuss a similar project →</Link></div></div>
    </section>
  </PageShell>;
}