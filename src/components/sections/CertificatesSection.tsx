import { memo } from 'react'
import { Download } from 'lucide-react'
import { Card, CardContent } from '~/components/Card'
import { Button } from '~/components/Button'
import certificates from '~/data/certificates.json'

interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  image: string
  file?: string
}

const CertificatesSection = memo(() => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {certificates.map((cert) => (
      <CertificateCard key={cert.id} certificate={cert} />
    ))}
  </div>
))

const CertificateCard = memo(({ certificate }: { certificate: Certificate }) => (
  <Card variant="glass" hover className="overflow-hidden">
    <div className="aspect-video overflow-hidden">
      <img
        src={certificate.image}
        alt={certificate.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-6">
      <h3 className="font-semibold text-lg mb-2">{certificate.title}</h3>
      <p className="text-muted-foreground mb-1">{certificate.issuer}</p>
      <p className="text-sm text-muted-foreground mb-4">
        {new Date(certificate.issueDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      {certificate.file && (
        <Button variant="outline" size="sm" asChild>
          <a href={certificate.file} download>
            <Download size={16} />
            Download
          </a>
        </Button>
      )}
    </CardContent>
  </Card>
))

CertificatesSection.displayName = 'CertificatesSection'
CertificateCard.displayName = 'CertificateCard'

export { CertificatesSection }