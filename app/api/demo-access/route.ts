import { DEMO_URL } from "@/lib/site";

type DemoAccessRequest = {
  code?: unknown;
};

const normalizeCode = (value: string) => value.trim().toLowerCase();

const getAllowedCodes = () => {
  const multiCodeValue = process.env.DEMO_ACCESS_CODES ?? "";
  const singleCodeValue = process.env.DEMO_ACCESS_CODE ?? "";

  return [...multiCodeValue.split(","), singleCodeValue]
    .map((code) => normalizeCode(code))
    .filter(Boolean);
};

export async function POST(request: Request) {
  let body: DemoAccessRequest;

  try {
    body = (await request.json()) as DemoAccessRequest;
  } catch {
    return Response.json(
      { ok: false, error: "Enter your demo access code to continue." },
      { status: 400 },
    );
  }

  const code = typeof body.code === "string" ? normalizeCode(body.code) : "";
  const allowedCodes = getAllowedCodes();

  if (!allowedCodes.length) {
    return Response.json(
      {
        ok: false,
        error: "Demo access is not configured yet. Please email info@useflowst.com.",
      },
      { status: 503 },
    );
  }

  if (!code || !allowedCodes.includes(code)) {
    return Response.json(
      {
        ok: false,
        error: "That access code was not recognized. Please check it and try again.",
      },
      { status: 401 },
    );
  }

  return Response.json({ ok: true, url: DEMO_URL });
}