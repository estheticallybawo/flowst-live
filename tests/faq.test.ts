import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const faqSource = readFileSync(
  new URL("../components/sections/Faq.tsx", import.meta.url),
  "utf8",
);

test("FAQ answers the pre-launch product-truth questions", () => {
  const expectedQuestions = [
    "Is Flowst live yet?",
    "What happens when I join the newsletter?",
    "What will Flowst help me do?",
    "Do I need to choose an agent first?",
    "Is Amira live yet?",
    "Can institutions use Flowst with students?",
    "What does the certificate prove?",
    "Is Flowst a professional certification?",
  ];

  for (const question of expectedQuestions) {
    assert.match(faqSource, new RegExp(`q: "${question.replace(/[?]/g, "\\?")}"`));
  }

  assert.equal((faqSource.match(/q: "/g) ?? []).length, expectedQuestions.length);
});

test("FAQ preserves pre-launch safety boundaries", () => {
  assert.match(faqSource, /still in build/i);
  assert.match(faqSource, /newsletter/i);
  assert.match(faqSource, /Sophia/);
  assert.match(faqSource, /Not active yet|in progress/i);
  assert.match(faqSource, /student coupon support/i);
  assert.match(faqSource, /Explanation Clarity Certificate/);
  assert.doesNotMatch(faqSource, /Google sign-in/i);
  assert.doesNotMatch(faqSource, /N19,999|N200,000|\$19|\$190/);
  assert.doesNotMatch(faqSource, /Certified .*Developer/i);
  assert.doesNotMatch(faqSource, /JUDGE100|SCHOOL50|100OFF|50OFF|FLOWST100/i);
});
