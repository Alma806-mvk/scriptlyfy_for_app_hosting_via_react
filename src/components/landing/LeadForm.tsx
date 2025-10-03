"use client";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const roles = ["Creator", "Business/Brand", "Aspiring creator", "Consumer/Researcher"] as const;
const goals = ["Grow audience", "Generate leads/sales", "Learn what's trending", "Create content faster"] as const;
const challenges = [
  "Finding viral hooks that work",
  "Understanding competitor strategies",
  "Scaling content research",
  "Content performance analysis",
] as const;
const sizeBuckets = ["1-5", "6-20", "21-50", "50+", "Other"] as const;
const contentOptions = ["Short videos", "Long-form video", "Posts/threads", "Blogs/newsletters", "Podcasts"] as const;

export default function LeadForm({ alreadyOnList = false }: { alreadyOnList?: boolean } = {}) {
  const qp = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  if (!alreadyOnList && qp?.get('alreadyOnList') === '1') alreadyOnList = true;

  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string>(roles[0]);
  const [useCase, setUseCase] = useState<string>(goals[0]);
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [challenge, setChallenge] = useState<string>(challenges[0]);
  const [count, setCount] = useState<string>(sizeBuckets[0]);
  const [handleOrWebsite, setHandleOrWebsite] = useState("");

  const [roleOther, setRoleOther] = useState("");
  const [useCaseOther, setUseCaseOther] = useState("");
  const [challengeOther, setChallengeOther] = useState("");
  const [countOther, setCountOther] = useState("");

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [referralSource, setReferralSource] = useState("");
  const [showReferral, setShowReferral] = useState(true);
  const [referralSubmitted, setReferralSubmitted] = useState(false);

  const validEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);

  useEffect(() => {
    if (!alreadyOnList) return;
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem('leadEmail');
      const qpEmail = qp?.get('e');
      const chosen = (stored || qpEmail || '').trim().toLowerCase();
      if (chosen) setEmail(chosen);
    } catch {}
  }, [alreadyOnList]);

  const toggleContent = (c: string) => {
    setContentTypes((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

  const onSubmit = async () => {
    if (!validEmail && !alreadyOnList) return;
    setErrorMsg("");
    setLoading(true);

    // Simulate async submit and persist email for follow-ups
    await new Promise((r) => setTimeout(r, 700));
    const normalizedEmail = alreadyOnList
      ? email.trim().toLowerCase()
      : email.trim().toLowerCase();
    try {
      if (typeof window !== 'undefined' && normalizedEmail) {
        window.localStorage.setItem('leadEmail', normalizedEmail);
      }
    } catch {}
    setDone(true);
    setLoading(false);
  };

  const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false;
  const scrollIntoViewOnMobile = (el: HTMLElement | null) => {
    if (!el || !isMobile) return;
    try { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch {}
  };

  return (
    <section className="" id="signup">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-700">Waitlist</div>
        <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Join the waitlist — get notified when it's ready</h3>
        {!done ? (
          <div className="mt-6 space-y-6">
            {step === 1 && (
              <div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="role-select" className="block text-sm font-medium text-slate-700">Who are you?</label>
                    <select id="role-select" value={role} onChange={(e) => setRole(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]">
                      {[...roles, "Other"].map((r) => (<option key={r} value={r}>{r}</option>))}
                    </select>
                    {role === 'Other' && (
                      <input id="role-other-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="Tell us your role" value={roleOther} onChange={(e) => setRoleOther(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                    )}
                  </div>
                  <div>
                    <label htmlFor="goal-select" className="block text-sm font-medium text-slate-700">Primary goal</label>
                    <select id="goal-select" value={useCase} onChange={(e) => setUseCase(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]">
                      {[...goals, "Other"].map((g) => (<option key={g} value={g}>{g}</option>))}
                    </select>
                    {useCase === 'Other' && (
                      <input id="goal-other-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="What's your goal?" value={useCaseOther} onChange={(e) => setUseCaseOther(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                    )}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => setStep(2)} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90">Next</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-sm font-medium text-slate-700">What content types?</label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {contentOptions.map((opt) => (
                    <button key={opt} type="button" onClick={() => toggleContent(opt)} className={`h-11 rounded-md border px-3 text-sm text-left ${contentTypes.includes(opt) ? "border-[hsl(var(--brand))] bg-[hsl(var(--brand))]/10" : "border-slate-300"}`}>
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label htmlFor="challenge-select" className="block text-sm font-medium text-slate-700">What's your biggest content challenge?</label>
                  <select id="challenge-select" value={challenge} onChange={(e) => setChallenge(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]">
                    {[...challenges, "Other"].map((c) => (<option key={c} value={c}>{c}</option>))}
                  </select>
                  {challenge === 'Other' && (
                    <input id="challenge-other-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="Tell us more" value={challengeOther} onChange={(e) => setChallengeOther(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                  )}
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="size-select" className="block text-sm font-medium text-slate-700">{role === 'Business/Brand' ? 'Company size' : 'Audience size'}</label>
                    <select id="size-select" value={count} onChange={(e) => setCount(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]">
                      {sizeBuckets.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                    {count === 'Other' && (
                      <input id="size-other-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="Enter size" value={countOther} onChange={(e) => setCountOther(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                    )}
                  </div>
                  <div>
                    <label htmlFor="handle-input" className="block text-sm font-medium text-slate-700">Handle or website (optional)</label>
                    <input id="handle-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="@yourhandle or yoursite.com" value={handleOrWebsite} onChange={(e) => setHandleOrWebsite(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                  </div>
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="company-input" className="block text-sm font-medium text-slate-700">Company (optional)</label>
                    <input id="company-input" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="Your company" value={company} onChange={(e) => setCompany(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                  </div>
                  {!alreadyOnList && (
                    <div>
                      <label htmlFor="email-input" className="block text-sm font-medium text-slate-700">Email</label>
                      <input id="email-input" type="email" className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={(e) => scrollIntoViewOnMobile(e.currentTarget)} />
                      <div className="mt-1 min-h-[1.25rem] text-xs font-medium">
                        {email && !validEmail && (<span className="text-amber-600">Enter a valid email.</span>)}
                        {errorMsg && (<span className="text-red-600" role="alert">{errorMsg}</span>)}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-end">
                  <Button onClick={onSubmit} disabled={!alreadyOnList && !validEmail || loading} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 min-w-28">{loading ? 'Submitting…' : 'Join'}</Button>
                </div>

                <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="rounded-lg border border-slate-200 px-3 py-2 text-slate-600">Minutes not hours</div>
                  <div className="rounded-lg border border-slate-200 px-3 py-2 text-slate-600">40x faster</div>
                  <div className="rounded-lg border border-slate-200 px-3 py-2 text-slate-600">No spam. Just the launch.</div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>Thanks! We'll follow up soon.</div>
            )}
          </div>
        ) : (
          <div className="mt-4 text-sm font-medium text-emerald-700">You're on the waitlist! 🎉</div>
        )}
      </div>
    </section>
  );
}
