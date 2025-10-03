import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  instructions?: string
  className?: string
}>

export default function HorizontalScrollShadow({ children, instructions, className }: Props) {
  return (
    <div className={className}>
      {instructions && (
        <div className="text-[11px] text-slate-500 mb-2">{instructions}</div>
      )}
      <div className="relative overflow-x-auto">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent" />
        {children}
      </div>
    </div>
  )
}
