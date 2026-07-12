'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuraMark } from '@/components/aura-mark'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Assistants', href: '#assistants' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500',
          scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent',
        )}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1" aria-label="AURA home">
          <AuraMark className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">AURA</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Sign in
          </Button>
          <Button size="sm" className="rounded-lg">
            Get started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass absolute top-[72px] left-4 right-4 rounded-2xl p-3 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Button variant="ghost" className="justify-start">
                Sign in
              </Button>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
