import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/common/Button";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e60067] via-[#ff4d00] via-70% to-[#ffb800] py-20 text-white lg:py-28">
      <div className="shell relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          {/* Main Headline with Smooth Text Color Hover Only */}
          <motion.h2
            variants={slideUp}
            className="group cursor-pointer font-display text-5xl font-black uppercase tracking-tight text-white transition-colors duration-300 hover:text-[#1a0022] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            GET IN TOUCH
          </motion.h2>

          {/* Right Content & Action */}
          <motion.div
            variants={slideUp}
            className="flex max-w-md flex-col items-start space-y-6"
          >
            <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-base">
              Interested in working with us? Working for us? Just want to talk
              about all things programmatic? We&apos;d love to chat, so send us a
              message below.
            </p>

            {/* Clean Pill Button with a Single Icon */}
            <Button
              to="/contact"
              className="group inline-flex items-center rounded-full border-2 border-[#1a0022] bg-[#1a0022] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1a0022] hover:shadow-2xl"
            >
              <span>LET&apos;S TALK</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}