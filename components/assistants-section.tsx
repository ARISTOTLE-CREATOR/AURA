import { AssistantCard } from '@/components/assistant-card'
import { Reveal } from '@/components/reveal'
import { assistants } from '@/lib/assistants'

export function AssistantsSection() {
  return (
    <section id="assistants" className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Meet the assistants
        </p>
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Three minds, working{' '}
          <span className="font-serif italic font-normal">in harmony.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Each assistant specializes in one direction of translation. Together, they close every gap
          between how people speak, sign, and write.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {assistants.map((assistant, i) => (
          <Reveal key={assistant.id} delay={i * 120}>
            <AssistantCard assistant={assistant} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
