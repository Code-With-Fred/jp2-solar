import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** What JP2 needs to supply, written as an instruction. */
  label: string;
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Renders in place of any detail JP2 has not supplied yet.
 *
 * The site never invents a phone number, address or email. Where a value
 * is missing from site config, this marker appears instead so the slot is
 * visible and obviously intended to be filled.
 */
export function Placeholder({ label, className, tone = "light" }: PlaceholderProps) {
  return (
    <span
      className={cn(
        "inline-block border-b border-dashed pb-px text-[0.9375rem] italic",
        tone === "dark"
          ? "border-white/25 text-white/40"
          : "border-graphite-900/25 text-graphite-400",
        className,
      )}
    >
      {label}
    </span>
  );
}

type SampleTagProps = {
  className?: string;
  tone?: "dark" | "light";
  children?: string;
};

/** Marks content that is illustrative rather than a JP2 record. */
export function SampleTag({ className, tone = "light", children = "Sample entry" }: SampleTagProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center rounded-xs border px-2 py-1.5",
        tone === "dark"
          ? "border-white/20 bg-white/5 text-white/55"
          : "border-graphite-900/15 bg-graphite-900/4 text-graphite-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
