import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { Tag } from "../ui/Tag";
import { Section, Eyebrow, SectionTitle } from "./Section";

export function Proof() {
  return (
    <Section>
      <div style={{ textAlign: "right" }}>
        <Eyebrow>The evidence</Eyebrow>
        <SectionTitle
          style={{
            marginLeft: "auto",
            maxWidth: 1040,
            lineHeight: 1.08,
            textWrap: "balance",
          }}
        >
          Every Flowst method is backed by intense research in cognitive science and flow state
          retention.
        </SectionTitle>
      </div>
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="nyx" dot>
            Connected Understanding
          </Tag>
          <div
            style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}
          >
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
            Flowst pushes learners beyond passive reading by asking them to organize ideas, connect
            key terms, and explain the concept in their own words.
          </p>
        </GlassCard>
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="miro" dot>
            Retrieval Practice
          </Tag>
          <div
            style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}
          >
            <Pill
              color="orange"
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
            Miro turns learning into checkpoints, weak-point tracking, and next-step review so
            progress is based on recall instead of empty confidence.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
