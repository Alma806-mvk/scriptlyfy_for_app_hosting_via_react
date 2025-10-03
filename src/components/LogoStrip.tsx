import React from 'react'

export function LogoStrip() {
  const logos = [
    { src: '/logo-scriptlyfy.png', alt: 'Scriptlyfy', w: 120, h: 32 },
    { src: '/logo.svg', alt: 'Scriptlyfy Mark', w: 100, h: 28 },
  ]
  return (
    <div className="flex items-center justify-center gap-8 opacity-80">
      {logos.map((l) => (
        <img key={l.src} src={l.src} alt={l.alt} width={l.w} height={l.h} className="h-7 w-auto" />
      ))}
    </div>
  )
}
