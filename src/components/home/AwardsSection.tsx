import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { AWARDS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

// Custom 4-Point Sparkle Star SVG (Matches exact image icon)
function FourPointStar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-900/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-pink-900/15 blur-[140px]" />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.8fr]">
        {/* Left Content Column */}
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Recognition"
            title="See how we take our clients to the"
            highlight="nth degree"
            className="text-4xl font-light text-white sm:text-5xl lg:text-5xl leading-tight"
          />

          <p className="text-base leading-relaxed text-purple-200/80">
            Industry recognition and global accolades for engineering excellence, design innovation, and digital strategy.
          </p>

          <div className="pt-2">
            <Button
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span>&rarr;</span> DISCOVER MORE
            </Button>
          </div>
        </div>

        {/* Right Awards Grid Showcase */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {AWARDS.map((award, idx) => (
            <motion.li
              key={typeof award === "string" ? award : award.name || idx}
              variants={slideUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#160926] p-6 shadow-md transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]"
            >
              {/* Top Accent Gradient Border on Hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff2a5f] via-[#ff7034] to-[#ffb800] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Award Index/Year & Sparkle Star Icon */}
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#ff3366]">
                <span>{award.year || (idx + 1 < 10 ? `0${idx + 1}` : idx + 1)}</span>
                
                {/* Image-matched 4-point Sparkle Icon */}
                <FourPointStar className="text-[#ff2a5f] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#ff7034]" />
              </div>

              {/* Award Title */}
              <div className="mt-8">
                <h3 className="font-display text-sm font-black uppercase tracking-wider text-purple-100/90 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {typeof award === "string" ? award : award.name}
                </h3>
                {award.category && (
                  <p className="mt-1 text-[11px] font-medium text-purple-300/60">
                    {award.category}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}