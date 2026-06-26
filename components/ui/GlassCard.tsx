import type { CSSProperties, ReactNode } from "react";
import type { AgentId } from "@/lib/agents";

/**
 * Flowst Card — the brand's signature soft surface. Two finishes:
 *  - glass: frosted translucent, thin white rim, soft drop + inner highlight
 *  - solid: opaque white, larger radius, deeper pillowy shadow
 * Optional ambient accent `glow` behind the card (agent-colored).
 */
const GLOWS: Record<AgentId, string> = {
  nyx: "var(--glow-nyx)",
  miro: "var(--glow-miro)",
  amira: "var(--glow-amira)",
};

interface GlassCardProps {
  children: ReactNode;
  variant?: "glass" | "solid";
  glow?: AgentId | null;
  padding?: string;
  radius?: string;
  style?: CSSProperties;
  className?: string;
}

export function GlassCard({
  children,
  variant = "glass",
  glow = null,
  padding = "1.75rem",
  radius = "var(--radius-xl)",
  style,
  className,
}: GlassCardProps) {
  const glowValue = glow ? GLOWS[glow] : null;

  const finish: CSSProperties =
    variant === "solid"
      ? {
          background: "var(--color-surface)",
          boxShadow: glowValue
            ? `${glowValue}, var(--shadow-card)`
            : "var(--shadow-card), var(--shadow-inner-soft)",
        }
      : {
          background: "var(--color-surface-glass)",
          backdropFilter: "blur(var(--blur-soft))",
          WebkitBackdropFilter: "blur(var(--blur-soft))",
          boxShadow: glowValue
            ? `${glowValue}, var(--shadow-card-soft)`
            : "var(--shadow-card-soft), var(--shadow-inner-soft)",
        };

  return (
    <div
      className={className}
      style={{
        border: "1px solid var(--color-glass-border)",
        borderRadius: radius,
        padding,
        color: "var(--color-foreground)",
        ...finish,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
