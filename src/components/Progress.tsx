export function Progress({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
      <div className="h-2 bg-blue-500" style={{ width: `${clamped}%` }} />
    </div>
  )
}
