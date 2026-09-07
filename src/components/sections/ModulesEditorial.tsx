import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { RevealText } from '@/components/ui/RevealText'
import { Button } from '@/components/ui/Button'

const requirementRows = [
  { id: 'SYS-REQ-024', desc: 'Alarm must trigger within 200ms of threshold breach', status: 'Verified' },
  { id: 'SYS-REQ-031', desc: 'Device shall log all user interactions for audit', status: 'Verified' },
  { id: 'SYS-REQ-045', desc: 'Battery indicator accuracy within ±2%', status: 'In Review' },
]

const workflowSteps = ['Design Input', 'Design Output', 'Risk Control', 'Verification', 'Design History File']

function RequirementsMock() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-300">Requirement Register</p>
      <div className="space-y-2.5">
        {requirementRows.map((row) => (
          <div key={row.id} className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3.5 py-3">
            <div className="min-w-0">
              <p className="font-mono text-[11px] text-electric-300">{row.id}</p>
              <p className="mt-0.5 truncate text-xs text-white/70">{row.desc}</p>
            </div>
            <span
              className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                row.status === 'Verified' ? 'bg-teal-400/15 text-teal-300' : 'bg-amber-400/15 text-amber-300'
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RiskMiniMock() {
  const cells = ['low', 'low', 'med', 'high', 'low', 'med', 'med', 'high', 'med', 'high', 'high', 'high']
  const shade: Record<string, string> = { low: 'bg-teal-400/70', med: 'bg-amber-400/70', high: 'bg-rose-400/75' }
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-300">Risk Register — RISK-018</p>
      <div className="grid grid-cols-4 gap-1.5">
        {cells.map((c, i) => (
          <div key={i} className={`aspect-square rounded-[4px] ${shade[c]}`} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 px-3.5 py-3">
        <span className="text-xs text-white/60">Residual risk after control</span>
        <span className="rounded-full bg-teal-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase text-teal-300">Acceptable</span>
      </div>
    </div>
  )
}

function WorkflowMock() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-300">Design History File — DHF-014</p>
      <div className="space-y-0">
        {workflowSteps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-electric-400/40 bg-electric-500/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-electric-300" />
              </div>
              {i < workflowSteps.length - 1 && <div className="h-6 w-px bg-white/10" />}
            </div>
            <p className="pb-6 text-xs font-medium text-white/70">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const rows = [
  {
    eyebrow: 'Requirements → Traceability',
    title: 'Turn requirements into traceable evidence.',
    body: 'Capture, structure and baseline every system requirement, then trace it forward to design, risk and test — automatically, not in a spreadsheet you maintain by hand.',
    mock: <RequirementsMock />,
    reverse: false,
  },
  {
    eyebrow: 'Risk Management',
    title: 'See risk before it becomes a problem.',
    body: 'Identify hazards, assess severity and probability, and track mitigation through to residual risk — aligned to ISO 14971, visible to the whole team.',
    mock: <RiskMiniMock />,
    reverse: true,
  },
  {
    eyebrow: 'Design Control',
    title: 'From design input to verification.',
    body: 'Manage design inputs, outputs, reviews, verification and validation in a single audit-ready trail — with your Design History File built as you go, not assembled at the end.',
    mock: <WorkflowMock />,
    reverse: false,
  },
]

export function ModulesEditorial() {
  return (
    <section className="bg-paper-50 py-24 sm:py-32">
      <Container className="space-y-28 sm:space-y-36">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${row.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-electric-700">
                <span className="h-px w-8 bg-electric-600/60" />
                {row.eyebrow}
              </div>
              <RevealText
                as="h3"
                text={row.title}
                className="text-balance font-display text-3xl font-bold leading-[1.1] text-ink-950 sm:text-4xl lg:text-[2.6rem]"
              />
              <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-600">{row.body}</p>
              <Button
                href="/quality-management-system-qms-for-medical-devices-and-samd/"
                variant="secondary"
                className="mt-7"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                See how it works
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-ink-950 p-3 shadow-elevated sm:p-4"
            >
              {row.mock}
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  )
}
