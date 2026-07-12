'use client'

import { Captions } from 'lucide-react'
import { transcriptLines, type TranscriptLine } from '@/lib/conversation-data'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export function TranscriptPanel() {
  return (
    <section
      className="glass flex h-full min-h-0 flex-col rounded-3xl"
      aria-label="Live transcript"
    >
      <header className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Captions className="size-4 text-nova" />
          Live transcript
        </h2>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-nova">
          <span className="size-1.5 animate-aura-pulse rounded-full bg-nova" />
          Nova
        </span>
      </header>

      <ScrollArea className="min-h-0 flex-1 px-4">
        <div
          className="flex flex-col gap-4 py-4"
          aria-live="polite"
          aria-atomic="false"
        >
          {transcriptLines.map((line) => (
            <TranscriptRow key={line.id} line={line} />
          ))}
          {/* live interim caption */}
          <div className="flex items-center gap-2 pl-11 text-sm text-muted-foreground">
            <span className="italic">and let&apos;s ship it this week</span>
            <span className="inline-block h-4 w-0.5 animate-aura-pulse bg-nova" />
          </div>
        </div>
      </ScrollArea>
    </section>
  )
}

function TranscriptRow({ line }: { line: TranscriptLine }) {
  return (
    <div className="flex gap-3">
      <span
        className={cn(
          'grid size-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold',
          line.self
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground',
        )}
        aria-hidden="true"
      >
        {line.initials}
      </span>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-semibold text-foreground">{line.speaker}</span>
          <span className="text-[11px] text-muted-foreground/60">{line.time}</span>
        </div>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
          {line.text}
        </p>
      </div>
    </div>
  )
}
