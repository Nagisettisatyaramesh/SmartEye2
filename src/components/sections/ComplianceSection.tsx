import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ComplianceOrbit } from '@/components/visuals/ComplianceOrbit'

export function ComplianceSection() {
  return (
    <section id="compliance" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="Built for Regulated Teams"
          title="Compliance, built into the workflow."
          description="SmartEye helps teams build quality and traceability into the process — not after it. Workflows are configured around the standards and regulations that already govern medical device and SaMD development."
        />
        <div className="mt-16">
          <ComplianceOrbit />
        </div>
      </Container>
    </section>
  )
}
