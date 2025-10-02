import skills from '~/data/skills.json'
import { useEffect } from 'react'
import { setTitle } from '~/lib/seo'

export default function Skills() {
  useEffect(() => setTitle('Skills · Abhay'), [])
  const categories = [...new Set(skills.map((s) => s.category))]
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat} className="rounded-xl border border-white/10 p-4 bg-surface/60">
            <h2 className="font-semibold mb-3">{cat}</h2>
            <ul className="space-y-3">
              {skills
                .filter((s) => s.category === cat)
                .map((s) => (
                  <li key={s.id}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-white/60">{s.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded">
                      <div className="h-2 bg-primary rounded" style={{ width: `${s.level}%` }} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
