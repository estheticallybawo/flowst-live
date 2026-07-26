import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";

import { Section, SectionTitle } from "./Section";

const ROADMAP: { title: string; body: string; color: "lavender" | "amber" | "orange" | "mint" | "sage"; span?: number }[] = [
  {
    title: "Cognitive Exercise Mode",
    body: "Strengthen reasoning, memory, critical thinking, and problem-solving through interactive exercises.",
    color: "lavender",
    span: 2,
  },
  {
    
    title: "Interview Prep Mode",
    body: "Prepare for technical and behavioural interviews with realistic practice and personalised feedback.",
    color: "sage",
  },
  {
    
    title: "Thought Leader Mode",
    body: "Learn a subject deeply, then practise explaining it through natural voice conversations.",
    color: "amber",
  },
  {
    
    title: "Perks: Progress",
    body: "Turn consistent learning into visible milestones, streaks, badges, and expertise signals.",
    color: "mint",
    span: 2,
  },
  {
    title: "Perks: Community",
    body: "Build a public learning profile, share achievements, contribute, and earn recognition through participation.",
    color: "orange",
    span: 2,
  },
];

export function Roadmap() {
  return (
    <Section id="whats-next">
      <SectionTitle style={{ maxWidth: 780 }}>More ways to grow with Flowst are on the way.</SectionTitle>
      <p style={{ maxWidth: 670, marginTop: "1rem", color: "var(--color-muted)", fontSize: "var(--text-body-lg)", lineHeight: 1.6 }}>
        Learning Mode is the first step. Future modes will bring purpose-built guidance to the moments where thinking and communication matter most.
      </p>
      <div className="roadmap-grid" style={{ marginTop: "2.5rem" }}>
        {ROADMAP.map((item) => {
      
          return (
            <GlassCard
              key={item.title}
              variant="solid"
              padding="1.5rem"
              style={{ gridColumn: item.span ? `span ${item.span}` : undefined, minHeight: 220 }}
            >
              <Pill color={item.color}>Coming soon</Pill>
            
              <h3 style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: 600 }}>{item.title}</h3>
              <p style={{ marginTop: "0.65rem", color: "var(--color-muted)", lineHeight: 1.55 }}>{item.body}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
