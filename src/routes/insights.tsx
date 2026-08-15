import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedArticle from "@/components/insights/FeaturedArticle";
import BlogGrid from "@/components/insights/BlogGrid";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Teqnoor Insights | Research, reports and field notes" },
      {
        name: "description",
        content:
          "Articles and reports from Teqnoor engineers, designers and analysts on web, cloud, AI and data.",
      },
      { property: "og:title", content: "Teqnoor Insights | Research, reports and field notes" },
      { property: "og:description", content: "What our teams are learning, published as we learn it." },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <Layout>
      <InsightsHero />
      <FeaturedArticle />
      <BlogGrid />
    </Layout>
  );
}
