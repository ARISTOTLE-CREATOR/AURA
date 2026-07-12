'use client'

import { assistants, type Assistant } from '@/lib/assistants'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

interface AssistantRailProps {
  activeAssistants: Record<string, boolean>
  onToggle: (id: string, value: boolean) => void
  className?: string
}

export function AssistantRail({
  activeAssistants,
  onToggle,
  className,
}: AssistantRailProps) {
  return (
    <aside
      className={cn('flex h-full w-full flex-col gap-3 p-4', className)}
      aria-label="AI assistants"
    >
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Assistants
        </h2>
        <span className="text-[11px] text-muted-foreground/60">
          {Object.values(activeAssistants).filter(Boolean).length} active
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {assistants.map((assistant) => (
          <AssistantStatusCard
            key={assistant.id}
            assistant={assistant}
            active={activeAssistants[assistant.id]}
            onToggle={(v) => onToggle(assistant.id, v)}
          />
        ))}
      </div>

      <p className="px-1 text-[11px] leading-relaxed text-muted-foreground/70">
        Toggle assistants on or off at any time. Active assistants translate
        continuously during the conversation.
      </p>
    </aside>
  )
}

function AssistantStatusCard({
  assistant,
  active,
  onToggle,
}: {
  assistant: Assistant
  active: boolean
  onToggle: (v: boolean) => void
}) {
  const Icon = assistant.icon
  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-2xl border p-4 transition-all',
        active ? 'bg-secondary/50' : 'border-border bg-transparent',
      )}
      style={
        active
          ? {
              borderColor: `color-mix(in oklch, var(--${assistant.accent}) 45%, transparent)`,
              boxShadow: `0 0 30px -12px var(--${assistant.accent})`,
            }
          : undefined
      }
    >
      {active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            background: `radial-gradient(80% 60% at 100% 0%, var(--${assistant.accent}), transparent)`,
          }}
        />
      )}
      <div className="relative flex items-start gap-3">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-xl"
          style={{
            background: active
              ? `color-mix(in oklch, var(--${assistant.accent}) 22%, transparent)`
              : 'var(--secondary)',
            color: active ? `var(--${assistant.accent})` : 'var(--muted-foreground)',
          }}
        >
          <Icon className="size-5" strokeWidth={1.75} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground">{assistant.name}</h3>
            {active && (
              <span
                className="size-1.5 animate-aura-pulse rounded-full"
                style={{ background: `var(--${assistant.accent})` }}
              />
            )}
          </div>
          <p className="text-[11px] text-muted-foreground">{assistant.tagline}</p>
        </div>

        <Switch
          checked={active}
          onCheckedChange={onToggle}
          aria-label={`Toggle ${assistant.name}`}
        />
      </div>

      <div className="relative mt-3 flex items-center justify-between">
        <span
          className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          {assistant.flow}
        </span>
        <span
          className="text-[10px] font-medium"
          style={{ color: active ? `var(--${assistant.accent})` : undefined }}
        >
          {active ? 'Listening…' : 'Inactive'}
        </span>
      </div>
    </article>
  )
}
