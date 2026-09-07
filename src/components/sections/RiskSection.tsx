import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RiskFlow } from '@/components/visuals/RiskFlow'

export function RiskSection() {
  return (
    <section className="bg-fine-grid relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          eyebrow="Risk Management"
          title="See risk before it becomes a problem."
          description="Identify hazards, assess severity and probability, and track mitigation through to residual risk — analytical, evidence-based, and visible to the whole team."
        />
        <div className="mt-16">
          <RiskFlow />
        </div>
      </Container>
    </section>
  )
}
