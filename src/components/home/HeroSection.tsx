import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX, FiArrowRight, FiCpu, FiZap, FiGlobe } from "react-icons/fi";
import Button from "@/components/common/Button";
import { fadeIn, staggerContainer } from "@/utils/animations";
import { HERO_STATS, HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/utils/constants";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex h-[85vh] min-h-[700px] w-full items-center overflow-hidden bg-nav pt-24">
      {/* Background - Tech Gradient */}
      <div
        className="absolute inset-0"
        style={{ 
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 30%, #0f3460 60%, #0a0a2a 100%)" 
        }}
        aria-hidden
      />
      
      {/* Animated Circuit Lines Background */}
      <div className="absolute inset-0 opacity-[0.05] overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-white"
            style={{
              top: `${(i + 1) * 12}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Animated Gradient Orbs - Fast */}
      <div 
        className="absolute inset-0 opacity-60" 
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(0, 200, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(233, 69, 96, 0.25) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(100, 100, 255, 0.1) 0%, transparent 60%)"
        }}
        aria-hidden
      />
      
      {/* Tech Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
        aria-hidden
      />

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#e94560" : "#00ccff",
            }}
            animate={{
              y: [0, -100 - Math.random() * 100, 0],
              x: [0, (Math.random() - 0.5) * 60, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content - Grid Layout */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative grid h-full grid-cols-12 gap-6"
      >
        {/* Left Column - 6 columns */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-6">
          {/* Badge - Tech Style */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-[#e94560]/30 bg-[#e94560]/10 px-4 py-1.5 mb-4 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e94560] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e94560]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#e94560]">
              Next-Gen Technology
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient bg-gradient-to-r from-white via-white to-[#00ccff] bg-clip-text text-transparent">
              Your Technology
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-[#e94560] via-[#ff6b6b] to-[#ff9f43] bg-clip-text text-transparent">
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

          <motion.div variants={fadeIn} className="mt-6 flex flex-wrap items-center gap-4">
            <Button 
              to="/services" 
              className="group relative overflow-hidden bg-gradient-to-r from-[#e94560] to-[#ff6b6b] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#e94560]/30 hover:scale-105 md:px-8 md:py-3.5 md:text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Teqnoor IQ
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#e94560] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
            
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-[#e94560] md:gap-3 md:text-sm"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#e94560] group-hover:shadow-lg group-hover:shadow-[#e94560]/20 md:h-10 md:w-10">
                <FiPlay className="ml-0.5 text-white transition-colors duration-300 group-hover:text-[#e94560]" size={12} />
              </span>
              Play video
            </button>
          </motion.div>

          {/* Stats */}
          <motion.dl variants={fadeIn} className="mt-8 flex flex-wrap gap-6 border-t border-white/5 pt-6 md:gap-10 md:mt-10 md:pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="group">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#e94560] md:text-3xl lg:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50 transition-colors duration-300 group-hover:text-white/70 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right Column - Tech Animated Visual */}
        <motion.div
          variants={fadeIn}
          className="col-span-12 relative h-[45vh] w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-[#e94560]/10 transition-all duration-500 hover:shadow-[#e94560]/30 lg:col-span-6 lg:h-full lg:min-h-[400px]"
        >
          {/* Animated Background - Dark Tech */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f3460] to-[#1a1a3e]" />
          
          {/* Fast Moving Tech Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#e94560]/30 to-transparent"
                style={{
                  width: `${60 + Math.random() * 40}%`,
                  top: `${10 + i * 15}%`,
                  left: `${Math.random() * 30}%`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Fast Floating Tech Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              {/* Spinning Outer Ring - Fast */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#e94560]/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Spinning Middle Ring - Fast Opposite */}
              <motion.div
                className="absolute inset-6 rounded-full border border-[#00ccff]/15"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.98, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Spinning Inner Ring - Fast */}
              <motion.div
                className="absolute inset-12 rounded-full border border-white/10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Orbiting Tech Icons - Fast */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[
                  { icon: FiCpu, color: "#e94560" },
                  { icon: FiZap, color: "#ff9f43" },
                  { icon: FiGlobe, color: "#00ccff" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const angle = (i / 3) * 360;
                  const radius = 80;
                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${radius * Math.cos(angle * Math.PI / 180)}px - 12px)`,
                        top: `calc(50% + ${radius * Math.sin(angle * Math.PI / 180)}px - 12px)`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Center - Rotating Tech Cube */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 180, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e94560]/30 to-[#00ccff]/30 backdrop-blur-sm border-2 border-[#e94560]/40 shadow-2xl shadow-[#e94560]/20">
                  <motion.span
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ⚡
                  </motion.span>
                </div>
              </motion.div>

              {/* Fast Floating Code Particles */}
              {["{ }", "</>", "()", "[]", "=>", "//"].map((code, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[8px] font-mono font-bold text-white/20 md:text-[10px]"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -60 - Math.random() * 40, 0],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Corner Tech Accent */}
          <span className="absolute top-0 right-0 h-20 w-20 overflow-hidden md:h-24 md:w-24">
            <span className="absolute -right-12 -top-12 h-20 w-20 rotate-45 bg-gradient-to-br from-[#e94560]/30 to-[#00ccff]/20 md:h-24 md:w-24" />
          </span>

          {/* Bottom Label - Tech */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium uppercase tracking-widest text-white/30 md:text-xs">
            &lt; interactive /&gt;
          </span>

          {/* Corner Tech Dots */}
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#e94560]"
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Click to Play Overlay */}
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            <span className="relative flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
              {/* Fast Pulse Rings */}
              <motion.span
                className="absolute inset-0 rounded-full bg-[#e94560]/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute -inset-2 rounded-full border border-[#e94560]/20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              
              {/* Play Button */}
              <motion.span
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#e94560] to-[#ff6b6b] text-white shadow-2xl shadow-[#e94560]/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#e94560]/60 md:h-16 md:w-16"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiPlay size={20} className="ml-1 md:size-6" />
              </motion.span>
            </span>
          </button>
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-[#e94560] hover:scale-110 md:-top-14 md:p-3"
              >
                <FiX size={18} className="md:size-5" />
              </button>
              
              {/* Video Player */}
              <div className="overflow-hidden rounded-xl bg-black shadow-2xl shadow-[#e94560]/20">
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