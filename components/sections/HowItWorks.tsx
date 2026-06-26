import { GlassCard } from "../ui/GlassCard";
import { ICONS, Arrow } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const STEPS: { n: string; agent: AgentId; ic: keyof typeof ICONS; title: string; body: string }[] =
  [
    {
      n: "01",
      agent: "nyx",
      ic: "Target",
      title: "Learn it with Nyx",
      body: "Miro starts by clarifying the goal and creating study questions. Then Nyx teaches the concept, names the key ideas, and helps the learner build a mental model.",
    },
    {
      n: "02",
      agent: "amira",
      ic: "Image",
      title: "See it with Amira",
      body: "Amira turns that mental model into a generated image, then helps refine it until the picture matches how the learner understands the concept.",
    },
    {
      n: "03",
      agent: "miro",
      ic: "Chart",
      title: "Prove it with Miro",
      body: "Miro checks theory clarity, vocal clarity, visual mapping, and recall readiness, then stores weak points and recommends the next review step.",
    },
  ];

export function HowItWorks() {
  return (
    <Section>
      <Eyebrow>The Flowst loop</Eyebrow>
      <SectionTitle>One connected mission from learning goal to recall proof.</SectionTitle>
      <div
        className="three-col steps"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "2.5rem",
          alignItems: "stretch",
        }}
      >
        {STEPS.map((s, i) => {
          const I = ICONS[s.ic];
          return (
            <div key={s.n} style={{ display: "flex", alignItems: "stretch", gap: "1rem" }}>
              <GlassCard
                variant="solid"
                padding="1.75rem"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--radius-sm)",
                      flex: "none",
                      background: `var(--agent-${s.agent}-soft)`,
                      boxShadow: "var(--shadow-inner-soft)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <I size={22} />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "1.6rem",
                      color: "var(--color-hairline)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.18rem", fontWeight: 600, marginTop: "1.2rem" }}>
                  {s.title}
                </h3>
                <p
                  style={{
                    marginTop: "0.6rem",
                    color: "var(--color-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                  }}
                >
                  {s.body}
                </p>
              </GlassCard>
              {i < STEPS.length - 1 && (
                <div
                  className="step-arrow"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "var(--color-soft-muted)",
                  }}
                >
                  <Arrow size={22} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
