"use client";

import { useState } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";

/**
 * Flowst Input — soft field on a white surface. Optionally renders an
 * attached soft-rectangle action button inside the same control.
 */
interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  icon?: ReactNode;
  action?: string | null;
  onAction?: () => void;
  style?: CSSProperties;
  "aria-label"?: string;
}

const CTA_GREY = "#2e2f30"; 

export function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  icon = null,
  action = null,
  onAction,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "var(--color-surface)",
        border: `1px solid ${focused ? CTA_GREY : "var(--color-border-soft)"}`,
        borderRadius: "14px",
        boxShadow: focused ? "0 0 0 4px rgba(88, 89, 90, 0.18)" : "var(--shadow-inner-soft)",
        padding: action ? "0.35rem 0.35rem 0.35rem 1.1rem" : "0.7rem 1.1rem",
        transition:
          "box-shadow var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)",
        ...style,
      }}
    >
      {icon ? (
        <span style={{ display: "inline-flex", color: "var(--color-soft-muted)", flex: "none" }}>
          {icon}
        </span>
      ) : null}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && action && onAction) onAction();
        }}
        style={{
          flex: 1,
          minWidth: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "var(--color-foreground)",
        }}
        {...rest}
      />
      {action ? (
        <button
          type="button"
          onClick={onAction}
          style={{
            flex: "none",
            border: "1px solid rgba(88, 89, 90, 0.22)",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "#FFFFFF",
            background: CTA_GREY,
            borderRadius: "14px",
            padding: "0.55rem 1.1rem",
            boxShadow: "0 12px 26px rgba(88, 89, 90, 0.22), var(--shadow-inner-soft)",
          }}
        >
          {action}
        </button>
      ) : null}
    </div>
  );
}


