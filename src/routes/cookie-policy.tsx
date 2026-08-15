import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/common/PageHero";
import LegalBody from "@/components/common/LegalBody";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Teqnoor" },
      {
        name: "description",
        content: "The cookies Teqnoor uses, what they do and how you can control them in your browser.",
      },
      { property: "og:title", content: "Cookie Policy | Teqnoor" },
      { property: "og:description", content: "Understand and control the cookies used on teqnoor.com." },
    ],
  }),
  component: CookiePolicy,
});

// REPLACE LATER: placeholder legal copy — review with legal counsel.
const sections = [
  {
    title: "What cookies are",
    body: "Cookies are small text files stored on your device that help websites remember your preferences and understand how the site is used.",
  },
  {
    title: "Essential cookies",
    body: "These are required for the site to function, including remembering your cookie consent choice. They cannot be switched off.",
  },
  {
    title: "Analytics cookies",
    body: "These help us understand which pages are visited most often, so we can improve the content and performance of the site.",
  },
  {
    title: "Marketing cookies",
    body: "Used to measure the effectiveness of our campaigns and to show relevant content on other platforms.",
  },
  {
    title: "Managing cookies",
    body: "You can accept or reject non-essential cookies using our banner, and clear or block cookies at any time in your browser settings.",
  },
];

function CookiePolicy() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Cookie"
        highlight="policy"
        description="Last updated April 2026. Here is exactly what we store on your device and why."
      />
      <LegalBody sections={sections} />
    </Layout>
  );
}
