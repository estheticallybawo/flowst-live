"use client";

import { useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Input } from "../ui/Input";
import { Pill } from "../ui/Pill";
import { Section, SectionTitle } from "./Section";

export function MailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async () => {
    if (!email || status === "submitting") return;
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "notify", email, source: "useflowst.com/blog-section" }),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) throw new Error(data?.error ?? "Could not join the list yet.");

      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not join the list yet.");
    }
  };

  return (
    <Section id="blog">
      <GlassCard
        variant="solid"
        padding="clamp(2rem, 5vw, 3.5rem)"
        glow="miro"
        style={{ textAlign: "center" }}
      >
        <Pill color="lavender" glass>
          Blog coming soon
        </Pill>
        <SectionTitle style={{ margin: "1rem auto 0", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
          Notes on learning paths, explanation clarity, and saying knowledge out loud.
        </SectionTitle>
        <p style={{ color: "var(--color-muted)", maxWidth: 560, margin: "1rem auto 0" }}>
          The Flowst blog will share product notes and practical learning guidance. Leave your email
          if you want updates while the app experience rolls forward.
        </p>
        <div style={{ maxWidth: 420, margin: "1.8rem auto 0" }}>
          {status === "done" ? (
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
              <Pill color="sage">You&apos;re on the list</Pill> See you soon.
            </div>
          ) : (
            <>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                aria-label="Email address"
                action={status === "submitting" ? "Sending" : "Notify Me"}
                onAction={submit}
              />
              {status === "error" ? (
                <p style={{ marginTop: "0.8rem", color: "#9f3412", fontSize: "0.88rem" }}>
                  {error} You can also email hello@useflowst.com.
                </p>
              ) : null}
            </>
          )}
        </div>
      </GlassCard>
    </Section>
  );
}
