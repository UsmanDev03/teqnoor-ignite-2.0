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
    "flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white/90 transition-all duration-200 hover:text-[#ff3366]";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0a000e]/85 py-3 shadow-2xl backdrop-blur-xl"
          : "bg-transparent py-6"
      )}
    >
      <nav className="shell flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-black uppercase tracking-wider text-white">
          <span className="bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] bg-clip-text text-transparent">
            Teq
          </span>
          noor
        </Link>

        {/* Desktop Navigation Links */}
        <ul
          className="hidden items-center gap-8 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label} onMouseEnter={() => setOpenMenu(link.label)}>
              <Link 
                to={link.to} 
                className={linkBase} 
                activeProps={{ className: "text-[#ff3366]" }}
              >
                {link.label}
                {NAV_DROPDOWNS[link.label] && (
                  <FiChevronDown 
                    className={cn(
                      "text-xs text-white/50 transition-transform duration-200",
                      openMenu === link.label && "rotate-180 text-[#ff3366]"
                    )} 
                    aria-hidden 
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Region Selector */}
          <div className="relative">
            <button 
              type="button" 
              className={cn(linkBase, "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest hover:border-pink-500/40 hover:bg-white/10")}
              onClick={() => {
                const currentIndex = REGIONS.indexOf(region as typeof REGIONS[number]);
                const nextIndex = (currentIndex + 1) % REGIONS.length;
                setRegion(REGIONS[nextIndex]);
              }}
            >
              <FiGlobe className="text-[#ff2a5f]" aria-hidden />
              {region}
              <FiChevronDown className="text-xs text-white/50" aria-hidden />
            </button>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Desktop Mega Dropdown (Full Width 100% + 85vh Height) */}
      <AnimatePresence>
        {openMenu && NAV_DROPDOWNS[openMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
            className="absolute left-0 right-0 top-full hidden w-screen border-b border-white/10 bg-[#0d0414]/95 backdrop-blur-2xl text-white shadow-2xl lg:block"
          >
            <div className="mx-auto flex h-[85vh] w-full max-w-[1920px] overflow-hidden">
              
              {/* LEFT: Featured Image Side Frame */}
              <div className="relative h-full w-1/3 overflow-hidden bg-[#0a000e]">
                <img
                  src={NAV_DROPDOWNS[openMenu].image}
                  alt={openMenu}
                  loading="lazy"
                  className="h-full w-full object-cover object-center opacity-85 transition-opacity duration-300 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0414]/80 pointer-events-none" />
              </div>

              {/* RIGHT: 2-Column Links Layout with Scroll Overflow */}
              <div className="grid h-full w-2/3 grid-cols-2 content-start gap-x-12 gap-y-10 overflow-y-auto bg-[#0d0414]/90 p-12 lg:p-16">
                {NAV_DROPDOWNS[openMenu].links.map((link, idx) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpenMenu(null)}
                    className="group block transition-all hover:translate-x-1"
                  >
                    {/* Top Accent Gradient Border Line */}
                    <div
                      className={cn(
                        "mb-4 h-[2px] w-full bg-gradient-to-r opacity-80 transition-opacity group-hover:opacity-100",
                        idx % 4 === 0 && "from-purple-500 to-indigo-500",
                        idx % 4 === 1 && "from-pink-500 to-rose-500",
                        idx % 4 === 2 && "from-amber-400 to-orange-500",
                        idx % 4 === 3 && "from-yellow-400 to-amber-500"
                      )}
                    />

                    <h4 className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#ff3366]">
                      {link.label}
                    </h4>

                    {link.description && (
                      <p className="mt-2.5 text-base leading-relaxed text-gray-400 group-hover:text-gray-300">
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
            className="overflow-hidden border-t border-white/10 bg-[#0a000e] backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white/90 hover:bg-white/5 hover:text-[#ff3366]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-purple-200/70">
                <FiGlobe className="text-[#ff2a5f]" aria-hidden /> {region}
              </li>
              <li className="px-3 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-pink-500/20"
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