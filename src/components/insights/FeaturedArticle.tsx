import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { FEATURED_ARTICLE } from "@/utils/constants";
import { fadeIn, viewportOnce } from "@/utils/animations";

export default function FeaturedArticle() {
  return (
    <section className="section-pad bg-background">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeIn}
        className="shell grid items-center gap-10 overflow-hidden rounded-md border border-border bg-card lg:grid-cols-2"
      >
        {/* REPLACE LATER: placeholder image */}
        <img
          src={FEATURED_ARTICLE.image}
          alt={FEATURED_ARTICLE.title}
          loading="lazy"
          className="h-full max-h-[420px] w-full object-cover"
        />
        <div className="p-8">
          <p className="text-xs uppercase tracking-widest text-primary">
            {FEATURED_ARTICLE.category} · {FEATURED_ARTICLE.date}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            {FEATURED_ARTICLE.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {FEATURED_ARTICLE.excerpt}
          </p>
          <Button href="#" className="mt-8">
            Read the report
          </Button>
        </div>
      </motion.article>
    </section>
  );
}
