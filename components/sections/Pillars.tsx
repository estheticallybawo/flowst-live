import { GlassCard } from "../ui/GlassCard";
import { ICONS } from "../Icons";
import { Section, SectionTitle } from "./Section";

const FUTURE = [
  "Learn deeply",
  "Think critically",
  "Speak confidently",
  "Build genuine expertise",
  "Become someone worth listening to",
];

export function FutureVision() {
  return (
    <Section>
      <GlassCard
        variant="solid"
        padding="clamp(2rem, 5vw, 3.5rem)"
        style={{ background: "linear-gradient(135deg, #FFFFFF, #F0F5FF)" }}
      >
        <SectionTitle style={{ maxWidth: 760, fontSize: "clamp(2rem, 4vw, 3.1rem)" }}>
          Flowst is building for the person you are becoming.
        </SectionTitle>
        <div
          className="future-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "0.9rem 1.5rem",
            marginTop: "2rem",
          }}
        >
          {FUTURE.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontWeight: 600 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 30,
                  height: 30,
                  flex: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "var(--pill-mint)",
                }}
              >
                <ICONS.Shield size={16} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}
