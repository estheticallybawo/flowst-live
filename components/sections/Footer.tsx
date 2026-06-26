const LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Research Foundations",
  "API Reference",
  "Support",
];

export function Footer() {
  return (
    <footer
      style={{
        maxWidth: "var(--container-max)",
        margin: "5rem auto 0",
        padding: "3rem 16px 3.5rem",
        borderTop: "1px solid var(--color-hairline)",
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1.6fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brand/flowst-mark-black.png" alt="" style={{ height: 22 }} />
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.15rem" }}
            >
              Flowst
            </span>
          </div>
          <p
            style={{
              marginTop: "0.9rem",
              color: "var(--color-muted)",
              fontSize: "0.9rem",
              maxWidth: 280,
            }}
          >
            A new way to learn, see, and prove what you remember.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem 1.6rem" }}>
          {LINKS.map((c) => (
            <a key={c} href="#" style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
              {c}
            </a>
          ))}
        </div>
        <div style={{ fontSize: "0.82rem", color: "var(--color-soft-muted)", lineHeight: 1.6 }}>
          <div>@join_flowst · TikTok &amp; Instagram</div>
          <div style={{ marginTop: "0.5rem" }}>
            Built for the Build with Gemini XPRIZE Track. Secure payments by Paystack.
          </div>
        </div>
      </div>
    </footer>
  );
}
