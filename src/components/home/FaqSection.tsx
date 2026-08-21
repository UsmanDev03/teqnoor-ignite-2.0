import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiHelpCircle, 
  FiZap, 
  FiLock, 
  FiMousePointer 
} from "react-icons/fi";

const FAQS = [
  {
    id: 1,
    question: "What core tech stacks does Teqnoor Limited specialize in?",
    answer: "We specialize in full-stack web engineering using modern frameworks like React, Next.js, TypeScript, Node.js, Laravel, Supabase, and SQL/NoSQL databases tailored for performance and enterprise scale."
  },
  {
    id: 2,
    question: "How long does a custom web project typically take?",
    answer: "Project timelines vary based on scope. Typical web applications take between 4 to 8 weeks from design architecture to final deployment."
  },
  {
    id: 3,
    question: "Do you offer post-launch maintenance and support?",
    answer: "Yes, Teqnoor provides ongoing technical support, infrastructure maintenance, security updates, and performance monitoring."
  },
  {
    id: 4,
    question: "How does the SEO and Audit process work?",
    answer: "We perform a thorough technical review analyzing code performance, page speed, mobile optimization, crawlability, and schema structures to generate a prioritized optimization roadmap."
  },
  {
    id: 5,
    question: "How do you handle project management and communication?",
    answer: "We use agile workflows with weekly sprint demos, dedicated Slack channels, and clear milestones so you have full visibility into engineering progress."
  },
  {
    id: 6,
    question: "Can you seamlessly integrate custom APIs and payment gateways?",
    answer: "Absolutely. We specialize in custom integrations including Stripe, PayPal, Mux Video, external CRMs, and custom REST or GraphQL APIs."
  },
  {
    id: 7,
    question: "Do you assist with server configuration and cloud deployment?",
    answer: "Yes, we handle complete DevOps workflows including server setup, Vercel/Hostinger/AWS deployments, DNS configuration, and automated CI/CD pipelines."
  },
  {
    id: 8,
    question: "What makes custom web development better than standard templates?",
    answer: "Custom builds offer superior performance, robust security, tailored UI/UX, unlimited scalability, and complete control over your technical roadmap without template bloat."
  }
];

export default function FaqSection() {
  // Pinned index stores the permanently clicked selection
  const [pinnedIdx, setPinnedIdx] = useState<number>(0);
  // Hovered index stores temporary hover states (null when not hovering)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Active item is hovered item if present, otherwise pinned item
  const activeIdx = hoveredIdx !== null ? hoveredIdx : pinnedIdx;
  const isCurrentlyPinned = activeIdx === pinnedIdx;

  return (
    <section className="relative overflow-hidden bg-[#07010d] py-24 lg:py-32 text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#ff2a5f]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#ff7e29]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="shell relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-14 space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#ff7e29]"
          >
            <FiHelpCircle className="text-[#ff2a5f] text-sm" /> KNOWLEDGE BASE
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Browse <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">Questions.</span>
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Question Buttons with Hover & Pin */}
          <div 
            className="lg:col-span-6 space-y-3"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {FAQS.map((faq, idx) => {
              const isPinned = pinnedIdx === idx;
              const isHovered = hoveredIdx === idx;
              const isActive = activeIdx === idx;

              return (
                <button
                  key={faq.id}
                  type="button"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => setPinnedIdx(idx)}
                  className={`w-full flex items-center justify-between px-6 py-4.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer select-none ${
                    isPinned
                      ? "bg-[#1f0b36] border-[#ff2a5f] text-white font-bold shadow-xl shadow-[#ff2a5f]/20 scale-[1.01]"
                      : isHovered
                      ? "bg-[#1a0a2e] border-[#ff7e29]/60 text-white font-semibold scale-[1.005]"
                      : "bg-[#140824]/70 border-white/10 text-purple-100/70 hover:bg-[#180b2b]"
                  }`}
                >
                  <div className="flex items-center gap-4 pr-3">
                    <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md transition-colors ${
                      isPinned 
                        ? "bg-[#ff2a5f] text-white" 
                        : isHovered 
                        ? "bg-[#ff7e29] text-white" 
                        : "bg-white/5 text-purple-300/50"
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-semibold leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Status Indicator Icon */}
                  <div className="flex items-center gap-2 shrink-0">
                    {isPinned ? (
                      <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#ff2a5f] bg-[#ff2a5f]/10 px-2.5 py-1 rounded-full border border-[#ff2a5f]/30">
                        <FiLock className="text-xs" /> Pinned
                      </span>
                    ) : isHovered ? (
                      <FiArrowRight className="text-xl text-[#ff7e29] transition-transform translate-x-0.5" />
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Answer Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className={`relative overflow-hidden rounded-3xl bg-[#140824]/95 border transition-all duration-300 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-2xl min-h-[420px] lg:min-h-[500px] flex flex-col justify-between ${
              isCurrentlyPinned ? "border-white/15" : "border-[#ff7e29]/40 shadow-[#ff7e29]/5"
            }`}>
              
              {/* Background Accent Watermark */}
              <FiZap className="absolute -bottom-10 -right-10 text-[280px] text-[#ff2a5f]/5 pointer-events-none rotate-12" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-6 relative z-10"
                >
                  {/* Accent Line */}
                  <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29]" />

                  {/* Dynamic Badge indicating Preview vs Pinned State */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-[#ff7e29]">
                      Question 0{activeIdx + 1}
                    </span>
                    
                    {hoveredIdx !== null && hoveredIdx !== pinnedIdx ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-purple-300/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        <FiMousePointer className="text-xs text-[#ff7e29]" /> Previewing (Click to Pin)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#ff2a5f] bg-[#ff2a5f]/10 px-2.5 py-1 rounded-md border border-[#ff2a5f]/20">
                        <FiLock className="text-xs" /> Locked Focus
                      </span>
                    )}
                  </div>

                  {/* Question Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                    {FAQS[activeIdx].question}
                  </h3>

                  {/* Answer Text */}
                  <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal">
                    {FAQS[activeIdx].answer}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Card Footer */}
              <div className="pt-8 border-t border-white/10 relative z-10 flex items-center justify-between text-sm font-bold text-[#ff7e29]">
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-lg text-[#ff2a5f]" />
                  <span>Verified Response</span>
                </div>
                <span className="text-xs text-purple-200/40 font-normal hidden sm:inline">
                  Hover to preview • Click to select
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}