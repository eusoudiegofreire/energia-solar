export interface ZigzagOptions {
  xMin: number;
  xMax: number;
  segment: number;
  startX?: "min" | "max";
}

/**
 * Builds a zigzag SVG path in real pixel coordinates for a given container
 * size. Straight segments with rounded joins read as a cable, not a chart line.
 */
export function buildZigzagPath(height: number, opts: ZigzagOptions): string {
  const { xMin, xMax, segment, startX = "min" } = opts;
  if (height <= 0) return "";

  const points: [number, number][] = [];
  let toggle = startX === "min";
  for (let y = 0; y <= height; y += segment) {
    points.push([toggle ? xMin : xMax, y]);
    toggle = !toggle;
  }
  if (points[points.length - 1][1] !== height) {
    toggle = points.length % 2 === 0 ? startX === "min" : startX !== "min";
    points.push([toggle ? xMin : xMax, height]);
  }

  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
}
