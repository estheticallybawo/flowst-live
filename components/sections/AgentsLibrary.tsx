import Link from "next/link";

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
      <Eyebrow>Meet the guides</Eyebrow>
      <SectionTitle style={{ maxWidth: 860 }}>
        Specialised guides work together behind Learning Mode.
      </SectionTitle>
      <p style={{ maxWidth: 680, marginTop: "1rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
        Each guide has one clear responsibility, so the learning experience stays focused from the first explanation to the next useful step.
      </p>
      <div
        className="guide-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1rem",
          marginTop: "2.4rem",
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
    </Section>
  );
}
