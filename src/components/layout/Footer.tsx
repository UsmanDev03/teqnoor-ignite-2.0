import { Link } from "@tanstack/react-router";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { BRAND, NAV_LINKS, SERVICES } from "@/utils/constants";

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-[#12011a] text-white">
      {/* Subtle Dark Glow Effect */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#ff2a5f]/10 blur-[200px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-900/10 blur-[180px]" />

      {/* Main Content Section */}
      <div className="shell relative z-10 flex-1 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-8">
          
          {/* Left Column (Brand + Direct Action) */}
          <div className="flex flex-col justify-between space-y-10 md:col-span-5">
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <span className="font-display text-5xl font-black uppercase tracking-tight text-white lg:text-6xl">
                  <span className="bg-gradient-to-r from-[#ff2a5f] to-[#ff7e29] bg-clip-text text-transparent">
                    Teq
                  </span>
                  noor
                </span>
              </Link>

              <p className="max-w-md text-base leading-relaxed text-purple-200/60 lg:text-lg">
                {BRAND.tagline}
              </p>
            </div>

            <div className="pt-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#ff3366]">
                Direct Contact
              </span>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-2 inline-block font-display text-2xl font-bold text-white underline decoration-[#ff3366] underline-offset-8 transition-colors hover:text-[#ff3366] lg:text-3xl"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Right Columns (Links) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 lg:grid-cols-3">
            {/* Navigation */}
            <div>
              <h3 className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-[#ff3366]">
                Navigation
              </h3>
              <ul className="space-y-4 text-sm font-medium text-purple-200/60 lg:text-base">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="inline-block transition-transform duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-[#ff3366]">
                Services
              </h3>
              <ul className="space-y-4 text-sm font-medium text-purple-200/60 lg:text-base">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <Link
                      to="/services"
                      className="inline-block transition-transform duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-[#ff3366]">
                Policies
              </h3>
              <ul className="space-y-4 text-sm font-medium text-purple-200/60 lg:text-base">
                <li>
                  <Link to="/privacy-policy" className="transition-colors hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="transition-colors hover:text-white">
                    Cookie policy
                  </Link>
                </li>
                <li className="pt-2 text-xs text-purple-200/40">
                  {BRAND.phone}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Divider Line */}
      <div className="shell relative z-10">
        <div className="h-[1px] w-full bg-white/10" />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0a000e] py-8">
        <div className="shell flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs font-medium text-purple-200/50">
            © {new Date().getFullYear()} {BRAND.name.toUpperCase()}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] text-purple-200/80 transition-all duration-300 hover:border-pink-500/50 hover:bg-[#ff2a5f] hover:text-white hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}