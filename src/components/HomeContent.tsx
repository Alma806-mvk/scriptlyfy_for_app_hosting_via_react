"use client";
import Hero from '@/components/landing/Hero'
import TrustBar from '@/components/landing/TrustBar'
import SocialProof from '@/components/landing/SocialProof'
import Demo from '@/components/landing/Demo'
import Features from '@/components/landing/Features'
import Testimonials from '@/components/landing/Testimonials'
import Pricing from '@/components/landing/Pricing'
import Urgency from '@/components/landing/Urgency'
import FAQ from '@/components/landing/FAQ'
import RevealClient from '@/components/RevealClient'
// Waitlist LeadForm removed in favor of real signup

export default function HomeContent() {
  return (
    <RevealClient>
      <Hero />
      <div data-observe="reveal">
        <TrustBar />
      </div>
      <div data-observe="reveal">
        <SocialProof />
      </div>
      <div data-observe="reveal">
        <Demo />
      </div>
      <div data-observe="reveal">
        <Features />
      </div>
      <div className="container mx-auto px-4 mt-16" data-observe="reveal">
        <Testimonials />
      </div>
      <div className="container mx-auto px-4 py-8" data-observe="reveal">
        <div className="rounded-lg border border-slate-200 p-4 bg-white/60 text-sm text-slate-600">
          Looking to{' '}
          <a href="/bulk-transcribe-reels" className="text-[hsl(var(--brand))] underline">bulk transcribe Instagram Reels</a>
          ? Also try our pages for{' '}
          <a href="/bulk-transcribe-tiktok" className="underline">TikTok</a>
          ,{' '}
        	<a href="/bulk-transcribe-youtube-shorts" className="underline">YouTube Shorts</a>
          ,{' '}
          <a href="/bulk-transcribe-youtube-videos" className="underline">YouTube videos</a>
          , and{' '}
          <a href="/bulk-transcribe-instagram-posts" className="underline">Instagram posts</a>
          .
        </div>
      </div>
      <div data-observe="reveal">
        <Pricing />
      </div>
      <div data-observe="reveal">
        <Urgency />
      </div>
      <div data-observe="reveal">
        <FAQ />
      </div>
      <div data-observe="reveal" id="signup" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <h2 className="text-xl font-semibold text-slate-900">Ready to try Scriptlyfy?</h2>
          <p className="mt-1 text-sm text-slate-600">Create a free account and start in minutes.</p>
          <div className="mt-4">
            <a href="/signup" className="inline-flex items-center rounded-md bg-[hsl(var(--brand))] px-5 py-3 text-white font-medium shadow hover:bg-[hsl(var(--brand))]/90">Get started for free</a>
          </div>
          <p className="mt-2 text-xs text-slate-600">Already have an account? <a href="/login" className="underline">Sign in</a></p>
        </div>
      </div>
    </RevealClient>
  )
}
