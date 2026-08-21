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
import RoiCalculatorSection from "@/components/home/RoiCalculatorSection";
import SeoAuditSection from "@/components/home/SeoAuditSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";

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
      <ServicesSection />
      <Testimonials />
      <RoiCalculatorSection />
      <SeoAuditSection />
      <BlogSection />
      <FaqSection />
      <ExpertsSection />
      <AwardsSection />
      <CtaSection />
    </Layout>
  );
}
