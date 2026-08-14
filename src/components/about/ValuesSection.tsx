import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import { VALUES } from "@/utils/constants";
import { staggerContainer, viewportOnce } from "@/utils/animations";

export default function ValuesSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <SectionTitle eyebrow="Values" title="What we" highlight="stand for" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value, i) => (
            <Card key={value.title}>
              <p className="font-display text-4xl font-extrabold text-gradient">0{i + 1}</p>
              <h3 className="mt-4 font-display text-lg font-bold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
