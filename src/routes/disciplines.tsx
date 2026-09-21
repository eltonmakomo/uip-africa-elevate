import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Disciplines } from "@/components/site/Sections";

const title = "Disciplines | Transport, structures, water and project management";
const description =
  "Four connected disciplines at UIP Africa: transportation, structural engineering, water and sanitation, and project management — each carried by a named engineer.";

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
        eyebrow="Expertise areas"
        title="Deep in four disciplines."
        copy="Every project draws on some mix of these four. Each is carried by a named engineer, not a generalist spread thin across all of them."
      />
      <Disciplines />
    </PageShell>
  );
}
