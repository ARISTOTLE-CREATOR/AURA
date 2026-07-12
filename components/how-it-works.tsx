import { Mic, Cpu, Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: Mic,
    step: '01',
    title: 'Capture',
    description:
      'AURA senses spoken words, signing gestures, or typed text through your camera and microphone — no setup, no wearables.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'Understand',
    description:
      'Aria, Nova, and Echo interpret meaning in real time, preserving tone, intent, and nuance across every modality.',
  },
  {
    icon: Waves,
    step: '03',
    title: 'Express',
    description:
      'The message is delivered back in whatever form the other person needs — sign, speech, or text — instantly.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          How it works
        </p>
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Understanding in{' '}
          <span className="font-serif italic font-normal">three steps.</span>
        </h2>
      </Reveal>

      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        {/* connecting line */}
        <div
          aria-hidden="true"
          className="absolute top-11 left-0 hidden h-px w-full bg-gradient-to-r from-aria/40 via-nova/40 to-echo/40 md:block"
        />
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 120} className="relative">
            <div className="glass flex flex-col rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-serif text-3xl text-muted-foreground/50">{s.step}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
