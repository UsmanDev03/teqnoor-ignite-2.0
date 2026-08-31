import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { slideUp, viewportOnce } from "@/utils/animations";

export default function ExpertsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-pink-900/15 blur-[150px]" />

      <div className="shell relative z-10">
        {/* Top Header Grid */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff7e29]"
            >
              Verified Response
            </motion.div>

            <SectionTitle 
              title="The Same Specialist Team," 
              highlight="From First Call to Launch." 
              className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            />
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-base leading-relaxed text-purple-200/80">
              The people you meet at the start are the people who build your project, the same specialist engineers, designers and marketers from first call to launch and beyond. They have delivered real B2B work across a wide range of sectors, so you get proven hands, clear communication, and a straight answer whenever you need one.
            </p>
            <div>
              <Button 
                to="/about" 
                className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <span>&rarr;</span> Meet the team
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
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
        </motion.div>
      </div>
    </section>
  );
}