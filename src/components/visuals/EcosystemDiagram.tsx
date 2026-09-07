import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ListChecks, ShieldAlert, Compass, FlaskConical, FileStack, GitBranch, BadgeCheck, ClipboardCheck,
} from 'lucide-react'

const nodes = [
  { icon: ListChecks, label: 'Requirements', description: 'Capture and baseline what the product must do.', angle: -90 },
  { icon: ShieldAlert, label: 'Risk Management', description: 'Identify, assess and mitigate risk against ISO 14971.', angle: -45 },
  { icon: Compass, label: 'Design Controls', description: 'Design inputs, outputs, reviews, verification and validation.', angle: 0 },
  { icon: FlaskConical, label: 'Testing', description: 'Plan and execute verification and validation testing.', angle: 45 },
  { icon: FileStack, label: 'Document Management', description: 'SOPs, templates and controlled records in one place.', angle: 90 },
  { icon: GitBranch, label: 'Traceability', description: 'Bi-directional links across every artifact, always current.', angle: 135 },
  { icon: BadgeCheck, label: 'Compliance', description: 'Workflows aligned to ISO 13485, IEC 62304 and FDA/MDR.', angle: 180 },
  { icon: ClipboardCheck, label: 'Audit Readiness', description: 'Every change, review and approval tracked and exportable.', angle: -135 },
]

function pointOnCircle(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) }
}

export function EcosystemDiagram() {
  const [active, setActive] = useState<number | null>(null)
  const radius = 40

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} className="fill-none stroke-white/10" strokeWidth="0.3" strokeDasharray="1 2" />
        {nodes.map((node, i) => {
          const p = pointOnCircle(node.angle, radius)
          const isActive = active === i
          return (
            <motion.line
              key={node.label}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke={isActive ? '#5fd4ff' : 'rgba(255,255,255,0.15)'}
              strokeWidth={isActive ? 0.6 : 0.25}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * i, ease: 'easeOut' }}
            />
          )
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-float glass flex h-28 w-28 flex-col items-center justify-center rounded-full text-center sm:h-36 sm:w-36">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-base">SmartEye</span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-electric-300">eQMS Core</span>
        </div>
      </div>

      {nodes.map((node, i) => {
        const p = pointOnCircle(node.angle, radius)
        const isActive = active === i
        return (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <motion.button
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08 }}
              className={`glass flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl transition-colors duration-300 sm:h-20 sm:w-20 ${
                isActive ? 'border-electric-400/60 bg-electric-500/15' : ''
              }`}
            >
              <node.icon className={`h-5 w-5 transition-colors ${isActive ? 'text-electric-300' : 'text-white/70'}`} />
            </motion.button>
            <p
              className={`mt-2 max-w-[7rem] text-center text-[10px] font-medium uppercase tracking-wide transition-colors ${
                isActive ? 'text-electric-300' : 'text-white/40'
              }`}
            >
              {node.label}
            </p>
          </div>
        )
      })}

      <div className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center sm:-bottom-8">
        <motion.div
          key={active ?? 'default'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass max-w-xs rounded-xl px-4 py-3 text-center"
        >
          <p className="text-xs leading-relaxed text-white/70">
            {active !== null ? nodes[active].description : 'Hover a module to see how it connects to the rest of the platform.'}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
