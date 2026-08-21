import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiBookOpen, FiClock } from "react-icons/fi";

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

const POSTS: Post[] = [
  {
    id: 1,
    title: "Scaling Next.js Applications for High Concurrency",
    category: "Engineering",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    excerpt: "Best practices for SSR caching, edge network deployment, and optimizing database queries in Next.js.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Maximizing Conversion Rates with Custom Web Architecture",
    category: "Design & UX",
    date: "Aug 05, 2026",
    readTime: "4 min read",
    excerpt: "Why off-the-shelf templates limit growth and how custom UI architecture drives business ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Technical SEO in 2026: Core Web Vitals & AI Indexing",
    category: "SEO Strategy",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    excerpt: "Preparing your web properties for AI search crawlers, rapid rendering, and strict performance metrics.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-[#07010d] py-24 lg:py-32 text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#ff2a5f]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#ff7e29]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff7e29]"
            >
              <FiBookOpen className="text-[#ff2a5f]" /> Knowledge Hub
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none"
            >
              Latest Insights & <br />
              <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">
                Engineering News
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:border-[#ff2a5f]/50 hover:bg-white/10 transition-all group"
            >
              View All Articles 
              <FiArrowUpRight className="text-base text-[#ff7e29] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-[#140824]/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl hover:border-[#ff2a5f]/40 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Card Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-black/40">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140824] via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#ff7e29]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs text-purple-200/50">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-[#ff2a5f]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock className="text-[#ff7e29]" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff7e29] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-purple-200/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-white group-hover:text-[#ff2a5f] transition-colors">
                    Read Article
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#ff2a5f] group-hover:to-[#ff7e29] text-white transition-all">
                    <FiArrowUpRight className="text-sm transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}