import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";
import Button from "@/components/common/Button";
import { fadeIn, staggerContainer } from "@/utils/animations";
import { HERO_STATS, HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/utils/constants";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-nav pt-32 pb-20">
      <div className="gradient-hero absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-nav/60" aria-hidden />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.h1
            variants={fadeIn}
            className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your technology and innovation partner
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85"
          >
            We help brands and enterprises build stronger products, make smarter decisions and
            achieve better performance.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap items-center gap-6">
            <Button to="/services">Explore Teqnoor IQ</Button>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-nav-accent"
            >
              <FiPlay />
              Play video
            </button>
          </motion.div>

          <motion.dl variants={fadeIn} className="mt-12 flex flex-wrap gap-10">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-white md:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* REPLACE WITH REAL VIDEO LATER */}
        <motion.button
          variants={fadeIn}
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Play showreel video"
          className="group relative aspect-video w-full overflow-hidden rounded-sm border border-border"
        >
          <img
            src={HERO_VIDEO_POSTER}
            alt="Teqnoor showreel thumbnail"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-nav/35" aria-hidden />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-nav-accent/50" />
              <span className="absolute -inset-3 rounded-full border border-nav-accent/40" />
              <span className="gradient-pink-orange relative flex h-20 w-20 items-center justify-center rounded-full text-white">
                <FiPlay size={26} className="ml-1" />
              </span>
            </span>
          </span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Teqnoor showreel"
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 rounded-sm border border-border p-2 text-white hover:text-nav-accent"
              >
                <FiX size={20} />
              </button>
              {/* REPLACE WITH REAL VIDEO LATER */}
              <video
                src={HERO_VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full rounded-sm bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
