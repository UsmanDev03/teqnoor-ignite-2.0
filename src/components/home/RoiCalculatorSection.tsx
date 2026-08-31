import { useState } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiDollarSign, FiZap, FiCheckCircle } from "react-icons/fi";

export default function RoiCalculatorSection() {
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(2.0);

  // ROI Math Calculations
  const estimatedRevenue = Math.round(monthlySpend * (currentConversionRate * 1.8) * 3.5);
  const projectedROI = Math.round(((estimatedRevenue - monthlySpend) / monthlySpend) * 100);

  return (
    <section className="relative overflow-hidden bg-[#07010d] py-24 lg:py-32 text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff2a5f]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#ff7e29]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Headings, Visual Banner & Features */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff7e29]"
            >
              <FiZap className="text-[#ff2a5f]" /> Free Revenue Estimator
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight leading-tight">
                See What Winning More Clients Is Worth. <br />
                <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">
                  Move the Sliders and Find Out.
                </span>
              </h2>
              <p className="text-purple-200/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Move the two sliders to your real spend and your target conversion rate. The tool shows the monthly revenue and return a faster, better-built site could bring. No sign-up, no email, just a quick sense of the prize.
              </p>
            </motion.div>

            {/* Image Container with Gradient Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Analytics and ROI Growth Dashboard" 
                className="w-full h-56 sm:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07010d] via-[#07010d]/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] text-white font-bold text-lg">
                    <FiTrendingUp />
                  </div>
                  <div>
                    <p className="text-xs text-purple-200/80">Average Scaled ROI</p>
                    <p className="text-sm font-bold text-white">3.5x Conversion Multiplier</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Line */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-purple-200/80">
                <FiCheckCircle className="text-[#ff2a5f] shrink-0" /> Based on real gains from faster load times and a site built to convert.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Calculator Card */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#140824]/90 border border-white/10 shadow-2xl backdrop-blur-2xl"
            >
              <div className="space-y-8">
                {/* Input 1: Monthly Spend */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-purple-200 flex items-center gap-2">
                      <FiDollarSign className="text-[#ff2a5f]" /> Monthly Digital Spend
                    </label>
                    <span className="text-lg font-black text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                      ${monthlySpend.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    step={1000}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff2a5f] focus:outline-none"
                  />
                  <div className="flex justify-between text-[11px] text-purple-300/40 mt-2 font-mono">
                    <span>$1,000</span>
                    <span>$50,000+</span>
                  </div>
                </div>

                {/* Input 2: Conversion Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-purple-200 flex items-center gap-2">
                      <FiZap className="text-[#ff7e29]" /> Target Conversion Rate
                    </label>
                    <span className="text-lg font-black text-[#ff7e29] bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                      {currentConversionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={10.0}
                    step={0.1}
                    value={currentConversionRate}
                    onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7e29] focus:outline-none"
                  />
                  <div className="flex justify-between text-[11px] text-purple-300/40 mt-2 font-mono">
                    <span>0.5%</span>
                    <span>10.0%</span>
                  </div>
                </div>

                {/* Live Output Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0a000e] to-[#12001c] border border-white/10 space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-300/60">
                      Estimated Monthly Revenue
                    </p>
                    <p className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                      ${estimatedRevenue.toLocaleString()}
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-purple-300/60">
                        Projected ROI Boost
                      </p>
                      <p className="text-3xl font-black bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] bg-clip-text text-transparent">
                        +{projectedROI}%
                      </p>
                    </div>

                    <a 
                      href="#contact" 
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] text-xs font-black uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition-all transform hover:scale-105 text-center"
                    >
                      Get the full plan behind these numbers
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}