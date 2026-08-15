import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import { BENEFITS } from "@/utils/constants";
import { staggerContainer, viewportOnce } from "@/utils/animations";

export default function BenefitsSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <SectionTitle eyebrow="Benefits" title="How we look after" highlight="our people" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((b) => (
            <Card key={b.title}>
              <h3 className="font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
