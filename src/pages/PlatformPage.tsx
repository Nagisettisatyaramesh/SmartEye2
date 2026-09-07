import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealText } from '@/components/ui/RevealText'
import { AmbientField } from '@/components/ui/AmbientField'
import { CTA } from '@/components/sections/CTA'
import { qmsProcessGroups, whySmartEyeReasons } from '@/data/compliance'

const regulations = [
  'Design inputs and outputs',
  'Risk management and hazard analysis',
  'Design verification and validation (V&V)',
  'Design reviews and approvals',
  'Software development life cycle (SDLC) documentation',
]

export function PlatformPage() {
  return (
    <>
      <SEO
        title="Best QMS For Medical Device Design Control And SaMD"
        description="SmartEye is your all-in-one Quality Management System (QMS), purpose-built for medical device design control and Software as a Medical Device (SaMD) compliance."
      />

      <section className="bg-fine-grid relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <AmbientField variant="subtle" />
        <Container className="relative max-w-3xl">
          <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">
            Why SmartEye eQMS
          </span>
          <RevealText
            as="h1"
            text="Best QMS for medical device design control and SaMD"
            className="text-balance mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            SmartEye is your all-in-one Quality Management System (QMS) solution, purpose-built for medical device
            design control and Software as a Medical Device (SaMD) compliance. Whether you're developing
            hardware-based devices or standalone medical software, SmartEye helps you streamline your product
            lifecycle while staying compliant with global regulatory standards.
          </p>
          <div className="mt-8">
            <Button href="/#demo" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Request a Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Why SmartEye for Design Control and SaMD?"
            title="Centralizing and automating your design control processes"
            description="Developing a medical device — especially software-based solutions — requires strict adherence to regulations like FDA 21 CFR Part 820, ISO 13485, and IEC 62304. SmartEye centralizes and automates your design control processes, making it easy to manage:"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {regulations.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                <span className="text-sm leading-relaxed text-ink-950">{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-neutral-600">
            S-Cube Technologies, with its experience in Quality and Regulatory Affairs, has proved to know how to keep
            your company compliant. It has developed an electronic Quality Management System (eQMS) called SmartEye
            which will guide you to success with workflows that are already configured to follow all the medical
            device standards.
          </p>
        </Container>
      </section>

      <section className="bg-paper-100 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Transforming Medical Compliance" title="Why teams choose SmartEye" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {whySmartEyeReasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-electric-600" />
                <span className="text-sm font-medium text-ink-950">{reason}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28">
        <Container>
          <SectionHeading
            light
            eyebrow="Core QMS Processes"
            title="SmartEye eQMS is the all-in-one solution for your QMS"
            description="These five process groups form the foundation of a compliant, effective QMS for medical device companies."
          />

          <div className="mt-14 space-y-6">
            {qmsProcessGroups.map((group, i) => (
              <motion.div
                key={group.id}
                id={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass scroll-mt-28 grid gap-6 rounded-2xl p-7 sm:grid-cols-[auto_1fr] sm:p-8"
              >
                <div className="flex sm:flex-col sm:items-center">
                  <span className="font-display text-3xl font-extrabold text-electric-400/40 sm:text-4xl">{group.number}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
                  <p className="mt-1.5 text-sm text-white/40">{group.summary}</p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {group.processes.map((process) => (
                      <li key={process} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-electric-400" />
                        {process}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
