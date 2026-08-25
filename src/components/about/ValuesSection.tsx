import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { VALUES } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#07010d] py-20 lg:py-28 text-white border-b border-white/10">
      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Values" title="What we" highlight="stand for" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              variants={slideUp}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#140824]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a5f]/50 hover:bg-[#140824]/90"
            >
              {/* Number Gradient */}
              <span className="font-display text-5xl font-black bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">
                0{i + 1}
              </span>
              
              <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-[#ff7e29] transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-purple-200/70">
                {value.description}
              </p>

              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}