import { SITE_URL } from "@/lib/site";

interface WelcomeEmailOptions {
  name?: string;
  preview?: boolean;
}

const BRAND = {
  siteUrl: SITE_URL,
  logoUrl: `${SITE_URL}/assets/brand/flowst-mark-black.png`,
  foreground: "#0D0F14",
  muted: "#464A53",
  softMuted: "#6E7687",
  canvas: "#F7FAFF",
  surface: "#FFFFFF",
  primary: "#2E2F30",
  lavender: "#d8d3fd",
  amber: "#f5e0b7",
  orange: "#f8d5ae",
  sage: "#ebf3b7",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function firstName(name?: string) {
  return name?.trim().split(/\s+/)[0] || "there";
}

function pill(label: string, color: string) {
  return `<span style="display:inline-block;margin:0 4px 6px 0;padding:7px 12px;border-radius:999px;background:${color};border:1px solid rgba(13,15,20,0.16);font-size:13px;font-weight:800;color:${BRAND.foreground};white-space:nowrap;box-shadow:0 8px 18px rgba(70,81,104,0.10);">${label}</span>`;
}

export function renderWelcomeEmail({ name, preview = false }: WelcomeEmailOptions = {}) {
  const safeName = escapeHtml(firstName(name));
  const subject = "A personal thank you from Esther at Flowst";
  const previewText = "Thank you for joining Flowst early. Here is why I am building it.";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.canvas};font-family:Arial, Helvetica, sans-serif;color:${BRAND.foreground};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${previewText}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.canvas};padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;">
            <tr>
              <td style="padding:0 0 16px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" style="vertical-align:middle;">
                      <img src="${BRAND.logoUrl}" width="26" height="18" alt="" style="display:inline-block;vertical-align:middle;margin-right:8px;border:0;" />
                      <span style="font-size:20px;font-weight:800;letter-spacing:-0.02em;vertical-align:middle;">Flowst</span>
                    </td>
                    <td align="right" style="font-size:12px;color:${BRAND.softMuted};font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Waitlist</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-radius:34px;background:${BRAND.surface};border:1px solid rgba(255,255,255,0.9);box-shadow:0 24px 80px rgba(70,81,104,0.13), inset 0 1px 1px rgba(255,255,255,0.9);overflow:hidden;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:34px 34px 26px;background:radial-gradient(circle at 12% 10%, rgba(255,223,162,0.72), transparent 220px), radial-gradient(circle at 88% 0%, rgba(199,194,255,0.46), transparent 240px), #FFFFFF;">
                      <div style="display:inline-block;padding:8px 13px;border-radius:999px;background:${BRAND.lavender};border:1px solid rgba(13,15,20,0.08);font-size:13px;font-weight:800;">You are in ✨</div>
                      <h1 style="margin:18px 0 0;font-size:34px;line-height:1.08;letter-spacing:-0.035em;font-weight:900;color:${BRAND.foreground};">Hi ${safeName}, I'm Esther, and I want to personally thank you for joining Flowst early.</h1>
                      <p style="margin:18px 0 0;font-size:17px;line-height:1.65;color:${BRAND.muted};">Flowst started from no better place than lived experience: I had spent years learning, coding, and collecting skills, but there were still moments where my mind went blank when I had to explain what I knew.</p>
                      <p style="margin:14px 0 0;font-size:17px;line-height:1.65;color:${BRAND.muted};">The problem was not that I did not know the material. The gap was confidence, clarity, retention, and being able to say what I understood in my own words.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 34px 8px;">
                      <div style="padding:18px;border-radius:24px;background:#F7FAFF;border:1px solid rgba(13,15,20,0.06);">
                        <div style="font-size:13px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:${BRAND.softMuted};margin-bottom:12px;">What Flowst is becoming</div>
                        ${pill("Learn it", BRAND.lavender)}
                        ${pill("Say it", BRAND.orange)}
                        ${pill("Own it", BRAND.sage)}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:18px 34px 8px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:14px 0;border-bottom:1px solid rgba(13,15,20,0.08);">
                            <strong style="display:block;font-size:15px;color:${BRAND.foreground};">A calmer path through what you know</strong>
                            <span style="display:block;margin-top:4px;font-size:14px;line-height:1.55;color:${BRAND.muted};">Flowst is being shaped to turn topics into guided learning paths instead of another pile of notes.</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 0;border-bottom:1px solid rgba(13,15,20,0.08);">
                            <strong style="display:block;font-size:15px;color:${BRAND.foreground};">Clarity you can actually keep</strong>
                            <span style="display:block;margin-top:4px;font-size:14px;line-height:1.55;color:${BRAND.muted};">The goal is to help you connect ideas, understand them deeply, and reduce the blank-mind feeling.</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 0;">
                            <strong style="display:block;font-size:15px;color:${BRAND.foreground};">Practice saying what you know</strong>
                            <span style="display:block;margin-top:4px;font-size:14px;line-height:1.55;color:${BRAND.muted};">Because confidence grows when knowledge can leave your head in your own words.</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:18px 34px 34px;">
                      <p style="margin:0;font-size:16px;line-height:1.65;color:${BRAND.muted};">I will be sharing the fears, experiments, product decisions, and behind-the-scenes lessons as Flowst gets closer to its first release. For now, thank you for being early and helping me shape this.</p>
                      <p style="margin:22px 0 0;font-size:16px;line-height:1.65;color:${BRAND.foreground};font-weight:700;">It means more than you know.</p>
                      <p style="margin:4px 0 0;font-size:15px;line-height:1.6;color:${BRAND.muted};">With love,<br /><strong style="color:${BRAND.foreground};">Esther from Flowst</strong></p>
                      <div style="margin-top:26px;">
                        <a href="${BRAND.siteUrl}" style="display:inline-block;background:${BRAND.primary};color:#FFFFFF;text-decoration:none;border-radius:16px;padding:14px 18px;font-size:14px;font-weight:800;box-shadow:0 14px 34px rgba(46,47,48,0.20);">Visit Flowst</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:20px 14px 0;font-size:12px;line-height:1.55;color:${BRAND.softMuted};">
                You are receiving this because you joined the Flowst waitlist.<br />
                Questions? Reply to this email or write to <a href="mailto:info@useflowst.com" style="color:${BRAND.foreground};text-decoration:underline;">info@useflowst.com</a>.
                ${preview ? '<div style="margin-top:10px;color:#9f3412;">Preview mode, this is not a live email.</div>' : ''}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `Hi ${safeName},

I'm Esther, and I want to personally thank you for joining Flowst early.

Flowst started from a very honest place: I had spent years learning, teaching, coding, and collecting skills, but there were still moments where my mind went blank when I had to explain what I knew.

The problem was not that I did not know the material. The gap was confidence, clarity, retention, and being able to say what I understood in my own words.

Flowst is becoming a calmer way to learn, say, and own what you know. A path through what you already know. Clarity you can keep. Practice saying it in your own words.

I will be sharing the fears, experiments, product decisions, and behind-the-scenes lessons as Flowst gets closer to its first release. For now, thank you for being early and helping me shape this.

It means more than you know.

With love,
Esther from Flowst

${BRAND.siteUrl}`;

  return { subject, previewText, html, text };
}