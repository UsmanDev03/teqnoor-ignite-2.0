import { motion } from "framer-motion";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function LegalBody({
  sections,
}: {
  sections: { title: string; body: string }[];
}) {
  return (
    <section className="section-pad bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="shell max-w-3xl space-y-10"
      >
        {sections.map((section) => (
          <motion.article key={section.title} variants={slideUp}>
            <h2 className="font-display text-2xl font-bold">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
