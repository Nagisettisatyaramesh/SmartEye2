export function AmbientField({ variant = 'default' }: { variant?: 'default' | 'subtle' }) {
  const opacity = variant === 'subtle' ? 'opacity-60' : ''
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity}`} aria-hidden="true">
      <div className="animate-drift-1 absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-electric-700/25 blur-3xl" />
      <div className="animate-drift-2 absolute -right-32 top-16 h-[440px] w-[440px] rounded-full bg-electric-400/15 blur-3xl" />
      <div className="animate-drift-3 absolute bottom-[-18%] left-1/3 h-[480px] w-[480px] rounded-full bg-teal-500/10 blur-3xl" />
    </div>
  )
}
