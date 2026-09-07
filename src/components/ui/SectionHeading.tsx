import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { RevealText } from '@/components/ui/RevealText'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  size = 'md',
  className,
}: {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={clsx(
            'mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]',
            align === 'center' && 'justify-center',
            light ? 'text-electric-300' : 'text-electric-700',
          )}
        >
          <span className={clsx('h-px w-8', light ? 'bg-electric-300/60' : 'bg-electric-600/60')} />
          {eyebrow}
        </motion.div>
      )}
      <RevealText
        as="h2"
        text={title}
        className={clsx(
          'text-balance font-bold leading-[1.08]',
          size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-ink-950',
        )}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={clsx('mt-5 text-lg leading-relaxed', light ? 'text-white/65' : 'text-neutral-600')}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
