import { renderWelcomeEmail } from "@/lib/email/welcome";

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
const BREVO_TRANSACTIONAL_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";
const GENERIC_LEAD_ERROR = "We couldn't add you to the list yet. Please try again.";

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

function brevoAttributes(payload: LeadPayload) {
  const attributes: Record<string, string | undefined> = {
    FIRSTNAME: firstName(payload.name),
  };

  // Keep custom Flowst metadata opt-in because Brevo rejects unknown contact
  // attributes. Create these attributes in Brevo first, then set this env var.
  if (process.env.BREVO_ENABLE_CUSTOM_ATTRIBUTES === "true") {
    attributes.FLOWST_TYPE = payload.type;
    attributes.FLOWST_SOURCE = payload.source;
    attributes.FLOWST_CREATED_AT = payload.createdAt;
    attributes.ORGANIZATION = payload.organization;
    attributes.ROLE = payload.role;
    attributes.AUDIENCE_SIZE = payload.audienceSize;
    attributes.MESSAGE = payload.message;
  }

  return compactAttributes(attributes);
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
  const body: Record<string, unknown> = {
    email: payload.email,
    listIds: [listId],
    updateEnabled: true,
  };

  if (Object.keys(attributes).length > 0) {
    body.attributes = attributes;
  }

  return fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
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
      error: GENERIC_LEAD_ERROR,
    };
  }

  const attributes = brevoAttributes(payload);
  const firstResponse = await postBrevoContact({ apiKey, listId, payload, attributes });

  if (firstResponse.ok) return { ok: true, status: 200 };

  // If Brevo rejects contact attributes, still capture the email by retrying
  // without attributes. This avoids showing a failure when the contact can be saved.
  if (Object.keys(attributes).length > 0) {
    const retryResponse = await postBrevoContact({
      apiKey,
      listId,
      payload,
      attributes: {},
    });

    if (retryResponse.ok) return { ok: true, status: 200 };
  }

  return { ok: false, status: 502, error: GENERIC_LEAD_ERROR };
}

async function sendWelcomeEmail(payload: LeadPayload): Promise<DestinationResult | null> {
  if (payload.type !== "notify") return null;
  if (process.env.BREVO_SEND_WELCOME_EMAIL !== "true") return null;

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) return null;

  const { subject, html, text } = renderWelcomeEmail({ name: payload.name });
  const senderName = process.env.BREVO_SENDER_NAME ?? "Flowst";
  const replyToEmail = process.env.BREVO_REPLY_TO_EMAIL ?? senderEmail;

  const body: Record<string, unknown> = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: payload.email,
        ...(payload.name ? { name: payload.name } : {}),
      },
    ],
    subject,
    htmlContent: html,
    textContent: text,
    replyTo: {
      name: senderName,
      email: replyToEmail,
    },
  };

  const response = await fetch(BREVO_TRANSACTIONAL_EMAIL_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return { ok: false, status: response.status, error: "Welcome email failed." };
  }

  return { ok: true, status: 200 };
}

async function safelySendWelcomeEmail(payload: LeadPayload) {
  try {
    const result = await sendWelcomeEmail(payload);

    if (result && !result.ok) {
      console.error("Flowst welcome email failed.", { status: result.status });
    }
  } catch (error) {
    console.error(
      "Flowst welcome email failed.",
      error instanceof Error ? error.message : "Unknown error",
    );
  }
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
    return { ok: false, status: 502, error: GENERIC_LEAD_ERROR };
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
  if (brevoResult?.ok) {
    await safelySendWelcomeEmail(payload);
    return Response.json({ ok: true, destination: "brevo" });
  }

  const webhookResult = await sendToWebhook(payload);
  if (webhookResult?.ok) return Response.json({ ok: true, destination: "webhook" });

  const error = brevoResult?.error ?? webhookResult?.error ?? GENERIC_LEAD_ERROR;
  const status = brevoResult?.status ?? webhookResult?.status ?? 503;

  return Response.json({ ok: false, error }, { status });
}