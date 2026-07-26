import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "What is Flowst and how does it help me learn faster?",
    a: "Flowst turns your notes, PDFs, and learning material into a guided path with lessons, practice prompts, and understanding checks that help knowledge stick.",
  },
  {
    q: "Can I watch Flowst in action before I sign up?",
    a: "Yes — the demo walkthrough shows the current experience and lets you preview the guided learning flow before you request access.",
  },
  {
    q: "Do I need an account or payment details to start?",
    a: "No account is required for the current demo preview. The early access gate keeps the experience stable while we prepare the broader launch.",
  },
  {
    q: "What type of material can I use with Flowst?",
    a: "You can bring study notes, articles, research papers, and other text-based material. Flowst turns those resources into lessons, practice checks, and a proof-driven learning path.",
  },
  {
    q: "How does Flowst help me know I really understand something?",
    a: "Flowst asks you to explain and apply what you’re learning, then checks whether your understanding is clear before you move on, making learning more active and memorable.",
  },
  {
    q: "What is available in the current demo today?",
    a: "The current preview includes Learning Mode, topic import, focused study sessions, and progress proof. Future releases will add deeper practice, interview prep, and creative learning workflows.",
  },
  {
    q: "When will Flowst be available more widely?",
    a: "Flowst is still pre-launch. We’re opening access in phases, starting with early users and testers through the demo gate before a broader release.",
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
          <SectionTitle>What new users want to know before they try Flowst.</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}
