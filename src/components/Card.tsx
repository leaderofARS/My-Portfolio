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

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingProps> {
  variant?: 'default' | 'glass' | 'elevated' | 'outline'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const cardVariants = {
  default: 'bg-card text-card-foreground border border-border',
  glass: 'glass',
  elevated: 'bg-card text-card-foreground shadow-2xl border border-border/50',
  outline: 'border-2 border-border bg-transparent',
}

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, padding = 'md', children, ...props }, ref) => {
    const Component = hover ? motion.div : 'div'
    const motionProps = hover
      ? {
          whileHover: { y: -4, scale: 1.02 },
          transition: { duration: 0.2 },
        }
      : {}

    return (
      <Component
        ref={ref}
        className={classNames(
          'rounded-xl transition-all duration-200',
          cardVariants[variant],
          cardPadding[padding],
          hover && 'cursor-pointer',
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

Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames('flex flex-col space-y-1.5 pb-6', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={classNames('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={classNames('text-sm text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames('pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames('flex items-center pt-6', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'
