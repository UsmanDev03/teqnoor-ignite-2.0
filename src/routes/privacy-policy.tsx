import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/common/PageHero";
import LegalBody from "@/components/common/LegalBody";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Teqnoor" },
      {
        name: "description",
        content: "How Teqnoor collects, uses, stores and protects personal data across our services.",
      },
      { property: "og:title", content: "Privacy Policy | Teqnoor" },
      { property: "og:description", content: "Our commitments on personal data and your rights." },
    ],
  }),
  component: PrivacyPolicy,
});

// REPLACE LATER: placeholder legal copy — review with legal counsel.
const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly, such as your name, email address and any details submitted through our contact forms, along with technical data like IP address and browser type.",
  },
  {
    title: "How we use your information",
    body: "We use your data to respond to enquiries, deliver our services, improve site performance and send communications you have asked to receive.",
  },
  {
    title: "Sharing and disclosure",
    body: "We never sell personal data. We share information only with processors who help us operate this site, and only under contractual confidentiality obligations.",
  },
  {
    title: "Data retention",
    body: "We keep personal data only for as long as necessary to fulfil the purposes described here, or as required by applicable law.",
  },
  {
    title: "Your rights",
    body: "You may request access, correction, deletion or portability of your personal data at any time by writing to hello@teqnoor.com.",
  },
];

function PrivacyPolicy() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="policy"
        description="Last updated April 2026. This policy explains what data we collect and how we look after it."
      />
      <LegalBody sections={sections} />
    </Layout>
  );
}
