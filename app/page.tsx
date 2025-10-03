import SEO from '@/components/SEO'
import HomeContent from '@/components/HomeContent'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Scriptlyfy – Bulk Short-Form Video Transcription & Hook Intelligence"
        description="Bulk transcribe TikTok, Reels, Shorts & YouTube videos. Extract winning hook patterns, compare creators and turn long-form into viral short scripts."
        canonical="https://app.scriptlyfy.com/"
        ogTitle="Scriptlyfy – Bulk Transcription & Viral Hook Intelligence"
        ogDescription="Analyze TikTok, Reels, Shorts & YouTube at scale. Extract hooks that drive retention and accelerate your content strategy."
        twitterTitle="Scriptlyfy: Bulk Short-Form Video Transcription"
        twitterDescription="Transcribe and analyze short-form video hooks at scale. Find patterns. Ship winning scripts faster."
      />
      <HomeContent />
    </main>
  )
}
