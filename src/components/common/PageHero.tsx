import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function PageHero({ eyebrow, title, highlight, description }: Props) {
  return (
    <section className="gradient-hero relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 bg-background/25" aria-hidden />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="shell relative max-w-3xl"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl md:text-6xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85">{description}</p>
      </motion.div>
    </section>
  );
}
