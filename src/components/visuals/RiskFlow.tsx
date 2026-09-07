import { motion } from 'framer-motion'
import { Search, ClipboardList, ShieldCheck, FlaskConical, Gauge } from 'lucide-react'

const grid = [
  ['low', 'low', 'med', 'high', 'high'],
  ['low', 'low', 'med', 'med', 'high'],
  ['low', 'med', 'med', 'high', 'high'],
  ['med', 'med', 'high', 'high', 'high'],
  ['med', 'high', 'high', 'high', 'high'],
]

const shade: Record<string, string> = {
  low: 'bg-teal-400/70',
  med: 'bg-amber-400/70',
  high: 'bg-rose-400/75',
}

const flow = [
  { icon: Search, label: 'Risk Identified' },
  { icon: ClipboardList, label: 'Risk Assessment' },
  { icon: ShieldCheck, label: 'Risk Control' },
  { icon: FlaskConical, label: 'Verification' },
  { icon: Gauge, label: 'Residual Risk' },
]

export function RiskFlow() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="glass rounded-2xl p-6">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-300">Risk Matrix</p>
        <p className="mb-4 text-xs text-white/40">Severity × Probability — ISO 14971</p>
        <div className="grid grid-cols-5 gap-1.5">
          {grid.flatMap((row, i) =>
            row.map((cell, j) => (
              <motion.div
                key={`${i}-${j}`}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: (i + j) * 0.03 }}
                className={`aspect-square rounded-[4px] ${shade[cell]}`}
              />
            )),
          )}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-wide text-white/35">
          <span>Probability →</span>
          <span>Severity ↑</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-2 hidden h-[calc(100%-16px)] w-px bg-white/10 sm:block" />
        <div className="space-y-6">
          {flow.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center gap-4"
            >
              <div className="glass relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                <step.icon className="h-5 w-5 text-electric-300" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Step {i + 1}</p>
                <p className="font-display text-lg font-semibold text-white">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
