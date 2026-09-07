import { Mail, Phone, MapPin, PlayCircle } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { RevealText } from '@/components/ui/RevealText'
import { AmbientField } from '@/components/ui/AmbientField'
import { ContactForm } from '@/components/sections/ContactForm'

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'info@scube-technologies.com', href: 'mailto:info@scube-technologies.com' },
  { icon: Phone, label: 'Mobile', value: '+44 (0) 7459153907 / +41 799036836', href: 'tel:+447459153907' },
  { icon: MapPin, label: 'UK', value: '125 Deansgate, Manchester, M3 2LH, United Kingdom', href: undefined },
]

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Talk to the SmartEye eQMS team — browse our videos or get in touch with one of our experts today for a free demo."
      />

      <section className="bg-fine-grid relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <AmbientField variant="subtle" />
        <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">
              Contact Us
            </span>
            <RevealText
              as="h1"
              text="Talk to the SmartEye eQMS team"
              className="text-balance mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
            />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Want to understand more about how SmartEye eQMS could transform the way you manage your SaMD design and
              development process? Browse our selection of videos or get in touch with one of our expert team today
              for a free and easy demo from those who built it.
            </p>

            <a
              href="https://youtu.be/YjVfsjdiYAY"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-300 hover:text-white"
            >
              <PlayCircle className="h-5 w-5" />
              Watch a Video
            </a>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-electric-300">
                    <detail.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-electric-300/80">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-white hover:text-electric-300">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-white">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-xl font-bold text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-white/50">Tell us how we can help and we'll get back to you.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
