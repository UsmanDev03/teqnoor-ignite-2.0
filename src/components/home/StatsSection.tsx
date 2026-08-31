import { motion } from "framer-motion";
import CountUp from "@/components/common/CountUp";
import { STATS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function StatsSection() {
  return (
    <section className="gradient-warm relative z-20 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="shell grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={slideUp}>
            <p className="font-display text-2xl font-extrabold text-primary-foreground sm:text-3xl md:text-4xl">
              <CountUp value={stat.number} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/85">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}