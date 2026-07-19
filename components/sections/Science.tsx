import { GlassCard } from "../ui/GlassCard";
import { Tag } from "../ui/Tag";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const STATS: { agent: AgentId; label: string; figure: string; caption: string }[] = [
  {
    agent: "miro",
    label: "Bounded focus",
    figure: "1",
    caption:
      "the public demo keeps the Flowstate to one concept and one definition, so learners can complete the loop without cognitive overload.",
  },
  {
    agent: "sofia",
    label: "Fresh teaching",
    figure: "6",
    caption:
      "teaching strategies can shape Sofia's explanation, from simple breakdowns to analogies, comparisons, scenarios, predictions, or misconception checks.",
  },
  {
    agent: "amira",
    label: "Voice practice",
    figure: "1",
    caption:
      "real spoken explanation is captured in the demo before Kai checks understanding, because clarity needs to leave the learner's head in their own words.",
  },
];

export function Science() {
  return (
    <Section id="science">
      <Eyebrow>The method</Eyebrow>
      <SectionTitle style={{ maxWidth: 820 }}>
        The demo is small on purpose, so the learning loop can be felt end to end.
      </SectionTitle>
      <p
        style={{
          marginTop: "1rem",
          color: "var(--color-muted)",
          fontSize: "var(--text-body-lg)",
          lineHeight: 1.6,
        }}
      >
        Flowst is being tuned as cognitive health support for learning: focused scope, active
        explanation, voice practice, and supportive assessment. The goal is to reduce the mental
        burden of studying, not add another overwhelming tool.
      </p>
      <div
        className="three-col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        {STATS.map((s) => (
          <GlassCard key={s.label} variant="solid" padding="2rem">
            <Tag agent={s.agent} dot>
              {s.label}
            </Tag>
            <div
              style={{
                marginTop: "1.4rem",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(2.6rem, 5vw, 3.4rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {s.figure}
            </div>
            <p style={{ marginTop: "1.1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
              {s.caption}
            </p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}