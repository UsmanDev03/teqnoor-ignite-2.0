import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX, FiArrowRight } from "react-icons/fi";
import Button from "@/components/common/Button";
import { fadeIn, staggerContainer } from "@/utils/animations";
import { HERO_STATS, HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/utils/constants";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex h-[85vh] min-h-[700px] w-full items-center overflow-hidden bg-nav pt-24">
      {/* Background - Vibrant Purple to Red/Orange Gradient */}
      <div
        className="absolute inset-0"
        style={{ 
          background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 25%, #4a1942 50%, #7a1a3a 75%, #c0392b 100%)" 
        }}
        aria-hidden
      />
      
      {/* Vibrant Glow Orbs - Purple/Red/Orange */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { x: "15%", y: "20%", size: "50vh", color: "rgba(138, 43, 226, 0.25)", delay: 0, dur: 10 },
          { x: "75%", y: "60%", size: "60vh", color: "rgba(231, 76, 60, 0.2)", delay: 3, dur: 14 },
          { x: "45%", y: "80%", size: "40vh", color: "rgba(241, 196, 15, 0.15)", delay: 6, dur: 12 },
          { x: "85%", y: "25%", size: "45vh", color: "rgba(155, 89, 182, 0.2)", delay: 2, dur: 16 },
          { x: "10%", y: "70%", size: "35vh", color: "rgba(192, 57, 43, 0.15)", delay: 4, dur: 18 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -50, 30, 0],
              scale: [1, 1.15, 0.85, 1],
            }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Particles - Purple/Red/Orange */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => {
          const colors = ["#8e44ad", "#e74c3c", "#f39c12", "#9b59b6", "#c0392b"];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: colors[i % colors.length],
                opacity: 0.3,
                boxShadow: `0 0 20px ${colors[i % colors.length]}40`,
              }}
              animate={{
                y: [0, -Math.random() * 300 - 100, 0],
                x: [0, (Math.random() - 0.5) * 150, 0],
                opacity: [0, 0.6, 0],
                scale: [0.3, 1.5, 0.3],
                rotate: [0, Math.random() * 360, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Diagonal Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute h-[200%] w-[1px] bg-white"
            style={{
              left: `${10 + i * 16}%`,
              top: "-50%",
              transform: `rotate(${15 + i * 5}deg)`,
              transformOrigin: "center center",
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }}
        aria-hidden
      />

      {/* Main Content - Grid Layout */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative grid h-full grid-cols-12 gap-6"
      >
        {/* Left Column - 6 columns */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-6">
          {/* Badge - Vibrant Style */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-[#e74c3c]/30 bg-[#e74c3c]/10 px-4 py-1.5 mb-4 w-fit backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e74c3c] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e74c3c]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#e74c3c]">
              Innovating Since 2010
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient bg-gradient-to-r from-white via-[#f1c40f] to-[#e74c3c] bg-clip-text text-transparent">
              Your Technology
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-[#9b59b6] via-[#e74c3c] to-[#f39c12] bg-clip-text text-transparent">
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
              className="group relative overflow-hidden bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#9b59b6]/30 hover:scale-105 md:px-8 md:py-3.5 md:text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Teqnoor IQ
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e74c3c] to-[#9b59b6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
            
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/90 transition-all duration-300 hover:text-[#f1c40f] md:gap-3 md:text-sm"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#f1c40f] group-hover:shadow-lg group-hover:shadow-[#f1c40f]/20 md:h-10 md:w-10">
                <FiPlay className="ml-0.5 text-white/90 transition-colors duration-300 group-hover:text-[#f1c40f]" size={12} />
              </span>
              Play video
            </button>
          </motion.div>

          {/* Stats - Vibrant Colors */}
          <motion.dl variants={fadeIn} className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 md:gap-10 md:mt-10 md:pt-8">
            {HERO_STATS.map((stat, index) => {
              const colors = ["#9b59b6", "#e74c3c", "#f39c12"];
              return (
                <div key={stat.label} className="group">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd 
                    className="font-display text-2xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#f1c40f] md:text-3xl lg:text-4xl"
                    style={{ color: colors[index % colors.length] }}
                  >
                    {stat.value}
                  </dd>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50 transition-colors duration-300 group-hover:text-white/70 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.dl>
        </div>

        {/* Right Column - New Animation (Rotating Geometric Shapes) */}
        <motion.div
          variants={fadeIn}
          className="col-span-12 relative h-[45vh] w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-[#9b59b6]/20 transition-all duration-500 hover:shadow-[#9b59b6]/40 lg:col-span-6 lg:h-full lg:min-h-[400px]"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b69] to-[#4a1942]" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(155, 89, 182, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 60%, rgba(231, 76, 60, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 50%, rgba(241, 196, 15, 0.2) 0%, transparent 60%)",
                "radial-gradient(circle at 30% 40%, rgba(155, 89, 182, 0.3) 0%, transparent 60%)",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating Geometric Shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              {/* Large Rotating Square */}
              <motion.div
                className="absolute inset-0 border-2 border-[#9b59b6]/20 rounded-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Medium Rotating Triangle (using diamond shape) */}
              <motion.div
                className="absolute inset-8 border-2 border-[#e74c3c]/20"
                style={{
                  transform: "rotate(45deg)",
                  borderRadius: "50%",
                }}
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Small Rotating Circle */}
              <motion.div
                className="absolute inset-16 rounded-full border-2 border-[#f1c40f]/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Floating Diamonds */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 360;
                const radius = 80;
                const colors = ["#9b59b6", "#e74c3c", "#f39c12", "#8e44ad", "#c0392b"];
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${radius * Math.cos(angle * Math.PI / 180)}px - 8px)`,
                      top: `calc(50% + ${radius * Math.sin(angle * Math.PI / 180)}px - 8px)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.3, 0.8],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <div 
                      className="h-4 w-4 transform rotate-45"
                      style={{
                        background: colors[i % colors.length],
                        opacity: 0.6,
                        boxShadow: `0 0 30px ${colors[i % colors.length]}40`,
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Center - Pulsing Star */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#9b59b6]/30 to-[#e74c3c]/30 backdrop-blur-sm border-2 border-[#f1c40f]/30 shadow-2xl shadow-[#9b59b6]/20">
                  <motion.span
                    className="text-5xl"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ✦
                  </motion.span>
                </div>
              </motion.div>

              {/* Floating Code Particles */}
              {["{ }", "</>", "()", "[]", "=>", "//"].map((code, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[8px] font-mono font-bold text-white/20 md:text-[10px]"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -80 - Math.random() * 60, 0],
                    x: [0, (Math.random() - 0.5) * 50, 0],
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, Math.random() * 180, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Corner Accent */}
          <span className="absolute top-0 right-0 h-20 w-20 overflow-hidden md:h-24 md:w-24">
            <span className="absolute -right-12 -top-12 h-20 w-20 rotate-45 bg-gradient-to-br from-[#9b59b6]/30 to-[#e74c3c]/20 md:h-24 md:w-24" />
          </span>

          {/* Bottom Label */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium uppercase tracking-widest text-white/30 md:text-xs">
            ✦ interactive ✦
          </span>

          {/* Corner Dots */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {["#9b59b6", "#e74c3c", "#f1c40f"].map((color, i) => (
              <motion.div
                key={i}
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: color }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
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
              {/* Pulse Rings */}
              <motion.span
                className="absolute inset-0 rounded-full bg-[#9b59b6]/30"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute -inset-3 rounded-full border border-[#e74c3c]/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              
              {/* Play Button */}
              <motion.span
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#9b59b6] to-[#e74c3c] text-white shadow-2xl shadow-[#9b59b6]/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#9b59b6]/60 md:h-16 md:w-16"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
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
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-[#e74c3c] hover:scale-110 md:-top-14 md:p-3"
              >
                <FiX size={18} className="md:size-5" />
              </button>
              
              {/* Video Player */}
              <div className="overflow-hidden rounded-xl bg-black shadow-2xl shadow-[#9b59b6]/20">
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