import type { Metadata } from "next";
import { Arrow, Shield } from "@/components/Icons";
import { DemoAccessForm } from "./DemoAccessForm";

export const metadata: Metadata = {
  title: "Demo access code | Flowst",
  description:
    "Enter a Flowst demo access code to try the guided learning demo as a judge or early tester.",
};

const ACCESS_NOTES = [
  "Protects the live demo from surprise token spikes.",
  "Keeps the judge experience available during submission review.",
  "Gives early testers a focused route into the current build.",
];

export default async function DemoAccessPage({
  searchParams,
}: {
  searchParams?: Promise<{ code?: string }>;
}) {
  const params = await searchParams;
  const initialCode = typeof params?.code === "string" ? params.code : "";

  return (
    <main
      style={{
        minHeight: "100dvh",
        padding: "clamp(1rem, 4vw, 2rem)",
        background:
          "radial-gradient(circle at 20% 10%, rgba(199, 194, 255, 0.3), transparent 28%), radial-gradient(circle at 84% 22%, rgba(255, 211, 154, 0.34), transparent 24%), var(--color-background)",
      }}
    >
      <section
        className="flowst-card demo-access-card"
        style={{
          maxWidth: 1120,
          minHeight: "calc(100dvh - clamp(2rem, 8vw, 4rem))",
          margin: "0 auto",
          borderRadius: "var(--radius-2xl)",
          padding: "clamp(1.25rem, 4vw, 3rem)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(320px, 0.75fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
      >
        <div>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              color: "var(--color-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Arrow size={18} style={{ transform: "rotate(180deg)" }} />
            Back to Flowst
          </a>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "3rem",
              padding: "0.45rem 0.75rem",
              borderRadius: "var(--radius-pill)",
              background: "var(--pill-lavender)",
              border: "1px solid rgba(85, 79, 170, 0.2)",
              boxShadow: "var(--shadow-pill)",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <Shield size={16} />
            Judge and early tester access
          </div>
          <h1
            style={{
              maxWidth: 720,
              marginTop: "1rem",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            Enter your code to try the Flowst demo.
          </h1>
          <p
            style={{
              maxWidth: 610,
              marginTop: "1.25rem",
              color: "var(--color-muted)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.65,
            }}
          >
            Flowst is still in a controlled pre-launch window. Access codes help us keep the demo
            stable for judges, early users, and the people shaping the first release.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.7rem",
              marginTop: "1.6rem",
            }}
            aria-label="Access gate benefits"
          >
            {["Learn it", "Say it", "Prove it"].map((label, index) => (
              <span
                key={label}
                style={{
                  borderRadius: "var(--radius-pill)",
                  background:
                    index === 0
                      ? "var(--pill-blue)"
                      : index === 1
                        ? "var(--pill-orange)"
                        : "var(--pill-mint)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: "var(--shadow-pill)",
                  padding: "0.45rem 0.8rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <aside
          style={{
            background: "rgba(255, 255, 255, 0.82)",
            border: "1px solid var(--color-glass-border)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            backdropFilter: "blur(var(--blur-soft))",
            WebkitBackdropFilter: "blur(var(--blur-soft))",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.55rem, 3vw, 2.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              fontWeight: 600,
            }}
          >
            Demo access
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--color-muted)",
              fontSize: "0.98rem",
              lineHeight: 1.55,
            }}
          >
            Use the code Esther shared with you. If you need access, email info@useflowst.com.
          </p>
          <DemoAccessForm initialCode={initialCode} />
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--color-hairline)",
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {ACCESS_NOTES.map((note) => (
              <div
                key={note}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.45,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 9,
                    height: 9,
                    flex: "none",
                    marginTop: "0.35rem",
                    borderRadius: 999,
                    background: "var(--pill-mint)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                />
                {note}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}