import { GlassCard } from "../ui/GlassCard";
import { ICONS } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const USE_CASES: { ic: keyof typeof ICONS; agent: AgentId; title: string; body: string }[] = [
  {
    ic: "Target",
    agent: "miro",
    title: "The learner with a messy goal",
    body: "They know what they want to study, but not where to begin. Miro turns the goal into a path, questions, and a next step.",
  },
  {
    ic: "Bulb",
    agent: "nyx",
    title: "The learner who needs the idea to click",
    body: "They need the theory broken down, connected, and spoken back clearly before it becomes something they can trust.",
  },
  {
    ic: "Image",
    agent: "amira",
    title: "The learner who remembers in pictures",
    body: "They need the concept turned into a visual anchor so recall feels less abstract and more personal.",
  },
];

export function UseCases() {
  return (
    <Section>
      <Eyebrow>Who it&apos;s for</Eyebrow>
      <SectionTitle>Built for learners who need to understand, visualize, and remember.</SectionTitle>
      <div
        className="three-col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
