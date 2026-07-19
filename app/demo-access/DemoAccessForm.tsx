"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

type DemoAccessResponse =
  | {
      ok: true;
      url: string;
    }
  | {
      ok: false;
      error: string;
    };

interface DemoAccessFormProps {
  initialCode?: string;
}

export function DemoAccessForm({ initialCode = "" }: DemoAccessFormProps) {
  const [code, setCode] = useState(initialCode);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (nextCode = code) => {
    const trimmedCode = nextCode.trim();

    if (!trimmedCode) {
      setStatus("error");
      setMessage("Enter the access code Esther shared with you.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/demo-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: trimmedCode }),
      });
      const data = (await response.json()) as DemoAccessResponse;

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.ok ? "Please try again." : data.error);
        return;
      }

      window.location.assign(data.url);
    } catch {
      setStatus("error");
      setMessage("We could not verify the code yet. Please try again.");
    }
  };

  useEffect(() => {
    if (initialCode.trim()) {
      void submit(initialCode);
    }
    // We only want to auto-check the incoming code once on page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCode]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void submit();
      }}
      style={{
        display: "grid",
        gap: "0.85rem",
        marginTop: "1.45rem",
      }}
    >
      <label
        htmlFor="demo-access-code"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.86rem",
          fontWeight: 600,
        }}
      >
        Access code
      </label>
      <input
        id="demo-access-code"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Enter your code"
        autoComplete="one-time-code"
        autoCapitalize="characters"
        spellCheck={false}
        style={{
          width: "100%",
          minHeight: 58,
          border: "1px solid var(--color-border-soft)",
          borderRadius: "16px",
          background: "var(--color-surface)",
          boxShadow: "var(--shadow-inner-soft)",
          color: "var(--color-foreground)",
          fontFamily: "var(--font-heading)",
          fontSize: "1.05rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          outline: "none",
          padding: "0 1rem",
          textTransform: "uppercase",
        }}
      />
      {message ? (
        <p
          role="alert"
          style={{
            color: status === "error" ? "#B8482C" : "var(--color-muted)",
            fontSize: "0.9rem",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {message}
        </p>
      ) : null}
      <Button type="submit" variant="accent" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Checking code..." : "Continue to demo"}
      </Button>
    </form>
  );
}