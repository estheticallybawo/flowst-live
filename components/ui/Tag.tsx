import type { CSSProperties, ReactNode } from "react";
import type { AgentId } from "@/lib/agents";

/**
 * Flowst Tag — small agent-accented chip for labels / metadata (world
 * names, frameworks, statuses). Soft pastel fill, dark text, optional
 * leading dot in the agent accent.
 */
type TagAccent = AgentId | "neutral";

const ACCENTS: Record<TagAccent, [string, string]> = {
  miro: ["var(--agent-miro-soft)", "var(--agent-miro)"],
  sophia: ["var(--agent-sophia-soft)", "var(--agent-sophia)"],
  amira: ["var(--agent-amira-soft)", "var(--agent-amira)"],
  neutral: ["var(--color-surface-glass-strong)", "var(--color-soft-muted)"],
};

interface TagProps {
  children: ReactNode;
  agent?: TagAccent;
  dot?: boolean;
  style?: CSSProperties;
}

export function Tag({ children, agent = "neutral", dot = false, style }: TagProps) {
  const [fill, accent] = ACCENTS[agent] ?? ACCENTS.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: "0.8125rem",
        color: "var(--color-foreground)",
        background: fill,
        border: "1px solid var(--color-glass-border)",
        borderRadius: "var(--radius-pill)",
        padding: "0.32rem 0.72rem",
        lineHeight: 1,
        ...style,
      }}
    >
      {dot ? (
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: accent, flex: "none" }}
        />
      ) : null}
      {children}
    </span>
  );
}
