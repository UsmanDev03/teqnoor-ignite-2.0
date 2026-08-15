import { PROJECT_CATEGORIES } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300",
            active === cat
              ? "gradient-pink-orange border-transparent text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
