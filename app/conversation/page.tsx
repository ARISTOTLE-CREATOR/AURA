'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { ConversationTopbar } from '@/components/conversation/conversation-topbar'
import { SessionSidebar } from '@/components/conversation/session-sidebar'
import { CameraStage } from '@/components/conversation/camera-stage'
import { TranscriptPanel } from '@/components/conversation/transcript-panel'
import { TranslationPanel } from '@/components/conversation/translation-panel'
import { AssistantRail } from '@/components/conversation/assistant-rail'
import { ControlBar, type ControlState } from '@/components/conversation/control-bar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ConversationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSession, setActiveSession] = useState('s1')
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  const [activeAssistants, setActiveAssistants] = useState<Record<string, boolean>>({
    aria: true,
    nova: true,
    echo: false,
  })

  const [controls, setControls] = useState<ControlState>({
    mic: true,
    camera: true,
    speaker: true,
    signMode: true,
    transcript: true,
    language: 'English (US)',
  })

  function updateControl<K extends keyof ControlState>(key: K, value: ControlState[K]) {
    setControls((prev) => ({ ...prev, [key]: value }))
  }

  function toggleAssistant(id: string, value: boolean) {
    setActiveAssistants((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div
      data-contrast={highContrast ? 'high' : undefined}
      data-text-size={largeText ? 'large' : undefined}
      className="flex h-dvh flex-col overflow-hidden bg-background text-foreground"
    >
      {/* ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(50% 40% at 12% 8%, color-mix(in oklch, var(--aria) 10%, transparent), transparent), radial-gradient(45% 40% at 90% 12%, color-mix(in oklch, var(--nova) 10%, transparent), transparent), radial-gradient(45% 45% at 60% 100%, color-mix(in oklch, var(--echo) 9%, transparent), transparent)',
        }}
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <ConversationTopbar
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
          highContrast={highContrast}
          onHighContrastChange={setHighContrast}
          largeText={largeText}
          onLargeTextChange={setLargeText}
        />

        <div className="flex min-h-0 flex-1">
          {/* Left sidebar — static on large screens */}
          <div className="hidden w-64 shrink-0 border-r border-border lg:block">
            <SessionSidebar activeId={activeSession} onSelect={setActiveSession} />
          </div>

          {/* Left sidebar — mobile drawer */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
              <div className="glass absolute left-0 top-0 h-full w-80 max-w-[85vw] rounded-none border-y-0 border-l-0">
                <div className="flex items-center justify-between px-4 pt-4">
                  <span className="text-sm font-semibold">Conversations</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-full"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close conversation history"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
                <SessionSidebar
                  activeId={activeSession}
                  onSelect={(id) => {
                    setActiveSession(id)
                    setSidebarOpen(false)
                  }}
                />
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="flex min-w-0 flex-1 flex-col gap-3 p-3 md:p-4">
            <div className="flex min-h-0 flex-1 flex-col gap-3 xl:flex-row">
              <CameraStage
                signMode={controls.signMode}
                activeAssistants={activeAssistants}
              />

              {/* transcript + translation */}
              <div
                className={cn(
                  'flex shrink-0 gap-3',
                  'h-56 flex-row xl:h-auto xl:w-80 xl:flex-col',
                )}
              >
                {controls.transcript && (
                  <div className="min-w-0 flex-1">
                    <TranscriptPanel />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <TranslationPanel />
                </div>
              </div>
            </div>

            <ControlBar state={controls} onChange={updateControl} />
          </main>

          {/* Right rail — assistants */}
          <div className="hidden w-72 shrink-0 border-l border-border lg:block">
            <AssistantRail
              activeAssistants={activeAssistants}
              onToggle={toggleAssistant}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
