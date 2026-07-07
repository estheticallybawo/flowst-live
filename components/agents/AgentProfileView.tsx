import Link from "next/link";

import type { AgentId, AgentProfile, PillColor } from "@/lib/agents";
import { Arrow } from "../Icons";
import { Pill } from "../ui/Pill";

const AGENT_PILL_COLORS: Record<AgentId, PillColor> = {
  miro: "lavender",
  sophia: "amber",
  amira: "orange",
};

function ProfilePill({ agentId, children }: { agentId: AgentId; children: React.ReactNode }) {
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

function ProfileSection({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`profile-section${wide ? " profile-section--wide" : ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ProfileList({ items }: { items: readonly string[] }) {
  return (
    <ul className="profile-list">
      {items.map((item, index) => (
        <li key={item}>
          <span className="profile-list__marker" aria-hidden="true">
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AgentProfileView({ agent }: { agent: AgentProfile }) {
  return (
    <main className="agent-profile__main">
      <Link href="/#agents" className="profile-back-link">
        <span aria-hidden="true">←</span>
        Back to active agents
      </Link>

      <div className="agent-profile__hero">
        <div className="agent-profile__portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={agent.assets.portrait} alt={`${agent.name}, ${agent.role}`} />
        </div>
        <div>
          <p className="agent-profile__eyebrow">{agent.world}</p>
          <h1>{agent.name}</h1>
          <p className="agent-profile__role">{agent.role}</p>
          <div className="agent-profile__traits" aria-label={`${agent.name} availability`}>
            <ProfilePill agentId={agent.id}>{agent.status}</ProfilePill>
            <ProfilePill agentId={agent.id}>{agent.contextLabel}</ProfilePill>
          </div>
          <p className="agent-profile__summary">{agent.summary}</p>
          <p className="agent-profile__promise">{agent.promise}</p>
          <div className="agent-profile__traits" aria-label={`${agent.name} personality`}>
            {agent.personality.map((trait) => (
              <ProfilePill key={trait} agentId={agent.id}>
                {trait}
              </ProfilePill>
            ))}
          </div>
        </div>
      </div>

      <div className="agent-profile__grid">
        <ProfileSection title="Best for">
          <ProfileList items={agent.bestFor} />
        </ProfileSection>

        <ProfileSection title="AI model">
          <div className="profile-model">
            <strong>{agent.model.name}</strong>
            {agent.model.voice ? <span>Voice style: {agent.model.voice}</span> : null}
          </div>
        </ProfileSection>

        <ProfileSection title={agent.flowName} wide>
          <div className="profile-flow">
            {agent.flow.map((step, index) => (
              <div className="profile-flow__step" key={`${step.title}-${index}`}>
                <span className="profile-list__marker" aria-hidden="true">
                  {index + 1}
                </span>
                <strong>{step.title}</strong>
                {step.description ? <p>{step.description}</p> : null}
              </div>
            ))}
          </div>
        </ProfileSection>

        {agent.teachingNotes ? (
          <ProfileSection title={`How ${agent.name} helps`}>
            <ProfileList items={agent.teachingNotes} />
          </ProfileSection>
        ) : null}

        <ProfileSection title="Goals" wide={!agent.teachingNotes}>
          <ProfileList items={agent.goals} />
        </ProfileSection>

        <Link href="/#agents" className="agent-card__link profile-section--wide">
          Explore the other active agents
          <Arrow size={18} />
        </Link>
      </div>
    </main>
  );
}
