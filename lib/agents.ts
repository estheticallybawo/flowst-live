export type AgentId = "miro" | "sofia" | "amira" | "kai";

export type FeatureStatus = "Demo live" | "Available" | "Coming soon";
export type ContextLabel =
  | "Starts the Flowstate"
  | "Teaches the concept"
  | "Voice practice"
  | "Checks understanding"
  | "In progress";

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
    role: "Flowstate Guide",
    world: "Guided Learning",
    status: "Demo live",
    contextLabel: "Starts the Flowstate",
    summary:
      "Miro turns the learner's topic, scope, and focus time into a bounded Flowstate, then returns at the end with the completion message and proof moment.",
    promise: "Shape the route, keep the loop focused, and close the learning session with proof.",
    personality: ["Calm", "Structured", "Observant", "Strategic"],
    bestFor: [
      "Turning a topic into a focused one-concept demo path",
      "Preparing the Flowstate from the learner's scope and duration",
      "Keeping the learning loop predictable while the content stays dynamic",
      "Closing the session after Sofia, Amira, and Kai complete their parts",
    ],
    flowName: "Miro Flowstate Setup and Close",
    flow: [
      { title: "Topic", description: "Receive the learner's chosen topic or uploaded material." },
      { title: "Scope", description: "Keep the public demo focused on one concept and one definition to explain back." },
      { title: "Preview", description: "Show the selected concept before the learner begins." },
      { title: "Route", description: "Hand the learner into Sofia, then Amira, then Kai." },
      { title: "Close", description: "Return with the final completion/proof message after the loop is done." },
    ],
    model: {
      name: "Server-owned Flowstate protocol",
    },
    goals: [
      "Make the demo easy to start without account friction",
      "Keep the path bounded enough for a judge or first-time learner to finish",
      "Connect teaching, voice practice, assessment, and proof into one coherent loop",
      "Represent completed work in Progress/Proof with badges and downloadable assets",
    ],
    teachingNotes: [
      "The public demo uses a trusted 24-hour demo session, not a full account.",
      "For demo identities, the protocol remains one concept even if the client requests another flow.",
      "Miro's completion message appears in the proof experience, not as the main assessment modal.",
    ],
    tags: ["Path", "Flowstate", "Proof"],
    assets: {
      avatar: "/assets/mascots/miro/avatar.png",
      portrait: "/assets/mascots/miro/portrait.png",
      profileBoard: "/assets/mascots/miro/profile-board.png",
    },
  },
  {
    id: "sofia",
    name: "Sofia",
    role: "Clarity Teacher",
    world: "Fresh teaching strategy",
    status: "Demo live",
    contextLabel: "Teaches the concept",
    summary:
      "Sofia teaches the selected definition with a fresh strategy, such as a simple explanation, analogy, comparison, scenario, prediction, or misconception check.",
    promise: "Make the idea clear enough that the learner can explain it in their own words.",
    personality: ["Patient", "Warm", "Plain-spoken", "Adaptive"],
    bestFor: [
      "Understanding one selected concept without overwhelm",
      "Getting a teaching strategy that can vary between attempts",
      "Turning passive recognition into explainable knowledge",
      "Preparing the learner for one real spoken explanation",
    ],
    flowName: "Sofia Teaching Segment",
    flow: [
      { title: "Receive", description: "Take the concept Miro selected for the Flowstate." },
      { title: "Teach", description: "Explain the definition using a strategy suited to the attempt." },
      { title: "Adapt", description: "Use recent attempt context to avoid simply replaying the same wording." },
      { title: "Prepare", description: "Set the learner up to say the idea out loud with Amira." },
    ],
    model: {
      name: "Provider-switchable teaching model",
      voice: "Warm, calm, plain-spoken",
    },
    goals: [
      "Help learners understand before they perform",
      "Make one concept feel less mentally heavy",
      "Support clearer self-explanation",
      "Hand off into voice practice without rushing the learner",
    ],
    teachingNotes: [
      "Sofia currently uses temporary mascot artwork until dedicated Sofia artwork is added.",
      "Sofia is active in the public Guided Learning demo.",
      "Sofia teaches the concept, while Kai checks the learner's understanding after voice practice.",
    ],
    tags: ["Clarity", "Teach", "Explain"],
    assets: {
      avatar: "/assets/mascots/nyx/avatar.png",
      portrait: "/assets/mascots/nyx/portrait.png",
      profileBoard: "/assets/mascots/nyx/profile-board.png",
    },
  },
  {
    id: "amira",
    name: "Amira",
    role: "Voice Practice Coach",
    world: "Say it out loud",
    status: "Demo live",
    contextLabel: "Voice practice",
    summary:
      "Amira asks for one real spoken explanation in the demo, requests microphone permission, records the attempt, and hands the learner to Kai.",
    promise: "Give the learner a real moment to turn quiet understanding into spoken clarity.",
    personality: ["Warm", "Direct", "Encouraging", "Attentive"],
    bestFor: [
      "Practicing one explanation out loud",
      "Reducing the blank-mind feeling that can happen when speaking",
      "Making knowledge leave the learner's head in their own words",
      "Preparing a spoken attempt for Kai's assessment",
    ],
    flowName: "Amira Voice Practice",
    flow: [
      { title: "Prompt", description: "Receive the concept after Sofia's teaching segment." },
      { title: "Permission", description: "Ask the browser for microphone access." },
      { title: "Record", description: "Capture one voice-practice attempt in the bounded demo." },
      { title: "Hand off", description: "Send the attempt to Kai for understanding assessment." },
    ],
    teachingNotes: [
      "Amira's public demo role is one bounded spoken explanation, not an unlimited voice coach yet.",
      "Voice practice exists to support clarity and confidence, not to make studying feel more stressful.",
      "The demo records one attempt before Kai checks understanding.",
    ],
    model: {
      name: "Browser voice-practice layer",
      voice: "Warm, focused voice coach",
    },
    goals: [
      "Make saying knowledge out loud feel guided rather than intimidating",
      "Capture a real spoken explanation inside the demo",
      "Support confidence without turning practice into pressure",
      "Feed the explanation into Kai's understanding check",
    ],
    tags: ["Voice", "Practice", "Spoken clarity"],
    assets: {
      avatar: "/assets/mascots/amira/avatar.png",
      portrait: "/assets/mascots/amira/portrait.png",
      profileBoard: "/assets/mascots/amira/profile-board.png",
    },
  },
  {
    id: "kai",
    name: "Kai",
    role: "Understanding Checker",
    world: "Assessment moment",
    status: "Demo live",
    contextLabel: "Checks understanding",
    summary:
      "Kai checks understanding from the learner's spoken explanation in a focused modal, then either passes the attempt, identifies a review need, or sends the learner into a focused recheck.",
    promise: "Turn one spoken answer into a clear signal of what the learner understands next.",
    personality: ["Clear", "Fair", "Grounded", "Supportive"],
    bestFor: [
      "Checking whether an explanation shows real understanding",
      "Naming where review is still needed",
      "Keeping assessment focused and low-pressure",
      "Helping the demo end with proof instead of vague encouragement",
    ],
    flowName: "Kai Understanding Check",
    flow: [
      { title: "Receive", description: "Take Amira's recorded voice-practice attempt." },
      { title: "Assess", description: "Check whether the explanation shows understanding of the selected definition." },
      { title: "Decide", description: "Pass, identify a review need, or route to a focused recheck." },
      { title: "Hand back", description: "Send the result toward Miro's completion and the Proof/Progress state." },
    ],
    model: {
      name: "Understanding assessment agent",
    },
    goals: [
      "Make assessment feel like support, not judgment",
      "Give the learner a clear result from one spoken attempt",
      "Protect proof from being just a decorative badge",
      "Connect assessment to the downloadable badge and certificate state",
    ],
    teachingNotes: [
      "Kai is the primary assessment modal in the current public demo.",
      "Kai checks explanation clarity inside Flowst, not professional certification.",
      "Kai's result leads into Miro's completion/proof experience.",
    ],
    tags: ["Check", "Review", "Proof"],
    assets: {
      avatar: "/assets/mascots/kai/avatar.png",
      portrait: "/assets/mascots/kai/portrait.png",
      profileBoard: "/assets/mascots/kai/profile-board.png",
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