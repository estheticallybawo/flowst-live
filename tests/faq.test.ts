import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const faqSource = readFileSync(
  new URL("../components/sections/Faq.tsx", import.meta.url),
  "utf8",
);

test("FAQ uses the conversion-focused waitlist questions", () => {
  const expectedQuestions = [
    "What is Flowst?",
    "How is Flowst different from a normal AI tutor?",
    "Do I have to know which agent to start with?",
    "What happens in early access?",
    "Will there be free and premium features?",
    "Is Amira just an image generator?",
  ];

  for (const question of expectedQuestions) {
    assert.match(faqSource, new RegExp(`q: "${question.replace(/[?]/g, "\\?")}"`));
  }

  assert.equal((faqSource.match(/q: "/g) ?? []).length, expectedQuestions.length);
});

test("FAQ keeps pricing soft and converts to the waitlist", () => {
  assert.match(faqSource, /"use client"/);
  assert.match(faqSource, /useNotify/);
  assert.match(faqSource, /Before you join the loop\./);
  assert.match(faqSource, /Join the list for early access updates\./);
  assert.match(faqSource, /Notify Me/);
  assert.match(faqSource, /Access tiers are still being shaped/);

  assert.doesNotMatch(faqSource, /\$\d/);
  assert.doesNotMatch(faqSource, /per month/i);
  assert.doesNotMatch(faqSource, /unlimited access/i);
});
