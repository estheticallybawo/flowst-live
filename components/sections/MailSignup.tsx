"use client";

import { useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Input } from "../ui/Input";
import { Pill } from "../ui/Pill";
import { Section, SectionTitle } from "./Section";

export function MailSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!email) return;
    // TODO (production): POST the email to a real waitlist endpoint or
    // email provider here before showing the success state.
    setDone(true);
  };

  return (
    <Section>
      <GlassCard
        variant="solid"
        padding="clamp(2rem, 5vw, 3.5rem)"
        glow="miro"
        style={{ textAlign: "center" }}
      >
        <SectionTitle style={{ margin: "0 auto", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
          Stay in the loop.
        </SectionTitle>
        <p style={{ color: "var(--color-muted)", maxWidth: 520, margin: "1rem auto 0" }}>
          Be first to hear when the Flowst learning loop opens: Miro for guidance, Nyx for clarity,
          and Amira for visual memory.
        </p>
        <div style={{ maxWidth: 420, margin: "1.8rem auto 0" }}>
          {done ? (
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
              <Pill color="sage">You&apos;re on the list</Pill> See you soon.
            </div>
          ) : (
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              aria-label="Email address"
              action="Notify Me"
              onAction={submit}
            />
          )}
        </div>
      </GlassCard>
    </Section>
  );
}
