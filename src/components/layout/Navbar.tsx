import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, NAV_DROPDOWNS, REGIONS } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [region, setRegion] = useState<string>(REGIONS[0]);

  // Handle scroll effect
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
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-white">
          <span className="text-gradient">Teq</span>noor
        </Link>

        {/* Desktop Navigation Links */}
        <ul
          className="hidden items-center gap-7 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label} onMouseEnter={() => setOpenMenu(link.label)}>
              <Link 
                to={link.to} 
                className={linkBase} 
                activeProps={{ className: "text-nav-accent" }}
              >
                {link.label}
                {NAV_DROPDOWNS[link.label] && <FiChevronDown className="text-xs" aria-hidden />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Region Selector */}
          <div className="relative">
            <button 
              type="button" 
              className={cn(linkBase, "uppercase tracking-wide")}
              onClick={() => {
                const currentIndex = REGIONS.indexOf(region as typeof REGIONS[number]);
                const nextIndex = (currentIndex + 1) % REGIONS.length;
                setRegion(REGIONS[nextIndex]);
              }}
            >
              <FiGlobe aria-hidden />
              {region}
              <FiChevronDown className="text-xs" aria-hidden />
            </button>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="gradient-pink-orange inline-flex items-center rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:glow"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="rounded-sm border border-border p-2 text-white lg:hidden"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Desktop Mega Dropdown - Taller with Full Descriptions */}
      <AnimatePresence>
        {openMenu && NAV_DROPDOWNS[openMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
            className="absolute inset-x-0 top-full hidden border-t border-white/10 bg-[#1a1a2e]/95 shadow-2xl backdrop-blur lg:block max-h-[80vh] overflow-y-auto"
          >
            <div className="shell flex gap-8 px-4 md:px-8 py-10 min-h-[400px]">
              {/* LEFT: Image - Taller */}
              <div className="w-[35%] flex-shrink-0">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={NAV_DROPDOWNS[openMenu].image}
                    alt={openMenu}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: Links (2 columns) - Taller with Paragraph Descriptions */}
              <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4">
                {NAV_DROPDOWNS[openMenu].links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpenMenu(null)}
                    className="group block rounded-sm p-3 transition-colors hover:bg-white/5"
                  >
                    <p className="text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-[#e94560]">
                      {link.label}
                    </p>
                    {link.description && (
                      <p className="text-xs leading-relaxed text-white/70 mt-1.5 max-w-prose">
                        {link.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
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
                    onClick={() => setMobileMenuOpen(false)}
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
                  onClick={() => setMobileMenuOpen(false)}
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