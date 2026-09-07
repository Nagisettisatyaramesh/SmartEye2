import { ArrowRight, Award, ShieldCheck } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealText } from '@/components/ui/RevealText'
import { AmbientField } from '@/components/ui/AmbientField'
import { CTA } from '@/components/sections/CTA'

export function AboutPage() {
  return (
    <>
      <SEO
        title="Who We Are — Powered by S-Cube Technologies"
        description="SmartEye eQMS is powered by S-Cube Technologies — connecting leading innovators from the medical device and healthcare sector to the very best in specialist advice and facilities."
      />

      <section className="bg-fine-grid relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <AmbientField variant="subtle" />
        <Container className="relative max-w-3xl text-center">
          <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">
            Who we are
          </span>
          <RevealText
            as="h1"
            text="S-Cube Technologies"
            className="text-balance mx-auto mt-6 font-display text-4xl font-bold text-white sm:text-5xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            We are committed to bringing meaningful difference to your business, with quality solutions built from
            innovation.
          </p>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-neutral-700">
            S-Cube Technologies connects leading innovators from the medical device and healthcare sector to the very
            best in specialist advice and facilities. We help forward-thinking organisations identify and access new
            markets with our software and digital solutions, all whilst offering tailored support that enhances
            business capability and innovation management.
          </p>
          <div className="mt-10 rounded-2xl border border-electric-100 bg-electric-50 p-8">
            <h2 className="font-display text-xl font-bold text-ink-950">SmartEye eQMS: powered by S-Cube Technologies</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">
              Your growth, driven by our innovation. We will help you grow your ideas by taking care of the growth,
              implementing management processes and providing you with the necessary services so you don't have to
              worry.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-100 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Certified"
            title="Trusted, certified, accountable"
            description="You can trust us to build each step of your business with innovative solutions for your big innovation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-700">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-ink-950">ISO 9001:2015</p>
                <p className="text-sm text-neutral-500">Quality Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-ink-950">ISO/IEC 27001:2013</p>
                <p className="text-sm text-neutral-500">Information Security Management System</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            We're ISO 9001 BSI Certified, GDPR Compliant, ISO 27001 BSI Certified.
          </p>
        </Container>
      </section>

      <section className="bg-paper-50 py-16">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink-950">Find out what SmartEye eQMS could do for your product</h2>
          <div className="mt-6">
            <Button href="/quality-management-system-qms-for-medical-devices-and-samd/" icon={<ArrowRight className="h-4 w-4" />}>
              Why SmartEye eQMS
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
