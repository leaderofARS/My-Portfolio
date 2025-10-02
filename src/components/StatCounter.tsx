import { useEffect, useState } from 'react'
import { Card } from '~/components/Card'

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

export function StatCounter({ value, label }: { value: number; label: string }) {
  const v = useCounter(value)
  return (
    <Card className="p-6 text-center bg-slate-900">
      <div className="text-3xl font-extrabold">{v}</div>
      <div className="mt-2 text-white/60">{label}</div>
    </Card>
  )
}
