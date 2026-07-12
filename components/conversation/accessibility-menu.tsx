'use client'

import { Accessibility, Contrast, Type, Keyboard } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

interface AccessibilityMenuProps {
  highContrast: boolean
  onHighContrastChange: (v: boolean) => void
  largeText: boolean
  onLargeTextChange: (v: boolean) => void
}

export function AccessibilityMenu({
  highContrast,
  onHighContrastChange,
  largeText,
  onLargeTextChange,
}: AccessibilityMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full text-muted-foreground hover:text-foreground"
          aria-label="Accessibility options"
        >
          <Accessibility className="size-[18px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass w-72 rounded-2xl border-border p-2"
      >
        <DropdownMenuLabel className="px-2 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Accessibility
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border" />

        <ToggleRow
          icon={<Contrast className="size-4" />}
          title="High contrast"
          description="Boost surface and text legibility"
          checked={highContrast}
          onChange={onHighContrastChange}
        />
        <ToggleRow
          icon={<Type className="size-4" />}
          title="Large text"
          description="Increase base font size"
          checked={largeText}
          onChange={onLargeTextChange}
        />

        <DropdownMenuSeparator className="bg-border" />
        <div className="flex items-center gap-2 px-2 py-2 text-xs text-muted-foreground">
          <Keyboard className="size-4 shrink-0" />
          <span>
            Press{' '}
            <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-secondary-foreground">
              Tab
            </kbd>{' '}
            to navigate. Screen reader ready.
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ToggleRow({
  icon,
  title,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode
  title: string
  description: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 hover:bg-accent">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-secondary-foreground">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </span>
      <Switch checked={checked} onCheckedChange={onChange} aria-label={title} />
    </label>
  )
}
