import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Wide tracked monospace label with a short leading rule.
 * The rule is decorative, so it is hidden from assistive technology.
 */
export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-solar-400" : "text-solar-600",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6 shrink-0",
          tone === "dark" ? "bg-solar-400/60" : "bg-solar-600/50",
        )}
      />
      {children}
    </p>
  );
}
