"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { navigation, siteConfig, whatsappLink } from "@/config/site";
import { Placeholder } from "@/components/ui/Placeholder";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

const panel = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

/**
 * Full height navigation drawer.
 *
 * Slides in from the right, locks background scroll, closes on Escape,
 * and returns focus to the trigger. Items stagger in so the panel reads
 * as a considered surface rather than a dropped menu.
 */
export function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const wa = whatsappLink();

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-100 lg:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full bg-ink-950/70 backdrop-blur-[2px]"
          />

          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col bg-ink-900"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="eyebrow text-white/40">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="-mr-2 inline-flex size-11 items-center justify-center rounded-xs text-white/70 transition-colors duration-200 hover:bg-white/8 hover:text-white"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Primary" className="flex-1 overflow-y-auto overscroll-contain px-6 py-4">
              <ul>
                {navigation.map((item, index) => {
                  const active =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.1 + index * 0.055,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-b border-white/8 last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between gap-4 py-5 font-display text-2xl tracking-[-0.03em] transition-colors duration-200",
                          active ? "text-solar-400" : "text-white hover:text-solar-300",
                        )}
                      >
                        {item.label}
                        <span className="eyebrow text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-white/10 px-6 py-6">
              <Link
                href={siteConfig.cta.primary.href}
                onClick={onClose}
                className="flex h-13 w-full items-center justify-center gap-2 rounded-xs bg-solar-500 font-medium text-ink-950 transition-colors duration-300 hover:bg-solar-400"
              >
                {siteConfig.cta.primary.label}
              </Link>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow text-white/35">WhatsApp</span>
                  {wa ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-solar-400"
                    >
                      {siteConfig.cta.whatsapp.label}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add WhatsApp number" className="text-sm" />
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow text-white/35">Email</span>
                  {siteConfig.contact.email ? (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white transition-colors hover:text-solar-400"
                    >
                      {siteConfig.contact.email}
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add email address" className="text-sm" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
