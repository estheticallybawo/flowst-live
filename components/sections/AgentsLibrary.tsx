import { AgentCard } from "../ui/AgentCard";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { AGENTS } from "@/lib/agents";

export function AgentsLibrary() {
  return (
    <Section id="agents">
      <div className="agents-library__heading">
        <Eyebrow>Meet the active agents</Eyebrow>
        <SectionTitle style={{ marginLeft: "auto" }}>
          Miro guides. Nyx teaches. Amira visualizes.
        </SectionTitle>
        <p className="agents-library__intro">
          Start with a goal, learn the concept, turn your mental model into an image, then come back
          to prove what you remember.
        </p>
      </div>
      <div className="agent-grid">
        {AGENTS.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </Section>
  );
}
