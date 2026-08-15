import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import LocationsSection from "@/components/about/LocationsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Teqnoor | Our story, team and values" },
      {
        name: "description",
        content:
          "Meet the engineers, designers and data specialists behind Teqnoor, and the values that shape how we build.",
      },
      { property: "og:title", content: "About Teqnoor | Our story, team and values" },
      {
        property: "og:description",
        content: "Fifteen years of building products that last, across four global offices.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <ValuesSection />
      <LocationsSection />
    </Layout>
  );
}
