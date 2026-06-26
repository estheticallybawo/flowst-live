import Link from "next/link";

import type { AgentProfile } from "@/lib/agents";
import { Arrow } from "../Icons";
import { AgentAvatar } from "./AgentAvatar";
import { Tag } from "./Tag";

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
        <p className="agent-card__summary">{agent.summary}</p>
        <div className="agent-card__tags">
          {agent.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} agent={agent.id}>
              {tag}
            </Tag>
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
