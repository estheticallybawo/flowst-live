import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { ICONS } from "../Icons";
import { Section, Eyebrow, SectionTitle } from "./Section";

const FEATURES: { icon: keyof typeof ICONS; title: string; body: string }[] = [
  {
    icon: "Nodes",
    title: "Bring your material",
    body: "Start with PDFs, documents, research papers, notes, or a topic you want to understand.",
  },
  {
    icon: "Target",
    title: "Follow a clear path",
    body: "Flowst shapes your material into lessons that make the next useful step obvious.",
  },
  {
    icon: "Bulb",
    title: "Learn actively",
    body: "Move beyond passive reading with guided explanations and moments that make ideas click.",
  },
];

export function LearningMode() {
  return (
    <Section id="Features">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
        <Eyebrow>Features</Eyebrow>
        <SectionTitle style={{ maxWidth: 900 }}>
          Learning Mode turns your material into a clear way forward.
        </SectionTitle>
      </div>
      <p
        style={{
          maxWidth: 700,
          marginTop: "1rem",
          color: "var(--color-muted)",
          fontSize: "var(--text-body-lg)",
          lineHeight: 1.6,
        }}
      >
        A multi-agents assisted learning platform that helps you understand what you are learning, retain it, and make it your own.
      </p>
      <div className="learning-mode-grid" style={{ marginTop: "2.5rem" }}>
        <GlassCard
          variant="solid"
          padding="clamp(1.5rem, 3vw, 2.25rem)"
          style={{ gridRow: "span 2", background: "linear-gradient(150deg, #FFFFFF, #EEF3FB)" }}
        >
          <Pill color="lavender">Structured learning paths</Pill>
          <h3 style={{ marginTop: "1.4rem", fontSize: "var(--text-h3)", lineHeight: 1.15 }}>
            Start with what you already have.
          </h3>
          <p style={{ marginTop: "1rem", color: "var(--color-muted)", lineHeight: 1.6, maxWidth: 440 }}>
            Flowst helps turn scattered source material into a guided learning experience built around understanding.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "0.7rem",
              marginTop: "1.8rem",
              color: "var(--color-foreground)",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <span>PDFs and documents</span>
            <span>Research papers</span>
            <span>Personal notes</span>
            <span>New subjects</span>
          </div>
        </GlassCard>
        {FEATURES.map((feature) => {
          const Icon = ICONS[feature.icon];
          return (
            <GlassCard key={feature.title} variant="solid" padding="1.5rem">
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
              <h3 style={{ marginTop: "1rem", fontSize: "1.12rem", fontWeight: 600 }}>{feature.title}</h3>
              <p style={{ marginTop: "0.55rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
                {feature.body}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
