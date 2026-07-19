import { GlassCard } from "../ui/GlassCard";
import { ICONS } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const USE_CASES: { ic: keyof typeof ICONS; agent: AgentId; title: string; body: string }[] = [
  {
    ic: "Nodes",
    agent: "miro",
    title: "The learner who needs a first step",
    body: "They know what they want to learn, but need a bounded route. The demo turns one topic into one focused Flowstate.",
  },
  {
    ic: "Bulb",
    agent: "sofia",
    title: "The learner who needs the idea to click",
    body: "They need plain explanation and a fresh teaching angle before they try to explain the concept themselves.",
  },
  {
    ic: "Target",
    agent: "amira",
    title: "The learner preparing to say it out loud",
    body: "They need one guided voice-practice moment so knowledge becomes spoken clarity, not just silent recognition.",
  },
  {
    ic: "Shield",
    agent: "kai",
    title: "The learner who needs a clear check",
    body: "They need supportive assessment that says whether the explanation passed, needs review, or should be rechecked.",
  },
];

export function UseCases() {
  return (
    <Section>
      <div style={{ textAlign: "right" }}>
        <Eyebrow>Who it is for</Eyebrow>
        <SectionTitle style={{ marginLeft: "auto" }}>
          Built for learners who need clarity without more cognitive load.
        </SectionTitle>
      </div>
      <div
        className="three-col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        {USE_CASES.map((c) => {
          const I = ICONS[c.ic];
          return (
            <GlassCard key={c.title} padding="1.75rem" glow={c.agent}>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-md)",
                  flex: "none",
                  background: `var(--agent-${c.agent}-soft)`,
                  boxShadow: "var(--shadow-inner-soft)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <I size={24} />
              </span>
              <h3
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 600,
                  marginTop: "1.1rem",
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  marginTop: "0.7rem",
                  color: "var(--color-muted)",
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                }}
              >
                {c.body}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}