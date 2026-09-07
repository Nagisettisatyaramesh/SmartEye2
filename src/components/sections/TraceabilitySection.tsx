import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TraceabilityGraph } from '@/components/visuals/TraceabilityGraph'

export function TraceabilitySection() {
  return (
    <section id="traceability" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="Traceability"
          size="lg"
          title="One thread through the entire product lifecycle."
          description="Bi-directional traceability across requirements, risk, design and test — always current, always audit-ready. Scroll to see the thread connect."
        />
        <div className="mt-24">
          <TraceabilityGraph />
        </div>
      </Container>
    </section>
  )
}
