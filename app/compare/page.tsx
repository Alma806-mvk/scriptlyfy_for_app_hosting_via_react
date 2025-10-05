import SEO from '@/components/SEO'
import { LastUpdated } from '@/components/LastUpdated'
import { Testimonials } from '@/components/Testimonials'
import { LogoStrip } from '@/components/LogoStrip'
import HorizontalScrollShadow from '@/components/HorizontalScrollShadow'
import clsx from 'clsx'

type FeatureVal = boolean | string

const FEATURES = [
  {
    category: 'Acquisition Scope',
    rows: [
      { feature: 'Supports Reels', scriptlyfy: true, alt: 'Varies' },
      { feature: 'Supports TikTok', scriptlyfy: true, alt: 'Limited' },
      { feature: 'Supports YouTube Shorts', scriptlyfy: true, alt: 'Limited' },
      { feature: 'Supports YouTube Videos (Long-Form)', scriptlyfy: true, alt: 'Rare' },
      { feature: 'Supports Instagram Posts (Carousel Captions)', scriptlyfy: true, alt: 'Rare' },
    ],
  },
  {
    category: 'Workflow Speed',
    rows: [
      { feature: 'Bulk URL Paste', scriptlyfy: true, alt: false },
      { feature: 'Auto Deduplication', scriptlyfy: true, alt: false },
      { feature: 'Single Click Transcribe All', scriptlyfy: true, alt: false },
      { feature: 'Handles Mixed Platform Lists', scriptlyfy: true, alt: false },
      { feature: 'Realtime Progress Feedback', scriptlyfy: true, alt: 'Partial' },
    ],
  },
  {
    category: 'Output Quality',
    rows: [
      { feature: 'Speaker / Segment Structure', scriptlyfy: 'Planned', alt: false },
      { feature: 'Hook Extraction (TikTok / Shorts)', scriptlyfy: 'Beta', alt: false },
      { feature: 'Timestamped Lines', scriptlyfy: 'Planned', alt: 'Inconsistent' },
      { feature: 'Language Detection', scriptlyfy: true, alt: 'Varies' },
      { feature: 'Emoji & Hashtag Preservation', scriptlyfy: true, alt: 'Often Strips' },
    ],
  },
  {
    category: 'Strategic Layer',
    rows: [
      { feature: 'Viral Hook Pattern Library', scriptlyfy: 'In Progress', alt: false },
      { feature: 'Repurposing Script Generator', scriptlyfy: 'Beta', alt: false },
      { feature: 'Cross-Platform Content Diff', scriptlyfy: 'Planned', alt: false },
      { feature: 'Competitor Content Gap Signals', scriptlyfy: 'Research', alt: false },
      { feature: 'AI Insights at Bulk Scale', scriptlyfy: true, alt: false },
    ],
  },
  {
    category: 'Data & Reliability',
    rows: [
      { feature: 'Deterministic Storage (No Duplicates)', scriptlyfy: true, alt: false },
      { feature: 'Bulk Failover / Retry Logic', scriptlyfy: true, alt: false },
      { feature: 'Safe Rate Limiting', scriptlyfy: true, alt: 'Unknown' },
      { feature: 'Transparent Roadmap & Changelog', scriptlyfy: 'Coming', alt: false },
      { feature: 'Privacy-First (Email Only Beta)', scriptlyfy: true, alt: 'Varies' },
    ],
  },
]

function truthyLabel(v: FeatureVal) {
  if (v === true) return 'Yes'
  if (v === false) return '—'
  return v
}

