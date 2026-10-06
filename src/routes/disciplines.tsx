import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Disciplines, DisciplineDetails } from "@/components/site/Sections";

const title = "Disciplines | Transportation, structural, water and civil infrastructure";
const description =
  "UIP Africa's four engineering disciplines — transportation, structural, water & sanitation and civil infrastructure — with related services and projects.";

export const Route = createFileRoute("/disciplines")({
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
  component: DisciplinesPage,
});

function DisciplinesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we specialise in"
        title="Deep in four disciplines."
        copy="The technical fields we specialise in. Each links to the services we offer within it and the projects where we have applied it."
      />
      <Disciplines showHead={false} />
      <DisciplineDetails />
    </PageShell>
  );
}
