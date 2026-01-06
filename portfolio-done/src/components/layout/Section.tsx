import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  )
}
