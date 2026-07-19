import Link from "next/link";

import type { AgentId, AgentProfile, PillColor } from "@/lib/agents";
import { Arrow } from "../Icons";
import { AgentAvatar } from "./AgentAvatar";
import { Pill } from "./Pill";

const AGENT_PILL_COLORS: Record<AgentId, PillColor> = {
  miro: "lavender",
  sofia: "amber",
  amira: "orange",
  kai: "mint",
};

function AgentPill({ agentId, children }: { agentId: AgentId; children: React.ReactNode }) {
  return (
    <Pill
      color={AGENT_PILL_COLORS[agentId]}
      style={{
        fontSize: "0.8125rem",
        padding: "0.34rem 0.75rem",
        lineHeight: 1,
      }}
    >
      {children}
    </Pill>
  );
}

export function AgentCard({ agent }: { agent: AgentProfile }) {
  return (
    <Link
      href={`/agents/${agent.id}`}
      className="agent-card"
      data-agent={agent.id}
      aria-label={`Meet ${agent.name}, ${agent.role}`}
    >
      <AgentAvatar
        src={agent.assets.avatar}
        agent={agent.id}
        size={180}
        alt={`${agent.name}, ${agent.role}`}
        style={{ width: "100%", height: "auto", aspectRatio: "1" }}
      />
      <div className="agent-card__body">
        <div>
          <p className="agent-card__world">{agent.world}</p>
          <h3>{agent.name}</h3>
          <p className="agent-card__role">{agent.role}</p>
        </div>
        <div className="agent-card__tags" aria-label={`${agent.name} availability`}>
          <AgentPill agentId={agent.id}>{agent.status}</AgentPill>
          <AgentPill agentId={agent.id}>{agent.contextLabel}</AgentPill>
        </div>
        <p className="agent-card__summary">{agent.summary}</p>
        <div className="agent-card__tags">
          {agent.tags.slice(0, 3).map((tag) => (
            <AgentPill key={tag} agentId={agent.id}>
              {tag}
            </AgentPill>
          ))}
        </div>
        <span className="agent-card__link">
          Meet {agent.name}
          <Arrow size={18} />
        </span>
      </div>
    </Link>
  );
}