import certificates from '~/data/certificates.json'
import { useEffect } from 'react'
import { setTitle } from '~/lib/seo'

export default function Certificates() {
  useEffect(() => setTitle('Certificates · Abhay'), [])
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Certificates</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-white/10 overflow-hidden bg-surface/60"
          >
            <img src={c.image} alt={c.title} loading="lazy" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{c.title}</h2>
              <div className="text-sm text-white/60">{c.issuer}</div>
              <div className="text-xs text-white/40 mt-1">
                {new Date(c.issueDate).toDateString()}
              </div>
              {c.file && (
                <a className="inline-block mt-3 text-primary underline" href={c.file} download>
                  Download
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
