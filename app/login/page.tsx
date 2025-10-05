"use client";
import { useState } from "react";
import SEO from "@/components/SEO";
import AuthShell from "@/components/auth/AuthShell";
import { signInWithEmail, resetPassword, signInWithGoogle } from "@/lib/auth";
import { humanizeAuthError } from "@/lib/authErrors";
import { Eye, EyeOff } from "lucide-react";

export default function LoginRoute() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string>("");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = validEmail && password.length >= 6 && !loading;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError("");
    setLoading(true);
    try {
      await signInWithEmail(email.trim(), password);
      window.location.href = "/app";
    } catch (err: any) {
      setError(humanizeAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      window.location.href = "/app";
    } catch (err: any) {
      setError(humanizeAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  const onReset = async () => {
    if (!validEmail) return;
    try {
      await resetPassword(email.trim());
      setMessage("Password reset email sent.");
    } catch (err: any) {
      setMessage(humanizeAuthError(err));
    }
  };

  return (
    <>
      <SEO title="Sign in to Scriptlyfy" description="Access your Scriptlyfy account" />
      <AuthShell
        title="Welcome back"
        subtitle="Sign in to continue"
        heroTitle="Built for creators and teams"
        heroDesc="Analyze channels, spot hook patterns, and move from idea to insights—faster."
      >
        <div className="space-y-3">
          <button type="button" onClick={onGoogle} className="w-full h-11 rounded-md border border-slate-300 bg-white text-slate-900 font-medium flex items-center justify-center gap-2 hover:bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5"><path fill="#FFC107" d="M43.611 20.083H42v-.083H24v8h11.303C33.892 31.609 29.444 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.939 5.053 29.741 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.618 16.104 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.939 5.053 29.741 3 24 3 16.318 3 9.656 7.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 43c5.386 0 10.33-2.062 14.066-5.431l-6.492-5.454C29.44 33.356 26.85 34 24 34c-5.421 0-9.857-3.361-11.298-8.003l-6.521 5.025C9.49 40.556 16.174 43 24 43z"/><path fill="#1976D2" d="M43.611 20.083H42v-.083H24v8h11.303c-1.364 3.609-5.081 6.222-11.303 6.222-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.939 5.053 29.741 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/></svg>
            Continue with Google
          </button>
          <div className="relative text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative inline-block bg-white px-3 text-xs text-slate-500">or</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="you@company.com" required />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <button type="button" onClick={onReset} disabled={!validEmail} className="text-xs text-slate-500 hover:text-slate-700 underline">Forgot password?</button>
            </div>
            <div className="mt-1 relative">
              <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full h-11 rounded-lg border border-slate-300 px-3 pr-10 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="••••••" required />
              <button type="button" onClick={()=>setShowPassword(v=>!v)} className="absolute inset-y-0 right-2 my-auto h-8 w-8 grid place-items-center text-slate-500 hover:text-slate-700" aria-label={showPassword? 'Hide password':'Show password'}>
                {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
              </button>
            </div>
          </div>
          {error && <div className="text-sm text-rose-600" role="alert">{error}</div>}
          {message && <div className="text-sm text-emerald-700">{message}</div>}
          <button type="submit" disabled={!canSubmit} className="w-full h-11 rounded-lg bg-[hsl(var(--brand))] text-white font-medium disabled:opacity-50 shadow-sm">
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-600 text-center">New here? <a href="/signup" className="text-[hsl(var(--brand))] underline">Create an account</a></p>
      </AuthShell>
    </>
  );
}
