import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Typographic wordmark standing in for the official JP2 mark.
 *
 * To swap it, set `logoSrc` in src/config/site.ts to an image in /public.
 * Nothing else on the site needs to change.
 */
export function Logo({ tone = "dark", className }: LogoProps) {
  const onDark = tone === "dark";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, return to homepage`}
      className={cn("group/logo inline-flex items-center gap-3", className)}
    >
      {siteConfig.logoSrc ? (
        <Image
          src={siteConfig.logoSrc}
          alt={siteConfig.name}
          width={160}
          height={40}
          priority
          className="h-8 w-auto"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className={cn(
              "h-7 w-[3px] shrink-0 transition-colors duration-300",
              onDark ? "bg-solar-500" : "bg-solar-600",
            )}
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[1.0625rem] font-bold tracking-[-0.03em] transition-colors duration-300",
                onDark ? "text-white" : "text-graphite-900",
              )}
            >
              JP2
              <span
                className={cn(
                  "ml-1.5 font-medium tracking-[-0.015em]",
                  onDark ? "text-white/85" : "text-graphite-700",
                )}
              >
                Solar Energy
              </span>
            </span>
            <span
              className={cn(
                "eyebrow mt-1.5 text-[0.5625rem] tracking-[0.22em] transition-colors duration-300",
                onDark ? "text-white/40" : "text-graphite-400",
              )}
            >
              Energy Solutions
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
