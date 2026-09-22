import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => toSlug(item.name) === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const pageTitle = `${loaderData?.name ?? "Engineering service"} | UIP Africa`;
    const pageDescription = loaderData?.copy ?? "Engineering consultancy services from UIP Africa.";
    return { meta: [{ title: pageTitle }, { name: "description", content: pageDescription }, { property: "og:title", content: pageTitle }, { property: "og:description", content: pageDescription }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const serviceIndex = services.findIndex((item) => item.name === service.name);
  const relatedServices = services.filter((item) => item.name !== service.name).slice(0, 3);
  const serviceNumber = String(serviceIndex + 1).padStart(2, "0");
  const serviceTotal = String(services.length).padStart(2, "0");

  return <PageShell>
    <PageHero eyebrow={`Service ${serviceNumber}/${serviceTotal}`} title={service.name} copy={service.copy} />

    <Reveal className="shell">
      <figure className="overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={`${service.name} delivered by UIP Africa engineers`}
          className="aspect-[16/8] w-full object-cover md:aspect-[16/7]"
        />
      </figure>
    </Reveal>

    <section className="shell py-20 md:py-28">
      <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-12 md:pb-24">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Overview</p>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8">
          <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">{service.overview}</p>
        </Reveal>
      </div>

      <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 md:py-24">
        <DetailList title="What we offer" items={service.offers} />
        <DetailList title="Client benefits" items={service.benefits} />
        <DetailList title="Why UIP Africa" items={service.differentiators} />
        <DetailList title="Ideal project types" items={service.idealFor} />
      </div>
    </section>

    <section className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Other services</p>
            <h2 className="mt-4 text-4xl uppercase leading-none md:text-5xl">Explore our expertise</h2>
          </div>
          <Link to="/services" className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-accent">All services →</Link>
        </div>
        <ul className="mt-12 grid border-l border-t border-border md:grid-cols-3">
          {relatedServices.map((item) => (
            <li key={item.name} className="border-b border-r border-border bg-card">
              <Link
                to="/services/$slug"
                params={{ slug: toSlug(item.name) }}
                className="group flex min-h-56 flex-col justify-between p-7 md:p-8"
              >
                <h3 className="max-w-[14ch] text-2xl uppercase leading-tight">{item.name}</h3>
                <span className="mt-10 flex items-center justify-between border-t border-border pt-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-accent">
                  Read more <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </PageShell>;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <Reveal><h2 className="text-2xl uppercase leading-tight">{title}</h2><ul className="mt-6">{items.map((item) => <li key={item} className="border-t border-border py-4 text-sm leading-relaxed text-muted-foreground">{item}</li>)}</ul></Reveal>;
}