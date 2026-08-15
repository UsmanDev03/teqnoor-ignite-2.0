import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import CareersHero from "@/components/careers/CareersHero";
import CultureSection from "@/components/careers/CultureSection";
import JobListings from "@/components/careers/JobListings";
import BenefitsSection from "@/components/careers/BenefitsSection";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Teqnoor | Open roles and benefits" },
      {
        name: "description",
        content:
          "Join Teqnoor: open engineering, design, cloud and data roles across Dubai, Karachi, London and New York.",
      },
      { property: "og:title", content: "Careers at Teqnoor | Open roles and benefits" },
      { property: "og:description", content: "Small teams, big ownership. See our open roles." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <Layout>
      <CareersHero />
      <CultureSection />
      <JobListings />
      <BenefitsSection />
    </Layout>
  );
}
