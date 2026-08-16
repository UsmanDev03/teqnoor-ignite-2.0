import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { fadeIn, staggerContainer } from "@/utils/animations";

type Variant = "image-center" | "split-cards" | "center-cta" | "split-article";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  variant?: Variant;
  /* REPLACE LATER: placeholder banner image */
  image?: string;
  stats?: { value: string; label: string }[];
  cards?: { title: string; description: string }[];
  actions?: { label: string; to: string }[];
  article?: { title: string; meta: string; excerpt: string };
};

const BANNER = "relative flex h-[80vh] min-h-[560px] w-full items-center overflow-hidden pt-24";

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
  const light = variant === "split-article";

  const heading = (
    <>
      <motion.p
        variants={fadeIn}
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-foreground/60" : "text-white/75"}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={fadeIn}
        className={`text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl md:text-6xl ${light ? "text-foreground" : "text-white"}`}
      >
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h1>
      <motion.p
        variants={fadeIn}
        className={`mt-6 max-w-xl text-base leading-relaxed ${light ? "text-foreground/70" : "text-white/85"}`}
      >
        {description}
      </motion.p>
    </>
  );

  // FULL-WIDTH BACKGROUND IMAGE + CENTER TEXT (About / Life at Teqnoor)
  if (variant === "image-center") {
    return (
      <section className={BANNER} style={{ backgroundColor: "#1a1a2e" }}>
        {/* REPLACE LATER */}
        {image && (
          <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(26,26,46,0.85), rgba(15,52,96,0.9))" }}
          aria-hidden
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative flex h-full flex-col items-center justify-center text-center"
        >
          <div className="max-w-3xl [&_p]:mx-auto">{heading}</div>
          {stats && (
            <motion.dl variants={fadeIn} className="mt-14 grid w-full grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.label}</p>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>
      </section>
    );
  }

  // LEFT TEXT + RIGHT SERVICE CARDS (Solutions)
  if (variant === "split-cards") {
    return (
      <section
        className={BANNER}
        style={{ background: "linear-gradient(120deg, #0f3460 0%, #6C63FF 100%)" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            {heading}
            {/* REPLACE LATER */}
            {image && (
              <motion.img
                variants={fadeIn}
                src={image}
                alt=""
                aria-hidden
                loading="lazy"
                className="mt-8 hidden h-40 w-full rounded-sm object-cover lg:block"
              />
            )}
          </div>
          <motion.div variants={fadeIn} className="grid gap-4 sm:grid-cols-2">
            {cards?.map((c) => (
              <div
                key={c.title}
                className="rounded-sm border border-white/20 bg-white/10 p-5 backdrop-blur transition-colors hover:border-white/50"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-white">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{c.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // LARGE CENTER HEADING + 2 CTA BUTTONS (Sigma)
  if (variant === "center-cta") {
    return (
      <section className={BANNER} style={{ backgroundColor: "#12102a" }}>
        {/* REPLACE LATER */}
        {image && (
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(233,69,96,0.35), transparent 70%), linear-gradient(180deg,#12102a,#1a1a2e)",
          }}
          aria-hidden
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="shell relative mx-auto max-w-3xl text-center [&_p]:mx-auto"
        >
          {heading}
          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
            {actions?.map((a, i) => (
              <Link
                key={a.label}
                to={a.to as never}
                className={
                  i === 0
                    ? "gradient-pink-orange inline-flex items-center rounded-sm px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:glow hover:brightness-110"
                    : "inline-flex items-center rounded-sm border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-nav-accent hover:text-nav-accent"
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

  // LEFT HEADING + RIGHT FEATURED ARTICLE (Resources) — clean, light
  return (
    <section className={`${BANNER} bg-background`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="shell relative grid items-center gap-12 lg:grid-cols-2"
      >
        <div>{heading}</div>
        <motion.article
          variants={fadeIn}
          className="overflow-hidden rounded-md border border-border bg-card"
        >
          {/* REPLACE LATER */}
          {image && <img src={image} alt="" aria-hidden className="h-56 w-full object-cover" />}
          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {article?.meta}
            </p>
            <h2 className="mt-2 text-xl font-bold text-card-foreground">{article?.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article?.excerpt}</p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
