"use client";

import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      className="flowst-card hero-card"
      style={{
        maxWidth: "var(--container-max)",
        margin: "28px auto 0",
        padding: "clamp(1.5rem, 3vw, 2.75rem)",
        borderRadius: "var(--radius-2xl)",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.7rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              marginTop: "1.15rem",
            }}
          >
            Every expert starts somewhere.
          </h1>
          <p
            style={{
              marginTop: "1.4rem",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-muted)",
              maxWidth: 500,
            }}
          >
            Flowst is that somewhere where you turn any knowledge into a guided learning experience that helps knowledge stick.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button href="https://demo.useflowst.com/demo" target="_blank" rel="noreferrer">
              Try the demo
            </Button>
            <Button variant="ghost" href="#learning-mode">
              Explore learning mode
            </Button>
          </div>
        </div>
        <div
          style={{
            minHeight: 320,
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            background: "var(--color-surface-sunken)",
            boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/flowst-hero.png"
            alt="Flowst guided learning experience"
            style={{ width: "100%", height: "100%", minHeight: 320, objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
