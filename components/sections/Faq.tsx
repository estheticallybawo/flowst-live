import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "What is Learning Mode?",
    a: "Learning Mode is Flowst's available experience today. It turns PDFs, documents, research papers, notes, and new topics into structured lessons designed for understanding and retention.",
  },
  {
    q: "Can I try Flowst now?",
    a: "Yes. The current guided-learning demo is available through a controlled access gate at demo.useflowst.com. The gate helps keep the pre-launch experience stable for early users and testers.",
  },
  {
    q: "What happens in the demo?",
    a: "You choose Guided Learning, add a topic or material, set a focused scope, learn a selected concept, practise explaining it, and receive a focused understanding check with proof of progress.",
  },
  {
    q: "What do the learning guides do?",
    a: "Miro structures the learning route, Sofia teaches for clarity, Amira supports spoken practice, and Kai checks understanding before the learner moves into progress and proof.",
  },
  {
    q: "What is coming next?",
    a: "Flowst is developing Cognitive Exercise, Interview Prep, and Thought Leader modes, along with Perks: for personal progress and community participation.",
  },
  {
    q: "Is Flowst fully launched?",
    a: "Not yet. The PWA is still in development while Learning Mode is being shaped through the current demo. Join the launch list for updates and early access.",
  },
  {
    q: "What does Flowst proof mean?",
    a: "Flowst proof reflects progress and clarity within the Flowst learning experience. It is not a professional licence, formal certification, or school accreditation.",
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
          <Eyebrow>Questions</Eyebrow>
          <SectionTitle>What Flowst offers today, and what is next.</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}
