import { SEO } from '@/components/ui/SEO'
import { Hero } from '@/components/sections/Hero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { ModulesEditorial } from '@/components/sections/ModulesEditorial'
import { TraceabilitySection } from '@/components/sections/TraceabilitySection'
import { RiskSection } from '@/components/sections/RiskSection'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { DashboardSection } from '@/components/sections/DashboardSection'
import { SaMDStory } from '@/components/sections/SaMDStory'
import { TrustSection } from '@/components/sections/TrustSection'
import { FAQ } from '@/components/sections/FAQ'
import { ResourcesPreview } from '@/components/sections/ResourcesPreview'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <SEO
        title="SmartEye — Control Every Quality Decision"
        description="SmartEye is the intelligent digital quality platform that helps medical-device and SaMD companies manage quality, risk, compliance, traceability and product development."
      />
      <Hero />
      <ProblemSection />
      <EcosystemSection />
      <ModulesEditorial />
      <TraceabilitySection />
      <RiskSection />
      <ComplianceSection />
      <DashboardSection />
      <SaMDStory />
      <TrustSection />
      <FAQ />
      <ResourcesPreview />
      <CTA />
    </>
  )
}
