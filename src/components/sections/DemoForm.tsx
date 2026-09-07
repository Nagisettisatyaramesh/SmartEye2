import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import clsx from 'clsx'
import { countries } from '@/data/countries'
import { submitDemoRequest } from '@/lib/submitDemoRequest'
import { Button } from '@/components/ui/Button'

const inputClasses =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-electric-400 focus:outline-none focus:ring-4 focus:ring-electric-500/15'

export function DemoForm({ compact = false, light = true }: { compact?: boolean; light?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()

    if (!name || !email) {
      setError('Please fill in your name and email.')
      return
    }

    setStatus('submitting')
    try {
      await submitDemoRequest({
        name,
        email,
        phone: String(form.get('phone') || ''),
        company: String(form.get('company') || ''),
        country: String(form.get('country') || ''),
        requirement: String(form.get('requirement') || ''),
      })
      setStatus('success')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  const fieldClasses = light
    ? inputClasses
    : 'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-neutral-400 transition-colors focus:border-electric-500 focus:outline-none focus:ring-4 focus:ring-electric-100'

  if (status === 'success') {
    return (
      <div
        className={clsx(
          'flex flex-col items-center justify-center rounded-2xl border px-6 py-14 text-center',
          light ? 'border-electric-400/30 bg-electric-500/10' : 'border-electric-200 bg-electric-50',
        )}
      >
        <CheckCircle2 className="h-10 w-10 text-electric-500" />
        <h3 className={clsx('mt-4 text-lg font-bold', light ? 'text-white' : 'text-ink-950')}>
          Thanks — we've got your request
        </h3>
        <p className={clsx('mt-2 max-w-xs text-sm', light ? 'text-white/60' : 'text-neutral-600')}>
          A member of the SmartEye team will be in touch shortly to arrange your tailored demo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('grid gap-4', !compact && 'sm:grid-cols-2')} noValidate>
      <input name="name" type="text" required placeholder="Your Name" className={fieldClasses} autoComplete="name" />
      <input name="email" type="email" required placeholder="Your Email" className={fieldClasses} autoComplete="email" />
      <input name="phone" type="text" placeholder="Phone Number" className={fieldClasses} autoComplete="tel" />
      <input name="company" type="text" placeholder="Company Name" className={fieldClasses} autoComplete="organization" />
      <select name="country" defaultValue="" className={clsx(fieldClasses, !compact && 'sm:col-span-2', 'appearance-none')}>
        <option value="" disabled className="text-ink-950">
          Country
        </option>
        {countries.map((c) => (
          <option key={c} value={c} className="text-ink-950">
            {c}
          </option>
        ))}
      </select>
      <textarea
        name="requirement"
        placeholder="Your Requirement"
        rows={3}
        className={clsx(fieldClasses, !compact && 'sm:col-span-2', 'resize-none')}
      />

      {error && <p className="text-sm font-medium text-red-400 sm:col-span-2">{error}</p>}

      <p className={clsx('text-xs', light ? 'text-white/40' : 'text-neutral-500', !compact && 'sm:col-span-2')}>
        Please review our{' '}
        <a href="/privacy-policy/" className="font-semibold text-electric-400 hover:underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms-and-conditions/" className="font-semibold text-electric-400 hover:underline">
          Terms of Use.
        </a>
      </p>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className={clsx('w-full justify-center', !compact && 'sm:col-span-2')}
        icon={status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
      >
        {status === 'submitting' ? 'Sending…' : 'Request a Demo'}
      </Button>
    </form>
  )
}
