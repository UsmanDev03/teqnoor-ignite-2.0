import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className, hover = true }: Props) {
  return (
    <motion.div
      variants={slideUp}
      className={cn(
        "rounded-md border border-border bg-card p-6 text-card-foreground transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-primary/60 hover:glow",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
