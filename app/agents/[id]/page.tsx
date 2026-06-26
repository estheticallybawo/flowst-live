import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AgentProfileView } from "@/components/agents/AgentProfileView";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { NotifyProvider } from "@/components/NotifyProvider";
import { getAgentById, getAgentStaticParams } from "@/lib/agents";

interface AgentPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAgentStaticParams();
}

export async function generateMetadata({ params }: AgentPageProps): Promise<Metadata> {
  const { id } = await params;
  const agent = getAgentById(id);

  if (!agent) {
    return {};
  }

  const title = `${agent.name} - ${agent.role} | Flowst`;

  return {
    title,
    description: agent.summary,
    openGraph: {
      title,
      description: agent.summary,
      images: [
        {
          url: agent.assets.avatar,
          width: 1254,
          height: 1254,
          alt: `${agent.name}, ${agent.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: agent.summary,
      images: [agent.assets.avatar],
    },
  };
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { id } = await params;
  const agent = getAgentById(id);

  if (!agent) {
    notFound();
  }

  return (
    <NotifyProvider>
      <div id="top" className="agent-profile" data-agent={agent.id}>
        <Header />
        <AgentProfileView agent={agent} />
        <Footer />
      </div>
    </NotifyProvider>
  );
}
