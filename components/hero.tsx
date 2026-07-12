'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuraBackdrop } from '@/components/aura-backdrop'
import { assistants } from '@/lib/assistants'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <AuraBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div
          className="glass animate-[aura-rise_0.7s_ease-out_both] mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-aria" />
          Three assistants. One shared language.
        </div>

        <h1
          className="mx-auto mt-7 max-w-4xl text-balance text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
          style={{ animation: 'aura-rise 0.8s ease-out 0.05s both' }}
        >
          Give everyone an equal chance{' '}
          <span className="font-serif italic font-normal">to be understood.</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animation: 'aura-rise 0.8s ease-out 0.15s both' }}
        >
          AURA is an AI communication platform that translates seamlessly between speech, sign
          language, and writing — so conversations flow no matter how you express yourself.
        </p>

        <div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animation: 'aura-rise 0.8s ease-out 0.25s both' }}
        >
          <Button className="h-11 rounded-xl px-5 text-sm">
            Start communicating
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
          </Button>
          <Button variant="outline" className="h-11 rounded-xl px-5 text-sm">
            <Play className="mr-1 h-4 w-4" />
            Watch the film
          </Button>
        </div>

        {/* assistant color legend */}
        <div
          className="mt-14 flex items-center justify-center gap-6"
          style={{ animation: 'aura-rise 0.8s ease-out 0.35s both' }}
        >
          {assistants.map((a) => (
            <div key={a.id} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className={cn(
                  'h-2.5 w-2.5 rounded-full',
                  a.accent === 'aria' && 'bg-aria',
                  a.accent === 'nova' && 'bg-nova',
                  a.accent === 'echo' && 'bg-echo',
                )}
              />
              {a.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
