'use client'

import Link from 'next/link'
import { Bell, Settings, PanelLeft, ChevronDown } from 'lucide-react'
import { AuraMark } from '@/components/aura-mark'
import { AccessibilityMenu } from './accessibility-menu'
import { Button } from '@/components/ui/button'
import {
  Avatar,
  AvatarFallback,
} from '@/components/ui/avatar'
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface TopbarProps {
  onToggleSidebar: () => void
  highContrast: boolean
  onHighContrastChange: (v: boolean) => void
  largeText: boolean
  onLargeTextChange: (v: boolean) => void
}

export function ConversationTopbar({
  onToggleSidebar,
  highContrast,
  onHighContrastChange,
  largeText,
  onLargeTextChange,
}: TopbarProps) {
  return (
    <header className="glass z-30 flex h-16 items-center justify-between gap-4 rounded-none border-x-0 border-t-0 px-4 md:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="size-9 rounded-full text-muted-foreground hover:text-foreground lg:hidden"
          aria-label="Toggle conversation history"
        >
          <PanelLeft className="size-[18px]" />
        </Button>
        <Link href="/" className="flex items-center gap-2.5">
          <AuraMark className="size-8" />
          <span className="hidden text-lg font-semibold tracking-tight sm:block">
            AURA
          </span>
        </Link>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
        <ConnectionStatus />
      </div>

      <div className="flex items-center gap-1">
        <AccessibilityMenu
          highContrast={highContrast}
          onHighContrastChange={onHighContrastChange}
          largeText={largeText}
          onLargeTextChange={onLargeTextChange}
        />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative size-9 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Notifications, 2 unread"
            >
              <Bell className="size-[18px]" />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-aria ring-2 ring-background" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Settings"
            >
              <Settings className="size-[18px]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Settings</TooltipContent>
        </Tooltip>

        <ProfileMenu />
      </div>
    </header>
  )
}

function ConnectionStatus() {
  return (
    <div className="hidden items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5 sm:flex">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-echo opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-echo" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">Connected</span>
      <span className="text-xs text-muted-foreground/60">· 18ms</span>
    </div>
  )
}

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="ml-1 flex items-center gap-2 rounded-full py-1 pl-1 pr-2 outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Account menu for Taylor Reed"
        >
          <Avatar className="size-8 border border-border">
            <AvatarFallback className="bg-gradient-to-br from-aria/40 to-nova/40 text-xs font-semibold text-foreground">
              TR
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass w-56 rounded-2xl border-border p-1.5"
      >
        <DropdownMenuLabel className="px-2 py-1.5">
          <span className="block text-sm font-medium text-foreground">Taylor Reed</span>
          <span className="block text-xs text-muted-foreground">taylor@aura.app</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem className="rounded-lg">Profile</DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg">Preferences</DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg">Billing</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem className="rounded-lg text-destructive focus:text-destructive">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
