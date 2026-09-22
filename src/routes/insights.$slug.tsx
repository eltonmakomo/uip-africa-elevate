import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { insights } from "@/lib/site-data";

const toSlug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = insights.find((item) => toSlug(item.title) === params.slug);
    if (!insight) throw notFound();
    return insight;
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Insight"} | UIP Africa` }] }),
  component: InsightDetail,
});

function InsightDetail() {
  const insight = Route.useLoaderData();
  return <PageShell>
    <PageHero eyebrow={`${insight.tag} · ${insight.date}`} title={insight.title} copy={`By ${insight.author}, ${insight.role}`} />
    <article className="shell py-20 md:py-28"><img src={insight.image} alt={insight.title} className="aspect-16/9 w-full object-cover" /><div className="mx-auto mt-10 max-w-3xl"><p className="text-xl leading-relaxed">UIP Africa shares practical engineering thinking shaped by live project delivery, local conditions and the decisions that influence long-term infrastructure performance.</p><Link to="/contact" className="link-underline mt-10 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-accent">Discuss this topic with our team →</Link></div></article>
  </PageShell>;
}