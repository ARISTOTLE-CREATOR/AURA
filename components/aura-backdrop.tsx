import { cn } from '@/lib/utils'

/**
 * Cinematic ambient backdrop: soft floating aurora blooms in the three
 * assistant colors, plus a fine grid. Purely decorative.
 */
export function AuraBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--foreground) 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)',
        }}
      />

      {/* aurora blooms */}
      <div className="animate-aura-float absolute -top-32 left-[10%] h-[26rem] w-[26rem] rounded-full bg-aria/20 blur-[120px]" />
      <div
        className="animate-aura-float absolute -top-20 right-[8%] h-[24rem] w-[24rem] rounded-full bg-nova/20 blur-[120px]"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="animate-aura-float absolute top-[30%] left-[38%] h-[22rem] w-[22rem] rounded-full bg-echo/15 blur-[130px]"
        style={{ animationDelay: '4.5s' }}
      />
    </div>
  )
}
