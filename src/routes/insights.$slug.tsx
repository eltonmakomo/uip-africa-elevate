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
  head: ({ loaderData }) => {
    const pageTitle = `${loaderData?.title ?? "Insight"} | UIP Africa`;
    const pageDescription = `A UIP Africa engineering perspective on ${loaderData?.title?.toLowerCase() ?? "infrastructure delivery"}.`;
    return { meta: [{ title: pageTitle }, { name: "description", content: pageDescription }, { property: "og:title", content: pageTitle }, { property: "og:description", content: pageDescription }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const insight = Route.useLoaderData();
  return <PageShell>
    <PageHero eyebrow={`${insight.tag} · ${insight.date}`} title={insight.title} copy={`A perspective from ${insight.author}, ${insight.role}`} />
    <article className="shell py-16 md:py-24"><img src={insight.image} alt={insight.title} className="aspect-16/9 w-full object-cover" /><div className="mx-auto mt-10 max-w-3xl"><p className="text-xl leading-relaxed">UIP Africa shares practical engineering thinking shaped by project delivery, local conditions and the decisions that influence long-term infrastructure performance.</p><p className="mt-5 text-sm leading-relaxed text-muted-foreground">This editorial preview introduces a topic the UIP Africa team can discuss in relation to your project. It is not presented as a published article from the live UIP Africa website.</p><Link to="/contact" className="link-underline mt-10 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-accent">Discuss this topic with our team →</Link></div></article>
  </PageShell>;
}