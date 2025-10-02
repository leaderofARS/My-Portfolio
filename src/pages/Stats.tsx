import { useEffect, useState } from 'react'
import { setTitle } from '~/lib/seo'
import stats from '~/data/stats.json'
import { formatNumber } from '~/lib/utils'

function useCounter(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])
  return value
}

function StatCard({ value, label }: { value: number; label: string }) {
  const v = useCounter(value)
  return (
    <div className="rounded-xl border border-white/10 p-6 bg-surface/60 text-center">
      <div className="text-3xl font-extrabold">{formatNumber(v)}</div>
      <div className="mt-2 text-white/60">{label}</div>
    </div>
  )
}

export default function Stats() {
  useEffect(() => setTitle('Stats · Abhay'), [])
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Stats</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.id} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
