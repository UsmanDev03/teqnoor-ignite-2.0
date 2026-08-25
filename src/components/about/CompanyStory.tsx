import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { fadeIn, viewportOnce } from "@/utils/animations";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-[#07010d] py-20 lg:py-28 text-white border-b border-white/10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#ff2a5f]/10 blur-[130px]" />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Tech Workspace Image with Glowing Border */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportOnce} 
          variants={fadeIn}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#ff2a5f] to-[#7c3aed] opacity-30 blur-lg transition duration-500 group-hover:opacity-70" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#140824]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Teqnoor Software Engineering Team"
              loading="lazy"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07010d] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* Updated Teqnoor Specific Content */}
        <div>
          <SectionTitle
            eyebrow="Our story"
            title="Engineering digital solutions with"
            highlight="precision & speed"
            subtitle="At Teqnoor, we combine modern software architecture, bespoke UI/UX designs, and robust cloud deployments to bring high-impact web products to life."
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-purple-200/70 border-l-2 border-[#ff2a5f]/40 pl-4">
            <p>
              We function as a dedicated technical partner for web apps, enterprise integrations, and digital platforms — ensuring clean code architecture, rapid performance, and bulletproof security.
            </p>
            <p>
              From initial technical architecture and design sprints to deployment and post-launch maintenance, our team remains deeply invested in every line of code we ship.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}