import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { fadeIn, staggerContainer } from "@/utils/animations";

type Variant = "image-center" | "split-cards" | "center-cta" | "split-article";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  variant?: Variant;
  image?: string;
  stats?: { value: string; label: string }[];
  cards?: { title: string; description: string }[];
  actions?: { label: string; to: string }[];
  article?: { title: string; meta: string; excerpt: string };
};

const BANNER = "relative flex h-[80vh] min-h-[560px] w-full items-center overflow-hidden pt-24";

// 1. HAR PAGE KI SEPARATE & UNIQUE IMAGE
const ROUTE_IMAGES: Record<string, string> = {
  "/about": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80", // Team / Office
  "/solutions": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80", // Code / Tech
  "/services": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80", // Cloud / Data
  "/life-at-teqnoor": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80", // Culture / Work
  "/sigma": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80", // Cyber / AI
  "/resources": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80", // Blog / Media
  "/contact": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80", // Contact / Support
};

// Fallback image (agar route match na ho)
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  variant = "image-center",
  image,
  stats,
  cards,
  actions,
  article,
}: Props) {
  const { pathname } = useLocation();
  const light = variant === "split-article";

  // Priority: 1. Direct 'image' prop -> 2. Specific Route Image -> 3. Fallback
  const bgImage = image || ROUTE_IMAGES[pathname] || FALLBACK_IMAGE;

  const heading = (
    <>
      <motion.p
        variants={fadeIn}
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${
          light ? "text-[#ff2a5f]" : "text-[#ff7e29]"
        }`}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={fadeIn}
        className="text-4xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl"
      >
        {title} {highlight && <span className="bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] bg-clip-text text-transparent">{highlight}</span>}
      </motion.h1>
      <motion.p
        variants={fadeIn}
        className="mt-6 max-w-xl text-base leading-relaxed text-purple-200/80"
      >
        {description}
      </motion.p>
    </>
  );

  // 1. FULL-WIDTH BACKGROUND IMAGE + CENTER TEXT
  if (variant === "image-center") {
    return (
      <section className={BANNER} style={{ backgroundColor: "#07010d" }}>
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35 filter blur-[1px]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#07010d]/80 via-[#07010d]/60 to-[#07010d]"
          aria-hidden
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative z-10 flex h-full flex-col items-center justify-center text-center max-w-7xl mx-auto px-4"
        >
          <div className="max-w-3xl [&_p]:mx-auto">{heading}</div>
          {stats && (
            <motion.dl variants={fadeIn} className="mt-14 grid w-full grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-[#140824]/60 p-4 backdrop-blur-md">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#ff2a5f] font-bold">{s.label}</p>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>
      </section>
    );
  }

  // 2. LEFT TEXT + RIGHT SERVICE CARDS
  if (variant === "split-cards") {
    return (
      <section className={BANNER} style={{ backgroundColor: "#07010d" }}>
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30 filter blur-[1px]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07010d] via-[#07010d]/80 to-transparent"
          aria-hidden
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative z-10 grid items-center gap-12 lg:grid-cols-2 max-w-7xl mx-auto px-4"
        >
          <div>{heading}</div>
          <motion.div variants={fadeIn} className="grid gap-4 sm:grid-cols-2">
            {cards?.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-[#140824]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a5f]/50"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-[#ff7e29]">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-purple-200/70">{c.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // 3. LARGE CENTER HEADING + CTA BUTTONS
  if (variant === "center-cta") {
    return (
      <section className={BANNER} style={{ backgroundColor: "#07010d" }}>
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35 filter blur-[1px]"
        />
        <div
          className="absolute inset-0 bg-[#07010d]/70 bg-radial-gradient from-transparent to-[#07010d]"
          aria-hidden
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative z-10 mx-auto max-w-3xl text-center [&_p]:mx-auto px-4"
        >
          {heading}
          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
            {actions?.map((a, i) => (
              <Link
                key={a.label}
                to={a.to as never}
                className={
                  i === 0
                    ? "inline-flex items-center rounded-full bg-gradient-to-r from-[#ff2a5f] via-[#ff5341] to-[#ff7e29] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:shadow-[#ff2a5f]/25"
                    : "inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:border-[#ff7e29] hover:text-[#ff7e29]"
                }
              >
                {a.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // 4. LEFT HEADING + RIGHT FEATURED ARTICLE
  return (
    <section className={BANNER} style={{ backgroundColor: "#07010d" }}>
      <img
        src={bgImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25 filter blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07010d]/90 to-[#07010d]" aria-hidden />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative z-10 grid items-center gap-12 lg:grid-cols-2 max-w-7xl mx-auto px-4"
      >
        <div>{heading}</div>
        <motion.article
          variants={fadeIn}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#140824]/80 backdrop-blur-xl"
        >
          {article && (
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff2a5f]">
                {article.meta}
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">{article.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-purple-200/70">{article.excerpt}</p>
            </div>
          )}
        </motion.article>
      </motion.div>
    </section>
  );
}