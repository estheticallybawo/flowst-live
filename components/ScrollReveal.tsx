"use client";

import { useEffect } from "react";

/**
 * Scroll-linked motion.
 *
 * Where the browser supports scroll-driven animations (`animation-timeline`),
 * content glides continuously in and out of focus as it passes through the
 * viewport — driven entirely by CSS on the compositor thread, so it stays
 * buttery even on long pages. We only tag elements here; the animation lives
 * in globals.css.
 *
 * Text blocks get a richer drift + defocus (`data-focus`); cards get a plain
 * opacity fade (`data-focus-card`) so their hover-lift transform is left free.
 *
 * Browsers without scroll timelines fall back to a one-time IntersectionObserver
 * reveal. Both paths bail out entirely under prefers-reduced-motion, and the
 * hero (first, above-the-fold section) is always left crisp.
 */
const GRID_SELECTOR = ".three-col, .agent-grid, .steps, .hero-features, .two-col, .footer-grid";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scrollDriven =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline", "view()");

    const textBlocks: HTMLElement[] = [];
    const cards: HTMLElement[] = [];

    Array.from(document.querySelectorAll<HTMLElement>("main section")).forEach((section, index) => {
      if (index === 0) return; // keep the hero crisp and static
      Array.from(section.children).forEach((child) => {
        const el = child as HTMLElement;
        if (el.matches(GRID_SELECTOR)) {
          Array.from(el.children).forEach((c) => cards.push(c as HTMLElement));
        } else {
          textBlocks.push(el);
        }
      });
    });

    if (scrollDriven) {
      textBlocks.forEach((el) => el.setAttribute("data-focus", ""));
      cards.forEach((el) => el.setAttribute("data-focus-card", ""));
      return; // CSS scroll timelines drive everything from here
    }

    // Fallback: one-time reveal as each element first enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-hidden");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    const viewportH = window.innerHeight;
    for (const el of [...textBlocks, ...cards]) {
      el.setAttribute("data-reveal", "");
      if (el.getBoundingClientRect().top >= viewportH * 0.92) {
        el.classList.add("reveal-hidden");
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
