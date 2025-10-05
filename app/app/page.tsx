"use client";
import SEO from "@/components/SEO";

export default function AppHome() {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Scriptlyfy App" description="Your Scriptlyfy workspace" />
      <h1 className="text-2xl font-bold text-slate-900">Welcome to Scriptlyfy</h1>
      <p className="mt-2 text-slate-600">This is a placeholder for the authenticated app area. After sign up or sign in, you land here.</p>
      <div className="mt-4">
        <a href="/" className="underline">Back to marketing site</a>
      </div>
    </main>
  );
}