export function LastUpdated({ slug }: { slug: string }) {
  const d = new Date().toISOString().slice(0, 10)
  return <div className="text-xs text-slate-500">Last updated: {d}</div>
}
