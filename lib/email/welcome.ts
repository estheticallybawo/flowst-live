import { SITE_URL } from "@/lib/site";

interface WelcomeEmailOptions {
  name?: string;
  preview?: boolean;
}

const BRAND = {
  siteUrl: SITE_URL,
  foreground: "#0D0F14",
  muted: "#464A53",
  softMuted: "#6E7687",
  canvas: "#EEF6FF",
  surface: "#FFFFFF",
  panel: "#F8FBFF",
  hairline: "rgba(13,15,20,0.08)",
  primary: "#2E2F30",
  lavender: "#E0DCFF",
  amber: "#FFE5AE",
  orange: "#FFD6B0",
  mint: "#BFEFE6",
};

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
// Email clients can't load web fonts, so headings use a strong web-safe stack.
const HEADING_FONT_STACK =
  "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

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
  return `<span class="flowst-pill flowst-text" style="display:inline-block;margin:0 7px 9px 0;padding:8px 14px;border-radius:999px;background:${color};border:1px solid rgba(13,15,20,0.09);font-family:${FONT_STACK};font-size:14px;line-height:1;font-weight:700;color:${BRAND.foreground};white-space:nowrap;box-shadow:0 9px 22px rgba(70,81,104,0.08);">${label}</span>`;
}

export function renderWelcomeEmail({ name, preview = false }: WelcomeEmailOptions = {}) {
  const safeName = escapeHtml(firstName(name));
  const subject = "You're on the Flowst waitlist (a note from Esther)";
  const previewText = "Thank you for being early. Here is what Flowst is, and what happens next.";

  // The reader just came from the site, so the ask is a share, not a visit.
  // Email can't run JS (no share sheet or clipboard), so we use prefilled links.
  const shareLine =
    "Just joined the waitlist for Flowst. It might be what you need to help you learn better and be able to say it out loud.";
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareLine} ${BRAND.siteUrl}`)}`;
  const xShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareLine)}&url=${encodeURIComponent(BRAND.siteUrl)}`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <title>${subject}</title>
    <style>
      :root { color-scheme: light only; supported-color-schemes: light only; }
      body, table, td, div, p, a, span, strong, h1 { color-scheme: light only; }
      @media (prefers-color-scheme: dark) {
        .flowst-canvas { background: #EEF6FF !important; }
        .flowst-card, .flowst-header { background-color: #FFFFFF !important; }
        .flowst-panel { background: #F8FBFF !important; }
        .flowst-text { color: #0D0F14 !important; }
        .flowst-muted { color: #464A53 !important; }
        .flowst-soft { color: #6E7687 !important; }
        .flowst-button { background: #2E2F30 !important; color: #FFFFFF !important; }
      }
      [data-ogsc] .flowst-canvas { background: #EEF6FF !important; }
      [data-ogsc] .flowst-card, [data-ogsc] .flowst-header { background-color: #FFFFFF !important; }
      [data-ogsc] .flowst-panel { background: #F8FBFF !important; }
      [data-ogsc] .flowst-text { color: #0D0F14 !important; }
      [data-ogsc] .flowst-muted { color: #464A53 !important; }
      [data-ogsc] .flowst-soft { color: #6E7687 !important; }
      [data-ogsc] .flowst-button { background: #2E2F30 !important; color: #FFFFFF !important; }
    </style>
  </head>
  <body class="flowst-canvas" style="margin:0;padding:0;background:${BRAND.canvas};font-family:${FONT_STACK};color:${BRAND.foreground};-webkit-font-smoothing:antialiased;color-scheme:light only;supported-color-schemes:light only;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${previewText}</div>
    <table class="flowst-canvas" role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.canvas};padding:34px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">
            <tr>
              <td style="padding:0 8px 18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" class="flowst-text" style="font-family:${HEADING_FONT_STACK};font-size:22px;font-weight:800;letter-spacing:-0.03em;color:${BRAND.foreground};">Flowst</td>
                    <td class="flowst-soft" align="right" style="font-size:11px;color:${BRAND.softMuted};font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Waitlist</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="flowst-card" style="border-radius:32px;background:${BRAND.surface};border:1px solid rgba(255,255,255,0.88);box-shadow:0 24px 70px rgba(70,81,104,0.12);overflow:hidden;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td class="flowst-header" style="padding:38px 36px 22px;background:radial-gradient(circle at 10% 0%, rgba(255,229,174,0.78), transparent 230px), radial-gradient(circle at 92% 0%, rgba(224,220,255,0.62), transparent 250px), radial-gradient(circle at 72% 100%, rgba(191,239,230,0.42), transparent 250px), #FFFFFF;">
                      <span class="flowst-pill flowst-text" style="display:inline-block;padding:8px 14px;border-radius:999px;background:${BRAND.amber};border:1px solid rgba(13,15,20,0.08);font-size:13px;line-height:1;font-weight:700;color:${BRAND.foreground};box-shadow:0 9px 22px rgba(70,81,104,0.07);">Launch list</span>
                      <h1 class="flowst-text" style="margin:20px 0 0;font-family:${HEADING_FONT_STACK};font-size:34px;line-height:1.12;letter-spacing:-0.04em;font-weight:800;color:${BRAND.foreground};">Hi ${safeName}, you're in.</h1>
                      <p class="flowst-muted" style="margin:16px 0 0;font-size:17px;line-height:1.65;color:${BRAND.muted};">Thank you for joining the Flowst waitlist. This early, that genuinely means a lot.</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="flowst-card" style="padding:6px 36px 0;background:${BRAND.surface};">
                      <p class="flowst-muted" style="margin:0;font-size:16px;line-height:1.72;color:${BRAND.muted};">I'm Esther, and I'm building Flowst. It comes from something I kept running into myself. I'd spent years learning, coding, and picking up skills, and I still had moments where my mind went blank the second someone asked me to explain what I knew.</p>
                      <p class="flowst-muted" style="margin:14px 0 0;font-size:16px;line-height:1.72;color:${BRAND.muted};">The material was never the problem. The gap was saying it out loud, in my own words, and trusting it would still be there the next day.</p>
                      <p class="flowst-text" style="margin:14px 0 0;font-size:16px;line-height:1.72;color:${BRAND.foreground};">That gap is the whole reason Flowst exists. You don't really know something until you can say it. So Flowst helps you understand a topic, practice saying it out loud, and prove you can explain it.</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="flowst-card" style="padding:26px 36px 4px;background:${BRAND.surface};">
                      <div class="flowst-panel" style="padding:20px 20px 14px;border-radius:24px;background:${BRAND.panel};border:1px solid ${BRAND.hairline};">
                        <div class="flowst-soft" style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.softMuted};margin-bottom:14px;">How it works</div>
                        ${pill("Learn it", BRAND.lavender)}${pill("Say it", BRAND.orange)}${pill("Prove it", BRAND.mint)}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="flowst-card" style="padding:24px 36px 0;background:${BRAND.surface};">
                      <div class="flowst-soft" style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.softMuted};margin-bottom:8px;">What happens next</div>
                      <p class="flowst-muted" style="margin:0;font-size:16px;line-height:1.7;color:${BRAND.muted};">Flowst isn't live yet. You'll be among the first in when it opens. Until then I'll send the occasional honest update on what we're building, and nothing else.</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="flowst-card" style="padding:26px 36px 0;background:${BRAND.surface};">
                      <div class="flowst-panel" style="padding:22px 22px 20px;border-radius:24px;background:${BRAND.panel};border:1px solid ${BRAND.hairline};">
                        <p class="flowst-text" style="margin:0;font-size:16px;line-height:1.6;color:${BRAND.foreground};font-weight:700;">Know someone stuck at the same wall?</p>
                        <p class="flowst-muted" style="margin:8px 0 0;font-size:15px;line-height:1.65;color:${BRAND.muted};">If a friend keeps understanding things but freezing when they have to explain them, send them our way. It genuinely helps this early.</p>
                        <div style="margin-top:16px;">
                          <a class="flowst-button" href="${whatsappShare}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:${BRAND.primary};color:#FFFFFF;text-decoration:none;border-radius:14px;padding:13px 20px;font-size:15px;font-weight:700;">Share on WhatsApp</a>
                        </div>
                        <p class="flowst-soft" style="margin:14px 0 0;font-size:13px;line-height:1.55;color:${BRAND.softMuted};">Not on WhatsApp? <a class="flowst-text" href="${xShare}" target="_blank" rel="noopener noreferrer" style="color:${BRAND.foreground};text-decoration:underline;">Share on X</a>, or just forward this email.</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="flowst-card" style="padding:30px 36px 38px;background:${BRAND.surface};">
                      <div style="border-top:1px solid ${BRAND.hairline};padding-top:22px;">
                        <p class="flowst-text" style="margin:0;font-size:16px;line-height:1.65;color:${BRAND.foreground};">Thank you for being early. It helps more than you know.</p>
                        <p class="flowst-muted" style="margin:12px 0 0;font-size:15px;line-height:1.6;color:${BRAND.muted};">Esther<br /><span class="flowst-soft" style="color:${BRAND.softMuted};">building Flowst</span></p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="flowst-soft" align="center" style="padding:22px 16px 0;font-size:12px;line-height:1.6;color:${BRAND.softMuted};">
                You're getting this because you joined the Flowst waitlist.<br />
                Reply any time, or write to <a class="flowst-text" href="mailto:info@useflowst.com" style="color:${BRAND.foreground};text-decoration:underline;">info@useflowst.com</a>.
                ${preview ? '<div style="margin-top:10px;color:#9f3412;">Preview mode. This is not a live email.</div>' : ""}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `Hi ${safeName}, you're in.

Thank you for joining the Flowst waitlist. This early, that genuinely means a lot.

I'm Esther, and I'm building Flowst. It comes from something I kept running into myself. I'd spent years learning, coding, and picking up skills, and I still had moments where my mind went blank the second someone asked me to explain what I knew.

The material was never the problem. The gap was saying it out loud, in my own words, and trusting it would still be there the next day.

That gap is the whole reason Flowst exists. You don't really know something until you can say it. So Flowst helps you understand a topic, practice saying it out loud, and prove you can explain it: learn it, say it, prove it.

What happens next: Flowst isn't live yet. You'll be among the first in when it opens. Until then I'll send the occasional honest update on what we're building, and nothing else.

Know someone stuck at the same wall? If a friend keeps understanding things but freezing when they have to explain them, send them our way. It genuinely helps this early: ${BRAND.siteUrl}

Thank you for being early. It helps more than you know.

Esther
building Flowst`;

  return { subject, previewText, html, text };
}