import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const nodes = [
  { label: 'User Need', tag: 'NEED-002' },
  { label: 'Requirement', tag: 'SYS-REQ-024' },
  { label: 'Design', tag: 'DES-011' },
  { label: 'Risk', tag: 'RISK-018' },
  { label: 'Test', tag: 'TEST-104' },
  { label: 'Verification', tag: 'VER-104' },
  { label: 'Evidence', tag: 'EVD-104' },
]

export function TraceabilityGraph() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.35'] })
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 h-px bg-white/10 sm:top-7" />
        <motion.div
          style={{ width: lineWidth }}
          className="absolute left-0 top-6 h-px bg-gradient-to-r from-electric-400 to-teal-400 shadow-[0_0_8px_1px_rgba(95,212,255,0.6)] sm:top-7"
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
          {nodes.map((node, i) => {
            const start = i / nodes.length
            const end = (i + 0.6) / nodes.length
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
            const scale = useTransform(scrollYProgress, [start, end], [0.7, 1])
            return (
              <motion.div key={node.label} style={{ opacity, scale }} className="flex flex-col items-center text-center">
                <div className="glass flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14">
                  <span className="font-display text-xs font-bold text-electric-300">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white">{node.label}</p>
                <p className="mt-1 text-[10px] font-mono text-white/40">{node.tag}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
