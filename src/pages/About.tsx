import { useEffect } from 'react'
import { setTitle } from '~/lib/seo'

export default function About() {
  useEffect(() => setTitle('About · Abhay'), [])
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-white/70 max-w-prose">
        I’m a frontend engineer who enjoys crafting fast, accessible interfaces. I value minimalism,
        clarity, and strong developer experience.
      </p>
      <ol className="relative border-s border-white/10 ps-6 space-y-6">
        <li>
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
          <div className="text-sm text-white/60">2025</div>
          <div className="font-medium">Freelance and Open Source</div>
        </li>
        <li>
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent" />
          <div className="text-sm text-white/60">2024</div>
          <div className="font-medium">Frontend Engineer at Example Co</div>
        </li>
      </ol>
      <a
        className="px-4 py-2 rounded-md bg-surface hover:bg-surface-muted border border-white/10"
        href="/cv.pdf"
        download={true}
      >
        Download CV
      </a>
    </section>
  )
}