export default function Page() {
  const canonical = 'https://app.scriptlyfy.com/compare'
  const title = 'Scriptlyfy vs Alternatives – Unified Bulk Social Video Transcription'
  const description =
    'Compare Scriptlyfy to single‑platform scrapers and generic AI transcription tools. Unified bulk ingestion across Reels, TikTok, Shorts, YouTube & more with strategy layers.'
  const dateModified = new Date().toISOString().slice(0, 10)

  const itemListElements = FEATURES.flatMap((block, blockIndex) =>
    block.rows.map((r, rowIndex) => ({
      '@type': 'ListItem',
      position: blockIndex * 10 + rowIndex + 1,
      name: r.feature,
    })),
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://app.scriptlyfy.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bulk Social Video Transcription',
        item: 'https://app.scriptlyfy.com/bulk-social-video-transcription',
      },
      { '@type': 'ListItem', position: 3, name: 'Compare', item: canonical },
    ],
  }

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: itemListElements,
  }

  const faqContent = [
    {
      q: 'Why build one tool for all short-form platforms?',
      a: 'Teams waste time context-switching across fragmented single-platform scrapers. Consolidating Reels, TikTok, Shorts and long-form inputs lets you run one unified research + repurposing pass instead of four separate workflows.',
    },
    {
      q: 'How accurate are transcripts?',
      a: 'Early beta accuracy mirrors native platform captions quality; we focus on speed + breadth first, then layer refinement (timestamps, speaker tags, hook extraction, formatting polishing).',
    },
    {
      q: 'Will pricing penalize volume?',
      a: 'Goal: predictably priced bulk tiers with generous research allowance so strategy teams can explore freely without micro-billing anxiety.',
    },
    {
      q: 'What about languages beyond English?',
      a: 'Language detection already gates pipeline logic; expanded post-processing normalization and punctuation models will roll out after core cross-platform stability milestones.',
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: canonical,
    dateModified,
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={[breadcrumbJsonLd, itemListJsonLd, faqJsonLd, webPageJsonLd]}
        ogTitle="Scriptlyfy vs Alternatives"
        ogDescription="Unified multi-platform transcription & hook intelligence vs fragmented single-platform tools."
        twitterTitle="Scriptlyfy vs Alternatives"
        twitterDescription="Reels, TikTok, Shorts, YouTube transcription + strategy layer in one pipeline."
      />

      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Scriptlyfy vs Alternatives</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Most tools force you into narrow, single-platform scraping. Scriptlyfy ingests and structures short and
          long-form video sources <span className="font-semibold">in one bulk pipeline</span> then layers strategic transformation
          (hooks, repurposing scripts, content gap sensing) on top.
        </p>
        <div className="mt-3">
          <LastUpdated slug="compare" />
        </div>
      </header>

      <section className="mb-12">
        <div className="rounded-lg border p-6 text-center bg-white">
          <h2 className="text-lg font-semibold mb-2">Try Scriptlyfy</h2>
          <p className="text-slate-600 mb-4 text-sm">Create a free account to evaluate the unified workflow.</p>
          <a href="/signup" className="inline-flex items-center rounded-md bg-[hsl(var(--brand))] px-5 py-3 text-white font-medium shadow hover:bg-[hsl(var(--brand))]/90">Get started for free</a>
          <div className="mt-2 text-xs text-slate-600">Already have an account? <a href="/login" className="underline">Sign in</a></div>
        </div>
      </section>

      <section className="space-y-12">
        {FEATURES.map((block) => (
          <div key={block.category}>
            <h2 className="text-2xl font-semibold mb-4">{block.category}</h2>
            <HorizontalScrollShadow instructions="Scroll horizontally to compare all columns" className="mt-2">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-2 text-left w-1/2">Feature</th>
                    <th className="px-4 py-2 text-left">Scriptlyfy</th>
                    <th className="px-4 py-2 text-left">Typical Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((r) => (
                    <tr key={r.feature} className="border-t">
                      <td className="px-4 py-2 font-medium">{r.feature}</td>
                      <td className="px-4 py-2">
                        {(() => {
                          const value = r.scriptlyfy as FeatureVal
                          const label = truthyLabel(value)
                          const anchorMap: Record<string, string> = {
                            Beta: '#beta',
                            Planned: '#planned',
                            'In Progress': '#in-progress',
                            Research: '#research',
                            Coming: '#planned',
                          }
                          const href = typeof value === 'string' ? anchorMap[value] : undefined
                          const baseClass = clsx(
                            'inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium',
                            typeof value === 'string'
                              ? 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition'
                              : value
                              ? 'bg-emerald-500/10 text-emerald-600'
                              : 'bg-slate-100 text-slate-600',
                          )
                          return href ? (
                            <a href={"/roadmap" + href} className={baseClass} title="View roadmap context">
                              {label}
                            </a>
                          ) : (
                            <span className={baseClass}>{label}</span>
                          )
                        })()}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={clsx(
                            'inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium',
                            typeof r.alt === 'string'
                              ? 'bg-amber-500/10 text-amber-600'
                              : r.alt
                              ? 'bg-emerald-500/10 text-emerald-600'
                              : 'bg-slate-100 text-slate-600',
                          )}
                        >
                          {truthyLabel(r.alt as FeatureVal)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </HorizontalScrollShadow>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Why consolidation matters</h2>
        <p className="mb-4 text-slate-600 max-w-3xl">
          Fragmented tooling creates copy/paste overhead, brittle spreadsheets, and inconsistent data fields. A
          unified transcript & insight layer lets strategy, scripting and iteration teams move in lock‑step.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 max-w-2xl">
          <li>Eliminate duplicate ingestion logic across platforms.</li>
          <li>Normalize structure once (hooks, captions, context) and reuse downstream.</li>
          <li>Batch repurposing experiments instead of serial single-video flows.</li>
          <li>Faster content gap identification via aggregated multi-platform surface area.</li>
        </ul>
      </section>

      <div className="mt-20">
        <LogoStrip />
      </div>

      <section className="mt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-semibold mb-6">
          FAQ
        </h2>
        <div className="space-y-6 max-w-3xl">
          {faqContent.map((item) => (
            <div key={item.q}>
              <h3 className="font-medium mb-2">{item.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <Testimonials />
      </div>

      <section className="mt-20">
        <div className="rounded-lg border p-6 text-center bg-slate-50">
          <h2 className="text-xl font-semibold mb-2">Ready to unify your short-form research workflow?</h2>
          <p className="text-slate-600 mb-4">
            Get started for free — ship strategy faster while we expand the feature surface.
          </p>
          <div className="max-w-md mx-auto">
            <a href="/signup" className="inline-flex items-center rounded-md bg-[hsl(var(--brand))] px-5 py-3 text-white font-medium shadow hover:bg-[hsl(var(--brand))]/90">Get started for free</a>
            <div className="mt-2 text-xs text-slate-600">Already have an account? <a href="/login" className="underline">Sign in</a></div>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Roadmap markers: Beta = usable today but evolving, Planned = committed upcoming, In Progress = actively
            building.
          </p>
        </div>
      </section>

      <nav className="mt-16 flex flex-wrap gap-4 text-sm justify-center">
        <a href="/bulk-social-video-transcription" className="underline">
          Bulk Transcription Hub
        </a>
        <a href="/reverse-engineer-viral-tiktok-hooks" className="underline">
          TikTok Hooks Guide
        </a>
        <a href="/turn-youtube-long-form-into-short-form-scripts" className="underline">
          YouTube Repurposing Guide
        </a>
      </nav>
    </div>
  )
}
