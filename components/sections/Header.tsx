"use client";

import { Button } from "../ui/Button";
import { DEMO_URL } from "@/lib/site";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Agents", href: "#agents" },
  { label: "Institutions", href: "#institutions" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 16,
        zIndex: 40,
        marginTop: 16,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "var(--container-max)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          background: "var(--color-surface-glass-strong)",
          border: "1px solid var(--color-glass-border)",
          borderRadius: "var(--radius-pill)",
          boxShadow: "var(--shadow-pill), var(--shadow-inner-soft)",
          backdropFilter: "blur(var(--blur-glass))",
          WebkitBackdropFilter: "blur(var(--blur-glass))",
          padding: "0.55rem 0.7rem 0.55rem 1.4rem",
        }}
      >
        <a
          href="/#top"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
          aria-label="Flowst home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/brand/flowst-mark-black.png" alt="" style={{ height: 22, width: "auto" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.15rem" }}>
            Flowst
          </span>
        </a>
        <div style={{ display: "flex", gap: "1.9rem" }} className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--color-foreground)",
                opacity: 0.85,
                transition: "opacity var(--dur-fast) var(--ease-soft)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button variant="accent" href={DEMO_URL} target="_blank" rel="noreferrer">
          Try demo
        </Button>
      </nav>
    </header>
  );
}