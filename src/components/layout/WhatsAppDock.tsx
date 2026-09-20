"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";

/**
 * Floating WhatsApp conversion channel.
 *
 * The number lives in src/config/site.ts. While it is empty the panel
 * still demonstrates the interaction but the action is disabled and
 * says so, rather than linking to a number that does not exist.
 */
export function WhatsAppDock() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const href = whatsappLink();

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="fixed right-4 bottom-4 z-80 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6 print:hidden">
      <AnimatePresence>
        {open ? (
          <motion.div
            id="whatsapp-panel"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-[min(20rem,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-sm border border-white/10 bg-ink-900 shadow-2xl shadow-ink-950/40"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-display text-base font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Typically the quickest way to reach the team
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close WhatsApp panel"
                className="-mt-1 -mr-2 inline-flex size-8 items-center justify-center rounded-xs text-white/50 transition-colors hover:bg-white/8 hover:text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-5 py-5">
              <p className="rounded-sm rounded-bl-none bg-ink-800 px-4 py-3 text-sm leading-relaxed text-white/75">
                {siteConfig.whatsappMessage}
              </p>

              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xs bg-solar-500 text-[0.9375rem] font-medium text-ink-950 transition-colors duration-300 hover:bg-solar-400"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {siteConfig.cta.whatsapp.label}
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    className="mt-4 flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xs border border-white/12 text-[0.9375rem] font-medium text-white/35"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    {siteConfig.cta.whatsapp.label}
                  </button>
                  <p className="mt-3 text-xs leading-relaxed text-white/40">
                    This channel activates once the JP2 WhatsApp number is added to the site
                    configuration.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        initial={{ opacity: 0, y: 16 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group/dock inline-flex h-12 items-center gap-2.5 rounded-sm border border-white/12 bg-ink-900 pr-5 pl-4 text-[0.9375rem] font-medium text-white shadow-xl shadow-ink-950/25 transition-colors duration-300 hover:border-solar-500/50 hover:bg-ink-800"
      >
        <MessageCircle
          className="size-4.5 text-solar-400 transition-transform duration-300 group-hover/dock:scale-110"
          aria-hidden="true"
        />
        {siteConfig.cta.whatsapp.label}
      </motion.button>
    </div>
  );
}
