export type LeadType = "notify" | "demo";

export interface LeadPayload {
  type: LeadType;
  name?: string;
  email: string;
  organization?: string;
  role?: string;
  audienceSize?: string;
  message?: string;
  source: string;
  createdAt: string;
}

interface DestinationResult {
  ok: boolean;
  status: number;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

function clean(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed.slice(0, 1000) : undefined;
}

function parseListId(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const id = Number.parseInt(value, 10);
  return Number.isFinite(id) ? id : undefined;
}

function firstName(name: string | undefined): string | undefined {
  if (!name) return undefined;
  return name.trim().split(/\s+/)[0];
}

function compactAttributes(attributes: Record<string, string | undefined>): Record<string, string> {
  const compacted: Record<string, string> = {};

  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === "string" && value.length > 0) {
      compacted[key] = value;
    }
  }

  return compacted;
}

function fullBrevoAttributes(payload: LeadPayload) {
  return compactAttributes({
    FNAME: firstName(payload.name),
    FLOWST_TYPE: payload.type,
    FLOWST_SOURCE: payload.source,
    FLOWST_CREATED_AT: payload.createdAt,
    ORGANIZATION: payload.organization,
    ROLE: payload.role,
    AUDIENCE_SIZE: payload.audienceSize,
    MESSAGE: payload.message,
  });
}

function minimalBrevoAttributes(payload: LeadPayload) {
  return compactAttributes({
    FNAME: firstName(payload.name),
  });
}

async function postBrevoContact({
  apiKey,
  listId,
  payload,
  attributes,
}: {
  apiKey: string;
  listId: number;
  payload: LeadPayload;
  attributes: Record<string, string>;
}) {
  return fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      attributes,
      listIds: [listId],
      updateEnabled: true,
    }),
  });
}

async function sendToBrevo(payload: LeadPayload): Promise<DestinationResult | null> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return null;

  const listId = parseListId(
    payload.type === "demo"
      ? (process.env.BREVO_DEMO_LIST_ID ?? process.env.BREVO_WAITLIST_LIST_ID)
      : process.env.BREVO_WAITLIST_LIST_ID,
  );

  if (!listId) {
    return {
      ok: false,
      status: 503,
      error:
        payload.type === "demo"
          ? "Brevo demo list is not configured. Set BREVO_DEMO_LIST_ID or BREVO_WAITLIST_LIST_ID."
          : "Brevo waitlist is not configured. Set BREVO_WAITLIST_LIST_ID.",
    };
  }

  const fullAttributes = fullBrevoAttributes(payload);
  const firstResponse = await postBrevoContact({ apiKey, listId, payload, attributes: fullAttributes });

  if (firstResponse.ok) return { ok: true, status: 200 };

  // If custom Flowst attributes have not been created in Brevo yet, retry with
  // only Brevo's common first-name attribute so the contact is still captured.
  const minimalAttributes = minimalBrevoAttributes(payload);
  const shouldRetryMinimal = Object.keys(fullAttributes).length > Object.keys(minimalAttributes).length;

  if (shouldRetryMinimal) {
    const retryResponse = await postBrevoContact({
      apiKey,
      listId,
      payload,
      attributes: minimalAttributes,
    });

    if (retryResponse.ok) return { ok: true, status: 200 };
  }

  return { ok: false, status: 502, error: "Brevo failed to accept the lead." };
}

async function sendToWebhook(payload: LeadPayload): Promise<DestinationResult | null> {
  const webhookUrl = process.env.FLOWST_LEAD_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const headers: Record<string, string> = {
    "content-type": "application/json",
  };

  if (process.env.FLOWST_LEAD_WEBHOOK_SECRET) {
    headers.authorization = `Bearer ${process.env.FLOWST_LEAD_WEBHOOK_SECRET}`;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return { ok: false, status: 502, error: "Lead webhook failed to accept the submission." };
  }

  return { ok: true, status: 200 };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const type = clean(body.type);
  const email = clean(body.email)?.toLowerCase();

  if (type !== "notify" && type !== "demo") {
    return Response.json({ ok: false, error: "Lead type must be notify or demo." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "A valid email address is required." }, { status: 400 });
  }

  const payload: LeadPayload = {
    type,
    email,
    name: clean(body.name),
    organization: clean(body.organization),
    role: clean(body.role),
    audienceSize: clean(body.audienceSize),
    message: clean(body.message),
    source: clean(body.source) ?? "useflowst.com",
    createdAt: new Date().toISOString(),
  };

  const brevoResult = await sendToBrevo(payload);
  if (brevoResult?.ok) return Response.json({ ok: true, destination: "brevo" });

  const webhookResult = await sendToWebhook(payload);
  if (webhookResult?.ok) return Response.json({ ok: true, destination: "webhook" });

  const error = brevoResult?.error ?? webhookResult?.error ?? "Lead collection is not configured yet. Set BREVO_API_KEY and BREVO_WAITLIST_LIST_ID.";
  const status = brevoResult?.status ?? webhookResult?.status ?? 503;

  return Response.json({ ok: false, error }, { status });
}
