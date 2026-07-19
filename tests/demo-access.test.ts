import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

const routeSource = read("../app/api/demo-access/route.ts");
const pageSource = read("../app/demo-access/page.tsx");
const formSource = read("../app/demo-access/DemoAccessForm.tsx");
const envExample = read("../.env.example");

test("demo access gate validates server-side codes before returning the demo URL", () => {
  assert.match(routeSource, /DEMO_ACCESS_CODES/);
  assert.match(routeSource, /DEMO_ACCESS_CODE/);
  assert.match(routeSource, /allowedCodes\.includes\(code\)/);
  assert.match(routeSource, /DEMO_URL/);
  assert.match(routeSource, /status: 401/);
  assert.match(routeSource, /status: 503/);
});

test("demo access page explains judge access and collects a code", () => {
  assert.match(pageSource, /Judge and early tester access/);
  assert.match(pageSource, /Enter your code to try the Flowst demo/);
  assert.match(pageSource, /info@useflowst\.com/);
  assert.match(formSource, /\/api\/demo-access/);
  assert.match(formSource, /Continue to demo/);
  assert.match(formSource, /window\.location\.assign\(data\.url\)/);
});
