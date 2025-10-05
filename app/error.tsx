"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optional: log to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-[100svh] bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
        <div className="mx-auto max-w-lg px-6 py-20 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
          <p className="mt-2 text-slate-600">An unexpected error occurred. Try again or go back home.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => reset()} className="h-10 rounded-md bg-[hsl(var(--brand))] px-4 text-white">Try again</button>
            <a href="/" className="h-10 rounded-md border border-slate-300 px-4 text-slate-800 grid place-items-center">Go home</a>
          </div>
          {process.env.NODE_ENV !== "production" && (
            <pre className="mt-8 text-left text-xs whitespace-pre-wrap bg-white/70 border border-slate-200 rounded-md p-4">{error?.message}</pre>
          )}
        </div>
      </body>
    </html>
  );
}
