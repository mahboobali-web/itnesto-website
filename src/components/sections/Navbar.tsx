'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How we work', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#global' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" className="text-white font-semibold text-lg tracking-tight">
          IT <span className="text-electric-300">Nesto</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-electric-200 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button href="#contact" size="sm">Book a discovery call</Button>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-electric-200 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className="self-start">Book a discovery call</Button>
        </div>
      )}
    </nav>
  )
}
