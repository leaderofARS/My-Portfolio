import { motion } from 'framer-motion'
import { useInView } from '~/hooks/useInView'
import { useEffect, useState } from 'react'

export function SectionReveal({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: '-80px 0px -10% 0px',
    threshold: 0.15,
  })
  const [hasShown, setHasShown] = useState(false)
  useEffect(() => {
    if (inView) setHasShown(true)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={hasShown ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
