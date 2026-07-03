"use client";

import { useEffect, type RefObject } from "react";

/**
 * Writes a scroll-driven progress value (0-1) directly onto a DOM element's
 * inline style as a CSS custom property, bypassing React re-renders.
 * Progress is 0 while `startRef`'s top is at the viewport top edge, and 1
 * once `endRef`'s top reaches it. rAF-throttled and gated by IntersectionObserver
 * so nothing runs while the range is far off-screen.
 */
export function useScrollVar(
  targetRef: RefObject<HTMLElement | null>,
  startRef: RefObject<HTMLElement | null>,
  endRef: RefObject<HTMLElement | null>,
  varName = "--p"
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

    let ticking = false;
    let active = true;

    const measure = () => {
      ticking = false;
      const start = startRef.current;
      const end = endRef.current;
      if (!start || !end) return;
      const startTop = start.getBoundingClientRect().top;
      const endTop = end.getBoundingClientRect().top;
      const distance = endTop - startTop;
      const p = distance > 0 ? Math.min(1, Math.max(0, -startTop / distance)) : 0;
      target.style.setProperty(varName, p.toFixed(4));
    };

    const onScroll = () => {
      if (!active || ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    const io = new IntersectionObserver(
      (entries) => {
        active = entries.some((e) => e.isIntersecting);
        if (active) onScroll();
      },
      { rootMargin: "60% 0px 60% 0px" }
    );
    if (startRef.current) io.observe(startRef.current);

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, [targetRef, startRef, endRef, varName]);
}
