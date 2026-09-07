import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EcosystemDiagram } from '@/components/visuals/EcosystemDiagram'

export function EcosystemSection() {
  return (
    <section className="bg-fine-grid relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="The Connected Ecosystem"
          title="One operating system for medical-device quality."
          description="Every module reads and writes to the same connected core — hover a module to see how it fits into the whole."
        />
        <div className="mt-20 pb-10">
          <EcosystemDiagram />
        </div>
      </Container>
    </section>
  )
}
