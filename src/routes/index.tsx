import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductSection from "@/components/home/ProductSection";
import Testimonials from "@/components/home/Testimonials";
import ServicesSection from "@/components/home/ServicesSection";
import ExpertsSection from "@/components/home/ExpertsSection";
import AwardsSection from "@/components/home/AwardsSection";
import CtaSection from "@/components/home/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teqnoor | Technology & Innovation Partner" },
      {
        name: "description",
        content:
          "Teqnoor builds web platforms, apps, cloud solutions and data-driven marketing for ambitious brands worldwide.",
      },
      { property: "og:title", content: "Teqnoor | Technology & Innovation Partner" },
      {
        property: "og:description",
        content: "Web, app, cloud and data expertise from one senior team. Meet Teqnoor.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <Testimonials />
      <ServicesSection />
      <ExpertsSection />
      <AwardsSection />
      <CtaSection />
    </Layout>
  );
}
