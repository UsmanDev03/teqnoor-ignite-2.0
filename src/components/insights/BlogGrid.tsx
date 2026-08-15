import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { BLOG_POSTS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function BlogGrid() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <SectionTitle eyebrow="Latest" title="From the" highlight="Teqnoor blog" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={slideUp}
              className="group overflow-hidden rounded-md border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow"
            >
              {/* REPLACE LATER: placeholder image */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">
                  {post.category} · {post.date}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
