import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AmbientField } from '@/components/ui/AmbientField'
import { HeroStage } from '@/components/visuals/HeroStage'
import { DemoForm } from '@/components/sections/DemoForm'

const words = ['CONTROL', 'EVERY', 'QUALITY', 'DECISION.']

export function Hero() {
  return (
    <section className="bg-fine-grid relative overflow-hidden bg-ink-950 pb-28 pt-32 sm:pt-40">
      <AmbientField />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300"
          >
            The Intelligent Digital Quality Platform
          </motion.span>

          <h1 className="mt-7 font-display text-[3.2rem] font-bold uppercase leading-[0.95] text-white sm:text-7xl lg:text-[5.5rem]">
            {words.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === words.length - 1 ? (
                    <span className="bg-gradient-to-r from-electric-300 to-teal-300 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/60"
          >
            A connected eQMS built for medical-device and SaMD teams — from requirements and risk to
            verification, traceability and audit readiness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/#demo" size="lg" glow icon={<ArrowRight className="h-4 w-4" />}>
              Request a Demo
            </Button>
            <Button
              href="/quality-management-system-qms-for-medical-devices-and-samd/"
              variant="outline-light"
              size="lg"
            >
              Explore SmartEye
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7"
          >
            {[
              ['ISO 13485', 'aligned workflows'],
              ['21 CFR Part 11', 'compliant e-signatures'],
              ['Azure', 'hosted & secured'],
            ].map(([kpi, label]) => (
              <div key={label}>
                <dt className="font-display text-sm font-bold text-white">{kpi}</dt>
                <dd className="mt-0.5 text-[11px] text-white/40">{label}</dd>
              </div>
            ))}
          </motion.div>
        </div>

        <div>
          <HeroStage />
        </div>
      </Container>

      <Container id="demo" className="relative mt-24 scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto max-w-3xl rounded-3xl p-8 sm:p-10"
        >
          <div className="mb-6 text-center">
            <h2 className="font-display text-2xl font-bold text-white">Arrange your free tailored demo</h2>
            <p className="mt-2 text-white/50">
              See for yourself how an enhanced 360° view could benefit your SaMD design and development.
            </p>
          </div>
          <DemoForm />
        </motion.div>
      </Container>
    </section>
  )
}
