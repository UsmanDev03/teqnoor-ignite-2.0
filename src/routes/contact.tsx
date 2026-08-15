import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Teqnoor | Start a project" },
      {
        name: "description",
        content:
          "Tell Teqnoor about your project and timeline. We reply within one working day from our Dubai, Karachi, London and New York offices.",
      },
      { property: "og:title", content: "Contact Teqnoor | Start a project" },
      { property: "og:description", content: "Let's talk about what's next for your product." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
    </Layout>
  );
}
