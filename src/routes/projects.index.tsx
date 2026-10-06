import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { ProjectIndex } from "@/components/site/Sections";

const title = "Projects | Delivered infrastructure across Zimbabwe";
const description =
  "The full UIP Africa portfolio: housing estates, dams, roads, service stations and public infrastructure across Zimbabwe, filterable by discipline.";

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
        title={"Built,\ncommissioned,\nin use."}
        copy="The full portfolio — housing, water, transport, energy and public infrastructure we have carried from first sketch to final certificate. Filter by discipline."
      />
      <ProjectIndex />
    </PageShell>
  );
}
