export function Footer() {
  return (
    <div
      style={{
        maxWidth: "var(--container-max)",
        margin: "5rem auto 0",
        padding: "0 16px 3.5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.9rem" }}>
        <a
          href="#top"
          style={{
            color: "var(--color-muted)",
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Back to top ↑
        </a>
      </div>
      <footer
        style={{
          padding: "3rem clamp(1.25rem, 3vw, 2.25rem)",
          borderRadius: "var(--radius-xl)",
          background: "#EEF5FF",
          border: "1px solid rgba(27, 126, 218, 0.14)",
          boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
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
                maxWidth: 320,
                lineHeight: 1.55,
              }}
            >
              A guided way to learn, say, and prove what you understand.
            </p>
          </div>
          <div
            style={{
              justifySelf: "end",
              maxWidth: 340,
              fontSize: "0.82rem",
              color: "var(--color-soft-muted)",
              lineHeight: 1.6,
            }}
          >
            <div>@useflowst · TikTok &amp; Instagram &amp; Facebook</div>
            <div style={{ marginTop: "0.5rem" }}>
              Built for guided learning paths. Secure payments by Paystack inside the app.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
