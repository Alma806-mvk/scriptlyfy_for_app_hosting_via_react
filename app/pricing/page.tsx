"use client";
import { useEffect } from 'react'
import HomeContent from '@/components/HomeContent'
import SEO from '@/components/SEO'

export default function PricingRoute() {
  useEffect(() => {
    const id = setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(id)
  }, [])
  return (
    <main>
      <SEO title="Scriptlyfy – Pricing" description="Simple pricing. Massive ROI." />
      <HomeContent />
    </main>
  )
}
