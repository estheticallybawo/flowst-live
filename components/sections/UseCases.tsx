import { GlassCard } from "../ui/GlassCard";
import { ICONS } from "../Icons";
import { Section, SectionTitle } from "./Section";

const LEARNERS: { icon: keyof typeof ICONS; title: string; body: string; tint: string }[] = [
  {
    icon: "Bulb",
    title: "Students",
    body: "Build a clearer path through coursework, reading, and unfamiliar concepts.",
    tint: "var(--pill-amber)",
  },
  {
    icon: "Chart",
    title: "Professionals",
    body: "Turn complex information into knowledge you can use and explain at work.",
    tint: "var(--pill-lavender)",
  },
  {
    icon: "Target",
    title: "Career changers",
    body: "Create momentum when you are learning a new field from the ground up.",
    tint: "var(--pill-mint)",
  },
  {
    icon: "Heart",
    title: "Lifelong learners",
    body: "Stay curious without losing track of the ideas you want to keep.",
    tint: "var(--pill-rose)",
  },
];

export function ForLearners() {
  return (
    <Section>
      <SectionTitle style={{ maxWidth: 760 }}>
        Built for people who want learning to move them forward.
      </SectionTitle>
      <div
        className="for-learners-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1rem",
          marginTop: "2.4rem",
        }}
      >
        {LEARNERS.map((learner) => {
          const Icon = ICONS[learner.icon];
          return (
            <GlassCard key={learner.title} variant="solid" padding="1.5rem">
              <span
                style={{
                  display: "inline-flex",
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  background: learner.tint,
                }}
              >
                <Icon size={22} />
              </span>
              <h3 style={{ marginTop: "1.1rem", fontSize: "1.15rem", fontWeight: 600 }}>{learner.title}</h3>
              <p style={{ marginTop: "0.65rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
                {learner.body}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
