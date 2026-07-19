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
    title: "Open the public demo",
    body: "The demo starts at demo.useflowst.com with a 24-hour learner session. No account, email, or password is required.",
  },
  {
    n: "02",
    agent: "miro",
    ic: "Nodes",
    title: "Choose Guided Learning",
    body: "Guided Learning is live in the demo. Brain Canvas is visible as coming soon, so the experience stays focused.",
  },
  {
    n: "03",
    agent: "miro",
    ic: "Chart",
    title: "Pick a topic and scope",
    body: "Choose a topic, optional material, focused or broad scope, and a 5 to 25 minute focus block. The demo keeps the route to one concept.",
  },
  {
    n: "04",
    agent: "sofia",
    ic: "Bulb",
    title: "Learn with Sofia",
    body: "Sofia teaches the selected definition with a fresh strategy, so the concept feels clearer before you try to explain it.",
  },
  {
    n: "05",
    agent: "amira",
    ic: "Brain",
    title: "Say it with Amira",
    body: "Amira asks for one real spoken explanation, requests microphone access, records the attempt, and hands it to Kai.",
  },
  {
    n: "06",
    agent: "kai",
    ic: "Shield",
    title: "Kai checks, Miro closes",
    body: "Kai checks understanding, then Miro closes the loop with proof, a badge, and a downloadable explanation-clarity certificate.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div style={{ textAlign: "right" }}>
        <Eyebrow>The live demo journey</Eyebrow>
        <SectionTitle style={{ marginLeft: "auto" }}>
          One focused Flowstate: learn it, say it, prove it.
        </SectionTitle>
      </div>
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