import type { CSSProperties } from "react";
import type { AgentId } from "@/lib/agents";

/**
 * Flowst AgentAvatar — a mascot portrait seated in a soft pastel "well"
 * tinted to the agent's accent, with an ambient glow. The mascots are
 * 3D vinyl-toy renders; pass the image via `src`.
 */
const SOFT: Record<AgentId, string> = {
  nyx: "var(--agent-nyx-soft)",
  miro: "var(--agent-miro-soft)",
  amira: "var(--agent-amira-soft)",
};
const GLOW: Record<AgentId, string> = {
  nyx: "var(--glow-nyx)",
  miro: "var(--glow-miro)",
  amira: "var(--glow-amira)",
};

interface AgentAvatarProps {
  src: string;
  alt?: string;
  agent?: AgentId;
  size?: number;
  glow?: boolean;
  style?: CSSProperties;
}

export function AgentAvatar({
  src,
  alt = "",
  agent = "nyx",
  size = 120,
  glow = true,
  style,
}: AgentAvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-lg)",
        background: `linear-gradient(180deg, var(--color-surface-glass-strong), ${SOFT[agent]})`,
        border: "1px solid var(--color-glass-border)",
        boxShadow: glow ? `${GLOW[agent]}, var(--shadow-inner-soft)` : "var(--shadow-inner-soft)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        overflow: "hidden",
        flex: "none",
        transition: "box-shadow var(--dur-slow) var(--ease-soft)",
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- oversized object-cover crop is intentional */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "108%",
          height: "108%",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
    </div>
  );
}
