import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { classNames } from '~/lib/utils'

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

export function Tooltip({ content, children, side = 'top', delay = 500, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay)
    setTimeoutId(id)
  }

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsVisible(false)
  }

  const sideClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={classNames(
              'absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg pointer-events-none whitespace-nowrap',
              sideClasses[side],
              className,
            )}
          >
            {content}
            <div
              className={classNames(
                'absolute w-2 h-2 bg-gray-900 rotate-45',
                side === 'top' && 'top-full left-1/2 -translate-x-1/2 -mt-1',
                side === 'bottom' && 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
                side === 'left' && 'left-full top-1/2 -translate-y-1/2 -ml-1',
                side === 'right' && 'right-full top-1/2 -translate-y-1/2 -mr-1',
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
