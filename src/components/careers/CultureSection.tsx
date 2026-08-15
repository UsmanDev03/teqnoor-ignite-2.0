import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { fadeIn, viewportOnce } from "@/utils/animations";

export default function CultureSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <SectionTitle
          eyebrow="Culture"
          title="Small teams, big"
          highlight="ownership"
          subtitle="No layers of approval between an idea and shipping it. Our teams are small, senior and trusted to make the call — with the support to get it right."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          {/* REPLACE LATER: placeholder image */}
          <img
            src="https://picsum.photos/seed/teqnoor-culture/800/600"
            alt="Life at Teqnoor"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
