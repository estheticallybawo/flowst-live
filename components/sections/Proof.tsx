import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { Tag } from "../ui/Tag";
import { Section, Eyebrow, SectionTitle } from "./Section";

export function Proof() {
  return (
    <Section>
      <div style={{ textAlign: "left" }}>
        <Eyebrow>The outcome</Eyebrow>
        <SectionTitle
          style={{
            maxWidth: 1040,
            lineHeight: 1.08,
            textWrap: "balance",
          }}
        >
          The demo ends with proof because clarity should be visible, not just felt.
        </SectionTitle>
      </div>
      <div
        className="three-col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="sofia" dot>
            Explainable Knowledge
          </Tag>
          <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <Pill
              color="amber"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.8rem",
                padding: "0.1em 0.4em",
              }}
            >
              Learn it
            </Pill>
          </div>
          <p style={{ marginTop: "1.1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            Sofia teaches the selected definition with a fresh framing so the learner can understand
            the concept before trying to perform it.
          </p>
        </GlassCard>
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="amira" dot>
            Spoken Clarity
          </Tag>
          <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <Pill
              color="orange"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.8rem",
                padding: "0.1em 0.4em",
              }}
            >
              Say it
            </Pill>
          </div>
          <p style={{ marginTop: "1.1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            Amira creates one real voice-practice moment, so the learner can hear their knowledge in
            their own words instead of only recognizing it silently.
          </p>
        </GlassCard>
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="kai" dot>
            Understanding Check
          </Tag>
          <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <Pill
              color="mint"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.8rem",
                padding: "0.1em 0.4em",
              }}
            >
              Prove it
            </Pill>
          </div>
          <p style={{ marginTop: "1.1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            Kai checks the explanation, then the completed Flowstate appears in Progress/Proof with
            a badge and downloadable Explanation Clarity Certificate.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}