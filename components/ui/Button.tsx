"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * Flowst Button — soft-rectangle CTA, not a pill.
 * - solid/accent: flat Flowst grey primary CTA
 * - glass: frosted nav/surface CTA
 * - ghost: quiet secondary CTA
 */
type Variant = "solid" | "accent" | "glass" | "ghost";
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
  href?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "0.58rem 1rem", fontSize: "0.8125rem", gap: "0.4rem" },
  md: { padding: "0.78rem 1.35rem", fontSize: "0.95rem", gap: "0.5rem" },
  lg: { padding: "1rem 1.8rem", fontSize: "1.05rem", gap: "0.6rem" },
};

const PRIMARY_BACKGROUND = "#2e2f30";
const PRIMARY_BACKGROUND_HOVER = "#58585a";

const VARIANTS: Record<Variant, CSSProperties> = {
  solid: {
    background: PRIMARY_BACKGROUND,
    color: "#FFFFFF",
    border: "1px solid rgba(88, 89, 90, 0.22)",
    boxShadow: "0 14px 32px rgba(88, 89, 90, 0.22), var(--shadow-inner-soft)",
  },
  accent: {
    background: PRIMARY_BACKGROUND,
    color: "#FFFFFF",
    border: "1px solid rgba(88, 89, 90, 0.22)",
    boxShadow: "0 14px 32px rgba(88, 89, 90, 0.22), var(--shadow-inner-soft)",
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
  href,
  target,
  rel,
  style,
  ...rest
}: ButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES[size].gap,
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "18px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    ...SIZES[size],
    ...VARIANTS[variant],
    ...style,
  };

  const hover = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, on: boolean) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "solid" || variant === "accent") {
      el.style.background = on ? PRIMARY_BACKGROUND_HOVER : PRIMARY_BACKGROUND;
    }
    if (variant === "glass") {
      el.style.background = on ? "#FFFFFF" : "var(--color-surface-glass-strong)";
    }
    if (variant === "ghost") {
      el.style.background = on ? "var(--color-secondary-hover)" : "transparent";
    }
    el.style.transform = on ? "translateY(-1px)" : "translateY(0)";
  };

  const content = (
    <>
      {icon ? <span style={{ display: "inline-flex", color: "inherit" }}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex", color: "inherit" }}>{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          else onClick?.();
        }}
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
        {content}
      </a>
    );
  }

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
      {content}
    </button>
  );
}


