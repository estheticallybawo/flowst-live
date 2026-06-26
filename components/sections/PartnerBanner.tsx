import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";
import { Arrow } from "../Icons";
import { Section } from "./Section";

export function PartnerBanner() {
  return (
    <Section>
      <div
        style={{
          borderRadius: "var(--radius-2xl)",
          padding: "clamp(2rem, 4vw, 3rem)",
          background:
            "linear-gradient(120deg, var(--agent-miro-soft), var(--agent-nyx-soft) 55%, var(--agent-amira-soft))",
          border: "1px solid var(--color-glass-border)",
          boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <Pill color="amber" glass>
            Built for cohorts, clubs, and serious learners
          </Pill>
          <h3
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: 600,
              marginTop: "1rem",
              lineHeight: 1.2,
            }}
          >
            Give learners a calm loop for understanding, visualizing, and proving recall.
          </h3>
          <p style={{ marginTop: "0.8rem", color: "var(--color-muted)" }}>
            Flowst is shaped for people who need structure, memory anchors, and a clear next step
            after every learning session.
          </p>
        </div>
        <Button variant="solid" size="lg" iconRight={<Arrow size={18} />}>
          Book a call
        </Button>
      </div>
    </Section>
  );
}
