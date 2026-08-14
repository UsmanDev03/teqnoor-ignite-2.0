import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { fadeIn, viewportOnce } from "@/utils/animations";

export default function CompanyStory() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          {/* REPLACE LATER: placeholder image */}
          <img
            src="https://picsum.photos/seed/teqnoor-story/800/600"
            alt="Teqnoor studio"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </motion.div>
        <div>
          <SectionTitle
            eyebrow="Our story"
            title="Fifteen years of"
            highlight="building things that last"
            subtitle="What started as a four-person studio is now a global team of specialists across four offices. The constant has been our obsession with craft and the belief that great technology is a team sport."
          />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              We work as an extension of our clients' teams — embedded, accountable and measured on the
              same outcomes they are.
            </p>
            <p>
              From first workshop to production release and beyond, we stay close to the product long
              after launch day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
