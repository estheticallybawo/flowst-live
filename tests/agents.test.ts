import assert from "node:assert/strict";
import { test } from "node:test";

import {
  AGENTS,
  getAgentById,
  getAgentStaticParams,
  isAgentId,
} from "../lib/agents.ts";

test("the public catalog matches the current demo agent loop", () => {
  assert.deepEqual(
    AGENTS.map((agent) => agent.id),
    ["miro", "sofia", "amira", "kai"],
  );
});

test("the active agents match the demo Flowstate contract", () => {
  const miro = getAgentById("miro");
  const sofia = getAgentById("sofia");
  const amira = getAgentById("amira");
  const kai = getAgentById("kai");

  assert.equal(miro?.role, "Flowstate Guide");
  assert.equal(sofia?.role, "Clarity Teacher");
  assert.equal(amira?.role, "Voice Practice Coach");
  assert.equal(kai?.role, "Understanding Checker");

  assert.equal(miro?.status, "Demo live");
  assert.equal(sofia?.status, "Demo live");
  assert.equal(amira?.status, "Demo live");
  assert.equal(kai?.status, "Demo live");

  assert.match(miro?.summary ?? "", /Flowstate/i);
  assert.match(sofia?.summary ?? "", /teaches/i);
  assert.match(amira?.summary ?? "", /spoken explanation|microphone/i);
  assert.match(kai?.summary ?? "", /checks.*understanding/i);
  assert.doesNotMatch(JSON.stringify(AGENTS), /"nyx"/i);
  assert.doesNotMatch(JSON.stringify(amira), /image generator|visual learning|visual memory/i);
  assert.doesNotMatch(JSON.stringify(amira), /German/i);
});

test("every agent exposes complete structured profile content", () => {
  for (const agent of AGENTS) {
    assert.ok(agent.role);
    assert.ok(agent.summary);
    assert.ok(agent.promise);
    assert.ok(agent.personality.length >= 3);
    assert.ok(agent.bestFor.length >= 2);
    assert.ok(agent.flow.length >= 4);
    assert.ok(agent.model.name);
    assert.ok(agent.goals.length >= 1);
    assert.ok(agent.status);
    assert.ok(agent.contextLabel);
    assert.match(agent.assets.avatar, /^\/assets\/mascots\/[^/]+\/avatar\.png$/);
    assert.match(agent.assets.portrait, /^\/assets\/mascots\/[^/]+\/portrait\.png$/);
    assert.match(
      agent.assets.profileBoard,
      /^\/assets\/mascots\/[^/]+\/profile-board\.png$/,
    );
  }
});

test("agent lookup and static params stay aligned with the catalog", () => {
  assert.equal(isAgentId("sofia"), true);
  assert.equal(isAgentId("sophia"), false);
  assert.equal(isAgentId("nyx"), false);
  assert.equal(isAgentId("quen"), false);
  assert.equal(getAgentById("miro")?.name, "Miro");
  assert.equal(getAgentById("kai")?.name, "Kai");
  assert.equal(getAgentById("missing"), undefined);
  assert.deepEqual(
    getAgentStaticParams(),
    AGENTS.map(({ id }) => ({ id })),
  );
});