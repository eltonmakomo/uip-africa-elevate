import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";

const title = "Contact UIP Africa | Talk to an engineer in Harare";
const description =
  "Contact UIP Africa at 39 Hillside Road, Hillside, Harare for civil and structural engineering, project delivery and infrastructure consulting.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s connect and build your dream project."
        copy="We’d love to hear about your project. Reach out, share your ideas, and let’s start shaping them into something real and lasting."
      />
      <section className="border-t border-border bg-secondary/60 py-20 md:py-28">
        <div className="shell grid gap-px border border-border bg-border sm:grid-cols-3">
          <div className="bg-card p-8">
            <p className="eyebrow">Phone</p>
            <div className="mt-4 space-y-2 text-lg leading-snug">
              <a href="tel:+263242709222" className="link-underline block">
                +263 (0) 242 709 222
              </a>
              <a href="tel:+2638677009615" className="link-underline block">
                +263 (0) 867 700 9615
              </a>
            </div>
          </div>
          <div className="bg-card p-8">
            <p className="eyebrow">Email</p>
            <a
              href="mailto:info@uipafrica.com"
              className="link-underline mt-4 inline-block text-lg"
            >
              info@uipafrica.com
            </a>
          </div>
          <div className="bg-card p-8">
            <p className="eyebrow">Office</p>
            <p className="mt-4 text-lg leading-snug">39 Hillside Road, Hillside, Harare, Zimbabwe</p>
          </div>
          <div className="bg-card p-8">
            <p className="eyebrow">Accreditation</p>
            <p className="mt-4 text-lg leading-snug">ISO 9001:2015 · ZACE member</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
