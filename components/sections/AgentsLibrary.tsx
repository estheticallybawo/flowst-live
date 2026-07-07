import { AgentCard } from "../ui/AgentCard";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { AGENTS } from "@/lib/agents";

export function AgentsLibrary() {
  return (
    <Section id="agents">
      <div className="agents-library__heading">
        <Eyebrow>Meet the active agents</Eyebrow>
        <SectionTitle style={{ marginLeft: "auto" }}>
          Miro builds the path. Sophia teaches clarity. Amira coaches voice.
        </SectionTitle>
        <p className="agents-library__intro">
          Each agent has a clear product role: Miro guides the learning path and final review,
          Sophia helps you understand and explain, and Amira is the in-progress voice coach for
          saying knowledge out loud.
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
