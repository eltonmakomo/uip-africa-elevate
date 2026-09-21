import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";

const title = "Contact UIP Africa | Talk to an engineer in Harare";
const description =
  "Tell us where your project stands. UIP Africa brings engineering clarity to residential, commercial, industrial and public infrastructure in Zimbabwe.";

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
        title="Talk to an engineer."
        copy="Whether it is residential, commercial, industrial or public infrastructure, tell us where the project stands and we will bring the engineering clarity to move it forward."
      />
      <section className="border-t border-border bg-secondary/60 py-20 md:py-28">
        <div className="shell grid gap-px border border-border bg-border sm:grid-cols-3">
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
            <p className="mt-4 text-lg leading-snug">Hillside, Harare, Zimbabwe</p>
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
