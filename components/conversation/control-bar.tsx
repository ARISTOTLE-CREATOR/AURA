'use client'

import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  Hand,
  Captions,
  CaptionsOff,
  Languages,
  PhoneOff,
  ChevronDown,
} from 'lucide-react'
import { languages } from '@/lib/conversation-data'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export interface ControlState {
  mic: boolean
  camera: boolean
  speaker: boolean
  signMode: boolean
  transcript: boolean
  language: string
}

interface ControlBarProps {
  state: ControlState
  onChange: <K extends keyof ControlState>(key: K, value: ControlState[K]) => void
}

export function ControlBar({ state, onChange }: ControlBarProps) {
  return (
    <div className="glass flex items-center justify-between gap-2 rounded-2xl px-3 py-2.5">
      {/* left: primary media toggles */}
      <div className="flex items-center gap-1.5">
        <ToggleControl
          active={state.mic}
          onClick={() => onChange('mic', !state.mic)}
          onIcon={<Mic className="size-[18px]" />}
          offIcon={<MicOff className="size-[18px]" />}
          label="Microphone"
        />
        <ToggleControl
          active={state.camera}
          onClick={() => onChange('camera', !state.camera)}
          onIcon={<Video className="size-[18px]" />}
          offIcon={<VideoOff className="size-[18px]" />}
          label="Camera"
        />
        <ToggleControl
          active={state.speaker}
          onClick={() => onChange('speaker', !state.speaker)}
          onIcon={<Volume2 className="size-[18px]" />}
          offIcon={<VolumeX className="size-[18px]" />}
          label="Speaker"
        />
      </div>

      {/* center: mode toggles */}
      <div className="flex items-center gap-1.5">
        <ModeToggle
          active={state.signMode}
          onClick={() => onChange('signMode', !state.signMode)}
          icon={<Hand className="size-[18px]" />}
          label="Sign language mode"
          accent="aria"
        />
        <ToggleControl
          active={state.transcript}
          onClick={() => onChange('transcript', !state.transcript)}
          onIcon={<Captions className="size-[18px]" />}
          offIcon={<CaptionsOff className="size-[18px]" />}
          label="Transcript"
        />
        <LanguageSelector
          value={state.language}
          onChange={(v) => onChange('language', v)}
        />
      </div>

      {/* right: end call */}
      <Button
        className="h-11 gap-2 rounded-xl bg-destructive px-4 text-white hover:bg-destructive/90"
        aria-label="End conversation"
      >
        <PhoneOff className="size-[18px]" />
        <span className="hidden sm:inline">End</span>
      </Button>
    </div>
  )
}

function ToggleControl({
  active,
  onClick,
  onIcon,
  offIcon,
  label,
}: {
  active: boolean
  onClick: () => void
  onIcon: React.ReactNode
  offIcon: React.ReactNode
  label: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          aria-pressed={active}
          aria-label={`${label}${active ? '' : ' (off)'}`}
          className={cn(
            'size-11 rounded-xl transition-colors',
            active
              ? 'bg-secondary text-foreground hover:bg-secondary/80'
              : 'bg-destructive/15 text-destructive hover:bg-destructive/25',
          )}
        >
          {active ? onIcon : offIcon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {label} {active ? 'on' : 'off'}
      </TooltipContent>
    </Tooltip>
  )
}

function ModeToggle({
  active,
  onClick,
  icon,
  label,
  accent,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  accent: 'aria' | 'nova' | 'echo'
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          aria-pressed={active}
          aria-label={`${label}${active ? ' (on)' : ' (off)'}`}
          className={cn(
            'size-11 rounded-xl transition-colors',
            !active && 'bg-secondary text-muted-foreground hover:bg-secondary/80',
          )}
          style={
            active
              ? {
                  background: `color-mix(in oklch, var(--${accent}) 22%, transparent)`,
                  color: `var(--${accent})`,
                }
              : undefined
          }
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {label} {active ? 'on' : 'off'}
      </TooltipContent>
    </Tooltip>
  )
}

function LanguageSelector({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-11 gap-1.5 rounded-xl bg-secondary px-3 text-foreground hover:bg-secondary/80"
          aria-label={`Language: ${value}`}
        >
          <Languages className="size-[18px]" />
          <span className="hidden text-sm font-medium md:inline">{value}</span>
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass max-h-72 w-52 overflow-y-auto rounded-2xl border-border p-1.5"
      >
        <DropdownMenuLabel className="px-2 text-xs uppercase tracking-wider text-muted-foreground">
          Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang}
              value={lang}
              className="rounded-lg text-sm"
            >
              {lang}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
