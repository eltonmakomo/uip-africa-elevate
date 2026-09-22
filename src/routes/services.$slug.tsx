import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { services } from "@/lib/site-data";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => toSlug(item.name) === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Service"} | UIP Africa` }] }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  return <PageShell>
    <PageHero eyebrow="Service" title={service.name} copy={service.copy} />
    <section className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12">
      <div className="lg:col-span-6"><p className="eyebrow">Overview</p><p className="mt-5 text-xl leading-relaxed">{service.overview}</p></div>
      <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6"><DetailList title="What we offer" items={service.offers} /><DetailList title="Client benefits" items={service.benefits} /></div>
      <Link to="/contact" className="link-underline text-sm font-semibold uppercase tracking-[0.16em] text-accent lg:col-start-7">Talk to an engineer →</Link>
    </section>
  </PageShell>;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <div><h2 className="text-2xl">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="border-t border-border pt-3 text-muted-foreground">{item}</li>)}</ul></div>;
}