import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { PeopleGrid } from "@/components/site/People";

const title = "People | UIP Africa engineering team";
const description =
  "Meet UIP Africa's engineering, project management, safety, finance and technical office team, with profile popups for each person.";

export const Route = createFileRoute("/people")({
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
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="People"
        title="The team behind the infrastructure."
        copy="Meet the engineers, designers, managers and technical specialists shaping UIP Africa’s project work across the region."
      />
      <PeopleGrid showHead={false} />
    </PageShell>
  );
}
