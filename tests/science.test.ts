import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const scienceSource = readFileSync(
  new URL("../components/sections/Science.tsx", import.meta.url),
  "utf8",
);

test("science section leads with defensible, grounded framing", () => {
  assert.match(scienceSource, /cognitive[- ]science/i);
  assert.match(scienceSource, /forgetting curve/i);
  assert.match(scienceSource, /active recall/i);

  // Softer, contested stats must be hedged, not stated as hard fact.
  assert.match(scienceSource, /studies suggest|research suggests/i);

  // Keep the debunked / dubious multipliers off the page.
  assert.doesNotMatch(scienceSource, /60,?000/);
  assert.doesNotMatch(scienceSource, /400%/);
});
