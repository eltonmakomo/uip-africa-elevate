import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { About, Why, Clients } from "@/components/site/Sections";

const title = "About UIP Africa | Harare civil & structural engineering practice";
const description =
  "Urban Infrastructure Projects Africa is a Harare-based civil and structural engineering consultancy delivering across property, public infrastructure, mining and energy.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Who we are"
        title="Better infrastructure. Greater possibilities."
        copy="An integrated infrastructure engineering consultancy working to improve everyday life across Zimbabwe and the region."
      />
      <About />
      <Why />
      <Clients />
    </PageShell>
  );
}
