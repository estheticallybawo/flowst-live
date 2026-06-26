"use client";

import { useId, useState } from "react";
import type { CSSProperties } from "react";

/**
 * Flowst Accordion — neumorphic FAQ stack. Each item expands with a smooth
 * grid-template-rows transition. Accessible: button headers, aria-expanded,
 * region semantics. `items` is [{ q, a }]; `defaultOpen` is the initially
 * open index (or -1).
 */
export interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  style?: CSSProperties;
}

export function Accordion({ items, defaultOpen = 0, style }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", ...style }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={i}
            style={{
              background: isOpen ? "var(--color-surface)" : "var(--color-surface-glass)",
              border: "1px solid var(--color-glass-border)",
              borderRadius: "var(--radius-lg)",
              boxShadow: isOpen
                ? "var(--shadow-card-soft), var(--shadow-inner-soft)"
                : "var(--shadow-inner-soft)",
              backdropFilter: "blur(var(--blur-soft))",
              WebkitBackdropFilter: "blur(var(--blur-soft))",
              transition: "box-shadow var(--dur-base) var(--ease-soft)",
            }}
          >
            <button
              type="button"
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "1.15rem 1.4rem",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "1.02rem",
                color: "var(--color-foreground)",
              }}
            >
              <span>{it.q}</span>
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 26,
                  height: 26,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "var(--color-surface-sunken)",
                  boxShadow: "var(--shadow-inset-well)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform var(--dur-base) var(--ease-soft)",
                  fontSize: "1.05rem",
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows var(--dur-slow) var(--ease-soft)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    padding: "0 1.4rem 1.25rem",
                    margin: 0,
                    color: "var(--color-muted)",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                  }}
                >
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
