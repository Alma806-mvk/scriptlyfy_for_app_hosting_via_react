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
import LeadForm from '@/components/landing/LeadForm'

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
        <div className="max-w-3xl mx-auto">
          <LeadForm />
        </div>
      </div>
    </RevealClient>
  )
}
