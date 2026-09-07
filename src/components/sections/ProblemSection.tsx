import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FragmentedTools } from '@/components/visuals/FragmentedTools'

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="The Old World"
          title="Disconnected tools create disconnected quality."
          description="Excel, Word, email threads, PDFs, Jira tickets and shared folders — each holding a piece of the truth, none of them talking to each other."
        />
        <div className="mt-16">
          <FragmentedTools />
        </div>
        <p className="mx-auto -mt-4 max-w-lg text-balance text-center font-display text-xl font-semibold text-white sm:text-2xl">
          SmartEye connects the entire quality lifecycle.
        </p>
      </Container>
    </section>
  )
}
