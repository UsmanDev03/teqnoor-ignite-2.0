import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiGlobe, FiMail, FiCheckCircle, FiShield, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function SeoAuditSection() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (url && email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#07010d] py-24 lg:py-32 text-white">
      {/* Background Glows */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#ff2a5f]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#ff7e29]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Headings & Feature Grid */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff7e29]"
            >
              <FiSearch className="text-[#ff2a5f]" /> Free Website Audit
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight leading-tight">
                Your Site Is Leaking Leads. <br />
                <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">
                  This Free Audit Shows You Where.
                </span>
              </h2>
              <p className="text-purple-200/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Slow pages and hidden technical faults quietly cost you leads every day. Enter your web address and we will run a free check of your speed, your Core Web Vitals and how easily Google and AI crawlers can read your site. You get a plain-English report, no password needed.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff2a5f]/20 text-[#ff2a5f] mt-0.5">
                  <FiCpu className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Core Web Vitals</h4>
                  <p className="text-xs text-purple-200/60 mt-0.5">A clear read on your load speed, layout shift and responsiveness, and what to fix first.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff7e29]/20 text-[#ff7e29] mt-0.5">
                  <FiTrendingUp className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Search and AI readability</h4>
                  <p className="text-xs text-purple-200/60 mt-0.5">We check whether Google and AI search tools can crawl and understand your pages.</p>
                </div>
              </div>
            </div>

            {/* Trust Markers */}
            <div className="flex items-center gap-6 pt-2 text-xs font-medium text-purple-200/60 border-t border-white/10">
              <span className="flex items-center gap-2"><FiShield className="text-[#ff2a5f]" /> 100% Free Report</span>
              <span className="flex items-center gap-2"><FiCheckCircle className="text-[#ff7e29]" /> No Password Required</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form / Success Card */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#140824]/90 border border-white/10 shadow-2xl backdrop-blur-2xl"
            >
              {submitted ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl">
                    <FiCheckCircle />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Audit Request Received!</h3>
                    <p className="text-sm text-purple-200/70 max-w-sm mx-auto">
                      Our engineering team is scanning <span className="text-white font-semibold">{url}</span>. Your customized PDF audit report will be emailed to <span className="text-[#ff7e29] font-semibold">{email}</span> within 2 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-purple-300 hover:text-white underline pt-2"
                  >
                    Analyze Another Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wide">Start Your Analysis</h3>
                    <p className="text-xs text-purple-200/60">Enter your website address and where to send the report.</p>
                  </div>

                  {/* Input 1: Website URL */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-purple-200 flex items-center gap-2">
                      <FiGlobe className="text-[#ff2a5f]" /> Target Website URL
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-purple-300/30 focus:border-[#ff2a5f] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Input 2: Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-purple-200 flex items-center gap-2">
                      <FiMail className="text-[#ff7e29]" /> Where should we send the audit?
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="your.email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-purple-300/30 focus:border-[#ff7e29] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] text-xs font-black uppercase tracking-widest text-white shadow-xl hover:brightness-110 transition-all transform hover:scale-[1.02]"
                  >
                    Generate my free audit report
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}