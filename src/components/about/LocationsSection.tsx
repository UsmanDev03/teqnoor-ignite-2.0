import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { LOCATIONS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function LocationsSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <SectionTitle eyebrow="Global" title="Offices" highlight="worldwide" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {LOCATIONS.map((loc) => (
            <motion.div key={loc.city} variants={slideUp} className="bg-background p-7">
              <h3 className="font-display text-xl font-bold">{loc.city}</h3>
              <p className="text-xs uppercase tracking-widest text-primary">{loc.country}</p>
              <p className="mt-4 text-sm text-muted-foreground">{loc.address}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
