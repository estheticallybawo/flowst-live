import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { Section, Eyebrow, SectionTitle } from "./Section";

export function Curiosity() {
  return (
    <Section>
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        <GlassCard variant="solid" padding="0" style={{ overflow: "hidden" }}>
          <div
            className="flowst-well"
            style={{
              margin: "1.5rem",
              borderRadius: "var(--radius-lg)",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1.4rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-soft-muted)",
                fontSize: "0.9rem",
              }}
            >
              Topic → Flowstate → Sofia → Amira → Kai → proof
            </div>
            <div
              style={{
                marginTop: "0.6rem",
                height: 2,
                background: "var(--color-foreground)",
                width: 14,
                borderRadius: 2,
                animation: "caret 1.1s steps(1) infinite",
              }}
            />
          </div>
        </GlassCard>
        <div>
          <Eyebrow>The learning gap</Eyebrow>
          <SectionTitle>
            Traditional education rewards recall. Flowst helps learning feel lighter and clearer.
          </SectionTitle>
          <p
            style={{
              marginTop: "1.4rem",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-muted)",
              lineHeight: 1.6,
            }}
          >
            The demo is designed around one focused concept so learners can experience the whole loop
            without overwhelm: Miro shapes the <Pill color="lavender">Flowstate</Pill>, Sofia teaches
            with <Pill color="amber">clarity</Pill>, Amira gives space to use
            <Pill color="orange"> your voice</Pill>, and Kai checks understanding before proof is
            shown.
          </p>
        </div>
      </div>
    </Section>
  );
}