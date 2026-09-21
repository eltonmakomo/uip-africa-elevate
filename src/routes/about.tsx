import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { About, Why, Clients } from "@/components/site/Sections";

const title = "About UIP Africa | Harare civil & structural engineering practice";
const description =
  "Urban Infrastructure Projects Africa provides high-quality, innovative, cost-effective and sustainable civil and structural engineering solutions from Harare.";

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
        title="Innovative solutions for a growing continent."
        copy="UIP Africa provides high-quality, appropriate, cost-effective and sustainable engineering solutions that satisfy clients and improve the quality of life for communities across Africa."
      />
      <About />
      <Why />
      <Clients />
    </PageShell>
  );
}
