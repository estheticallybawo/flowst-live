import { AgentCard } from "../ui/AgentCard";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { AGENTS } from "@/lib/agents";

export function AgentsLibrary() {
  return (
    <Section id="agents">
      <div className="agents-library__heading">
        <Eyebrow>Meet the demo agents</Eyebrow>
        <SectionTitle>
          Miro starts the Flowstate. Sofia teaches. Amira listens. Kai checks understanding.
        </SectionTitle>
        <p className="agents-library__intro">
          The current public demo is a bounded one-concept loop. Each agent has a clear job so the
          learner can move from topic to explanation, voice practice, assessment, and proof without
          studying becoming another mental burden.
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