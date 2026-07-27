import { Fragment } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Arrow, ICONS } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";

const STEPS: { icon: keyof typeof ICONS; title: string; body: string; tint: string }[] = [
  {
    icon: "Nodes",
    title: "Choose your Flowst Mode",
    body: "Select the Flowst Mode that best matches what you want to achieve, from learning to interview prep to cognitive training and communication practice.",
    tint: "var(--pill-lavender)",
  },
  {
    icon: "Target",
    title: "Start with your goal",
    body: "Whether you're learning a new skill, preparing for an interview, strengthening your thinking, or exploring a new topic, every journey begins with a goal.",
    tint: "var(--pill-amber)",
  },
  {
    icon: "Bulb",
    title: "Get specialized team of agents",
    body: "Instead of one AI assistant, Flowst combines specialized agents that each focus on specialized tasks like for your learning goal.",
    tint: "var(--pill-orange)",
  },
  {
    icon: "Shield",
    title: "Complete Flows and FlowStates",
    body: "Each Flow and FlowState is designed to move you one step closer to understanding, helping you build knowledge through focused, interactive experiences.",
    tint: "var(--pill-mint)",
  },
];

export function LearningFlow() {
  return (
    <Section id="how-it-works">
      <Eyebrow>ABOUT</Eyebrow>
      <SectionTitle style={{ maxWidth: 760 }}>
       Various teams of AI agents working together to help you learn, think, speak, and become
      </SectionTitle>
      <div
        className="steps"
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "0.75rem",
          marginTop: "2.5rem",
        }}
      >
        {STEPS.map((step, index) => {
          const Icon = ICONS[step.icon];
          return (
            <Fragment key={step.title}>
              <GlassCard
                variant="solid"
                padding="1.5rem"
                className="step-card"
                style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                  display: "inline-flex",
                  width: 46,
                  height: 46,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface-sunken)",
                  boxShadow: "var(--shadow-inset-well)",
                  }}
                >
                  <Icon size={23} />
                </span>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 600, marginTop: "1.2rem" }}>{step.title}</h3>
                <p style={{ marginTop: "0.6rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
                  {step.body}
                </p>
              </GlassCard>
              {index < STEPS.length - 1 ? (
                <div className="step-arrow" style={{ display: "flex", alignItems: "center", color: "var(--color-soft-muted)" }}>
                  <Arrow size={20} />
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}
