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
        eyebrow="About Us"
        title="Innovative solutions for a growing continent."
        copy="Urban Infrastructure Projects Africa’s core purpose and mission is to provide a full range of high quality innovative, appropriate, cost effective and sustainable engineering solutions that satisfy the needs of its clients and the communities it serves. The company’s management and staff strive to use their expertise to make a meaningful contribution and improve the quality of life for the people of the African continent. Our passion to see a better environment spurs us to design and approach every project with the future in mind. The result of this thrust is that every development we embark on is done so with sustainability and respect for the environment in mind. Firmly founded on a project implementation background with top Local and International Contracting firms, we are intimate of the Infrastructure Development landscape. This footing allows us to add value to any project regardless of size at all project life cycle stages, it also allows us to anticipate and mitigate challenges."
      />
      <About />
      <section className="border-y border-border bg-background py-20 md:py-28">
        <div className="shell grid gap-px border border-border bg-border lg:grid-cols-3">
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-6 text-3xl leading-tight">To be Africa’s leading Infrastructure development consultancy of choice.</h2>
          </article>
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Our mission</p>
            <p className="mt-6 text-lg leading-relaxed">To provide unique and sustainable solutions for our clients at all stages of a project life cycle, whilst opening opportunities through creative thinking and optimum delivery of services.</p>
          </article>
          <article className="bg-card p-8 md:p-10">
            <p className="eyebrow">Scope</p>
            <p className="mt-6 text-lg leading-relaxed">Located at 39 Hillside Road Harare, Urban Infrastructure Projects Africa (UIPA), is an engineering consultancy , providing civil/structural engineering design and CAD drafting services in Zimbabwe.</p>
          </article>
        </div>
      </section>
      <Why />
      <Clients />
    </PageShell>
  );
}
