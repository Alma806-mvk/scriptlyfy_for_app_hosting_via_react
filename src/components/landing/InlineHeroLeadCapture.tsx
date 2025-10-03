"use client";
import { useState } from "react";

export default function InlineHeroLeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const onSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isValid || status === "submitting") return;
    setStatus("submitting");
    setMessage("");
    // Simulate async; in SPA we wrote to Firestore. Here we keep UX identical without backend.
    setTimeout(() => {
      try { if (typeof window !== 'undefined') window.localStorage.setItem('leadEmail', email.trim().toLowerCase()); } catch {}
      setStatus("success");
      setMessage("You're on the waitlist! 🎉");
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="mt-3 text-sm font-medium text-emerald-700">{message}</div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 w-full max-w-xl" noValidate>
      <div className="relative flex flex-col md:flex-row gap-3">
        <label className="sr-only" htmlFor="hero-email">Email address</label>
        <input
          id="hero-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 h-14 rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm px-5 text-base text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--brand))]/30 focus:border-[hsl(var(--brand))]"
        />
        <button type="submit" disabled={!isValid || status === 'submitting'} className="md:absolute md:right-1 md:inset-y-1 h-12 px-6 rounded-xl bg-[hsl(var(--brand))] text-white text-sm font-semibold disabled:opacity-50">
          {status === 'submitting' ? 'Joining…' : 'Get Early Access'}
        </button>
      </div>
      <div className="mt-1 min-h-[1.25rem] text-xs font-medium">
        {email && !isValid && (
          <span className="text-amber-600">Enter a valid email.</span>
        )}
        {status === "error" && (
          <span className="text-red-600" role="alert">{message || 'Something went wrong. Please retry.'}</span>
        )}
      </div>
    </form>
  );
}
