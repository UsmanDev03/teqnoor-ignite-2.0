import { Link } from "@tanstack/react-router";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { BRAND, NAV_LINKS, SERVICES } from "@/utils/constants";

const socials = [FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-extrabold">
            <span className="text-gradient">Teq</span>noor
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to="/services" className="hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{BRAND.email}</li>
            <li>{BRAND.phone}</li>
            <li>
              <Link to="/privacy-policy" className="hover:text-foreground">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-foreground">
                Cookie policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
