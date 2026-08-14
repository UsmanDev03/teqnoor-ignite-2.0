import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import Button from "@/components/common/Button";
import { fadeIn, staggerContainer } from "@/utils/animations";

export default function HeroSection() {
  return (
    <section className="gradient-hero relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20">
      {/* REPLACE LATER: placeholder background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-background/40" aria-hidden />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative"
      >
        <motion.h1
          variants={fadeIn}
          className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your technology and innovation partner
        </motion.h1>
        <motion.p variants={fadeIn} className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85">
          We help brands and enterprises build stronger products, make smarter decisions and achieve
          better performance — by connecting the best ideas, engineering and intelligence in one team.
        </motion.p>
        <motion.div variants={fadeIn} className="mt-10 flex flex-wrap items-center gap-5">
          <Button to="/services">Explore Teqnoor IQ</Button>
          <button className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-opacity hover:opacity-80">
            <span className="rounded-sm border border-border p-3">
              <FiPlay />
            </span>
            Play video
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
