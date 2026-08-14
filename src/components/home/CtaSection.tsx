import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { fadeIn, viewportOnce } from "@/utils/animations";

export default function CtaSection() {
  return (
    <section className="gradient-warm py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeIn}
        className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
      >
        <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase text-primary-foreground md:text-6xl">
          Get in touch
        </h2>
        <div className="max-w-md">
          <p className="text-sm text-primary-foreground/90">
            Interested in working with us? We would love to talk about your roadmap, your challenges
            and where Teqnoor can help.
          </p>
          <Button to="/contact" variant="ghost" className="mt-6">
            Let&apos;s talk
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
