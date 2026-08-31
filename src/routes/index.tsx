import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductSection from "@/components/home/ProductSection";
import Testimonials from "@/components/home/Testimonials";
import SolutionsSection from "@/components/home/SolutionsSection";
import ExpertsSection from "@/components/home/ExpertsSection";
import CtaSection from "@/components/home/CtaSection";
import RoiCalculatorSection from "@/components/home/RoiCalculatorSection";
import SeoAuditSection from "@/components/home/SeoAuditSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import HowWeSection from "@/components/home/HowWeSection";
import TrustedBySection from "@/components/home/TrustedBySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teqnoor | UK B2B Web, App & Digital Marketing Agency" },
      {
        name: "description",
        content:
          " Teqnoor is a UK B2B agency. We build fast websites and apps, then run the digital marketing that wins high-value clients. Get a free site audit.",
      },
      { property: "og:title", content: "Teqnoor | UK B2B Web, App & Digital Marketing Agency" },
      {
        property: "og:description",
        content: "Plan, build and grow in one place. Teqnoor IQ keeps your site, search rankings and leads all in view.",
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
      <WhatWeDoSection/>
      <SolutionsSection />
      <HowWeSection />
      <Testimonials />
      <TrustedBySection/>
      <RoiCalculatorSection />
      <SeoAuditSection />
      <BlogSection />
      <FaqSection />
      <ExpertsSection />
      <CtaSection />
    </Layout>
  );
}
