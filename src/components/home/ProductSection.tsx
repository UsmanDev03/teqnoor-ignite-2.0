import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { PRODUCT_STEPS } from "@/utils/constants";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function ProductSection() {
  // Reference image ke vivid high-saturation gradients
  const CARD_GRADIENTS = [
    "from-[#7c3aed] via-[#d946ef] to-[#ec4899]", // Purple -> Magenta -> Pink
    "from-[#ff2a5f] via-[#ff523b] to-[#ff7e29]", // Bright Neon Coral -> Warm Orange
    "from-[#ff3366] via-[#ff7034] to-[#ffb800]", // Hot Pink -> Vibrant Yellow/Gold
    "from-[#6366f1] via-[#a855f7] to-[#ec4899]", // Electric Indigo -> Purple -> Magenta
  ];

  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-pink-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-12">
        {/* Left Typography Section */}
        <div className="lg:col-span-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="max-w-xl space-y-6"
          >
            <motion.h2
              variants={slideUp}
              className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Technology built to drive{" "}
              <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff7034] to-[#ffb800] bg-clip-text text-transparent">
                unparalleled performance
              </span>
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="text-base leading-relaxed text-purple-200/90 md:text-lg"
            >
              Teqnoor IQ is our award-winning platform that unifies your entire delivery
              ecosystem. Plan, build and optimize connected products and campaigns from one
              place, with a complete view of what your customers are doing.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Feature Banners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-5 lg:col-span-6"
        >
          {PRODUCT_STEPS.map((step, index) => {
            const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

            return (
              <motion.a
                key={step.title}
                href="#"
                variants={slideUp}
                className="group relative flex h-28 w-full items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-[#160926] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
              >
                {/* Left Side: Graphic Visual with Vivid Vibrant Overlay */}
                <div className="relative h-full w-2/5 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* High Saturation Color Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-70 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-90`} />
                  
                  {/* Smooth Right Transition Gradient into Dark Card Base */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#160926]/50 to-[#160926]" />
                </div>

                {/* Text Information */}
                <div className="flex flex-1 flex-col justify-center px-6 text-right sm:text-left">
                  <h3 className="font-display text-xl font-black uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-pink-300 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-widest text-[#ff3366]">
                    {step.subtitle}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="pr-8 text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#ff3366]">
                  <FiArrowRight size={28} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}