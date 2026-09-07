import type { ReactNode } from 'react'
import clsx from 'clsx'

export function GlassPanel({
  children,
  className,
  light = false,
}: {
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return <div className={clsx('rounded-2xl', light ? 'glass-light' : 'glass', className)}>{children}</div>
}
