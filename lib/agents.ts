export type AgentId = "nyx" | "miro" | "amira";

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
    role: "Learning Orchestrator",
    world: "The Study Guide",
    summary:
      "Miro collects the learning goal, creates the study path, turns content into questions, and brings the learner back for assessment.",
    promise: "Plan the path, prove recall, and recommend the next step.",
    personality: ["Calm", "Observant", "Precise", "Strategic"],
    bestFor: [
      "Setting the learning goal",
      "Turning content into study questions",
      "Assessing recall readiness",
      "Tracking weak points and progress",
    ],
    flowName: "Study Path and Assessment Loop",
    flow: [
      { title: "Goal", description: "Collect the learner's topic, target, or document." },
      { title: "Questions", description: "Create focused study questions from the goal." },
      { title: "Route", description: "Send the learner to the right agent for the next phase." },
      { title: "Assess", description: "Check clarity, weak points, and recall readiness." },
      { title: "Next Step", description: "Store progress and recommend what to review next." },
    ],
    model: {
      name: "Qwen",
    },
    goals: [
      "Keep the full learning journey connected",
      "Create 3 to 5 useful study questions from a goal",
      "Measure theory clarity, visual mapping, and recall readiness",
      "Store weak points so review feels personal and timely",
    ],
    teachingNotes: [
      "Starts the premium journey by clarifying the learner's goal",
      "Passes Nyx's mental model to Amira when a visual anchor is needed",
      "Returns at the end with a score, reward summary, and next step",
    ],
    tags: ["Orchestrator", "Memory", "Assessment"],
    assets: {
      avatar: "/assets/mascots/miro/avatar.png",
      portrait: "/assets/mascots/miro/portrait.png",
      profileBoard: "/assets/mascots/miro/profile-board.png",
    },
  },
  {
    id: "nyx",
    name: "Nyx",
    role: "Theory and Vocal Clarity Agent",
    world: "Learn it",
    summary:
      "Nyx teaches the theory, breaks the concept into parts, and helps the learner build a mental model they can explain clearly.",
    promise: "Understand the concept before you try to prove it.",
    personality: ["Warm", "Calm", "Grounded", "Supportive"],
    bestFor: [
      "Concept clarity",
      "Key terms and relationships",
      "Building a first explanation",
      "Improving vocal communication",
    ],
    flowName: "Learn It Framework",
    flow: [
      { title: "Topic", description: "Start with the concept Miro selected." },
      { title: "Parts", description: "Break the idea into simple pieces." },
      { title: "Connections", description: "Show how the pieces relate to each other." },
      { title: "Explanation", description: "Practice saying the concept in clearer words." },
      { title: "Mental Model", description: "Shape the learner's own model for Amira to visualize." },
    ],
    model: {
      name: "Gemini Multimodal Live",
      voice: "Warm, calm, grounded",
    },
    goals: [
      "Help learners understand the topic",
      "Turn theory into a clear mental model",
      "Improve the learner's first explanation",
      "Notice weak points in vocal expression",
    ],
    teachingNotes: [
      "Summarizes the concept in plain language",
      "Names the key terms the learner needs to remember",
      "Helps the learner explain the idea before moving to a visual anchor",
    ],
    tags: ["Theory", "Mental model", "Vocal clarity"],
    assets: {
      avatar: "/assets/mascots/nyx/avatar.png",
      portrait: "/assets/mascots/nyx/portrait.png",
      profileBoard: "/assets/mascots/nyx/profile-board.png",
    },
  },
  {
    id: "amira",
    name: "Amira",
    role: "Visual Learning Agent",
    world: "See it",
    summary:
      "Amira turns the learner's mental model into a generated image, then refines it into a visual memory anchor.",
    promise: "Turn understanding into a picture you can remember.",
    personality: ["Warm", "Patient", "Visual", "Encouraging", "Practical"],
    bestFor: [
      "Creating concept images",
      "Refining visual prompts",
      "Comparing an image with a mental model",
      "Building picture-based recall anchors",
    ],
    flowName: "See It Framework",
    flow: [
      { title: "Mental Model", description: "Receive the learner's model from Nyx." },
      { title: "Image Prompt", description: "Translate the model into a visual direction." },
      { title: "Generated Image", description: "Create one image that represents the concept." },
      { title: "Refinement", description: "Adjust what does not match the learner's understanding." },
      { title: "Memory Anchor", description: "Leave the learner with a picture-based recall prompt." },
    ],
    teachingNotes: [
      "Uses the learner's own mental model as the source of the image",
      "Asks what the generated image represents and what should change",
      "Turns the final image into a recall prompt Miro can assess later",
    ],
    model: {
      name: "Gemini Multimodal Live",
      voice: "Warm, calm, grounded",
    },
    goals: [
      "Help learners see concepts as images",
      "Strengthen visual memory through personalized anchors",
      "Make abstract ideas easier to recall later",
      "Support Miro's final assessment with visual evidence",
    ],
    tags: ["Visual learning", "Image refinement", "Recall anchor"],
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
