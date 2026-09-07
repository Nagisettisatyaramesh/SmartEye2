import { motion } from 'framer-motion'
import { standards } from '@/data/compliance'

function pointOnCircle(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) }
}

export function ComplianceOrbit() {
  const radius = 42
  const step = 360 / standards.length

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      <div className="animate-orbit absolute inset-[6%] rounded-full border border-dashed border-white/10" />
      <div className="animate-orbit-reverse absolute inset-[14%] rounded-full border border-dashed border-white/[0.06]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {standards.map((s, i) => {
          const p = pointOnCircle(i * step - 90, radius)
          return (
            <motion.line
              key={s.code}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke="rgba(95,212,255,0.25)"
              strokeWidth="0.25"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 * i }}
            />
          )
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="glass flex h-24 w-24 flex-col items-center justify-center rounded-full sm:h-28 sm:w-28">
          <span className="font-display text-xs font-bold uppercase tracking-wider text-white">SmartEye</span>
        </div>
      </div>

      {standards.map((s, i) => {
        const p = pointOnCircle(i * step - 90, radius)
        return (
          <motion.div
            key={s.code}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            className="glass absolute -translate-x-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <p className="font-display text-xs font-bold text-electric-300">{s.code}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
