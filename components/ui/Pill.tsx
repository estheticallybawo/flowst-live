import type { CSSProperties, ReactNode } from "react";
import type { PillColor } from "@/lib/agents";

/**
 * Flowst emphasis Pill — solid pastel chip labels like the hero reference.
 * Text stays dark; color lives in the pill fill.
 */
const FILLS: Record<PillColor, string> = {
  amber: "#f5e5c8d0",
  mint: "#9eebddb9",
  sage: "#dde6a9be",
  rose: "#ffc5bad3",
  blue: "#c9dbffd0",
  orange: "#ffd39ac4",
  magenta: "#f4a9cfc7",
  lavender: "#c7c2ffc9",
};

interface PillProps {
  children: ReactNode;
  color?: PillColor;
  glass?: boolean;
  style?: CSSProperties;
}

export function Pill({ children, color = "amber", glass = false, style }: PillProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        color: "var(--color-foreground)",
        backgroundColor: FILLS[color],
        border: "1px solid rgba(13, 15, 20, 0.08)",
        borderRadius: "var(--radius-pill)",
        padding: "0.14em 0.68em",
        lineHeight: "inherit",
        whiteSpace: "nowrap",
        boxShadow: "0 8px 18px rgba(70, 81, 104, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.65)",
        ...(glass
          ? {
              boxShadow: "0 12px 28px rgba(70, 81, 104, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.72)",
            }
          : {}),
        ...style,
      }}
    >
      {children}
    </span>
  );
}
