import type { CSSProperties, ReactNode } from "react";

/** Shared layout primitives for marketing sections. */

export function Section({
  children,
  style,
  className,
  id,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "clamp(3.5rem, 7vw, 6rem) 16px 0",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--color-soft-muted)",
        marginBottom: "0.9rem",
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <h2
      style={{
        fontSize: "var(--text-h2)",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        maxWidth: 760,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
