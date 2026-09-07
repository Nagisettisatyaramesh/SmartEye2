import { Link } from 'react-router-dom'
import clsx from 'clsx'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="SmartEye home">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="16" cy="16" r="15" className={light ? 'stroke-white/30' : 'stroke-ink-950/20'} strokeWidth="1" fill="none" />
        <circle cx="16" cy="16" r="9" className={light ? 'stroke-electric-300' : 'stroke-electric-600'} strokeWidth="1.4" fill="none" />
        <circle cx="16" cy="16" r="3" className={light ? 'fill-electric-300' : 'fill-electric-600'} />
      </svg>
      <span
        className={clsx(
          'font-display text-lg font-bold uppercase tracking-[0.08em]',
          light ? 'text-white' : 'text-ink-950',
        )}
      >
        SmartEye
      </span>
    </Link>
  )
}
