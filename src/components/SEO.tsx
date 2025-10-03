import Head from 'next/head'
import React from 'react'

type SEOProps = {
  title: string
  description: string
  canonical?: string
  jsonLd?: Record<string, any> | Record<string, any>[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  noIndex?: boolean
}

const DEFAULT_OG_IMAGE = '/logo-scriptlyfy.png'

export default function SEO({
  title,
  description,
  canonical,
  jsonLd,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  noIndex,
}: SEOProps) {
  const resolvedOgTitle = ogTitle || title
  const resolvedOgDescription = ogDescription || description
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle
  const resolvedTwitterDescription = twitterDescription || resolvedOgDescription
  const resolvedTwitterImage = twitterImage || resolvedOgImage
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={resolvedOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      <meta name="twitter:image" content={resolvedTwitterImage} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  )
}
