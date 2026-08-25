import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { LOCATIONS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07010d] py-20 lg:py-28 text-white border-b border-white/10">
      {/* Glow Backdrop */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full bg-[#ff2a5f]/10 blur-[130px]" />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Global" title="Offices" highlight="worldwide" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LOCATIONS.map((loc) => (
            <motion.div 
              key={loc.city} 
              variants={slideUp} 
              className="group relative rounded-2xl border border-white/10 bg-[#140824]/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a5f]/50 hover:bg-[#140824]/90"
            >
              <h3 className="font-display text-2xl font-black text-white group-hover:text-[#ff7e29] transition-colors duration-300">
                {loc.city}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#ff2a5f]">
                {loc.country}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-purple-200/70 border-t border-white/10 pt-4">
                {loc.address}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}