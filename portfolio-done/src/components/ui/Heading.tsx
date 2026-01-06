import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const styles = {
    1: 'text-5xl md:text-6xl font-semibold leading-tight',
    2: 'text-3xl md:text-4xl font-semibold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-medium',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  }
  
  return (
    <Tag className={`${styles[level]} ${className}`}>
      {children}
    </Tag>
  )
}
