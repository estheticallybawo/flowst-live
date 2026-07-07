import { Fragment } from "react";
import { GlassCard } from "../ui/GlassCard";
import { ICONS, Arrow } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";
import type { AgentId } from "@/lib/agents";

const STEPS: { n: string; agent: AgentId; ic: keyof typeof ICONS; title: string; body: string }[] = [
  {
    n: "01",
    agent: "miro",
    ic: "Target",
    title: "Join the launch list",
    body: "Follow the build and be first to know when the Flowst learning loop opens for early users.",
  },
  {
    n: "02",
    agent: "miro",
    ic: "Nodes",
    title: "Tell Miro what you want to learn",
    body: "Miro will shape your topic, level, time, and learning goal into a path you can actually follow.",
  },
  {
    n: "03",
    agent: "miro",
    ic: "Chart",
    title: "Preview the learning path",
    body: "You will see the route before committing deeper, including subtopics, practice moments, and the final review goal.",
  },
  {
    n: "04",
    agent: "sophia",
    ic: "Bulb",
    title: "Learn with Sophia clarity sessions",
    body: "Sophia helps you understand each idea, explain it back, and tighten what still feels vague.",
  },
  {
    n: "05",
    agent: "amira",
    ic: "Brain",
    title: "Say it, review it, share proof",
    body: "Amira voice practice comes online as the Say it layer, then Miro runs the final clarity review and prepares a shareable explanation-clarity certificate.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Eyebrow>The product journey</Eyebrow>
      <SectionTitle>What we are building: Learn it. Say it. Prove it.</SectionTitle>
      <div
        className="steps"
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "0.75rem",
          marginTop: "2.5rem",
        }}
      >
        {STEPS.map((s, i) => {
          const I = ICONS[s.ic];
          return (
            <Fragment key={s.n}>
              <GlassCard
                variant="solid"
                padding="1.5rem"
                className="step-card"
                style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column" }}
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
                      fontWeight: 500,
                      fontSize: "1.6rem",
                      color: "var(--color-soft-muted)",
                      opacity: 0.38,
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 600, marginTop: "1.2rem" }}>
                  {s.title}
                </h3>
                <p
                  style={{
                    marginTop: "0.6rem",
                    color: "var(--color-muted)",
                    fontSize: "0.9rem",
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
                  <Arrow size={20} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}

