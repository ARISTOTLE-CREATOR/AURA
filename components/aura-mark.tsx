import { cn } from '@/lib/utils'

/**
 * AURA logo mark: three overlapping rings representing the three assistants
 * (Aria, Nova, Echo) converging into one.
 */
export function AuraMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="AURA"
      className={cn('shrink-0', className)}
    >
      <circle cx="15" cy="16" r="9" stroke="var(--aria)" strokeWidth="2.5" opacity="0.95" />
      <circle cx="25" cy="16" r="9" stroke="var(--nova)" strokeWidth="2.5" opacity="0.95" />
      <circle cx="20" cy="24" r="9" stroke="var(--echo)" strokeWidth="2.5" opacity="0.95" />
    </svg>
  )
}
