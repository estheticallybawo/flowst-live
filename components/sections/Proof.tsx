import { GlassCard } from "../ui/GlassCard";
import { ICONS } from "../Icons";
import { Section, SectionTitle } from "./Section";

const OUTCOMES: { icon: keyof typeof ICONS; title: string; body: string; tint: string }[] = [
  {
    icon: "Bulb",
    title: "Learn deeply",
    body: "Build a real grasp of the ideas behind the material in front of you.",
    tint: "var(--pill-amber)",
  },
  {
    icon: "Brain",
    title: "Think critically",
    body: "Connect information, spot weak points, and form a stronger point of view.",
    tint: "var(--pill-lavender)",
  },
  {
    icon: "Mic",
    title: "Speak confidently",
    body: "Practise putting knowledge into your own words when clarity matters.",
    tint: "var(--pill-orange)",
  },
  {
    icon: "Chart",
    title: "Build expertise",
    body: "Return to what you are learning and make consistent progress visible over time.",
    tint: "var(--pill-mint)",
  },
];

export function ExpertiseOutcomes() {
  return (
    <Section>
      <SectionTitle style={{ maxWidth: 840 }}>
        The future of Flowst is a future where more people can build real expertise.
      </SectionTitle>
      <p style={{ maxWidth: 700, marginTop: "1rem", color: "var(--color-muted)", fontSize: "var(--text-body-lg)", lineHeight: 1.6 }}>
        Not just learning more, but becoming someone who can think clearly, speak with confidence, and be worth listening to.
      </p>
      <div
        className="outcomes-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1rem",
          marginTop: "2.4rem",
        }}
      >
        {OUTCOMES.map((outcome) => {
          const Icon = ICONS[outcome.icon];
          return (
            <GlassCard key={outcome.title} variant="solid" padding="1.5rem" style={{ display: "flex", gap: "1rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 46,
                  height: 46,
                  flex: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  background: outcome.tint,
                }}
              >
                <Icon size={23} />
              </span>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{outcome.title}</h3>
                <p style={{ marginTop: "0.5rem", color: "var(--color-muted)", lineHeight: 1.55 }}>{outcome.body}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
