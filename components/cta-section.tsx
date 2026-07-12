import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { AuraBackdrop } from '@/components/aura-backdrop'

export function CtaSection() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-24">
          <AuraBackdrop />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Start every conversation{' '}
              <span className="font-serif italic font-normal">on equal footing.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Join the early access program and bring Aria, Nova, and Echo into your everyday
              conversations. Free while in beta.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="h-11 rounded-xl px-5 text-sm">
                Get early access
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
              <Button variant="outline" className="h-11 rounded-xl px-5 text-sm">
                Talk to the team
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
