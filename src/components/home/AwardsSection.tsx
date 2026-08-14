import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { AWARDS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function AwardsSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionTitle title="See how we take our clients to the" highlight="nth degree" />
          <p className="mt-4 text-sm text-muted-foreground">Industry recognition from around the world</p>
          <Button to="/portfolio" variant="outline" className="mt-6">
            Discover more
          </Button>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3"
        >
          {AWARDS.map((award) => (
            <motion.li
              key={award}
              variants={slideUp}
              className="flex min-h-[130px] items-center justify-center bg-surface p-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {award}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
