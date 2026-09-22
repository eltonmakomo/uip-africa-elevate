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
      <section className="border-y border-border bg-background py-20 md:py-28">
        <div className="shell grid gap-px border border-border bg-border lg:grid-cols-3">
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-6 text-3xl leading-tight">Africa’s infrastructure development consultancy of choice.</h2>
          </article>
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Our mission</p>
            <p className="mt-6 text-lg leading-relaxed">To provide unique and sustainable solutions for clients at every stage of a project lifecycle, opening opportunities through creative thinking and optimum service delivery.</p>
          </article>
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Our scope</p>
            <p className="mt-6 text-lg leading-relaxed">From 39 Hillside Road in Harare, UIP Africa provides civil and structural engineering design, infrastructure consultancy and CAD drafting services across Zimbabwe.</p>
          </article>
        </div>
      </section>
      <Why />
      <Clients />
    </PageShell>
  );
}
