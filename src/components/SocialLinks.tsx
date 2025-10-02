import { memo } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { socialLinks } from '~/constants/socialLinks'

interface SocialLinksProps {
  variant?: 'hero' | 'profile' | 'footer'
  className?: string
}

const SocialLinks = memo(({ variant = 'hero', className = '' }: SocialLinksProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'profile':
        return 'p-2 rounded-full bg-muted/50 text-muted-foreground transition-all duration-200'
      case 'footer':
        return 'p-2 rounded-lg bg-muted/30 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-200'
      default:
        return ''
    }
  }

  if (variant === 'profile') {
    return (
      <div className={`flex justify-center gap-3 pt-2 ${className}`}>
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${getVariantStyles()} ${social.color}`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
            >
              <Icon size={16} />
            </motion.a>
          )
        })}
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={getVariantStyles()}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon size={18} />
            </motion.a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <Button key={social.label} variant="ghost" size="sm" asChild>
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          </Button>
        )
      })}
    </div>
  )
})

SocialLinks.displayName = 'SocialLinks'

export { SocialLinks }