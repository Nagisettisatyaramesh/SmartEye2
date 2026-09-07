import { Link } from 'react-router-dom'
import { MapPin, Mail, ShieldCheck, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'
import { footerNav, socialLinks } from '@/data/nav'
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@/components/layout/SocialIcons'

const socialIcons = { Facebook: FacebookIcon, Twitter: TwitterIcon, LinkedIn: LinkedInIcon, Instagram: InstagramIcon }

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-neutral-300">
      <Container className="py-20">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-xs font-display text-xl font-semibold leading-snug text-white">
              The intelligent digital quality platform for medical-device and SaMD teams.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/50">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                125 Deansgate, Manchester, M3 2LH, United Kingdom
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-electric-400" />
                <a href="mailto:info@scube-technologies.com" className="hover:text-white">
                  info@scube-technologies.com
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-electric-400/50 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.values(footerNav).map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">{group.heading}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">© S-Cube Technologies Limited {new Date().getFullYear()}</p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-electric-400" /> ISO 9001 Certified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-electric-400" /> ISO/IEC 27001 Certified
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
