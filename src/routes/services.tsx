import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Teqnoor Services | Web, app, cloud and design" },
      {
        name: "description",
        content:
          "Web development, app development, cloud, UI/UX design, IT consulting and digital marketing from one senior Teqnoor team.",
      },
      { property: "og:title", content: "Teqnoor Services | Web, app, cloud and design" },
      {
        property: "og:description",
        content: "Six ways Teqnoor helps you ship and scale digital products.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <ServicesHero />
      <ServiceGrid />
      <ServiceCTA />
    </Layout>
  );
}
