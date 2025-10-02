import { useEffect, useState } from 'react'
import { submitContactForm } from '~/lib/api'
import { setTitle } from '~/lib/seo'

export default function Contact() {
  useEffect(() => setTitle('Contact · Abhay'), [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    try {
      await submitContactForm({ name, email, message })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setStatus('error')
    }
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-4 max-w-lg" aria-describedby="contact-help">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md bg-surface border border-white/10 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-surface border border-white/10 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md bg-surface border border-white/10 px-3 py-2"
          />
        </div>
        <div id="contact-help" className="text-xs text-white/60">
          Tip: include the word ‘fail’ to simulate an error.
        </div>
        <div className="flex items-center gap-3">
          <button
            disabled={status === 'loading'}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
            type="submit"
          >
            {status === 'loading' ? 'Sending…' : 'Send'}
          </button>
          <a
            className="underline text-white/80"
            href={'mailto:you@example.com?subject=Hello%20Abhay'}
          >
            or email
          </a>
          <a
            className="underline text-white/80"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="underline text-white/80"
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>
        {status === 'success' ? (
          <div role="status" className="text-green-400">
            Message sent successfully.
          </div>
        ) : null}
        {status === 'error' ? (
          <div role="alert" className="text-red-400">
            {error}
          </div>
        ) : null}
      </form>
    </section>
  )
}
