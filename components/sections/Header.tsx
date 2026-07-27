"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { DEMO_GATE_URL } from "@/lib/site";

const LINKS = [
  { label: "About", href: "#how-it-works" },
  { label: "Features", href: "#Features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Blog", href: "#blog" },
  { label: "Partnership", href: "#institutions" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          position: "relative",
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
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="header-nav"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            border: "1px solid var(--color-glass-border)",
            borderRadius: "50%",
            background: "transparent",
            color: "var(--color-foreground)",
            cursor: "pointer",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: "1.25rem", lineHeight: 1 }}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
        <div
          id="header-nav"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          style={{ display: "flex", gap: "1.9rem", alignItems: "center" }}
        >
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
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="accent"
            href={DEMO_GATE_URL}
            className="nav-menu-cta"
            style={{ width: "50%" }}
            onClick={() => setMenuOpen(false)}
          >
            Try demo
          </Button>
        </div>
        <Button className="desktop-cta" variant="accent" href={DEMO_GATE_URL}>
          Try demo
        </Button>
      </nav>
    </header>
  );
}