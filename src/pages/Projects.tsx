import { useEffect, useMemo, useState } from 'react'
import projects from '~/data/projects.json'
import { setTitle } from '~/lib/seo'

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export default function Projects() {
  useEffect(() => setTitle('Projects · Abhay'), [])
  const [selected, setSelected] = useState<string | 'all'>('all')
  const visible = useMemo(
    () => (selected === 'all' ? projects : projects.filter((p) => p.tags.includes(selected))),
    [selected],
  )

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-md border ${selected === 'all' ? 'bg-primary text-primary-foreground border-transparent' : 'border-white/10'}`}
          onClick={() => setSelected('all')}
        >
          All
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            className={`px-3 py-1 rounded-md border ${selected === t ? 'bg-primary text-primary-foreground border-transparent' : 'border-white/10'}`}
            onClick={() => setSelected(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-white/10 overflow-hidden bg-surface/60"
          >
            <img src={p.cover} alt="" loading="lazy" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-white/70 mt-1">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.demo && (
                  <a
                    className="text-primary underline"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    className="text-primary underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
