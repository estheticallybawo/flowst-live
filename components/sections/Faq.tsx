import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "What is Flowst?",
    a: "Flowst is an AI-powered platform designed to help people learn, think, communicate, and build expertise. It brings together specialised AI experiences to help you grow beyond simply consuming information.",
  },
  {
    q: "Who is Flowst for?",
    a: "Flowst is built for curious people who want to become better thinkers and lifelong learners. Students, professionals, job seekers, creators, founders, researchers, and anyone who loves learning can use it.",
  },
  {
    q: "How does Flowst differ from an AI chatbot?",
    a: "AI chatbots answer questions. Flowst helps you develop expertise. Instead of generating one-off responses, Flowst guides you through interactive learning experiences designed around goals like understanding, interview prep, reasoning, and communication.",
  },
  {
    q: "How do Flowst Modes work?",
    a: "Flowst Modes are powered by specialised AI agents that work together to guide you from knowledge to mastery. Each agent has a specific role, and they collaborate to create a continuous learning experience.",
  },
  {
    q: "What can I do on Flowst?",
    a: "You can turn learning materials into personalised guides, learn from YouTube videos, PDFs, articles, websites, and research papers, track your learning journey, prepare for interviews, strengthen your reasoning, earn mastery badges, build a learning profile, and learn with others.",
  },
  {
    q: "How does Flowst personalise my learning?",
    a: "Flowst adapts each experience to you by analysing your content, remembering your progress, and creating structured experiences around your goals. As more modes become available, your learning becomes more connected and relevant.",
  },
  {
    q: "How will Flowst help me retain more?",
    a: "Flowst is built around active learning. It helps you interact with knowledge through structured learning, reflection, problem-solving, and explanation instead of passive reading or scrolling.",
  },
  {
    q: "How long does it take to complete a FlowState?",
    a: "There isn’t a fixed length. A FlowState is designed around your goal, not a timer. Some sessions take a few minutes, while others take longer depending on the topic and mode.",
  },
  {
    q: "What is a FlowState, and what is a Flow?",
    a: "A Flow is a single session with one of Flowst's AI agents. A FlowState is the focused mindset you enter during that experience, where understanding deepens and learning feels natural.",
  },
  {
    q: "Does Flowst use learners' data to train AI?",
    a: "No. Your learning materials and conversations are yours. Flowst does not use your uploaded content to train public AI models.",
  },
  {
    q: "Is there science behind how Flowst helps people learn?",
    a: "Yes. Flowst is inspired by research showing active learning methods—like retrieval practice, elaboration, reflection, and explaining ideas in your own words—lead to deeper understanding than passive reading.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <SectionTitle>Questions you would most likely ask</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}
