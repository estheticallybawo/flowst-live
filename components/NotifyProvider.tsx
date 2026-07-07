"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Bell } from "./Icons";
import { Button } from "./ui/Button";

interface NotifyContextValue {
  notify: () => void;
  demo: () => void;
}

type LeadMode = "notify" | "demo";
type SubmitState = "idle" | "submitting" | "success" | "error";

const NotifyContext = createContext<NotifyContextValue | null>(null);

export function useNotify(): NotifyContextValue {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error("useNotify must be used within <NotifyProvider>");
  return ctx;
}

function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        zIndex: 60,
        transform: `translateX(-50%) translateY(${show ? "0" : "24px"})`,
        opacity: show ? 1 : 0,
        pointerEvents: "none",
        transition:
          "transform var(--dur-base) var(--ease-soft), opacity var(--dur-base) var(--ease-soft)",
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        background: "var(--color-surface)",
        border: "1px solid var(--color-glass-border)",
        borderRadius: "var(--radius-pill)",
        boxShadow: "var(--shadow-card)",
        padding: "0.7rem 1.2rem",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "0.92rem",
      }}
    >
      <Bell size={18} /> {message}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.86rem", fontWeight: 600 }}>
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "1px solid var(--color-border-soft)",
          borderRadius: "var(--radius-md)",
          background: "var(--color-surface)",
          padding: "0.8rem 0.9rem",
          color: "var(--color-foreground)",
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          outline: "none",
          boxShadow: "var(--shadow-inner-soft)",
        }}
      />
    </label>
  );
}

function LeadDialog({ mode, onClose, onSuccess }: { mode: LeadMode; onClose: () => void; onSuccess: (message: string) => void }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");
  const firstField = useRef<HTMLInputElement | null>(null);
  const isDemo = mode === "demo";

  useEffect(() => {
    firstField.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, type: mode, source: "useflowst.com" }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      onClose();
      onSuccess(isDemo ? "Demo request received. We will reach out soon." : "You are on the launch list.");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-dialog-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        overflowY: "auto",
        background: "rgba(13, 15, 20, 0.28)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(0.75rem, 3vw, 1.5rem)",
        }}
        onMouseDown={(event) => {
          if (event.currentTarget === event.target) onClose();
        }}
      >
      <form
        onSubmit={submit}
        style={{
          width: "min(100%, 560px)",
          borderRadius: "var(--radius-2xl)",
          border: "1px solid var(--color-glass-border)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(255,255,255,0.86)), linear-gradient(135deg, var(--agent-miro-soft), var(--agent-sophia-soft), var(--agent-amira-soft))",
          boxShadow: "var(--shadow-card), var(--shadow-inner-soft)",
          padding: "clamp(1.4rem, 4vw, 2rem)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            borderRadius: "var(--radius-pill)",
            padding: "0.35rem 0.75rem",
            background: isDemo ? "var(--pill-lavender)" : "var(--pill-amber)",
            border: "1px solid rgba(13, 15, 20, 0.12)",
            fontWeight: 700,
            fontSize: "0.82rem",
          }}
        >
          {isDemo ? "Institution access" : "Launch list"}
        </div>
        <h2 id="lead-dialog-title" style={{ marginTop: "1rem", fontSize: "var(--text-h3)", lineHeight: 1.15 }}>
          {isDemo ? "Book a Flowst demo" : "Be first to know when Flowst launches"}
        </h2>
        <p style={{ marginTop: "0.7rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
          {isDemo
            ? "Tell us about your learning community and we will follow up about demos, pilots, and student coupon support."
            : "Drop your email and we will send launch updates, early access notes, and product progress."}
        </p>

        <div style={{ display: "grid", gap: "0.9rem", marginTop: "1.3rem" }}>
          <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.86rem", fontWeight: 600 }}>
            {isDemo ? "Your name" : "Name"}
            <input
              ref={firstField}
              name="name"
              required={isDemo}
              placeholder={isDemo ? "Jane from Bright Academy" : "Your name"}
              style={{
                width: "100%",
                border: "1px solid var(--color-border-soft)",
                borderRadius: "var(--radius-md)",
                background: "var(--color-surface)",
                padding: "0.8rem 0.9rem",
                color: "var(--color-foreground)",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                outline: "none",
                boxShadow: "var(--shadow-inner-soft)",
              }}
            />
          </label>
          <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
          {isDemo ? (
            <>
              <Field label="Institution or community" name="organization" required placeholder="School, club, bootcamp, team" />
              <div className="lead-dialog__row">
                <Field label="Your role" name="role" placeholder="Founder, teacher, lead" />
                <Field label="Students" name="audienceSize" placeholder="50, 200, 1000" />
              </div>
              <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.86rem", fontWeight: 600 }}>
                What should we know?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about the learners, timeline, or coupon needs."
                  style={{
                    width: "100%",
                    resize: "vertical",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-surface)",
                    padding: "0.8rem 0.9rem",
                    color: "var(--color-foreground)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    boxShadow: "var(--shadow-inner-soft)",
                  }}
                />
              </label>
            </>
          ) : null}
        </div>

        {state === "error" ? (
          <p style={{ marginTop: "1rem", color: "#9f3412", fontSize: "0.9rem", lineHeight: 1.45 }}>
            {error} You can also email hello@useflowst.com.
          </p>
        ) : null}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.35rem", flexWrap: "wrap" }}>
          <Button type="button" variant="ghost" onClick={onClose} disabled={state === "submitting"}>
            Cancel
          </Button>
          <Button type="submit" variant="accent" disabled={state === "submitting"}>
            {state === "submitting" ? "Sending..." : isDemo ? "Send demo request" : "Join the launch list"}
          </Button>
        </div>
      </form>
      </div>
    </div>
  );
}

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<LeadMode | null>(null);
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 3000);
  }, []);

  const notify = useCallback(() => setMode("notify"), []);
  const demo = useCallback(() => setMode("demo"), []);

  return (
    <NotifyContext.Provider value={{ notify, demo }}>
      {children}
      {mode ? <LeadDialog mode={mode} onClose={() => setMode(null)} onSuccess={showToast} /> : null}
      <Toast show={Boolean(toast)} message={toast} />
    </NotifyContext.Provider>
  );
}
