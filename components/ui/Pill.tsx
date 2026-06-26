import type { CSSProperties, ReactNode } from "react";
import type { PillColor } from "@/lib/agents";

/**
 * Flowst emphasis Pill — a translucent pastel background highlight placed
 * BEHIND a word. Flowst never colors text for emphasis; it wraps the word
 * in a soft color pill with solid black text. Use on the approved emphasis
 * words (Clarity, Voice, Practice, Proof, Retention…).
 */
const FILLS: Record<PillColor, string> = {
  amber: "var(--pill-amber)",
  mint: "var(--pill-mint)",
  sage: "var(--pill-sage)",
  rose: "var(--pill-rose)",
  blue: "var(--pill-blue)",
  orange: "var(--pill-orange)",
  magenta: "var(--pill-magenta)",
  lavender: "var(--pill-lavender)",
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
        fontWeight: 500,
        color: "var(--color-foreground)",
        background: FILLS[color],
        borderRadius: "var(--radius-pill)",
        padding: "0.12em 0.62em",
        lineHeight: "inherit",
        whiteSpace: "nowrap",
        ...(glass
          ? {
              border: "1px solid var(--color-glass-border)",
              boxShadow: "var(--shadow-pill)",
              backdropFilter: "blur(var(--blur-soft))",
              WebkitBackdropFilter: "blur(var(--blur-soft))",
            }
          : {}),
        ...style,
      }}
    >
      {children}
    </span>
  );
}
