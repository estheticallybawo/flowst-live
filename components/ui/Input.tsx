"use client";

import { useState } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";

/**
 * Flowst Input — pill-shaped field on a soft white surface. Optionally
 * renders an attached action button inside the same capsule (the mail
 * signup / "enter email" pattern).
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
        border: `1px solid ${focused ? "var(--color-foreground)" : "var(--color-border-soft)"}`,
        borderRadius: "var(--radius-pill)",
        boxShadow: focused ? "0 0 0 4px var(--agent-miro-soft)" : "var(--shadow-inner-soft)",
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
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "var(--color-inverse)",
            background: "var(--color-primary)",
            borderRadius: "var(--radius-pill)",
            padding: "0.55rem 1.1rem",
            boxShadow: "var(--shadow-pill)",
          }}
        >
          {action}
        </button>
      ) : null}
    </div>
  );
}
