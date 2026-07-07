export type AgentId = "miro" | "sophia" | "amira";

export type FeatureStatus = "Available" | "Premium" | "Not active yet";
export type ContextLabel = "Ready now" | "Requires Miro Path" | "In progress";

export interface AgentFlowStep {
  title: string;
  description?: string;
}

export interface AgentModel {
  name: string;
  voice?: string;
}

export interface AgentAssets {
  avatar: string;
  portrait: string;
  profileBoard: string;
}

export interface AgentProfile {
  id: AgentId;
  name: string;
  role: string;
  world: string;
  status: FeatureStatus;
  contextLabel: ContextLabel;
  summary: string;
  promise: string;
  personality: string[];
  bestFor: string[];
  flowName: string;
  flow: AgentFlowStep[];
  model: AgentModel;
  goals: string[];
  teachingNotes?: string[];
  tags: string[];
  assets: AgentAssets;
}

export const AGENTS: readonly AgentProfile[] = [
  {
    id: "miro",
    name: "Miro",
    role: "Learning Path Guide",
    world: "Premium path guide",
    status: "Premium",
    contextLabel: "Requires Miro Path",
    summary:
      "Miro turns your topic into a learning path, previews the route before payment, remembers weak areas, and returns for the final Miro Clarity Review.",
    promise: "Build the path, guide the work, and help you prove explanation clarity.",
    personality: ["Calm", "Structured", "Observant", "Strategic"],
    bestFor: [
      "Turning a messy topic into a guided learning path",
      "Previewing what Premium will unlock before checkout",
      "Tracking progress, weak areas, and completed subtopics",
      "Running the final Miro Clarity Review",
    ],
    flowName: "Miro Path and Review Loop",
    flow: [
      { title: "Onboarding", description: "Ask the 7 setup questions that define the learner's goal, level, time, and outcome." },
      { title: "Path Preview", description: "Generate a clear path preview so the learner sees the plan before choosing Premium." },
      { title: "Daily Focus", description: "Route the learner through Today, Path, Progress, and Agents inside the Premium workspace." },
      { title: "Memory", description: "Carry weak areas forward so review sessions stay personal and useful." },
      { title: "Final Review", description: "Run the final clarity check and prepare proof for the shareable certificate." },
    ],
    model: {
      name: "Qwen",
    },
    goals: [
      "Create one coherent learning path from the learner's topic",
      "Make the next step obvious after every session",
      "Connect Sophia clarity work and Amira voice practice into one record",
      "Validate readiness with a final explanation clarity review",
    ],
    teachingNotes: [
      "Miro is the premium guide and memory orchestrator, not a standalone free tutor.",
      "The path preview should be useful before checkout without pretending Premium has already started.",
      "Miro's final review proves explanation clarity, not professional accreditation.",
    ],
    tags: ["Path", "Memory", "Final review"],
    assets: {
      avatar: "/assets/mascots/miro/avatar.png",
      portrait: "/assets/mascots/miro/portrait.png",
      profileBoard: "/assets/mascots/miro/profile-board.png",
    },
  },
  {
    id: "sophia",
    name: "Sophia",
    role: "Clarity Teacher",
    world: "Ready now",
    status: "Available",
    contextLabel: "Ready now",
    summary:
      "Sophia helps you understand ideas in plain language, explain them back, and tighten your words until the concept feels clear enough to keep learning.",
    promise: "Make the idea understandable before you try to say it or prove it.",
    personality: ["Patient", "Warm", "Plain-spoken", "Encouraging"],
    bestFor: [
      "Understanding a confusing concept",
      "Explaining an idea in your own words",
      "Finding gaps in a first explanation",
      "Getting one limited clarity mini-session before Premium",
    ],
    flowName: "Sophia Clarity Session",
    flow: [
      { title: "Topic", description: "Start with the subtopic from Miro or a limited free clarity prompt." },
      { title: "Plain English", description: "Break the idea into simple parts and useful relationships." },
      { title: "Explain Back", description: "Ask the learner to explain the concept in their own words." },
      { title: "Tighten", description: "Name what is unclear and help rewrite it more clearly." },
      { title: "Hand Off", description: "Send clear wording back into the path for voice practice and review." },
    ],
    model: {
      name: "Provider-switchable clarity model",
      voice: "Warm, calm, plain-spoken",
    },
    goals: [
      "Help learners understand concepts before rushing forward",
      "Turn fragile knowledge into explainable language",
      "Surface confusion early and kindly",
      "Support Miro's path with clearer explanations",
    ],
    teachingNotes: [
      "Sophia uses temporary mascot artwork until dedicated Sophia artwork is added.",
      "Sophia is available for limited clarity support outside Premium.",
      "Sophia should focus on understanding and explanation, not image generation.",
    ],
    tags: ["Clarity", "Explain", "Free limited"],
    assets: {
      avatar: "/assets/mascots/nyx/avatar.png",
      portrait: "/assets/mascots/nyx/portrait.png",
      profileBoard: "/assets/mascots/nyx/profile-board.png",
    },
  },
  {
    id: "amira",
    name: "Amira",
    role: "Voice Coach",
    world: "Voice practice",
    status: "Not active yet",
    contextLabel: "In progress",
    summary:
      "Amira is the in-progress voice coach for practicing knowledge out loud, shaping spoken clarity, and helping learners say what they know with confidence.",
    promise: "Practice saying the idea until your explanation sounds clear, calm, and real.",
    personality: ["Warm", "Direct", "Encouraging", "Attentive"],
    bestFor: [
      "Practicing an explanation out loud",
      "Building confidence before the final review",
      "Finding where spoken answers become vague",
      "Preparing for the Say it step once voice is live",
    ],
    flowName: "Amira Voice Practice",
    flow: [
      { title: "Prompt", description: "Receive a concept or subtopic from the Miro path." },
      { title: "Speak", description: "Ask the learner to say the explanation out loud." },
      { title: "Listen", description: "Capture the spoken answer once voice is connected." },
      { title: "Coach", description: "Reflect where the explanation is clear, rushed, or missing a key idea." },
      { title: "Prepare", description: "Send voice-practice notes toward the final Miro review." },
    ],
    teachingNotes: [
      "Amira should remain publicly visible as in progress until the voice experience is active.",
      "Do not promise live voice scoring before ElevenLabs voice agents are connected.",
      "Amira is a voice coach, not a visual-learning or image-generation agent.",
    ],
    model: {
      name: "ElevenLabs voice agents",
      voice: "Warm, focused voice coach",
    },
    goals: [
      "Help learners practice saying knowledge out loud",
      "Improve spoken clarity before final proof",
      "Make the Say it step feel guided rather than intimidating",
      "Feed useful practice signals into Miro's final review",
    ],
    tags: ["Voice", "Practice", "In progress"],
    assets: {
      avatar: "/assets/mascots/amira/avatar.png",
      portrait: "/assets/mascots/amira/portrait.png",
      profileBoard: "/assets/mascots/amira/profile-board.png",
    },
  },
] as const;

export function isAgentId(value: string): value is AgentId {
  return AGENTS.some((agent) => agent.id === value);
}

export function getAgentById(id: string): AgentProfile | undefined {
  return AGENTS.find((agent) => agent.id === id);
}

export function getAgentStaticParams(): Array<{ id: AgentId }> {
  return AGENTS.map(({ id }) => ({ id }));
}

export type PillColor =
  | "amber"
  | "mint"
  | "sage"
  | "rose"
  | "blue"
  | "orange"
  | "magenta"
  | "lavender";


