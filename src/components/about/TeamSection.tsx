import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { TEAM } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function TeamSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <SectionTitle eyebrow="People" title="The team behind" highlight="Teqnoor" align="center" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={slideUp}
              className="group overflow-hidden rounded-md border border-border bg-card"
            >
              {/* REPLACE LATER: placeholder image */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary">{member.title}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
