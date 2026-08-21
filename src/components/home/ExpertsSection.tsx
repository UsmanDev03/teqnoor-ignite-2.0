import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import CountUp from "@/components/common/CountUp";
import { EXPERT_STATS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ExpertsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-pink-900/15 blur-[150px]" />

      <div className="shell relative z-10">
        {/* Top Header Grid */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle 
            title="Trusted experts that deliver" 
            highlight="outstanding service" 
            className="text-4xl font-light text-white sm:text-5xl lg:text-5xl"
          />
          <div className="max-w-md space-y-4">
            <p className="text-base leading-relaxed text-purple-200/80">
              By combining 15 years of deep engineering, design and data expertise, our people deliver
              work that consistently exceeds expectations.
            </p>
            <div>
              <Button 
                to="/about" 
                className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <span>&rarr;</span> MEET YOUR TEAM
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image Container with Overlay Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideUp}
          className="relative mt-14 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
        >
          {/* Main Background Image - Tech/Engineering Futuristic Team Vibe */}
          <div className="relative h-[480px] w-full sm:h-[520px] lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Teqnoor developers collaborating in modern tech office"
              loading="lazy"
              className="h-full w-full object-cover grayscale-[20%] contrast-125 transition-transform duration-700 hover:scale-105"
            />
            
            {/* Theme Matched Gradient Overlay (Dark Purple & Magenta Blend) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0414] via-[#0c0414]/65 to-[#0c0414]/30" />
            <div className="absolute inset-0 bg-purple-950/20 mix-blend-color" />
          </div>

          {/* Floating Stats Banner Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="absolute inset-x-0 bottom-0 grid gap-4 p-4 sm:grid-cols-3 sm:p-8 lg:p-10"
          >
            {EXPERT_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label || idx}
                variants={slideUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#170a2b]/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] sm:p-8"
              >
                {/* Subtle top hover line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Big Bold Stat Counter */}
                <p className="font-display text-5xl font-black tracking-tight text-white drop-shadow-md sm:text-6xl lg:text-7xl">
                  <CountUp value={stat.number} suffix={stat.suffix} />
                </p>

                {/* Label Below Counter */}
                <p className="mt-3 text-xs font-semibold lowercase tracking-wide text-purple-200/90 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}