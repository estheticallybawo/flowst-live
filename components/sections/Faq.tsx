import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "Can I try Flowst now?",
    a: "Yes. The current public demo is available at demo.useflowst.com. It creates a 24-hour demo learner session, so you do not need an account, email, or password to try the guided loop.",
  },
  {
    q: "What happens in the demo?",
    a: "You choose Guided Learning, pick a topic or upload material, choose a scope and focus duration, then Flowst runs one focused loop: Miro prepares the Flowstate, Sofia teaches, Amira records one spoken explanation, Kai checks understanding, and Miro closes with proof.",
  },
  {
    q: "Why is the demo only one concept?",
    a: "That is intentional. The demo is designed to be finishable and low-pressure, especially for judges and first-time learners. A focused scope lets you feel the full learn, say, prove loop without turning studying into another mental burden.",
  },
  {
    q: "What is Brain Canvas?",
    a: "Brain Canvas is visible in the demo as coming soon. Guided Learning is the active demo route right now, so the current experience stays focused on one clear Flowstate.",
  },
  {
    q: "What do the agents do?",
    a: "Miro prepares and closes the Flowstate, Sofia teaches the selected definition, Amira handles one real voice-practice attempt, and Kai checks the explanation before proof is shown.",
  },
  {
    q: "Does the voice practice work in the demo?",
    a: "Yes. Amira asks for one spoken explanation and the browser requests microphone permission. The demo records one voice-practice attempt before handing the learner to Kai.",
  },
  {
    q: "What does the certificate prove?",
    a: "The Explanation Clarity Certificate represents clarity inside Flowst: the completed Flowstate, the earned badge, and the understanding check. It is a Flowst proof artifact, not a professional license or school accreditation.",
  },
  {
    q: "Is Flowst fully launched?",
    a: "Not yet. The public demo is live, while the full signed-in product is still being fine-tuned. Join the waitlist for launch updates, and institutions can book a demo or ask about student coupon support.",
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
          <SectionTitle>What the demo does now, and what is still coming.</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}