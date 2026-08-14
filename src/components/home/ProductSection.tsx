import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { PRODUCT_STEPS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ProductSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <SectionTitle
          eyebrow="Teqnoor IQ"
          title="Technology built to drive"
          highlight="unparalleled performance"
          subtitle="Teqnoor IQ is our award-winning platform that unifies your entire delivery ecosystem. Plan, build and optimize connected products and campaigns from one place, with a complete view of what your customers are doing."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-4"
        >
          {PRODUCT_STEPS.map((step) => (
            <motion.a
              key={step.title}
              href="#"
              variants={slideUp}
              className="flex items-center gap-5 rounded-md border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow"
            >
              {/* REPLACE LATER: placeholder image */}
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="h-20 w-28 rounded-sm object-cover"
              />
              <div className="flex-1">
                <p className="font-display text-xl font-bold uppercase tracking-wide">{step.title}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {step.subtitle}
                </p>
              </div>
              <FiArrowRight className="text-primary" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
