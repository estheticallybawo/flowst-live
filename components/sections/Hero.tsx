"use client";

import { useNotify } from "../NotifyProvider";
import { Button } from "../ui/Button";

export function Hero() {
  const { notify } = useNotify();

  return (
    <section
      className="flowst-card hero-card"
      style={{
        position: "relative",
        maxWidth: "var(--container-max)",
        margin: "2px auto 0",
        minHeight: "min(1200px, calc(100vh - 1rem))",
        borderRadius: "var(--radius-2xl)",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-background"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/assets/brand/flowsthero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(360deg, rgba(138, 134, 134, 0.37) 10%, rgba(49, 49, 70, 0.33) 25%, rgba(83, 83, 83, 0.38) 48%, rgba(56, 65, 78, 0.37) 60%, rgba(15, 23, 42, 0.84) 100%)",
        }}
      />
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          height: "100%",
          padding: "clamp(2rem, 4vw, 4rem)",
          gap: "1.5rem",
        }}
      >
        <div style={{ maxWidth: 980 }}>
          <h1
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.6rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              fontWeight: 300,
              color: "white",
              paddingTop: "1rem",
            }}
          >
             Join a growing community of learners using specialized team of agents for learning guidance to understand more, retain more, and become more confident on
          </h1>
          <h1 
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
            lineHeight: 1.02, 
            fontWeight: 700,
            paddingTop: "1.5rem",
            color: "white",

          }}>
            Flowst</h1>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              href="https://useflowst.com/demo-access"
              rel="noreferrer"
              style={{
                width: "220px",
                minWidth: "220px",
                boxSizing: "border-box",
                padding: "1rem 1.95rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Try demo
            </Button>
            <Button
              variant="ghost"
              onClick={() => notify("useflowst.com/hero-notify")}
              style={{
                width: "220px",
                minWidth: "220px",
                boxSizing: "border-box",
                padding: "1rem 1.95rem",
                borderRadius: "999px",
                background: "rgb(206, 206, 207)",
                color: "rgb(255, 255, 255)",
                border: "2px solid rgb(212, 212, 212)",
              }}
            >
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
