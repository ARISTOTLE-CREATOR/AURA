import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { AssistantsSection } from '@/components/assistants-section'
import { HowItWorks } from '@/components/how-it-works'
import { PlatformSection } from '@/components/platform-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* fixed ambient wash so glass surfaces catch light across the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(60% 40% at 15% 20%, color-mix(in oklch, var(--aria) 12%, transparent), transparent), radial-gradient(55% 45% at 85% 35%, color-mix(in oklch, var(--nova) 12%, transparent), transparent), radial-gradient(50% 40% at 50% 90%, color-mix(in oklch, var(--echo) 10%, transparent), transparent)',
        }}
      />
      <div className="relative z-10">
        <SiteNav />
      <main>
        <Hero />
        <AssistantsSection />
        <HowItWorks />
        <PlatformSection />
        <CtaSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
