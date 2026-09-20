import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "solar" | "light" | "dark" | "outlineLight" | "outlineDark";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-xs font-medium " +
  "transition-[background-color,color,border-color,transform] duration-300 ease-out " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solar:
    "bg-solar-500 text-ink-950 hover:bg-solar-400 border border-solar-500 hover:border-solar-400",
  light:
    "bg-paper-50 text-ink-900 border border-paper-50 hover:bg-white hover:border-white",
  dark: "bg-ink-900 text-paper-50 border border-ink-900 hover:bg-ink-700 hover:border-ink-700",
  outlineLight:
    "border border-white/25 text-paper-50 hover:border-white/60 hover:bg-white/5",
  outlineDark:
    "border border-graphite-900/20 text-graphite-900 hover:border-graphite-900/50 hover:bg-graphite-900/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-[0.9375rem] sm:px-7",
};

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Shows a trailing arrow that nudges right on hover. */
  withArrow?: boolean;
};

function Inner({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        />
      ) : null}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solar",
  size = "md",
  className,
  withArrow,
  ...rest
}: SharedProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
      >
        <Inner withArrow={withArrow}>{children}</Inner>
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "solar",
  size = "md",
  className,
  withArrow,
  ...rest
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
