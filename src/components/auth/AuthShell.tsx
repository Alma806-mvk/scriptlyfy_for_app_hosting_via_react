"use client";
import { PropsWithChildren, ReactNode } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export interface AuthShellProps {
  title: string;
  subtitle?: string;
  heroTitle: string;
  heroDesc?: string;
  benefits?: Array<{ icon?: ReactNode; text: string }>;
}

export default function AuthShell({
  title,
  subtitle,
  heroTitle,
  heroDesc,
  benefits,
  children,
}: PropsWithChildren<AuthShellProps>) {
  const items =
    benefits ?? [
      { icon: <ShieldCheck className="h-4 w-4 text-emerald-600" />, text: "2FA-ready accounts" },
      { icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />, text: "SSO with Google" },
      { icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />, text: "Secure session cookies" },
      { icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />, text: "No credit card required" },
    ];
  return (
    <main className="min-h-[100svh] bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <aside>
            <div className="mx-auto max-w-md md:max-w-none">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{heroTitle}</h2>
              {heroDesc && (
                <p className="mt-3 text-slate-600 max-w-prose">{heroDesc}</p>
              )}
              <div className="mt-6 grid grid-cols-3 gap-6 opacity-80">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-semibold">10k+</div>
                  <div className="text-xs text-slate-500">Videos analyzed</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-semibold">5x</div>
                  <div className="text-xs text-slate-500">Faster research</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-semibold">95%</div>
                  <div className="text-xs text-slate-500">User satisfaction</div>
                </div>
              </div>
            </div>
          </aside>
          <section>
            <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white/80 shadow-[0_6px_30px_rgba(2,6,23,0.06)] backdrop-blur p-6 md:p-8">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
              {subtitle && (
                <p className="mt-1 text-slate-600 text-sm">{subtitle}</p>
              )}
              <div className="mt-5">{children}</div>
            </div>
            <div className="mx-auto max-w-md mt-8 grid grid-cols-2 gap-4 text-slate-600 text-sm">
              {items.map((it, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {it.icon}
                  {it.text}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
