"use client";
import { useEffect } from 'react'
import HomeContent from '@/components/HomeContent'
import SEO from '@/components/SEO'

export default function FAQRoute() {
  useEffect(() => {
    const id = setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(id)
  }, [])
  return (
    <main>
      <SEO title="Scriptlyfy – FAQ" description="Frequently asked questions" />
      <HomeContent />
    </main>
  )
}
