import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      <section className="border-t border-border bg-secondary/60 py-16 md:py-24">
        <div className="shell grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="eyebrow">Location</p>
            <p className="mt-4 text-lg leading-snug">Harare, Zimbabwe</p>
          </div>
        </div>
        <div className="shell mt-10 grid gap-10 md:mt-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Get in touch with us</p>
            <h2 className="display-lg mt-5 text-balance">Tell us what you’re building.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">Need help or have a project? Get in touch — we’re always ready to support you.</p>
          </div>
          <form action="mailto:info@uipafrica.com" method="post" encType="text/plain" className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">Your name<Input name="name" required className="h-12 rounded-none bg-card" /></label>
            <label className="grid gap-2 text-sm font-medium">Your email<Input name="email" type="email" required className="h-12 rounded-none bg-card" /></label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Subject<Input name="subject" required className="h-12 rounded-none bg-card" /></label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Your message<Textarea name="message" className="min-h-40 rounded-none bg-card" /></label>
            <Button type="submit" className="h-12 rounded-none px-8 sm:col-start-2 sm:justify-self-end">Send enquiry</Button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
