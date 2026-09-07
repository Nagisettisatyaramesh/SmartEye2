import { useState, useRef, useEffect, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import clsx from 'clsx'

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/resources/?s=${encodeURIComponent(q)}` : '/resources/')
    setOpen(false)
    setQuery('')
  }

  return (
    <div className="relative flex items-center">
      <form
        onSubmit={handleSubmit}
        className={clsx('overflow-hidden transition-all duration-300', open ? 'w-40 opacity-100 sm:w-56' : 'w-0 opacity-0')}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search"
          aria-label="Search the site"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-electric-400 focus:outline-none"
        />
      </form>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close search' : 'Open search'}
        className="ml-1.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        {open ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
      </button>
    </div>
  )
}
