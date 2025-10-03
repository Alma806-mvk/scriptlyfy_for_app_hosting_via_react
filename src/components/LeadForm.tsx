export default function LeadForm() {
  return (
    <form className="flex gap-2">
      <input type="email" required placeholder="Email" className="flex-1 rounded border px-3 py-2" />
      <button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white">Join</button>
    </form>
  )
}
