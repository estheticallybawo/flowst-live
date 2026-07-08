"use client";

import { useEffect } from "react";

/**
 * Scroll-linked text focus.
 *
 * Text starts slightly soft, sharpens near the comfortable reading zone, then
 * gently softens as it leaves. This uses requestAnimationFrame instead of CSS
 * scroll timelines so production builds stay parser-safe across Turbopack.
 */
const TEXT_SELECTOR = [
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main li",
  ".agent-card__world",
  ".agent-card__role",
  ".agent-card__summary",
  ".agent-card__link",
  ".profile-model span",
].join(", ");

function isHomepageHeroText(element: HTMLElement) {
  const firstSection = document.querySelector("main section");
  return firstSection?.contains(element) ?? false;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const textBlocks = Array.from(main.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(
      (element) => !isHomepageHeroText(element),
    );

    if (!textBlocks.length) return;

    textBlocks.forEach((element) => element.setAttribute("data-scroll-focus", ""));

    let frame = 0;

    const updateFocus = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;
      const focusLine = viewportHeight * 0.52;
      const range = viewportHeight * 0.58;

      for (const element of textBlocks) {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const rawFocus = clamp(1 - Math.abs(center - focusLine) / range, 0, 1);
        const focus = easeOutCubic(rawFocus);
        const direction = center < focusLine ? -1 : 1;
        const softness = 1 - focus;

        element.style.opacity = String(0.42 + focus * 0.58);
        element.style.transform = `translateY(${direction * softness * 16}px) scale(${0.994 + focus * 0.006})`;
        element.style.filter = `blur(${softness * 1.6}px)`;
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateFocus);
    };

    updateFocus();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      textBlocks.forEach((element) => {
        element.removeAttribute("data-scroll-focus");
        element.style.opacity = "";
        element.style.transform = "";
        element.style.filter = "";
      });
    };
  }, []);

  return null;
}
