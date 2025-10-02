import { forwardRef, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { classNames } from '~/lib/utils'

type ConflictingProps =
  | 'onDrag'
  | 'onDragEnd'
  | 'onDragStart'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'

interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingProps> {
  variant?: BadgeVariant
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const badgeVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground border border-border',
  success: 'bg-green-500 text-white hover:bg-green-600',
  warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
}

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-sm',
  lg: 'px-3 py-1 text-base',
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', animate = false, children, ...props }, ref) => {
    const Component = animate ? motion.div : 'div'
    const motionProps = animate
      ? {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.1 },
        }
      : {}

    return (
      <Component
        ref={ref}
        className={classNames(
          'inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          badgeVariants[variant],
          badgeSizes[size],
          className,
        )}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Badge.displayName = 'Badge'
