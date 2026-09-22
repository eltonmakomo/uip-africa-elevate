import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Projects, Stats } from "@/components/site/Sections";

const title = "Projects | Delivered infrastructure across Zimbabwe";
const description =
  "Pomona City Flats, Dacomb Drive cluster housing, Ziminya Dam and Mbare Musika: projects delivered by UIP Africa across Zimbabwe.";

export const Route = createFileRoute("/projects/")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our work"
        title="Built, commissioned, in use."
        copy="A selection of the residential, water and public infrastructure projects we have carried from first sketch to final certificate."
      />
      <Stats />
      <Projects />
    </PageShell>
  );
}
