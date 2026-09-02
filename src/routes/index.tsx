import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  About,
  Appointments,
  CallToAction,
  Clients,
  Disciplines,
  Hero,
  Insights,
  Markets,
  Projects,
  Services,
  SiteFooter,
  Stats,
  Why,
} from "@/components/site/Sections";

const title = "UIP Africa | Civil & Structural Engineering Consultancy, Harare";
const description =
  "Harare-based civil and structural engineering consultancy: transport, structures, water and project delivery across Zimbabwe. 25+ years, 120+ projects, ISO 9001:2015 certified.";

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
        <Stats />
        <About />
        <Why />
        <Disciplines />
        <Markets />
        <Clients />
        <Services />
        <Projects />
        <Insights />
        <Appointments />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}

export { Why } from "@/components/site/Sections";
