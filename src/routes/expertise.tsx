import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ExpertiseSections } from "@/components/site/Expertise";

const title = "Expertise | How UIP Africa builds — sequence by sequence";
const description =
  "Roads, bridges, structures, water and sanitation, energy and digital delivery: the stage-by-stage sequences UIP Africa uses to take a project from ground to handover.";

export const Route = createFileRoute("/expertise")({
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
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <PageShell>
      <ExpertiseSections />
    </PageShell>
  );
}
