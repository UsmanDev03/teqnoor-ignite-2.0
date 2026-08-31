import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { slideUp, staggerContainer, viewportOnce } from "@/utils/animations";

export default function WhatWeDoSection() {
  const SERVICES = [
    {
      title: "AI-Driven SEO",
      description: "Get found on Google and in AI search when buyers look for what you sell. Local, B2B, international and pragmatic SEO, plus the technical fixes that lift rankings.",
    },
    {
      title: "AI-Powered Digital Marketing",
      description: "Google Ads, Meta and paid social, run with AI bidding and testing and aimed at buyers ready to talk. We chase qualified leads, not empty clicks.",
    },
    {
      title: "AI-Integrated Web Development",
      description: "Fast, custom websites and web apps on React, Next.js and Node, with smart AI features like chat and search built in.",
    },
    {
      title: "AI-First App Development",
      description: "Mobile and web apps that do a real job for your customers and your team, with AI built in where it earns its place.",
    },
    {
      title: "AI-Assisted Creative & Branding",
      description: "Logos, brand identity, UI and UX, graphics and video, made faster with AI and finished by human designers.",
    },
    {
      title: "AI-Led IT Consulting",
      description: "Straight advice on your stack, your tools and your spend, backed by AI analysis and senior hands-on experience.",
    },
    {
      title: "AI-Ready Cloud Solutions",
      description: "Hosting, migration and setup that stays fast and secure, and ready for the AI tools you add next.",
    },
  ];

  const CARD_GRADIENTS = [
    "from-[#a855f7] via-[#ec4899] to-[#f43f5e]",
    "from-[#ff3366] via-[#ff523b] to-[#ff7e29]",
    "from-[#ec4899] via-[#d946ef] to-[#a855f7]",
    "from-[#ffb800] via-[#ff7034] to-[#ff3366]",
    "from-[#4c1d95] via-[#831843] to-[#1e1b4b]",
    "from-[#ff523b] via-[#ff7e29] to-[#ffb800]",
    "from-[#7c3aed] via-[#d946ef] to-[#ec4899]",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[130px]" />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-12">
        
        {/* Left Typography & Copy Section */}
        <div className="lg:col-span-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="max-w-xl space-y-6"
          >
            <SectionTitle
              eyebrow="What We Do"
              title="From Website to Leads, One Team"
              highlight="Handles It All"
              className="text-4xl font-light text-white sm:text-5xl lg:text-5xl leading-tight"
            />

            <motion.p
              variants={slideUp}
              className="text-base leading-relaxed text-purple-200/90 md:text-lg"
            >
              Most firms end up with one company for the website, another for ads and a third for hosting. Nothing joins up. We do the lot under one roof, so your site, your search and your cloud all pull the same way, towards more clients.
            </motion.p>

            <motion.div variants={slideUp} className="pt-2">
              <Button
                to="/services"
                className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <span>&rarr;</span> SEE ALL SERVICES
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Services Stack Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-4 lg:col-span-7 max-h-[600px] overflow-y-auto pr-3 [scrollbar-width:thin] [scrollbar-color:rgba(236,72,153,0.4)_rgba(22,9,38,0.8)] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#160926]/80 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-pink-500/40 hover:[&::-webkit-scrollbar-thumb]:bg-pink-500/70"
        >
          {SERVICES.map((service, index) => {
            const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

            return (
              <motion.div
                key={service.title}
                variants={slideUp}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-[#160926] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 opacity-25">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} mix-blend-color-dodge`} />
                </div>

                {/* Content Block */}
                <div className="relative z-10 flex flex-col pr-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#ff3366] mb-1">
                    0{index + 1} // Service
                  </span>
                  <h3 className="font-display text-lg font-black uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-pink-300 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-purple-200/80 sm:text-sm max-w-xl">
                    {service.description}
                  </p>
                </div>

                {/* Action Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:border-pink-500 group-hover:bg-[#ff2a5f] group-hover:text-white group-hover:translate-x-1">
                  <FiArrowRight size={20} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}