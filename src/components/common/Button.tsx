import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "gradient-pink-orange text-primary-foreground hover:glow hover:scale-[1.04] hover:brightness-110",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  ghost: "bg-surface text-surface-foreground hover:bg-secondary",
};

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  withArrow = true,
  className,
  type = "button",
  onClick,
}: Props) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300",
    variants[variant],
    className,
  );

  const content = (
    <>
      {withArrow && <FiArrowRight className="text-base" aria-hidden />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to as never} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
