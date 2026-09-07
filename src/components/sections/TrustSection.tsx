import { Cloud, KeyRound, History, PenTool, ShieldCheck, Workflow, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { securityCards, type SecurityCard } from '@/data/security'
import { motion } from 'framer-motion'

const icons: Record<SecurityCard['icon'], typeof Cloud> = { Cloud, KeyRound, History, PenTool, ShieldCheck, Workflow }

export function TrustSection() {
  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          eyebrow="Evidence, Not Marketing"
          title="Trust built on certification, not claims."
          description="SmartEye is powered by S-Cube Technologies — ISO 9001 and ISO/IEC 27001 certified, GDPR compliant, hosted on Azure Web Services."
        />

        <div className="mt-10 flex flex-wrap gap-4">
          {[
            { label: 'ISO 9001:2015', sub: 'Quality Management System' },
            { label: 'ISO/IEC 27001:2013', sub: 'Information Security Management' },
          ].map((cert) => (
            <div key={cert.label} className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <Award className="h-5 w-5 flex-shrink-0 text-electric-300" />
              <div>
                <p className="text-sm font-bold text-white">{cert.label}</p>
                <p className="text-xs text-white/40">{cert.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card, i) => {
            const Icon = icons[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric-400/30 bg-electric-500/10 text-electric-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
