import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

const heroSource = read("../components/sections/Hero.tsx");
const howSource = read("../components/sections/HowItWorks.tsx");
const layoutSource = read("../app/layout.tsx");
const headerSource = read("../components/sections/Header.tsx");
const institutionSource = read("../components/sections/PartnerBanner.tsx");
const proofSource = read("../components/sections/Proof.tsx");
const siteConfigSource = read("../lib/site.ts");
const agentsCss = read("../app/styles/agents.css");
const buttonSource = read("../components/ui/Button.tsx");
const inputSource = read("../components/ui/Input.tsx");
const leadsRoute = read("../app/api/leads/route.ts");

test("homepage uses the current public demo promise and CTA language", () => {
  const combined = [heroSource, howSource, layoutSource, siteConfigSource].join("\n");

  assert.match(combined, /Learn it\. Say it\. Prove it\./);
  assert.match(combined, /demo\.useflowst\.com\/demo/);
  assert.match(combined, /Try the demo/);
  assert.match(combined, /Join the waitlist/);
  assert.match(combined, /No account/);
  assert.doesNotMatch(combined, /Learn it\. See it\. Own it\./);
  assert.doesNotMatch(combined, /Get started/);
  assert.doesNotMatch(combined, /Google sign-in/i);
});

test("metadata and header point to the public homepage, demo URL, and real anchors", () => {
  assert.match([layoutSource, siteConfigSource].join("\n"), /https:\/\/www\.useflowst\.com/);
  assert.match(siteConfigSource, /https:\/\/demo\.useflowst\.com\/demo/);
  assert.match(layoutSource, /\/favicon\.ico/);
  assert.match(headerSource, /#how-it-works/);
  assert.match(headerSource, /#agents/);
  assert.match(headerSource, /#institutions/);
  assert.match(headerSource, /#faq/);
  assert.match(headerSource, /#blog/);
  assert.match(headerSource, /Try demo/);
  assert.doesNotMatch(headerSource, /#pricing/);
});

test("institution CTA replaces public pricing details", () => {
  assert.match(institutionSource, /institutions/i);
  assert.match(institutionSource, /student coupons?/i);
  assert.match(institutionSource, /Book a demo/);
  assert.match(institutionSource, /useNotify/);
  assert.doesNotMatch(institutionSource, /mailto:hello@useflowst\.com/);
  assert.doesNotMatch(institutionSource, /N19,999|N200,000|\$19|\$190/);
  assert.doesNotMatch(institutionSource, /JUDGE100|SCHOOL50|100OFF|50OFF|FLOWST100/i);
});

test("pill colors are solid pastel and CTAs use one flat Flowst grey with white text", () => {
  assert.match(agentsCss, /--pill-amber: #FFDFA2/);
  assert.match(agentsCss, /--pill-lavender: #C7C2FF/);
  assert.match(agentsCss, /--pill-orange: #FFD39A/);
  assert.match(agentsCss, /--agent-kai/);
  assert.match(buttonSource, /type Variant = "solid" \| "accent"/);
  assert.match(buttonSource, /#2e2f30/);
  assert.match(buttonSource, /color: "#FFFFFF"/);
  assert.match(buttonSource, /color: "inherit"/);
  assert.doesNotMatch(buttonSource, /linear-gradient/);
  assert.match(inputSource, /const CTA_GREY = "#2e2f30"/);
  assert.match(inputSource, /color: "#FFFFFF"/);
  assert.doesNotMatch(inputSource, /linear-gradient/);
  assert.match(headerSource, /variant="accent"/);
  assert.match(heroSource, /variant="accent"/);
});

test("lead capture is routed through the Brevo and webhook-backed API endpoint", () => {
  assert.match(leadsRoute, /BREVO_API_KEY/);
  assert.match(leadsRoute, /FLOWST_LEAD_WEBHOOK_URL/);
  assert.match(leadsRoute, /type !== "notify" && type !== "demo"/);
  assert.match(leadsRoute, /fetch\(webhookUrl/);
});

test("proof copy uses explanation clarity certificate language safely", () => {
  assert.match(proofSource, /Learn it/);
  assert.match(proofSource, /Say it/);
  assert.match(proofSource, /Prove it/);
  assert.match(proofSource, /Explanation Clarity Certificate/);
  assert.match(proofSource, /Kai checks/);
  assert.doesNotMatch(proofSource, /Certified .*Developer/i);
});