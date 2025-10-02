import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { classNames } from '~/lib/utils'

type ConflictingProps =
  | 'onDrag'
  | 'onDragEnd'
  | 'onDragStart'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'

interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingProps> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  animate?: boolean
}

type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement>

type AvatarFallbackProps = HTMLAttributes<HTMLDivElement>

const avatarSizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
  '2xl': 'h-20 w-20',
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = 'md', animate = false, children, ...props }, ref) => {
    const Component = animate ? motion.div : 'div'
    const motionProps = animate
      ? {
          whileHover: { scale: 1.05 },
          transition: { duration: 0.2 },
        }
      : {}

    return (
      <Component
        ref={ref}
        className={classNames(
          'relative flex shrink-0 overflow-hidden rounded-full',
          avatarSizes[size],
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
Avatar.displayName = 'Avatar'

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={classNames('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  ),
)
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-medium',
        className,
      )}
      {...props}
    />
  ),
)
AvatarFallback.displayName = 'AvatarFallback'
