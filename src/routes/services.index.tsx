import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Services, Appointments } from "@/components/site/Sections";

const title = "Services | Consulting civil, structural and water engineering";
const description =
  "Consulting civil engineering, structural solutions, civil infrastructure, water and sanitation, mining and energy infrastructure services from UIP Africa in Harare.";

export const Route = createFileRoute("/services/")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Engineering that stays connected."
        copy="From the appointed engineer to the team on site, our services carry one line of technical responsibility through the project."
      />
      <Services showHead={false} />
      <Appointments />
    </PageShell>
  );
}
