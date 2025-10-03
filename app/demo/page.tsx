"use client";
import { useEffect } from 'react'
import HomeContent from '@/components/HomeContent'
import SEO from '@/components/SEO'

export default function DemoRoute() {
  useEffect(() => {
    const id = setTimeout(() => {
      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(id)
  }, [])
  return (
    <main>
      <SEO title="Scriptlyfy – Demo" description="Interactive product demo" />
      <HomeContent />
    </main>
  )
}
