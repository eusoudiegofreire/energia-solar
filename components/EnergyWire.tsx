"use client";

import { useEffect, useRef, useState } from "react";
import { buildZigzagPath } from "@/lib/wirePath";
import { useScrollVar } from "@/lib/useScrollVar";

export default function EnergyWire() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const pathDesktopRef = useRef<SVGPathElement>(null);
  const pathMobileRef = useRef<SVGPathElement>(null);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [energized, setEnergized] = useState(false);

  useScrollVar(wrapRef, startRef, endRef, "--wp", 0.85);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => setEnergized(true);
    window.addEventListener("wire:energize", handler);
    return () => window.removeEventListener("wire:energize", handler);
  }, []);

  const { width, height } = size;

  const desktopD = buildZigzagPath(height, {
    xMin: width * 0.06,
    xMax: width * 0.14,
    segment: 260,
  });
  const mobileD = buildZigzagPath(height, {
    xMin: width * 0.84,
    xMax: width * 0.93,
    segment: 200,
  });

  useEffect(() => {
    for (const ref of [pathDesktopRef, pathMobileRef]) {
      const p = ref.current;
      if (!p) continue;
      const len = p.getTotalLength();
      p.style.setProperty("--len", String(len));
      p.style.strokeDasharray = String(len);
    }
  }, [desktopD, mobileD]);

  const wireColor = energized ? "var(--gold)" : "var(--sand)";
  const wireOpacity = energized ? 0.95 : 0.4;
  const wireFilter = energized
    ? "drop-shadow(0 0 6px rgba(244, 169, 60, 0.65))"
    : "none";

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div ref={startRef} className="absolute top-0 h-px w-full" />
      <div ref={endRef} className="absolute bottom-0 h-px w-full" />

      {width > 0 && height > 0 && (
        <>
          <svg
            className="absolute inset-0 hidden h-full w-full md:block"
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            <path
              ref={pathDesktopRef}
              d={desktopD}
              className="wire-path"
              stroke={wireColor}
              strokeOpacity={wireOpacity}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: wireFilter }}
            />
          </svg>
          <svg
            className="absolute inset-0 block h-full w-full md:hidden"
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            <path
              ref={pathMobileRef}
              d={mobileD}
              className="wire-path"
              stroke={wireColor}
              strokeOpacity={wireOpacity}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: wireFilter }}
            />
          </svg>
        </>
      )}
    </div>
  );
}
