"use client";

import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";
import { Arrow } from "../Icons";
import { useNotify } from "../NotifyProvider";
import { Section } from "./Section";

const SUPPORT = ["Early access pilots", "Student coupons", "Guided demos"];

export function PartnerBanner() {
  const { notify, demo } = useNotify();

  return (
    <Section id="institutions">
      <div
        className="partner-grid"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-2xl)",
          padding: "clamp(2rem, 4vw, 3rem)",
          background:
            "radial-gradient(circle at 12% 10%, rgba(255, 200, 97, 0.49), transparent 26rem), radial-gradient(circle at 88% 18%, rgba(255, 139, 37, 0.36), transparent 22rem), linear-gradient(135deg, rgba(130, 121, 223, 0.57), rgba(154, 166, 255, 0.38) 42%, rgba(255, 255, 255, 0.47))",
          border: "1px solid rgba(255, 255, 255, 0.82)",
          boxShadow: "0 28px 90px rgba(129, 121, 223, 0.22), var(--shadow-inner-soft)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 660, position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
            }}
          >
            For institutions and learning communities
          </div>
          <h3
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: 600,
              marginTop: "1rem",
              lineHeight: 1.2,
            }}
          >
            Bring Flowst to your students with early access, guided demos, and coupon support.
          </h3>
          <p style={{ marginTop: "0.8rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            We are shaping institution access while the product is in build. Schools, clubs,
            bootcamps, and learning teams can talk to us about student coupons and launch pilots.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "1.2rem" }}>
            {SUPPORT.map((item, index) => (
              <Pill key={item} color={index === 0 ? "lavender" : index === 1 ? "orange" : "sage"}>
                {item}
              </Pill>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderRadius: "var(--radius-xl)",
            background: "rgba(255, 255, 255, 0.78)",
            border: "1px solid rgba(255, 255, 255, 0.88)",
            boxShadow: "var(--shadow-card-soft), var(--shadow-inner-soft)",
            padding: "1.25rem",
          }}
        >
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.35rem" }}>
            Pilot conversations are open.
          </div>
          <p style={{ marginTop: "0.65rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
            Share your institution name, learner size, and coupon needs. We will follow up with the
            right launch path.
          </p>
          <Button
            variant="accent"
            size="lg"
            iconRight={<Arrow size={18} />}
            onClick={demo}
            style={{ marginTop: "1.2rem", width: "100%" }}
          >
            Book a demo
          </Button>
          {/* Student-coupon CTA, paired under Book a demo as an outlined action (mobile-only) */}
          <div className="partner-coupon-cta">
            <Button
              variant="ghost"
              size="lg"
              iconRight={<Arrow size={18} />}
              onClick={notify}
              style={{ width: "100%" }}
            >
              Get a student coupon
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

