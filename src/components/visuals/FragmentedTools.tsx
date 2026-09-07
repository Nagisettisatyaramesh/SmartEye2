import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileSpreadsheet, FileText, Mail, FileImage, Kanban, Folder, ClipboardCheck } from 'lucide-react'

const tools = [
  { icon: FileSpreadsheet, label: 'Excel', from: { x: -280, y: -140, r: -18 } },
  { icon: FileText, label: 'Word', from: { x: 250, y: -170, r: 14 } },
  { icon: Mail, label: 'Email', from: { x: -320, y: 90, r: 10 } },
  { icon: FileImage, label: 'PDF', from: { x: 300, y: 60, r: -12 } },
  { icon: Kanban, label: 'Jira', from: { x: -180, y: 200, r: 20 } },
  { icon: Folder, label: 'Shared Folders', from: { x: 200, y: 210, r: -16 } },
  { icon: ClipboardCheck, label: 'Manual Approvals', from: { x: 0, y: -240, r: 8 } },
]

export function FragmentedTools() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.3'] })
  const convergeProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1])
  const coreOpacity = useTransform(scrollYProgress, [0.6, 0.95], [0, 1])
  const coreScale = useTransform(scrollYProgress, [0.6, 1], [0.7, 1])

  return (
    <div ref={ref} className="relative mx-auto flex h-[420px] w-full max-w-xl items-center justify-center sm:h-[480px]">
      {tools.map((tool) => {
        const x = useTransform(convergeProgress, [0, 1], [tool.from.x, 0])
        const y = useTransform(convergeProgress, [0, 1], [tool.from.y, 0])
        const rotate = useTransform(convergeProgress, [0, 1], [tool.from.r, 0])
        const opacity = useTransform(convergeProgress, [0, 0.85, 1], [0.85, 0.6, 0])
        const scale = useTransform(convergeProgress, [0, 1], [1, 0.4])
        return (
          <motion.div
            key={tool.label}
            style={{ x, y, rotate, opacity, scale }}
            className="absolute flex flex-col items-center gap-2"
          >
            <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl">
              <tool.icon className="h-6 w-6 text-white/70" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">{tool.label}</span>
          </motion.div>
        )
      })}

      <motion.div style={{ opacity: coreOpacity, scale: coreScale }} className="relative">
        <div className="animate-pulse-ring flex h-24 w-24 items-center justify-center rounded-full border border-electric-400/40 bg-electric-500/10 backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="9" className="stroke-electric-300" strokeWidth="1.6" fill="none" />
            <circle cx="16" cy="16" r="3" className="fill-electric-300" />
          </svg>
        </div>
        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">SmartEye</p>
      </motion.div>
    </div>
  )
}
