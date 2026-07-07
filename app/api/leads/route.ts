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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed.slice(0, 1000) : undefined;
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

  const webhookUrl = process.env.FLOWST_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      {
        ok: false,
        error: "Lead collection is not configured yet. Set FLOWST_LEAD_WEBHOOK_URL.",
      },
      { status: 503 },
    );
  }

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
    return Response.json(
      { ok: false, error: "Lead webhook failed to accept the submission." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
