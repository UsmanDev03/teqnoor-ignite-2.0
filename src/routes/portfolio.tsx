import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Teqnoor Portfolio | Selected client work" },
      {
        name: "description",
        content:
          "Explore platforms, apps and cloud migrations Teqnoor delivered for clients in retail, finance, health and logistics.",
      },
      { property: "og:title", content: "Teqnoor Portfolio | Selected client work" },
      { property: "og:description", content: "Work that earned its results — see the case studies." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [category, setCategory] = useState("All");

  return (
    <Layout>
      <PortfolioHero />
      <section className="section-pad bg-background">
        <div className="shell">
          <FilterBar active={category} onChange={setCategory} />
          <div className="mt-10">
            <ProjectGrid category={category} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
