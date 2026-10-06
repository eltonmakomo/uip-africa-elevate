import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  About,
  CallToAction,
  Clients,
  ContactBlock,
  Disciplines,
  Hero,
  Impact,
  Markets,
  Projects,
  Services,
  SiteFooter,
  Why,
} from "@/components/site/Sections";

const title = "UIP Africa | Engineering for today and tomorrow, Harare";
const description =
  "Harare-based civil and structural engineering consultancy: transport, structures, water and project delivery across Zimbabwe. 10+ years and 120+ projects.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Why />
        <Disciplines />
        <Services />
        <Projects />
        <Markets />
        <Impact />
        <About />
        <Clients />
        <CallToAction />
        <ContactBlock />
      </main>
      <SiteFooter />
    </div>
  );
}

