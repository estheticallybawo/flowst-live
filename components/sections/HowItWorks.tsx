import { Fragment } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Arrow, ICONS } from "../Icons";
import { Section, SectionTitle } from "./Section";

const STEPS: { icon: keyof typeof ICONS; title: string; body: string; tint: string }[] = [
  {
    icon: "Nodes",
    title: "Bring your source material",
    body: "Choose a topic or bring in the PDFs, documents, research, and notes you want to work through.",
    tint: "var(--pill-lavender)",
  },
  {
    icon: "Target",
    title: "Get a learning path",
    body: "Your material becomes a focused route that helps you see what matters and where to begin.",
    tint: "var(--pill-amber)",
  },
  {
    icon: "Bulb",
    title: "Learn actively",
    body: "Use guided explanations and interactive moments to turn information into understanding.",
    tint: "var(--pill-orange)",
  },
  {
    icon: "Shield",
    title: "Practise and check understanding",
    body: "Put learning into your own words, notice gaps, and return with a clearer next step.",
    tint: "var(--pill-mint)",
  },
];

export function LearningFlow() {
  return (
    <Section id="how-it-works">
      <SectionTitle style={{ maxWidth: 760 }}>
        A multi-agents assisted learning platform that moves with you.
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
