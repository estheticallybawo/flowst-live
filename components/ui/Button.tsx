"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * Flowst Button — pill-shaped action. Three brand variants:
 *  - solid: dark #0D0F14 fill, white text (primary CTA)
 *  - glass: frosted translucent surface, dark text (on imagery / nav)
 *  - ghost: transparent, hairline border, dark text (secondary)
 */
type Variant = "solid" | "glass" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  "aria-label"?: string;
}

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "0.5rem 1rem", fontSize: "0.8125rem", gap: "0.4rem" },
  md: { padding: "0.7rem 1.4rem", fontSize: "0.95rem", gap: "0.5rem" },
  lg: { padding: "0.95rem 1.9rem", fontSize: "1.05rem", gap: "0.6rem" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  solid: {
    background: "var(--color-primary)",
    color: "var(--color-inverse)",
    border: "1px solid var(--color-primary)",
    boxShadow: "var(--shadow-pill)",
  },
  glass: {
    background: "var(--color-surface-glass-strong)",
    color: "var(--color-foreground)",
    border: "1px solid var(--color-glass-border)",
    boxShadow: "var(--shadow-pill), var(--shadow-inner-soft)",
    backdropFilter: "blur(var(--blur-soft))",
    WebkitBackdropFilter: "blur(var(--blur-soft))",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-foreground)",
    border: "1px solid var(--color-border)",
    boxShadow: "none",
  },
};

export function Button({
  children,
  variant = "solid",
  size = "md",
  icon = null,
  iconRight = null,
  disabled = false,
  onClick,
  type = "button",
  style,
  ...rest
}: ButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES[size].gap,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
    whiteSpace: "nowrap",
    ...SIZES[size],
    ...VARIANTS[variant],
    ...style,
  };

  const hover = (e: MouseEvent<HTMLButtonElement>, on: boolean) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "solid")
      el.style.background = on ? "var(--color-primary-hover)" : "var(--color-primary)";
    if (variant === "glass")
      el.style.background = on ? "#FFFFFF" : "var(--color-surface-glass-strong)";
    if (variant === "ghost")
      el.style.background = on ? "var(--color-secondary-hover)" : "transparent";
    el.style.transform = on ? "translateY(-1px)" : "translateY(0)";
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(0.98)";
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(-1px)";
      }}
      {...rest}
    >
      {icon ? <span style={{ display: "inline-flex" }}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex" }}>{iconRight}</span> : null}
    </button>
  );
}
