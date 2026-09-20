"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/cn";

/**
 * Sticky header.
 *
 * Sits transparent over the dark opening band of every page, then settles
 * onto a solid surface once the page scrolls. Every page opens on a dark
 * band, so the header keeps a single light on dark treatment throughout.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded-xs focus:bg-solar-500 focus:px-4 focus:py-2.5 focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-90 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
          scrolled
            ? "border-b border-white/10 bg-ink-950/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container width="wide">
          <div
            className={cn(
              "flex items-center justify-between transition-[height] duration-500 ease-out",
              scrolled ? "h-[4.5rem]" : "h-[5.25rem] lg:h-[6rem]",
            )}
          >
            <Logo tone="dark" />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navigation.map((item) => {
                  const active =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group/nav relative inline-flex h-10 items-center px-4 text-[0.9375rem] transition-colors duration-200",
                          active ? "text-white" : "text-white/65 hover:text-white",
                        )}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-4 bottom-1 h-px origin-left bg-solar-500 transition-transform duration-300 ease-out",
                            active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={siteConfig.cta.primary.href}
                className="hidden h-11 items-center rounded-xs bg-solar-500 px-5 text-[0.9375rem] font-medium text-ink-950 transition-colors duration-300 hover:bg-solar-400 sm:inline-flex"
              >
                {siteConfig.cta.primary.label}
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-xs text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
              >
                <Menu className="size-5.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
