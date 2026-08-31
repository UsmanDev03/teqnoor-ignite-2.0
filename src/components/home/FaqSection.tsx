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
    question: "What does Teqnoor do, and who do you work with?",
    answer: "We are a UK team that builds websites, apps and cloud setups, then runs AI-driven marketing to bring in leads. We work mainly with B2B and service firms, including clients in food, healthcare and automotive such as JK Foods UK and TMDrive."
  },
  {
    id: 2,
    question: "Which technologies do you build with?",
    answer: "We build with React, Next.js, TypeScript, Node.js and Laravel, backed by SQL and NoSQL databases. We host and scale on the cloud. We pick the stack to fit your job and your budget, not the other way round, and we keep it fast and easy to maintain."
  },
  {
    id: 3,
    question: "How long does a website or app project take?",
    answer: "Most websites take four to ten weeks, depending on how many pages and features you need. Apps and larger builds take longer. After a short scoping call we give you a firm timeline with clear stages, so you always know what is being built and when."
  },
  {
    id: 4,
    question: "How much does a project cost?",
    answer: "Every project is priced after a free scoping call, so you only pay for what you need. We share a fixed quote before any work starts, with no surprise fees. Small sites cost far less than large apps or full growth campaigns, and we will tell you honestly where your budget is best spent."
  },
  {
    id: 5,
    question: "Will my site show up on Google and in AI search like ChatGPT?",
    answer: "Yes. We build every page to load fast and read cleanly, which is what Google and AI search tools both reward. We also structure your content so tools like ChatGPT, Perplexity and Google AI Overviews can quote you. For one client we earned 1.61 million search impressions this way."
  },
  {
    id: 6,
    question: "Do you offer support and maintenance after launch?",
    answer: "Yes. We do not build your site and vanish. We offer ongoing support plans that cover updates, security, backups and small changes, plus performance checks. You deal with the same team that built the site, so nothing gets lost in translation."
  },
  {
    id: 7,
    question: "Can you work with my current site, tools and payment systems?",
    answer: "Yes. We can improve your existing site or rebuild it, and we connect the tools you already use. We integrate custom APIs, CRMs and payment gateways such as Stripe and PayPal, so your site, your data and your sales process all talk to each other."
  },
  {
    id: 8,
    question: "How do we get started, and how will we stay in touch?",
    answer: "Start with a free strategy call. We look at your site, your rankings and your competitors, then send a short action plan. If you go ahead, you get a single point of contact, regular updates and a plain-English report each month. No account-manager runaround."
  },
  {
    id: 9,
    question: "Who owns the website and code after launch?",
    answer: "You do. Once the project is paid, the site, the code, the domain and the hosting account are all yours. We hand over full access and logins, and we can train your team to run it. You are never locked in or held to ransom for a small change."
  },
  {
    id: 10,
    question: "What is included in the price, and what costs extra?",
    answer: "Your quote lists exactly what you get, such as design, build, testing and launch. Hosting, domains and SSL are set out on their own line, so there are no surprises. We tell you the full picture before you sign, not after the work has started."
  },
  {
    id: 11,
    question: "Can you redesign my site without hurting my Google rankings?",
    answer: "Yes. We map and redirect your current pages, keep the content and tags that already rank, and hold your page speed steady. We watch your rankings closely after launch and fix any dip fast, so a fresh look does not cost you traffic or leads."
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
            Questions Buyers Ask Before They Choose Us.<span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent"> Answered Straight.</span>
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