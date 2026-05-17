import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  heading: string
  subheading?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, heading, subheading, centered, light, className }: Props) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <p
        className={cn(
          'text-xs font-semibold uppercase tracking-widest mb-3',
          light ? 'text-brand-accent' : 'text-brand-accent',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p className={cn('mt-4 text-lg max-w-2xl', light ? 'text-white/70' : 'text-ink-muted', centered && 'mx-auto')}>
          {subheading}
        </p>
      )}
    </div>
  )
}
