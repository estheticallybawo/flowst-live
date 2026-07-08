import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/Pill";
import { Section, SectionTitle } from "./Section";
import type { PillColor } from "@/lib/agents";

const PILLS: { a: string; b: string; c: PillColor }[] = [
  { a: "Learn it", b: "with a path", c: "lavender" },
  { a: "Say it", b: "out loud", c: "orange" },
  { a: "Own it", b: "with clarity", c: "sage" },
];

export function Pillars() {
  return (
    <Section>
      <div style={{ textAlign: "center" }}>
        <SectionTitle
          style={{ margin: "0 auto", maxWidth: 820, fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
        >
          Learning should become something you can explain, not just something you recognize.
        </SectionTitle>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2.5rem",
          }}
        >
          {PILLS.map((p) => (
            <GlassCard key={p.b} variant="solid" padding="1.1rem 1.6rem">
              <span
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "1.15rem" }}
              >
                {p.a} <Pill color={p.c}>{p.b}</Pill>
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
