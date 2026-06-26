"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Bell } from "./Icons";

/**
 * Provides a single "Notify Me" toast shared by the header, hero and any
 * other CTA. Mirrors the prototype's App-level toast state.
 *
 * TODO (production): the notify() handler currently only shows the toast.
 * Wire it to a real waitlist endpoint / email provider before launch.
 */
interface NotifyContextValue {
  notify: () => void;
}

const NotifyContext = createContext<NotifyContextValue | null>(null);

export function useNotify(): NotifyContextValue {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error("useNotify must be used within <NotifyProvider>");
  return ctx;
}

function Toast({ show }: { show: boolean }) {
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
        fontWeight: 500,
        fontSize: "0.92rem",
      }}
    >
      <Bell size={18} /> You&apos;ll be the first to know when Flowst opens.
    </div>
  );
}

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback(() => {
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2600);
  }, []);

  return (
    <NotifyContext.Provider value={{ notify }}>
      {children}
      <Toast show={show} />
    </NotifyContext.Provider>
  );
}
