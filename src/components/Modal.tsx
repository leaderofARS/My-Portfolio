import { useEffect } from 'react'

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60"
    >
      <div className="max-w-2xl w-full rounded-xl border border-white/10 bg-surface p-4">
        <button className="float-right text-white/70" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <div className="clear-both" />
        {children}
      </div>
    </div>
  )
}
