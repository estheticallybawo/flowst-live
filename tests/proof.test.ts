import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const proofSource = readFileSync(
  new URL("../components/sections/Proof.tsx", import.meta.url),
  "utf8",
);

test("Evidence heading is wide enough to stay within three balanced lines", () => {
  assert.match(proofSource, /maxWidth:\s*1040/);
  assert.match(proofSource, /textWrap:\s*"balance"/);
  assert.match(proofSource, /lineHeight:\s*1\.08/);
});
