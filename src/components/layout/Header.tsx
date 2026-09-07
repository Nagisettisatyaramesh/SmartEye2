import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import clsx from 'clsx'
import { primaryNav } from '@/data/nav'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/layout/Logo'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { MobileNav } from '@/components/layout/MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 w-full transition-all duration-500',
          scrolled ? 'py-2' : 'py-4 sm:py-6',
        )}
      >
        <div className="container-page">
          <div
            className={clsx(
              'flex items-center justify-between rounded-full px-5 transition-all duration-500 sm:px-6',
              scrolled
                ? 'h-14 border border-white/10 shadow-elevated backdrop-blur-xl'
                : 'h-14 border border-transparent bg-transparent',
            )}
            style={scrolled ? { backgroundColor: 'rgba(4, 6, 10, 0.94)' } : undefined}
          >
            <Logo light />

            <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
              {primaryNav.map((item) => {
                const hasDropdown = Boolean(item.megaMenu || item.submenu)
                return (
                  <div key={item.label} className="relative" onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                      {hasDropdown && (
                        <ChevronDown
                          className={clsx(
                            'h-3.5 w-3.5 text-white/40 transition-transform duration-200',
                            openMenu === item.label && 'rotate-180',
                          )}
                        />
                      )}
                    </Link>
                    {item.megaMenu && <MegaMenu item={item} open={openMenu === item.label} />}
                    {item.submenu && (
                      <div
                        className={clsx(
                          'glass absolute left-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl py-2 transition-all duration-150',
                          openMenu === item.label ? 'opacity-100 translate-y-0' : 'pointer-events-none -translate-y-1 opacity-0',
                        )}
                      >
                        {item.submenu.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button href="/#demo" size="md" variant="outline-light" className="hidden sm:inline-flex">
                Request a Demo
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="rounded-full p-2.5 text-white hover:bg-white/10 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
