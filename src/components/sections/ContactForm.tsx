import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitContactMessage } from '@/lib/submitDemoRequest'
import { Button } from '@/components/ui/Button'

const inputClasses =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-electric-400 focus:outline-none focus:ring-4 focus:ring-electric-500/15'

export function ContactForm() {
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
      await submitContactMessage({
        name,
        email,
        phone: String(form.get('phone') || ''),
        company: String(form.get('company') || ''),
        message: String(form.get('message') || ''),
      })
      setStatus('success')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-electric-400/30 bg-electric-500/10 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-electric-500" />
        <h3 className="mt-4 text-lg font-bold text-white">Thanks for reaching out</h3>
        <p className="mt-2 max-w-xs text-sm text-white/60">A member of the SmartEye team will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <input name="name" type="text" required placeholder="Type your Name" className={inputClasses} autoComplete="name" />
      <input name="email" type="email" required placeholder="Type your Email" className={inputClasses} autoComplete="email" />
      <input name="phone" type="text" placeholder="Type your Phone Number" className={inputClasses} autoComplete="tel" />
      <input name="company" type="text" placeholder="Type your Company Name" className={inputClasses} autoComplete="organization" />
      <textarea name="message" placeholder="Write a message..." rows={4} className={`${inputClasses} resize-none`} />

      {error && <p className="text-sm font-medium text-red-400">{error}</p>}

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full justify-center"
        icon={status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
      >
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>
    </form>
  )
}
