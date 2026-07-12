'use client'

import { Sparkles, ArrowRight } from 'lucide-react'
import { translations, type Translation } from '@/lib/conversation-data'
import { ScrollArea } from '@/components/ui/scroll-area'

export function TranslationPanel() {
  return (
    <section
      className="glass flex h-full min-h-0 flex-col rounded-3xl"
      aria-label="Real-time translation"
    >
      <header className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Sparkles className="size-4 text-aria" />
          Translation
        </h2>
        <span className="text-[11px] text-muted-foreground">Real-time</span>
      </header>

      <ScrollArea className="min-h-0 flex-1 px-4">
        <div className="flex flex-col gap-3 py-4" aria-live="polite">
          {translations.map((t) => (
            <TranslationCard key={t.id} translation={t} />
          ))}
        </div>
      </ScrollArea>
    </section>
  )
}

function TranslationCard({ translation }: { translation: Translation }) {
  return (
    <article
      className="rounded-2xl border border-border bg-secondary/40 p-3.5"
      style={{
        borderColor: `color-mix(in oklch, var(--${translation.accent}) 35%, transparent)`,
      }}
    >
      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium">
        <span className="text-muted-foreground">{translation.from}</span>
        <ArrowRight className="size-3 text-muted-foreground/60" />
        <span style={{ color: `var(--${translation.accent})` }}>{translation.to}</span>
      </div>
      <p className="text-sm leading-relaxed text-foreground">{translation.text}</p>
    </article>
  )
}
