import { motion } from "framer-motion";
import { staggerContainer, slideUp, viewportOnce } from "@/utils/animations";

export default function TrustedBySection() {
  const CLIENTS = [
    { name: "JK Foods UK" },
    { name: "Tiger Tiger Foods" },
    { name: "Harris Hair Transplant" },
    { name: "TMDrive" },
  ];

  // Quadruple the array to guarantee plenty of items width-wise for a smooth loop
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-10 lg:py-12 text-white border-y border-white/10">
      {/* Background Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />

      {/* Full shell width or nicely padded container */}
      <div className="shell relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center space-y-2"
        >
          <motion.p
            variants={slideUp}
            className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff3366]"
          >
            Trusted By
          </motion.p>
          <motion.h2
            variants={slideUp}
            className="text-sm font-medium text-purple-200/90 sm:text-base"
          >
            Trusted by UK firms in food, healthcare and automotive.
          </motion.h2>
        </motion.div>

        {/* Infinite Moving Text Marquee Slider */}
        <div className="mt-8 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 lg:gap-24">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex items-center justify-center py-2 shrink-0"
              >
                <span className="font-display text-base sm:text-lg font-bold tracking-wide text-white/40 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation Keyframes (-25% since we duplicated 4 times) */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}