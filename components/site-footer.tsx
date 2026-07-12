import { AuraMark } from '@/components/aura-mark'

const columns = [
  {
    title: 'Product',
    links: ['Assistants', 'How it works', 'Platform', 'Pricing', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Accessibility', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Community', 'Support', 'Privacy', 'Terms'],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="AURA home">
              <AuraMark className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight">AURA</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An AI communication platform giving everyone an equal chance to be understood.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AURA. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-echo" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
