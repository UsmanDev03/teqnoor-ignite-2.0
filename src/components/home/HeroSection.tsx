import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX, FiArrowRight } from "react-icons/fi";
import Button from "@/components/common/Button";
import { fadeIn, staggerContainer } from "@/utils/animations";
import { HERO_STATS, HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/utils/constants";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex h-[85vh] min-h-[700px] w-full items-center overflow-hidden bg-[#12061c] pt-24">
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #10051d 0%, #1e0936 30%, #3d0d40 60%, #830c4f 85%, #d81b60 100%)",
        }}
        aria-hidden
      />

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(219,39,119,0.15) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative z-10 grid h-full grid-cols-12 items-center gap-6"
      >
        {/* Left Column (Text & Content) */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-6 z-10">
          <motion.div
            variants={fadeIn}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-300">
              Innovating Since 2010
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-amber-200 to-pink-400 bg-clip-text text-transparent">
              Your Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              And Innovation
            </span>
            <br />
            <span className="text-white">Partner</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base"
          >
            We help brands and enterprises build stronger products, make smarter decisions and
            achieve better performance.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-6 flex flex-wrap items-center gap-5">
            <Button
              to="/services"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 md:px-8 md:text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Teqnoor IQ
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:text-pink-300 md:text-sm"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-pink-400 group-hover:bg-pink-500/10">
                <FiPlay className="ml-0.5 text-white group-hover:text-pink-400" size={14} />
              </span>
              Play video
            </button>
          </motion.div>

          <motion.dl
            variants={fadeIn}
            className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6 md:mt-10"
          >
            {HERO_STATS.map((stat, index) => {
              const textColors = ["text-purple-400", "text-pink-400", "text-amber-400"];
              return (
                <div key={stat.label} className="group">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    className={`font-display text-2xl font-extrabold transition-transform duration-300 group-hover:scale-105 md:text-3xl lg:text-4xl ${textColors[index % textColors.length]}`}
                  >
                    {stat.value}
                  </dd>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.dl>
        </div>

        {/* Center Blurry Gradient Divider (Col-6 separator) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[120%] w-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent blur-xl lg:block" />

        {/* Right Column (Reference Style 3D Neon Chevron & Tech Visuals) */}
        <motion.div
          variants={fadeIn}
          className="col-span-12 relative flex h-[450px] w-full items-center justify-center lg:col-span-6 lg:h-[90%]"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/40 via-pink-950/20 to-black/60 backdrop-blur-md shadow-2xl">
            {/* Ambient Background Glow inside container */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.35),transparent_60%)]" />

            {/* 3D Glowing Neon Chevron Arrow Animations */}
            <div className="relative flex items-center justify-center">
              {[0, 1, 2].map((layer) => (
                <motion.div
                  key={layer}
                  className="absolute flex items-center justify-center"
                  animate={{
                    x: [0, 15, 0],
                    scale: [1, 1.03, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: layer * 0.4,
                  }}
                  style={{
                    right: `${layer * -35 - 20}px`,
                  }}
                >
                  <div
                    className="h-64 w-64 border-r-[28px] border-t-[28px] md:h-80 md:w-80 md:border-r-[36px] md:border-t-[36px]"
                    style={{
                      borderColor:
                        layer === 0
                          ? "#ff2a8d"
                          : layer === 1
                          ? "#d81b60"
                          : "#8e24aa",
                      transform: "rotate(45deg)",
                      filter: `drop-shadow(0 0 ${20 + layer * 10}px ${
                        layer === 0 ? "#ff2a8d" : "#c2185b"
                      })`,
                      borderRadius: "18px",
                    }}
                  />
                </motion.div>
              ))}

              {/* Central Play Trigger Box */}
              <motion.button
                type="button"
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative z-20 flex h-20 w-20 items-center justify-center rounded-2xl border border-pink-400/50 bg-black/70 shadow-[0_0_40px_rgba(236,72,153,0.6)] backdrop-blur-xl md:h-24 md:w-24"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-600/30 to-purple-600/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <FiPlay size={32} className="ml-1 text-pink-400 transition-colors duration-300 group-hover:text-white" />
              </motion.button>
            </div>

            {/* Subtle Grid Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Corner Tech Label */}
            <div className="absolute bottom-5 right-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-ping" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-pink-300/80">
                TEQNOOR // HIGH-VIS TECH
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2.5 text-white transition-all hover:bg-pink-600 hover:scale-110"
              >
                <FiX size={20} />
              </button>

              <div className="overflow-hidden rounded-2xl border border-pink-500/30 bg-black shadow-2xl shadow-pink-500/20">
                <video
                  src={HERO_VIDEO_URL}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}