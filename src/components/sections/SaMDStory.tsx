import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const points = [
  'Design inputs and outputs',
  'Risk management and hazard analysis',
  'Design verification and validation (V&V)',
  'Software development life cycle (SDLC) documentation',
]

function CircuitVisual() {
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="circuit-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5fd4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2bbfab" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[
        'M20,60 H140 V140 H260',
        'M20,160 H100 V220 H220 V260',
        'M380,40 H240 V100',
        'M380,140 H300 V200 H180',
        'M20,280 H160 V240',
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="url(#circuit-grad)"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: i * 0.15, ease: 'easeOut' }}
        />
      ))}
      {[
        [140, 60], [260, 140], [100, 160], [220, 220], [240, 40], [300, 140], [180, 200], [160, 280],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          className="fill-electric-300"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
        />
      ))}
    </svg>
  )
}

export function SaMDStory() {
  return (
    <section className="bg-paper-50 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Built for Medical Devices & SaMD"
            title="Precision engineering deserves a precise quality system."
            description="Whether you're developing hardware-based devices or standalone medical software, SmartEye centralizes and automates the design control processes regulators expect — FDA 21 CFR Part 820, ISO 13485 and IEC 62304 among them."
          />
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-ink-950 p-8">
          <CircuitVisual />
        </div>
      </Container>
    </section>
  )
}
