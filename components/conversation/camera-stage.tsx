'use client'

import Image from 'next/image'
import { Hand, Maximize2, Circle, Users } from 'lucide-react'
import { assistants } from '@/lib/assistants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CameraStageProps {
  signMode: boolean
  activeAssistants: Record<string, boolean>
}

export function CameraStage({ signMode, activeAssistants }: CameraStageProps) {
  return (
    <div className="glass relative flex-1 overflow-hidden rounded-3xl">
      {/* live camera feed */}
      <Image
        src="/images/camera-feed.png"
        alt="Live camera preview of the current speaker"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      {/* cinematic vignette so overlays stay legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40"
      />

      {/* top-left: recording + participant */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          <Circle className="size-2.5 animate-aura-pulse fill-destructive text-destructive" />
          REC · 12:04
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          <Users className="size-3.5" />2
        </span>
      </div>

      {/* top-right: assistant activity indicators */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        {assistants.map((a) => (
          <ActivityDot
            key={a.id}
            label={a.name}
            accent={a.accent}
            active={activeAssistants[a.id]}
          />
        ))}
      </div>

      {/* speaker name plate */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div className="rounded-2xl bg-black/50 px-3.5 py-2 backdrop-blur-md">
          <p className="text-sm font-semibold text-white">Maya Chen</p>
          <p className="text-xs text-white/70">Speaking · Aria translating</p>
        </div>
      </div>

      {/* sign-language overlay window */}
      {signMode && (
        <div className="absolute bottom-4 right-4 w-40 overflow-hidden rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md sm:w-48">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-1.5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-white">
              <Hand className="size-3 text-aria" />
              Sign avatar
            </span>
            <span className="size-1.5 animate-aura-pulse rounded-full bg-aria" />
          </div>
          <div className="grid aspect-video place-items-center bg-gradient-to-br from-aria/25 to-nova/20">
            <Hand
              className="size-10 animate-aura-pulse text-white/90"
              strokeWidth={1.4}
            />
          </div>
        </div>
      )}

      {/* fullscreen affordance */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 bottom-4 size-9 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 data-[sign=true]:hidden"
        data-sign={signMode}
        aria-label="Expand camera to fullscreen"
      >
        <Maximize2 className="size-4" />
      </Button>
    </div>
  )
}

function ActivityDot({
  label,
  accent,
  active,
}: {
  label: string
  accent: 'aria' | 'nova' | 'echo'
  active: boolean
}) {
  return (
    <span
      className={cn(
        'flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium backdrop-blur-md transition-colors',
        active ? 'bg-black/55 text-white' : 'bg-black/30 text-white/40',
      )}
      style={active ? { color: `var(--${accent})` } : undefined}
    >
      <span
        className={cn('size-2 rounded-full', active && 'animate-aura-pulse')}
        style={{ background: active ? `var(--${accent})` : 'currentColor' }}
      />
      {label}
    </span>
  )
}
