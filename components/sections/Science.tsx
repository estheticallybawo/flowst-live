import { GlassCard } from "../ui/GlassCard";
import { Tag } from "../ui/Tag";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const STATS: { agent: AgentId; label: string; figure: string; caption: string }[] = [
  {
    agent: "miro",
    label: "The forgetting curve",
    figure: "66%",
    caption:
      "of new information is forgotten within 24 hours without active reinforcement. Miro rebuilds your topic into a guided path so it is encoded, not just seen once.",
  },
  {
    agent: "sophia",
    label: "Active recall",
    figure: "+50%",
    caption:
      "stronger retention comes from recalling and explaining material than from re-reading it. Sophia makes explaining each idea back, in your own words, the default step.",
  },
  {
    agent: "amira",
    label: "Say it out loud",
    figure: "90%",
    caption:
      "Studies suggest learners keep far more, up to around 90%, of what they actively apply and say out loud, versus a fraction of what they passively read. That is the layer Amira is built for.",
  },
];

export function Science() {
  return (
    <Section id="science">
      <Eyebrow>The science</Eyebrow>
      <SectionTitle style={{ maxWidth: 820 }}>
        The Flowst loop is built on how memory actually works.
      </SectionTitle>
      <p
        style={{
          marginTop: "1rem",
          color: "var(--color-muted)",
          fontSize: "var(--text-body-lg)",
          lineHeight: 1.6,
        }}
      >
        Grounded in decades of cognitive-science research, the forgetting curve, active recall,
        dual coding, and flow. Flowst pairs visual encoding with retrieval and out-loud practice,
        then paces you into flow, so understanding turns into knowledge you keep.
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
