import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Insights } from "@/components/site/Sections";

const title = "Insights | Engineering thinking from UIP Africa";
const description =
  "Notes from our engineers on stormwater design, ground investigation and phasing services so capital follows demand.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Thinking forward."
        copy="Practical notes from the engineers doing the work, on the decisions that shape cost, programme and performance."
      />
      <Insights />
    </PageShell>
  );
}
