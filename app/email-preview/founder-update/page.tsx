import type { Metadata } from "next";
import { renderFounderUpdateEmail } from "@/lib/email/founder-update";

export const metadata: Metadata = {
  title: "Flowst Founder Update Email Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FounderUpdateEmailPreviewPage() {
  const previewEmail = renderFounderUpdateEmail({ name: "Amina", preview: true });
  const brevoEmail = renderFounderUpdateEmail({ name: "{{ contact.FIRSTNAME }}" });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#dfe8f4",
        padding: "24px 12px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto 18px",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
          color: "#0D0F14",
        }}
      >
        <div>
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.6 }}>
            Preview
          </div>
          <h1 style={{ margin: "4px 0 0", fontSize: 22 }}>Founder update email</h1>
        </div>
        <div style={{ fontSize: 13, color: "#464A53", textAlign: "right" }}>
          Subject: {previewEmail.subject}
        </div>
      </div>

      <iframe
        title="Founder update email preview"
        srcDoc={previewEmail.html}
        style={{
          display: "block",
          width: "100%",
          maxWidth: 760,
          height: "1560px",
          margin: "0 auto",
          border: "none",
          borderRadius: 28,
          overflow: "hidden",
          background: "#EEF6FF",
          boxShadow: "0 24px 80px rgba(70, 81, 104, 0.18)",
        }}
      />

      <section
        style={{
          maxWidth: 760,
          margin: "24px auto 0",
          fontFamily: "system-ui, sans-serif",
          color: "#0D0F14",
          background: "#FFFFFF",
          borderRadius: 24,
          padding: 20,
          boxShadow: "0 18px 50px rgba(70, 81, 104, 0.12)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18 }}>Brevo campaign details</h2>
        <p style={{ margin: "8px 0 14px", color: "#464A53", lineHeight: 1.6 }}>
          Use these details when creating the campaign. The HTML below uses Brevo's first-name placeholder.
        </p>
        <div style={{ display: "grid", gap: 8, marginBottom: 14 }}>
          <div><strong>Subject:</strong> {brevoEmail.subject}</div>
          <div><strong>Preview text:</strong> {brevoEmail.previewText}</div>
        </div>
        <label htmlFor="campaign-html" style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
          Campaign HTML
        </label>
        <textarea
          id="campaign-html"
          readOnly
          value={brevoEmail.html}
          style={{
            width: "100%",
            minHeight: 260,
            resize: "vertical",
            borderRadius: 16,
            border: "1px solid rgba(13,15,20,0.14)",
            padding: 14,
            fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
            fontSize: 12,
            lineHeight: 1.5,
            boxSizing: "border-box",
            color: "#0D0F14",
            background: "#F8FBFF",
          }}
        />
      </section>
    </main>
  );
}