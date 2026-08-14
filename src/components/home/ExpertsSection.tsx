import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import CountUp from "@/components/common/CountUp";
import { EXPERT_STATS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ExpertsSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle title="Trusted experts that deliver" highlight="outstanding service" />
          <div className="max-w-md">
            <p className="text-sm text-muted-foreground">
              By combining 15 years of deep engineering, design and data expertise, our people deliver
              work that consistently exceeds expectations.
            </p>
            <Button to="/about" className="mt-5">
              Meet your team
            </Button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-md">
          {/* REPLACE LATER: placeholder image */}
          <img
            src="https://picsum.photos/seed/teqnoor-team/1400/600"
            alt="Teqnoor team members collaborating"
            loading="lazy"
            className="h-[380px] w-full object-cover"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="absolute inset-x-0 bottom-0 grid gap-4 p-4 sm:grid-cols-3 sm:p-8"
          >
            {EXPERT_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={slideUp}
                className="rounded-sm border border-border bg-background/85 p-5 backdrop-blur"
              >
                <p className="font-display text-3xl font-extrabold text-gradient">
                  <CountUp value={stat.number} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
