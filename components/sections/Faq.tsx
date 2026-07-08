import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "Does Flowst actually work?",
    a: "Flowst is built on established cognitive science. Without active reinforcement, most new information is forgotten within a day, so Flowst combines visual encoding, active recall, and out-loud application: the methods research most consistently links to lasting retention.",
  },
  {
    q: "Who is Flowst for?",
    a: "Self-driven learners who want to genuinely understand a topic, people preparing to explain or be interviewed on what they know, and institutions who want measurable explanation clarity for their students.",
  },
  {
    q: "How is this different from courses, videos, or flashcards?",
    a: "Most courses and videos are passive, and flashcards drill isolated facts. Flowst runs the full loop, understand it, explain it out loud, and prove your clarity, so knowledge becomes something you can use and communicate, not just recognize.",
  },
  {
    q: "How does the Flowst loop work?",
    a: "Miro turns your goal into a guided learning path, Sophia helps you understand and explain each idea in your own words, and Amira brings voice practice as that layer comes online. A final Miro clarity review checks that you can actually explain what you learned.",
  },
  {
    q: "Why does saying it out loud matter?",
    a: "Explaining and applying an idea is one of the most proven ways to move it into long-term memory, and speaking it out loud exposes exactly where your understanding is still fuzzy so you can tighten it.",
  },
  {
    q: "Is the voice coaching live yet?",
    a: "Not fully. Amira is part of the Flowst loop, but her voice-coaching experience is still in progress and should not be treated as live voice scoring until that layer is connected.",
  },
  {
    q: "What does the certificate prove?",
    a: "The certificate represents explanation clarity inside Flowst: completed subtopics, badges, practice history, and a final review. For example, it may read JavaScript Explanation Clarity Certificate.",
  },
  {
    q: "Is Flowst a professional certification?",
    a: "No. Flowst proof is not a professional license, school accreditation, or job credential. It shows that you completed a Flowst path and passed an explanation clarity review for a topic.",
  },
  {
    q: "Is Flowst live yet, and how do I get access?",
    a: "Flowst is still in build. Join the launch list to get early access when it opens, and institutions can book a demo or ask about student coupon support.",
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
          <SectionTitle>How Flowst works, and why it works.</SectionTitle>
        </div>
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}
