import { ArrowRight } from 'lucide-react'
import type { Assistant } from '@/lib/assistants'
import { cn } from '@/lib/utils'

const accentClasses: Record<
  Assistant['accent'],
  { text: string; bg: string; ring: string; glow: string; chip: string }
> = {
  aria: {
    text: 'text-aria',
    bg: 'bg-aria',
    ring: 'group-hover:border-aria/40',
    glow: 'bg-aria/25',
    chip: 'bg-aria/10 text-aria',
  },
  nova: {
    text: 'text-nova',
    bg: 'bg-nova',
    ring: 'group-hover:border-nova/40',
    glow: 'bg-nova/25',
    chip: 'bg-nova/10 text-nova',
  },
  echo: {
    text: 'text-echo',
    bg: 'bg-echo',
    ring: 'group-hover:border-echo/40',
    glow: 'bg-echo/25',
    chip: 'bg-echo/10 text-echo',
  },
}

export function AssistantCard({ assistant }: { assistant: Assistant }) {
  const a = accentClasses[assistant.accent]
  const Icon = assistant.icon

  return (
    <article
      className={cn(
        'group glass relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1',
        a.ring,
      )}
    >
      {/* corner glow */}
      <div
        className={cn(
          'absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          a.glow,
        )}
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-2xl border border-border',
            a.chip,
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span className={cn('rounded-full px-3 py-1 text-xs font-medium', a.chip)}>
          {assistant.flow}
        </span>
      </div>

      <div className="relative mt-6 flex items-baseline gap-2">
        <h3 className="text-2xl font-semibold tracking-tight">{assistant.name}</h3>
        <span className={cn('text-sm font-medium', a.text)}>{assistant.role}</span>
      </div>

      <p className="relative mt-1 text-sm font-medium text-foreground/80">{assistant.tagline}</p>

      <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
        {assistant.description}
      </p>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium">
        <span className={a.text}>Meet {assistant.name}</span>
        <ArrowRight
          className={cn('h-4 w-4 transition-transform group-hover:translate-x-1', a.text)}
        />
      </div>
    </article>
  )
}
