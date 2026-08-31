import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { SERVICES } from "@/utils/constants";

export default function SolutionsSection() {
  // Screenshot colors based vivid gradients
  const VIBRANT_GRADIENTS = [
    "from-[#a855f7] via-[#ec4899] to-[#f43f5e]", // Purple / Pink
    "from-[#ff3366] via-[#ff523b] to-[#ff7e29]", // Bright Orange / Coral
    "from-[#ec4899] via-[#d946ef] to-[#a855f7]", // Magenta / Purple
    "from-[#ffb800] via-[#ff7034] to-[#ff3366]", // Gold / Coral / Pink
    "from-[#4c1d95] via-[#831843] to-[#1e1b4b]", // Dark Performance Gradient
    "from-[#ff523b] via-[#ff7e29] to-[#ffb800]", // Bright Sunset Gradient
  ];

  // Infinite scroll logic mapping
  const col1Services = SERVICES.filter((_, i) => i % 3 === 0);
  const col2Services = SERVICES.filter((_, i) => i % 3 === 1);
  const col3Services = SERVICES.filter((_, i) => i % 3 === 2);

  // Fallback duplicates if SERVICES array length is small
  const marqueeCol1 = [...col1Services, ...col1Services, ...col1Services];
  const marqueeCol2 = [...col2Services, ...col2Services, ...col2Services];
  const marqueeCol3 = [...col3Services, ...col3Services, ...col3Services];

  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-pink-900/15 blur-[150px]" />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-12">
        
        {/* LEFT COLUMN: Infinite Vertical Scrolling Cards Showcase */}
        <div className="relative h-[580px] overflow-hidden lg:col-span-7">
          {/* Top & Bottom Fade Overlay Masks for Smooth Scroll Effect (Matched to dark bg) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-[#0c0414] via-[#0c0414]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#0c0414] via-[#0c0414]/80 to-transparent" />

          <div className="grid grid-cols-3 gap-4 h-full">
            
            {/* Scroll Column 1 (Upward Scroll) */}
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex flex-col gap-4"
            >
              {marqueeCol1.map((service, idx) => (
                <ServiceCard key={`c1-${idx}`} service={service} index={idx} gradients={VIBRANT_GRADIENTS} />
              ))}
            </motion.div>

            {/* Scroll Column 2 (Downward Scroll) */}
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex flex-col gap-4"
            >
              {marqueeCol2.map((service, idx) => (
                <ServiceCard key={`c2-${idx}`} service={service} index={idx + 1} gradients={VIBRANT_GRADIENTS} />
              ))}
            </motion.div>

            {/* Scroll Column 3 (Upward Scroll) */}
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
              className="flex flex-col gap-4"
            >
              {marqueeCol3.map((service, idx) => (
                <ServiceCard key={`c3-${idx}`} service={service} index={idx + 2} gradients={VIBRANT_GRADIENTS} />
              ))}
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN: Text & Action Button */}
        <div className="lg:col-span-5 lg:pl-6">
          <div className="max-w-lg space-y-6">
            <SectionTitle
              eyebrow="Solutions"
              title="B2B Buyers Judge Fast. We Build Every Page to Win Them Over."
              highlight="Win Them Over."
              className="text-4xl font-light text-white sm:text-5xl lg:text-5xl leading-tight"
            />

            <p className="text-base leading-relaxed text-purple-200/80 md:text-lg">
B2B buyers do not browse. They check you out, compare you, and only then get in touch. So we build every site and campaign for that path: clear on what you do, easy to trust, and quick to act on. Every plan is shaped around your market and your goals, not a template.
            </p>

            <div className="pt-2">
              <Button
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <span>&rarr;</span> FIND YOUR SOLUTION
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual notched service cards
function ServiceCard({ service, index, gradients }) {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      style={{
        clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
      }}
      className={`group relative h-48 w-full overflow-hidden bg-gradient-to-br ${gradient} p-4 shadow-md transition-transform duration-300 hover:scale-[1.03]`}
    >
      {/* Background Graphic / Image Overlay */}
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-50 transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Title */}
      <div className="relative z-10">
        <h3 className="font-display text-sm font-black uppercase tracking-wider text-white drop-shadow-md sm:text-base">
          {service.title}
        </h3>
      </div>

      {/* Floating Center Icon or Visual Graphic */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <span className="text-3xl drop-shadow-lg opacity-90 transition-transform duration-300 group-hover:scale-125">
          {service.icon || "✦"}
        </span>
      </div>
    </div>
  );
}