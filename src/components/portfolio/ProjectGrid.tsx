import { motion } from "framer-motion";
import { PROJECTS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ProjectGrid({ category }: { category: string }) {
  const projects =
    category === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  return (
    <motion.div
      key={category}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.article
          key={project.title}
          variants={slideUp}
          className="group overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow"
        >
          {/* REPLACE LATER: placeholder image */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-primary">{project.category}</p>
            <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
