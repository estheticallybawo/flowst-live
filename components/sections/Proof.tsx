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
          Flowst turns learning into explainable knowledge, spoken clarity, and reviewable proof.
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
          <Tag agent="sophia" dot>
            Explainable Knowledge
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
            Sophia pushes learners beyond passive reading by asking them to connect key ideas,
            explain the concept in their own words, and tighten what still feels vague.
          </p>
        </GlassCard>
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="amira" dot>
            Spoken Clarity
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
              Say it
            </Pill>
          </div>
          <p style={{ marginTop: "1.1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            Amira turns quiet understanding into spoken practice, helping learners hear where an
            answer is clear, rushed, or missing the point.
          </p>
        </GlassCard>
        <GlassCard variant="solid" padding="2rem">
          <Tag agent="miro" dot>
            Final Miro Clarity Review
          </Tag>
          <div
            style={{ marginTop: "1.2rem", display: "flex", alignItems: "baseline", gap: "0.6rem" }}
          >
            <Pill
              color="lavender"
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
            Proof means completed subtopics, badges, weak-area review, and a final explanation check
            that unlocks a shareable Explanation Clarity Certificate.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}

