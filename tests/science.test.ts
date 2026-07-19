import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const scienceSource = readFileSync(
  new URL("../components/sections/Science.tsx", import.meta.url),
  "utf8",
);

test("method section leads with defensible, demo-grounded framing", () => {
  assert.match(scienceSource, /cognitive health support/i);
  assert.match(scienceSource, /focused scope/i);
  assert.match(scienceSource, /active\s+explanation/i);
  assert.match(scienceSource, /voice practice/i);
  assert.match(scienceSource, /supportive assessment/i);
  assert.match(scienceSource, /cognitive overload/i);

  // Keep the debunked or overconfident multipliers off the page.
  assert.doesNotMatch(scienceSource, /60,?000/);
  assert.doesNotMatch(scienceSource, /400%/);
  assert.doesNotMatch(scienceSource, /90%/);
});