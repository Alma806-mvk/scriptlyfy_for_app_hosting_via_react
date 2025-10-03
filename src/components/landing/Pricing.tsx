"use client";
import { Check } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    try { window.history.pushState({}, "", `/${sectionId}`); } catch {}
  }
};

const tiers = [
  { name: "Free", price: "$0/mo", features: ["50 credits/month (50 minutes of content)", "1 competitor profile", "Basic transcription", "Email delivery only"], cta: "Get Started", popular: false },
  { name: "Creator", price: "$29/mo", features: ["500 credits/month (500 minutes of content)", "≈ 250 short videos OR 60 long videos", "3 competitor profiles", "Advanced transcription + insights", "CSV exports"], cta: "Choose Creator", popular: true },
  { name: "Professional", price: "$99/mo", features: ["2,500 credits/month (2,500 minutes of content)", "≈ 1,250 short videos OR 300 long videos", "10 competitor profiles", "Analytics dashboard + API access", "Priority support"], cta: "Choose Professional", popular: false },
  { name: "Business", price: "$299/mo", features: ["10,000 credits/month (10,000 minutes of content)", "≈ 5,000 short videos OR 1,000 long videos", "50 competitor profiles", "White-label reports + team features", "Account manager"], cta: "Choose Business", popular: false },
  { name: "Enterprise", price: "$799/mo", features: ["30,000 credits/month (30,000 minutes of content)", "≈ 15,000 short videos OR 3,000 long videos", "Unlimited profiles", "Custom integrations + dedicated support", "SLA guarantees"], cta: "Contact Sales", popular: false },
];

export default function Pricing() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 w-full" id="pricing">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Simple Pricing. Massive ROI.</h2>
        <p className="mt-3 text-slate-600">Save 40 hours/month on average · Replaces $3,000/mo VA or researcher · 30-day money-back guarantee</p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.slice(0, 3).map((t) => (
          <div key={t.name} className={`rounded-xl border ${t.popular ? "border-[hsl(var(--brand))]" : "border-slate-200"} bg-white p-6 shadow-sm relative`}>
            {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[hsl(var(--brand))] text-white px-2 py-1 rounded-md shadow">Most Popular</div>}
            <div className="text-sm font-semibold text-slate-500">{t.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900">{t.price}</div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="/signup"
              onClick={(e) => { e.preventDefault(); scrollToSection('signup'); }}
              className="mt-6 inline-flex items-center justify-center w-full h-10 rounded-md bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white text-sm font-medium"
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tiers.slice(3).map((t) => (
          <div key={t.name} className={`rounded-xl border ${t.popular ? "border-[hsl(var(--brand))]" : "border-slate-200"} bg-white p-6 shadow-sm relative`}>
            {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[hsl(var(--brand))] text-white px-2 py-1 rounded-md shadow">Most Popular</div>}
            <div className="text-sm font-semibold text-slate-500">{t.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900">{t.price}</div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="/signup"
              onClick={(e) => { e.preventDefault(); scrollToSection('signup'); }}
              className="mt-6 inline-flex items-center justify-center w-full h-10 rounded-md bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white text-sm font-medium"
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
