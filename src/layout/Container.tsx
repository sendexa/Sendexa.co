import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full'
  padded?: boolean
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Comp = 'div',
      className,
      children,
      size = 'default',
      padded = true,
      ...props
    },
    ref
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          'mx-auto w-full',
          padded && 'px-4 sm:px-6',
          size === 'sm' && 'max-w-4xl',
          size === 'default' && 'max-w-7xl',
          size === 'lg' && 'max-w-[90rem]',
          size === 'xl' && 'max-w-[100rem]',
          size === 'full' && 'max-w-full',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Container.displayName = 'Container'

export { Container }