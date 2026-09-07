import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import clsx from 'clsx'
import { primaryNav } from '@/data/nav'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/layout/Logo'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-fine-grid fixed inset-0 z-[100] flex flex-col bg-ink-950 lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Logo light />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2.5 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1">
              {primaryNav.map((item, i) => {
                const childItems = item.megaMenu ? item.megaMenu.groups.flatMap((g) => g.items) : item.submenu
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                    className="border-b border-white/10 py-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link to={item.href} onClick={onClose} className="flex-1 py-4 font-display text-2xl font-semibold text-white">
                        {item.label}
                      </Link>
                      {childItems && (
                        <button
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="p-3 text-white/50"
                        >
                          <ChevronDown className={clsx('h-5 w-5 transition-transform', expanded === item.label && 'rotate-180')} />
                        </button>
                      )}
                    </div>
                    {childItems && expanded === item.label && (
                      <ul className="ml-2 mb-4 space-y-3 border-l border-white/10 pl-4">
                        {childItems.map((child) => (
                          <li key={child.label}>
                            <Link to={child.href} onClick={onClose} className="block py-1 text-sm text-white/60 hover:text-electric-300">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                )
              })}
            </ul>
          </nav>
          <div className="p-6">
            <Button href="/#demo" variant="primary" onClick={onClose} className="w-full justify-center">
              Request a Demo
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
