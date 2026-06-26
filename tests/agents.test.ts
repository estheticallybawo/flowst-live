import assert from "node:assert/strict";
import { test } from "node:test";

import {
  AGENTS,
  getAgentById,
  getAgentStaticParams,
  isAgentId,
} from "../lib/agents.ts";

test("the public catalog contains only the three active agents", () => {
  assert.deepEqual(
    AGENTS.map((agent) => agent.id),
    ["miro", "nyx", "amira"],
  );
});

test("the active agents match the Learn it See it Prove it product flow", () => {
  const miro = getAgentById("miro");
  const nyx = getAgentById("nyx");
  const amira = getAgentById("amira");

  assert.equal(miro?.role, "Learning Orchestrator");
  assert.equal(nyx?.role, "Theory and Vocal Clarity Agent");
  assert.equal(amira?.role, "Visual Learning Agent");

  assert.match(miro?.summary ?? "", /study path/i);
  assert.match(nyx?.summary ?? "", /mental model/i);
  assert.match(amira?.summary ?? "", /visual memory anchor/i);
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
    assert.match(agent.assets.avatar, /^\/assets\/mascots\/[^/]+\/avatar\.png$/);
    assert.match(agent.assets.portrait, /^\/assets\/mascots\/[^/]+\/portrait\.png$/);
    assert.match(
      agent.assets.profileBoard,
      /^\/assets\/mascots\/[^/]+\/profile-board\.png$/,
    );
  }
});

test("agent lookup and static params stay aligned with the catalog", () => {
  assert.equal(isAgentId("nyx"), true);
  assert.equal(isAgentId("quen"), false);
  assert.equal(getAgentById("miro")?.name, "Miro");
  assert.equal(getAgentById("missing"), undefined);
  assert.deepEqual(
    getAgentStaticParams(),
    AGENTS.map(({ id }) => ({ id })),
  );
});
