"use client";

import { useNotify } from "../NotifyProvider";
import { Bell } from "../Icons";
import { Button } from "../ui/Button";
import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Section, Eyebrow, SectionTitle } from "./Section";

const ITEMS: AccordionItem[] = [
  {
    q: "What is Flowst?",
    a: "Flowst is a learning loop powered by active agents. You start with a goal, learn the concept, turn your mental model into a picture, and prove what you remember.",
  },
  {
    q: "How is Flowst different from a normal AI tutor?",
    a: "Most AI tutors answer questions one at a time. Flowst connects the whole journey: Miro guides the path, Nyx builds clarity, Amira creates a visual anchor, and Miro checks recall.",
  },
  {
    q: "Do I have to know which agent to start with?",
    a: "No. The experience is designed to feel guided. Miro can help shape the goal and route the learner into the right next step, while Nyx and Amira handle the learning and visual phases.",
  },
  {
    q: "What happens in early access?",
    a: "Early access means you will hear when the Flowst loop is ready to try, see what is being tested first, and get product updates as the active agents become available.",
  },
  {
    q: "Will there be free and premium features?",
    a: "Yes. Access tiers are still being shaped, so we are not locking exact pricing or plan rules yet. The waitlist is the best place to get updates as free, pro, and premium experiences become clearer.",
  },
  {
    q: "Is Amira just an image generator?",
    a: "No. Amira is a visual learning agent. She uses the learner's mental model to create and refine a concept image, then helps turn that image into a memory anchor.",
  },
];

export function Faq() {
  const { notify } = useNotify();

  return (
    <Section>
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
          <SectionTitle>Before you join the loop.</SectionTitle>
        </div>
        <div>
          <Accordion items={ITEMS} />
          <div
            style={{
              marginTop: "1.1rem",
              padding: "1rem 1.15rem",
              border: "1px solid var(--color-glass-border)",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface-glass)",
              boxShadow: "var(--shadow-inner-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <p style={{ color: "var(--color-muted)", fontSize: "0.95rem", margin: 0 }}>
              Join the list for early access updates.
            </p>
            <Button variant="solid" onClick={notify} iconRight={<Bell size={18} />}>
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
