import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, NAV_DROPDOWNS, REGIONS } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [regionOpen, setRegionOpen] = useState(false);
  const [region, setRegion] = useState<string>(REGIONS[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-nav-accent";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-nav/95 py-3 shadow-lg backdrop-blur" : "bg-transparent py-5",
      )}
    >
      <nav className="shell flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-white">
          <span className="text-gradient">Teq</span>noor
        </Link>

        <ul
          className="hidden items-center gap-7 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label} onMouseEnter={() => setOpenMenu(link.label)}>
              <Link to={link.to} className={linkBase} activeProps={{ className: "text-nav-accent" }}>
                {link.label}
                {NAV_DROPDOWNS[link.label] && <FiChevronDown className="text-xs" aria-hidden />}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden items-center gap-5 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setRegionOpen(true)}
            onMouseLeave={() => setRegionOpen(false)}
          >
            <button type="button" className={cn(linkBase, "uppercase tracking-wide")}>
              <FiGlobe aria-hidden />
              {region}
              <FiChevronDown className="text-xs" aria-hidden />
            </button>
            <AnimatePresence>
              {regionOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full w-40 rounded-sm border border-border bg-nav/98 p-2 shadow-xl backdrop-blur"
                >
                  {REGIONS.map((r) => (
                    <li key={r}>
                      <button
                        type="button"
                        onClick={() => {
                          setRegion(r);
                          setRegionOpen(false);
                        }}
                        className="block w-full rounded-sm px-3 py-2 text-left text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-nav-accent"
                      >
                        {r}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="gradient-pink-orange inline-flex items-center rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:glow"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border p-2 text-white lg:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-nav lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-2 py-3 text-base font-medium text-white hover:text-nav-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 px-2 py-3 text-sm text-white/80">
                <FiGlobe aria-hidden /> {region}
              </li>
              <li className="px-2 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="gradient-pink-orange inline-flex w-full items-center justify-center rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Let&apos;s talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
