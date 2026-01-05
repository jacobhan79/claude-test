import React from 'react'

export interface AvatarProps {
  /** Name to display (first letter will be shown) */
  name: string
  /** Size of the avatar - defaults to 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Visual style variant - defaults to 'gradient' */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gradient'
  /** Additional CSS classes to apply */
  className?: string
}

/**
 * An avatar component that displays the first letter of a name.
 *
 * @example
 * ```tsx
 * <Avatar name="John Doe" size="lg" variant="primary" />
 * ```
 */
export function Avatar({
  name,
  size = 'md',
  variant = 'gradient',
  className = ''
}: AvatarProps): React.ReactElement {
  const initial = name.charAt(0).toUpperCase()
  
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white dark:text-black',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    danger: 'bg-danger text-white',
    gradient: 'bg-gradient-to-br from-primary to-accent text-white'
  }

  const baseClasses = 'rounded-full flex items-center justify-center font-semibold flex-shrink-0'

  const avatarClass = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={avatarClass}>
      {initial}
    </div>
  )
}

export default Avatar