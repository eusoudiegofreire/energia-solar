"use client";

import { useEffect, type RefObject } from "react";

/**
 * Writes a scroll-driven progress value (0-1) directly onto a DOM element's
 * inline style as a CSS custom property, bypassing React re-renders.
 * Progress is 0 while `startRef`'s top is at the viewport top edge, and 1
 * once `endRef`'s top reaches it.
 *
 * Runs a continuous rAF loop while the range is near the viewport (gated by
 * IntersectionObserver so nothing runs when far off-screen), rather than
 * reacting to discrete `scroll` events. CSS `scroll-behavior: smooth` (used
 * for anchor-link navigation) animates scroll position over several frames
 * without reliably firing a final `scroll` event at rest, which left
 * event-driven measurements stale — polling every frame sidesteps that.
 */
export function useScrollVar(
  targetRef: RefObject<HTMLElement | null>,
  startRef: RefObject<HTMLElement | null>,
  endRef: RefObject<HTMLElement | null>,
  varName = "--p",
  /** Fraction of viewport height added to the progress cursor (0 = viewport
   * top, 1 = viewport bottom). Use >0 so the reveal stays within view instead
   * of trailing exactly at the top edge, out of sight. */
  leadFraction = 0
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = targetRef.current;
    if (!target) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      target.style.setProperty(varName, "1");
      return;
    }

    let frameId = 0;

    const measure = () => {
      const start = startRef.current;
      const end = endRef.current;
      if (!start || !end) return;
      const startTop = start.getBoundingClientRect().top;
      const endTop = end.getBoundingClientRect().top;
      const distance = endTop - startTop;
      const cursor = window.innerHeight * leadFraction - startTop;
      const p = distance > 0 ? Math.min(1, Math.max(0, cursor / distance)) : 0;
      target.style.setProperty(varName, p.toFixed(4));
    };

    const loop = () => {
      measure();
      frameId = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const active = entries.some((e) => e.isIntersecting);
        if (active && !frameId) {
          frameId = requestAnimationFrame(loop);
        } else if (!active && frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { rootMargin: "60% 0px 60% 0px" }
    );
    // Observe the full target range (not just the start marker) so a tall
    // range stays "active" for its entire scroll journey — a range taller
    // than one viewport has its start marker scroll out of view long before
    // the user finishes scrolling through it.
    io.observe(target);

    measure();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      io.disconnect();
    };
  }, [targetRef, startRef, endRef, varName, leadFraction]);
}
