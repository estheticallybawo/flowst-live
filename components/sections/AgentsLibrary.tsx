import Link from "next/link";

const EMBED_LINK = "https://www.youtube.com/embed/YH18H2XXa6Q?rel=0&modestbranding=1";

import { AGENTS, type AgentId } from "@/lib/agents";
import { AgentAvatar } from "../ui/AgentAvatar";
import { Section, Eyebrow, SectionTitle } from "./Section";

const GUIDE_COPY: Record<AgentId, string> = {
  miro: "Miro structures the focused route and closes the learning session with a clear next step.",
  sofia: "Sofia teaches for clarity, helping an idea make sense before the learner has to explain it.",
  amira: "Amira creates a supported moment to practise turning quiet understanding into spoken clarity.",
  kai: "Kai checks understanding, surfaces a review need when it matters, and leads into proof of progress.",
};

export function AgentsLibrary() {
  return (
    <Section id="guides">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
        <Eyebrow>Meet the guides</Eyebrow>
        <SectionTitle style={{ maxWidth: 1180 }}>
          Specialized guides work together behind Learning Mode.
        </SectionTitle>
      </div>
      <p style={{ maxWidth: 1180, fontSize: "1.2rem", marginLeft: "auto", textAlign: "right", marginTop: "1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
        Each guide has one clear responsibility, so the learning experience stays focused from the first explanation to the next useful step.
      </p>
      <div
        className="guide-grid"
        style={{
          marginTop: "2.4rem",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div
          className="guide-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {AGENTS.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              style={{
                display: "block",
                minWidth: 0,
                padding: "1.25rem",
                borderRadius: "var(--radius-xl)",
                background: "var(--color-surface)",
                border: "1px solid var(--color-glass-border)",
                boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
                transition: "transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
              }}
            >
              <AgentAvatar src={agent.assets.avatar} agent={agent.id} size={74} alt={`${agent.name}, ${agent.role}`} />
              <p style={{ marginTop: "1rem", color: "var(--color-soft-muted)", fontSize: "0.8rem", fontWeight: 600 }}>
                {agent.role}
              </p>
              <h3 style={{ marginTop: "0.35rem", fontSize: "1.25rem", fontWeight: 600 }}>{agent.name}</h3>
              <p style={{ marginTop: "0.7rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
                {GUIDE_COPY[agent.id]}
              </p>
            </Link>
          ))}
        </div>

        <div style={{ display: "grid", gap: "1rem" }}>
          <div
            style={{
              borderRadius: "var(--radius-2xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
              minHeight: 320,
              background: "var(--color-surface)",
            }}
          >
            <iframe
              src={EMBED_LINK}
              title="Flowst guides walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", minHeight: 320, border: "none" }}
            />
          </div>
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "var(--radius-xl)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
            }}
          >
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.75 }}>
              Watch how the guides collaborate to create a guided learning experience, from scoped study paths to active explanation and proof of understanding.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
