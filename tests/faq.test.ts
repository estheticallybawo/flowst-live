import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const faqSource = readFileSync(
  new URL("../components/sections/Faq.tsx", import.meta.url),
  "utf8",
);

test("FAQ leads with current demo logistics and product truth", () => {
  const expectedQuestions = [
    "Can I try Flowst now?",
    "What happens in the demo?",
    "Why is the demo only one concept?",
    "What is Brain Canvas?",
    "What do the agents do?",
    "Does the voice practice work in the demo?",
    "What does the certificate prove?",
    "Is Flowst fully launched?",
  ];

  for (const question of expectedQuestions) {
    assert.match(faqSource, new RegExp(`q: "${question.replace(/[?]/g, "\\?")}"`));
  }

  assert.equal((faqSource.match(/q: "/g) ?? []).length, expectedQuestions.length);
});

test("FAQ preserves demo and launch safety boundaries", () => {
  assert.match(faqSource, /demo\.useflowst\.com/);
  assert.match(faqSource, /do not need an account, email, or password/i);
  assert.match(faqSource, /Sofia/);
  assert.match(faqSource, /Kai checks/);
  assert.match(faqSource, /coming soon/i);
  assert.match(faqSource, /student coupon support/i);
  assert.match(faqSource, /Explanation Clarity Certificate/);
  assert.match(faqSource, /not a professional license or school accreditation/i);
  assert.doesNotMatch(faqSource, /Google sign-in/i);
  assert.doesNotMatch(faqSource, /N19,999|N200,000|\$19|\$190/);
  assert.doesNotMatch(faqSource, /Certified .*Developer/i);
  assert.doesNotMatch(faqSource, /JUDGE100|SCHOOL50|100OFF|50OFF|FLOWST100/i);
});