import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "Is Flowst live yet?",
    a: "Flowst is still in build. The public site is here to explain the product direction, introduce the agents, and let early learners or institutions hear when launch access opens.",
  },
  {
    q: "What happens when I join the newsletter?",
    a: "You will be on the list for launch updates, early-access notes, and product announcements. The current Notify Me action is a placeholder until the production newsletter endpoint is connected.",
  },
  {
    q: "What will Flowst help me do?",
    a: "Flowst is being built to turn a topic into a guided learning path, help you understand each idea, practice saying it out loud, and prove explanation clarity through review.",
  },
  {
    q: "Do I need to choose an agent first?",
    a: "No. The product is designed as a guided loop. Miro shapes the path, Sophia helps with clarity, and Amira supports voice practice as that layer comes online.",
  },
  {
    q: "Is Amira live yet?",
    a: "Amira is visible because she is part of the product loop, but her voice-coaching experience is not active yet. She is in progress and should not be treated as live voice scoring until the voice layer is connected.",
  },
  {
    q: "Can institutions use Flowst with students?",
    a: "Yes. We are open to early conversations with schools, bootcamps, clubs, and learning communities that want demos, launch pilots, or student coupon support.",
  },
  {
    q: "What does the certificate prove?",
    a: "The certificate represents explanation clarity inside Flowst: completed subtopics, badges, practice history, and a final review. For example, it may read JavaScript Explanation Clarity Certificate.",
  },
  {
    q: "Is Flowst a professional certification?",
    a: "No. Flowst proof is not a professional license, school accreditation, or job credential. It shows that you completed a Flowst path and passed an explanation clarity review for a topic.",
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
          <SectionTitle>Before you join the launch list.</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}
