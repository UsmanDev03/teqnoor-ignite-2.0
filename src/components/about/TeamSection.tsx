import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { TEAM } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#07010d] py-20 lg:py-28 text-white border-b border-white/10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-[140px]" />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="People" title="The team behind" highlight="Teqnoor" align="center" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={slideUp}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#140824]/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a5f]/50 hover:shadow-2xl hover:shadow-[#ff2a5f]/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140824] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-6 relative z-10 -mt-6">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ff7e29] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#ff2a5f]">
                  {member.title}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}