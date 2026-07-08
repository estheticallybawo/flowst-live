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
    ["miro", "sophia", "amira"],
  );
});

test("the active agents match the Learn it Say it Own it product spec", () => {
  const miro = getAgentById("miro");
  const sophia = getAgentById("sophia");
  const amira = getAgentById("amira");

  assert.equal(miro?.role, "Learning Path Guide");
  assert.equal(sophia?.role, "Clarity Teacher");
  assert.equal(amira?.role, "Voice Coach");

  assert.equal(miro?.status, "Premium");
  assert.equal(sophia?.status, "Available");
  assert.equal(amira?.status, "Not active yet");

  assert.match(miro?.summary ?? "", /learning path/i);
  assert.match(miro?.summary ?? "", /clarity review/i);
  assert.match(sophia?.summary ?? "", /explain/i);
  assert.match(amira?.summary ?? "", /voice/i);
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
  assert.equal(isAgentId("sophia"), true);
  assert.equal(isAgentId("nyx"), false);
  assert.equal(isAgentId("quen"), false);
  assert.equal(getAgentById("miro")?.name, "Miro");
  assert.equal(getAgentById("missing"), undefined);
  assert.deepEqual(
    getAgentStaticParams(),
    AGENTS.map(({ id }) => ({ id })),
  );
});
