import { Zap, Shield, Globe, Accessibility, Hand } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface Feature {
  icon: typeof Zap
  title: string
  description: string
  className?: string
  accent?: 'aria' | 'nova' | 'echo'
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Real-time, always',
    description:
      'Sub-second latency keeps conversations natural. No awkward pauses, no waiting for a translation to catch up.',
    className: 'md:col-span-2',
    accent: 'nova',
  },
  {
    icon: Accessibility,
    title: 'Built for everyone',
    description: 'Designed with the Deaf and hard-of-hearing community from day one.',
    accent: 'aria',
  },
  {
    icon: Shield,
    title: 'Private by design',
    description: 'On-device processing keeps sensitive conversations yours alone.',
    accent: 'echo',
  },
  {
    icon: Globe,
    title: 'Speaks your language',
    description:
      'Support for dozens of spoken languages and regional sign dialects, expanding every month.',
    className: 'md:col-span-2',
    accent: 'nova',
  },
]

const accentText: Record<NonNullable<Feature['accent']>, string> = {
  aria: 'text-aria',
  nova: 'text-nova',
  echo: 'text-echo',
}

export function PlatformSection() {
  return (
    <section id="platform" className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            The platform
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            A calm, powerful bridge{' '}
            <span className="font-serif italic font-normal">between worlds.</span>
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Everything AURA does is engineered to disappear into the background, so the only thing
            left is a genuine human connection.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
            <Hand className="h-4 w-4 text-aria" />
            Accessibility isn&apos;t a feature — it&apos;s the foundation.
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className={f.className}>
              <div className="glass h-full rounded-3xl p-6">
                <f.icon className={cn('h-6 w-6', f.accent && accentText[f.accent])} />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
