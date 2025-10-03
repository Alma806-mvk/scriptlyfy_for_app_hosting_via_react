"use client";
import { useEffect } from 'react'
import HomeContent from '@/components/HomeContent'
import SEO from '@/components/SEO'

export default function SignupRoute() {
  useEffect(() => {
    const id = setTimeout(() => {
      document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(id)
  }, [])
  return (
    <main>
      <SEO title="Scriptlyfy – Join the Waitlist" description="Join the Scriptlyfy waitlist" />
      <HomeContent />
    </main>
  )
}
