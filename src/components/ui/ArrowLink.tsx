import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: string;
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Text call to action with an underline that draws in from the left
 * and an arrow that advances. Used for secondary navigation moments.
 */
export function ArrowLink({ href, children, className, tone = "light" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group/arrow inline-flex items-center gap-2.5 text-[0.9375rem] font-medium",
        tone === "dark" ? "text-paper-50" : "text-graphite-900",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-400 ease-out group-hover/arrow:origin-left group-hover/arrow:scale-x-100",
            tone === "dark" ? "bg-solar-400" : "bg-solar-600",
          )}
        />
      </span>
      <ArrowRight
        aria-hidden="true"
        className={cn(
          "size-4 transition-transform duration-300 ease-out group-hover/arrow:translate-x-1",
          tone === "dark" ? "text-solar-400" : "text-solar-600",
        )}
      />
    </Link>
  );
}
