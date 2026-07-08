"use client";

import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";
import { Bell, Nodes, ICONS } from "../Icons";
import { useNotify } from "../NotifyProvider";
import { AGENTS } from "@/lib/agents";
import type { AgentId, PillColor } from "@/lib/agents";

interface HeroAgent {
  id: AgentId;
  name: string;
  world: string;
  fw: string;
  avatar: string;
}

const HERO_AGENTS: HeroAgent[] = AGENTS.map((agent) => ({
  id: agent.id,
  name: agent.name,
  world: agent.status,
  fw: agent.role,
  avatar: agent.assets.avatar,
}));

const FLOATERS: {
  t: string;
  c: PillColor;
  column: string;
  row: number;
  rotate: string;
}[] = [
  { t: "Goal", c: "blue", column: "1 / 3", row: 1, rotate: "-7deg" },
  { t: "Knowledge", c: "lavender", column: "3 / 5", row: 1, rotate: "-5deg" },
  { t: "Clarity", c: "amber", column: "5 / 7", row: 1, rotate: "7deg" },
  { t: "Voice practice", c: "orange", column: "7 / 9", row: 1, rotate: "-7deg" },
  { t: "Focus", c: "sage", column: "2 / 4", row: 2, rotate: "6deg" },
  { t: "Feedback", c: "rose", column: "4 / 6", row: 2, rotate: "7deg" },
  { t: "Confidence", c: "mint", column: "6 / 8", row: 2, rotate: "-6deg" },
];

const FEATURES: { ic: keyof typeof ICONS; a: string; b: string }[] = [
  { ic: "Target", a: "Miro path", b: "Generated from your goal" },
  { ic: "Brain", a: "Sophia clarity", b: "Understand and explain" },
  { ic: "Nodes", a: "Say it", b: "Practice out loud" },
  { ic: "Chart", a: "Progress", b: "Badges and weak areas" },
  { ic: "Shield", a: "Proof", b: "Final clarity review" },
];

function MascotColumn({ a }: { a: HeroAgent }) {
  return (
    <div style={{ flex: "1 1 0", minWidth: 0, textAlign: "center" }}>
      <div
        style={{
          aspectRatio: "1",
          borderRadius: "var(--radius-lg)",
          background: `linear-gradient(180deg, rgba(255,255,255,0.4), var(--agent-${a.id}-soft))`,
          boxShadow: "var(--shadow-inner-soft)",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={a.avatar}
          alt={a.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
      <div
        style={{
          marginTop: "0.55rem",
          background: `var(--agent-${a.id}-soft)`,
          borderRadius: "var(--radius-pill)",
          padding: "0.18rem 0.5rem",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "0.92rem",
        }}
      >
        {a.name}
      </div>
      <div style={{ fontSize: "0.7rem", color: "var(--color-soft-muted)", marginTop: "0.35rem" }}>
        {a.world}
      </div>
      <div style={{ fontSize: "0.66rem", color: "var(--color-soft-muted)", opacity: 0.8 }}>
        {a.fw}
      </div>
    </div>
  );
}

export function Hero() {
  const { notify } = useNotify();

  return (
    <section
      className="flowst-card hero-card"
      style={{
        maxWidth: "var(--container-max)",
        margin: "28px auto 0",
        padding: "clamp(1.5rem, 3vw, 2.75rem)",
        borderRadius: "var(--radius-2xl)",
        overflow: "hidden",
      }}
    >
      <div style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", marginBottom: "1rem" }}>
        Flowst, the guided path from knowing something to explaining it out loud
      </div>
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1.35fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            Learn it. Say it. Own it.
          </h1>
          <p
            style={{
              marginTop: "1.4rem",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-muted)",
              maxWidth: 460,
            }}
          >
            Flowst turns any topic into a guided path: understand it, say it out loud, and prove
            you can explain it. Your three agents guide every step, so what you learn actually
            sticks.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
                padding: "0.7rem 1rem",
              }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "var(--radius-sm)",
                  flex: "none",
                  background: "var(--color-surface-sunken)",
                  boxShadow: "var(--shadow-inset-well)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Nodes size={20} />
              </span>
              <span style={{ fontSize: "0.92rem", lineHeight: 1.25 }}>
                Be first
                <br />
                to know when we launch.
              </span>
            </div>
            <Button variant="accent" size="lg" onClick={notify} iconRight={<Bell size={18} />}>
              Notify me
            </Button>
            <Button href="#how-it-works" variant="ghost" size="lg">
              See how Flowst works
            </Button>
          </div>
        </div>
        <div>
          <div className="hero-pill-field" aria-hidden="true">
            {FLOATERS.map((f) => (
              <div
                key={f.t}
                className="hero-pill-field__item"
                style={{
                  gridColumn: f.column,
                  gridRow: f.row,
                  transform: `rotate(${f.rotate})`,
                }}
              >
                <Pill color={f.c} glass>
                  {f.t}
                </Pill>
              </div>
            ))}
          </div>
          <div className="hero-agent-row">
            {HERO_AGENTS.map((a) => (
              <MascotColumn key={a.id} a={a} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="hero-features"
        style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--color-hairline)",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}
      >
        {FEATURES.map((f) => {
          const I = ICONS[f.ic];
          return (
            <div key={f.a} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <I size={26} />
              <div style={{ fontSize: "0.85rem", lineHeight: 1.25 }}>
                <div style={{ fontWeight: 600 }}>{f.a}</div>
                <div style={{ color: "var(--color-soft-muted)" }}>{f.b}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


