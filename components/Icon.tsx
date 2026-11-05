import type { CSSProperties } from "react";

// Subconjunto de Lucide (https://lucide.dev), inline para no depender de una fuente externa.
const PATHS = {
  plus: ["M5 12h14", "M12 5v14"],
  "move-right": ["M18 8L22 12L18 16", "M2 12H22"],
  "message-circle": ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"],
  menu: ["M4 12h16", "M4 6h16", "M4 18h16"],
  x: ["M18 6 6 18", "m6 6 12 12"],
  "chevron-left": ["m15 18-6-6 6-6"],
  "chevron-right": ["m9 18 6-6-6-6"],
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  return (
    <i className="baca-icon" style={{ fontSize: size, ...style }} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[name].map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </i>
  );
}
