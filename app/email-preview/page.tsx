import type { Metadata } from "next";
import { renderWelcomeEmail } from "@/lib/email/welcome";

export const metadata: Metadata = {
  title: "Flowst Welcome Email Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WelcomeEmailPreviewPage() {
  const email = renderWelcomeEmail({ name: "Amina", preview: true });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#dfe8f4",
        padding: "24px 12px",
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
          <h1 style={{ margin: "4px 0 0", fontSize: 22 }}>Welcome email</h1>
        </div>
        <div style={{ fontSize: 13, color: "#464A53", textAlign: "right" }}>
          Subject: {email.subject}
        </div>
      </div>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(70, 81, 104, 0.18)",
        }}
        dangerouslySetInnerHTML={{ __html: email.html }}
      />
    </main>
  );
}