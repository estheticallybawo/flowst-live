import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { Section, Eyebrow, SectionTitle } from "./Section";

const JOURNEY = [
  { title: "Learn", body: "Start with material that matters to you.", color: "mint" as const },
  { title: "Think", body: "Connect ideas until they make sense.", color: "lavender" as const },
  { title: "Speak", body: "Practise explaining with clarity and confidence.", color: "amber" as const },
  { title: "Become", body: "Turn consistent learning into genuine expertise.", color: "blue" as const },
];

export function LearningFlow() {
  return (
    <Section id="how-it-works">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
        <Eyebrow>ABOUT</Eyebrow>
        <SectionTitle style={{ maxWidth: 1180 }}>
         A multi-agents assisted learning platform for building understanding, confidence, and expertise.
        </SectionTitle>
      </div>
      <div
        className="journey-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1rem",
          marginTop: "2.4rem",
        }}
      >
        {JOURNEY.map((step, index) => (
          <GlassCard key={step.title} variant="solid" padding="1.5rem" style={{ minHeight: 180 }}>
            <Pill color={step.color}>{index === 0 ? "Start" : index === 1 ? "Connect" : index === 2 ? "Practice" : "Become"}</Pill>
            <h3 style={{ marginTop: "1.25rem", fontSize: "1.25rem", fontWeight: 600 }}>{step.title}</h3>
            <p style={{ marginTop: "0.7rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
              {step.body}
            </p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
