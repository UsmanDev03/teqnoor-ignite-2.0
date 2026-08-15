import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { JOBS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function JobListings() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <SectionTitle eyebrow="Open roles" title="Find your" highlight="next role" />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-10 divide-y divide-border overflow-hidden rounded-md border border-border bg-background"
        >
          {JOBS.map((job) => (
            <motion.li key={job.title} variants={slideUp}>
              <a
                href="#"
                className="flex flex-col gap-2 p-6 transition-colors hover:bg-secondary sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{job.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {job.team} · {job.location} · {job.type}
                  </p>
                </div>
                <FiArrowRight className="text-primary" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
