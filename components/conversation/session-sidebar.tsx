'use client'

import { Plus, Search, Clock, Users } from 'lucide-react'
import { recentSessions, type Session } from '@/lib/conversation-data'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface SessionSidebarProps {
  activeId: string
  onSelect: (id: string) => void
  className?: string
}

export function SessionSidebar({ activeId, onSelect, className }: SessionSidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-full w-full flex-col gap-4 p-4',
        className,
      )}
      aria-label="Conversation history"
    >
      <Button className="h-11 w-full justify-start gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus className="size-[18px]" />
        New conversation
      </Button>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search conversations"
          aria-label="Search conversations"
          className="h-10 w-full rounded-xl border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Recent
        </h2>
        <span className="text-xs text-muted-foreground/60">{recentSessions.length}</span>
      </div>

      <ScrollArea className="-mx-1 flex-1 px-1">
        <ul className="flex flex-col gap-1.5">
          {recentSessions.map((session) => (
            <li key={session.id}>
              <SessionItem
                session={session}
                active={session.id === activeId}
                onSelect={() => onSelect(session.id)}
              />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  )
}

function SessionItem({
  session,
  active,
  onSelect,
}: {
  session: Session
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'group w-full rounded-xl border px-3 py-2.5 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
        active
          ? 'border-border bg-secondary'
          : 'border-transparent hover:bg-accent/60',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-sm font-medium text-foreground">
          {session.title}
        </span>
        <span className="shrink-0 text-[11px] text-muted-foreground">{session.time}</span>
      </div>
      <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
        {session.preview}
      </p>
      <div className="mt-1.5 flex items-center gap-3 text-[11px] text-muted-foreground/70">
        <span className="flex items-center gap-1">
          <Clock className="size-3" />
          {session.minutes}m
        </span>
        <span className="flex items-center gap-1">
          <Users className="size-3" />
          {session.participants}
        </span>
      </div>
    </button>
  )
}
