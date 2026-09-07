import { type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ListChecks, ShieldAlert, Compass, FlaskConical, GitBranch, FileStack, BadgeCheck } from 'lucide-react'

const chips = [
  { icon: ListChecks, label: 'Requirements', top: '4%', left: '2%', depth: 0.7, delay: 0.5 },
  { icon: ShieldAlert, label: 'Risk', top: '10%', left: '68%', depth: 1, delay: 0.65 },
  { icon: Compass, label: 'Design', top: '58%', left: '78%', depth: 0.6, delay: 0.8 },
  { icon: FlaskConical, label: 'Testing', top: '72%', left: '6%', depth: 0.8, delay: 0.95 },
  { icon: GitBranch, label: 'Traceability', top: '38%', left: '84%', depth: 0.5, delay: 1.1 },
  { icon: FileStack, label: 'Documents', top: '-2%', left: '38%', depth: 0.9, delay: 1.25 },
  { icon: BadgeCheck, label: 'Compliance', top: '80%', left: '42%', depth: 0.65, delay: 1.4 },
]

const lineTargets = [
  [50, 8], [72, 20], [82, 62], [30, 78], [88, 44], [46, 4], [48, 84],
] as const

export function HeroStage() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springCfg = { stiffness: 100, damping: 20, mass: 0.6 }
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), springCfg)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), springCfg)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-stage relative mx-auto aspect-square w-full max-w-[560px]"
    >
      <motion.div style={{ rotateX, rotateY }} className="relative h-full w-full [transform-style:preserve-3d]">
        {/* connecting lines */}
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {lineTargets.map(([x, y], i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#hero-line-gradient)"
              strokeWidth="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.1, delay: 0.9 + i * 0.08, ease: 'easeOut' }}
            />
          ))}
          <defs>
            <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5fd4ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5fd4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* central dashboard panel */}
        <div className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
          <div className="animate-float">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-300">Live Traceability</p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">SYS-REQ-024 → TEST-104</p>
                </div>
                <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-teal-300">
                  Verified
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { label: 'User Need', pct: 100 },
                  { label: 'Design Output', pct: 100 },
                  { label: 'Risk Control', pct: 92 },
                  { label: 'Verification', pct: 78 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex items-center justify-between text-[10px] text-white/50">
                      <span>{row.label}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-electric-500 to-teal-400"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* orbiting module chips */}
        {chips.map((chip, i) => (
          <div key={chip.label} className="absolute" style={{ top: chip.top, left: chip.left }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: chip.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="animate-float" style={{ animationDelay: `${i * 0.6}s`, animationDuration: `${7 + i}s` }}>
                <div
                  className="glass flex items-center gap-2 rounded-xl px-3.5 py-2.5"
                  style={{ opacity: 0.55 + chip.depth * 0.45 }}
                >
                  <chip.icon className="h-3.5 w-3.5 text-electric-300" />
                  <span className="text-xs font-medium text-white/85">{chip.label}</span>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
