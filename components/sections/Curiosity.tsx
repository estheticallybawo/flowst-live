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
              Goal, concept, image, recall
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
            Most tools answer a question. Flowst structures the whole learning loop.
          </SectionTitle>
          <p
            style={{
              marginTop: "1.4rem",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-muted)",
              lineHeight: 1.6,
            }}
          >
            Start with a <Pill color="amber">goal</Pill>, learn the theory, turn your mental model
            into a <Pill color="mint">picture</Pill>, then prove what you can{" "}
            <Pill color="orange">recall</Pill> later.
          </p>
        </div>
      </div>
    </Section>
  );
}
