import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'md' | 'lg'

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary:
    'bg-electric-500 text-ink-950 shadow-[0_0_0_1px_rgb(51_191_255_/_0.4)] hover:bg-electric-400 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-ink-950 border border-neutral-200 shadow-soft hover:border-electric-400 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink-950 hover:bg-neutral-100',
  'outline-light':
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
}

const sizes: Record<Size, string> = {
  md: 'text-sm px-5 py-2.5',
  lg: 'text-sm sm:text-base px-7 py-3.5 uppercase tracking-wider',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  children: ReactNode
  className?: string
  glow?: boolean
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', icon, children, className, glow, ...rest } = props
  const classes = clsx(base, variants[variant], sizes[size], glow && 'animate-pulse-ring', className)

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover/btn:translate-x-1">{icon}</span>}
    </>
  )

  if ('href' in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href) || props.href.startsWith('mailto:')
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    if (isExternal) {
      return (
        <a href={props.href} className={classes} {...anchorRest}>
          {content}
        </a>
      )
    }
    return (
      <Link to={props.href} className={classes} {...(anchorRest as Record<string, unknown>)}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
