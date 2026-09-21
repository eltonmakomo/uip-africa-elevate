import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Markets } from "@/components/site/Sections";

const title = "Markets | Sectors UIP Africa engineers for across Zimbabwe";
const description =
  "Residential, water and sanitation, transportation, commercial, energy, mining and public sector infrastructure engineered by UIP Africa.";

export const Route = createFileRoute("/markets")({
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
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Markets"
        title="Sectors we build for."
        copy="From housing estates and water security schemes to haul roads, power plants and public facilities, each sector brings its own conditions and constraints."
      />
      <Markets />
    </PageShell>
  );
}
