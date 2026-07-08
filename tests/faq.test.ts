import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const faqSource = readFileSync(
  new URL("../components/sections/Faq.tsx", import.meta.url),
  "utf8",
);

test("FAQ leads with methodology, use cases, and differentiation", () => {
  const expectedQuestions = [
    "How does Flowst actually work?",
    "Who is Flowst for?",
    "How is this different from courses, videos, or flashcards?",
    "How does the Flowst loop work?",
    "Why does saying it out loud matter?",
    "Is the voice coaching live yet?",
    "What does the certificate prove?",
    "Is Flowst a professional certification?",
    "Is Flowst live yet, and how do I get access?",
  ];

  for (const question of expectedQuestions) {
    assert.match(faqSource, new RegExp(`q: "${question.replace(/[?]/g, "\\?")}"`));
  }

  assert.equal((faqSource.match(/q: "/g) ?? []).length, expectedQuestions.length);

  // The FAQ should no longer lead with pre-launch logistics.
  assert.doesNotMatch(faqSource, /Before you join the launch list/i);
});

test("FAQ preserves pre-launch safety boundaries", () => {
  assert.match(faqSource, /still in build/i);
  assert.match(faqSource, /Sophia/);
  assert.match(faqSource, /Not active yet|in progress/i);
  assert.match(faqSource, /student coupon support/i);
  assert.match(faqSource, /Explanation Clarity Certificate/);
  assert.doesNotMatch(faqSource, /Google sign-in/i);
  assert.doesNotMatch(faqSource, /N19,999|N200,000|\$19|\$190/);
  assert.doesNotMatch(faqSource, /Certified .*Developer/i);
  assert.doesNotMatch(faqSource, /JUDGE100|SCHOOL50|100OFF|50OFF|FLOWST100/i);
});
