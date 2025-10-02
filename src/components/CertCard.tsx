import { Card } from '~/components/Card'

export function CertCard({ title, issuer }: { title: string; issuer: string }) {
  return (
    <Card className="p-4 bg-slate-900">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-white/70">{issuer}</p>
    </Card>
  )
}
