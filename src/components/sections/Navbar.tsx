'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'Work',     href: '#work' },
  { label: 'Global',   href: '#global' },
  { label: 'FAQ',      href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#04091f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[70px]">
        <a href="/" className="flex items-center gap-3 group">
          <Image src="/assets/itnesto-icon-512.png" alt="IT Nesto icon" width={36} height={36}
            className="rounded-lg transition-transform group-hover:scale-110" />
          <span className="text-white font-semibold text-lg tracking-tight">
            IT <span className="text-[#6B8CFF]">Nesto</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-[#8BA3E0] hover:text-white transition-colors duration-200 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2F54EB] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:hello@itnesto.com" className="text-sm text-[#8BA3E0] hover:text-white transition-colors">
            hello@itnesto.com
          </a>
          <a href="#contact"
            className="text-sm font-medium bg-[#2F54EB] text-white px-5 py-2.5 rounded-lg hover:bg-[#1a3fd4] transition-all duration-200 glow-btn">
            Book a call
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
                  : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#04091f]/95 backdrop-blur-xl border-t border-white/[0.06] px-5 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-[#8BA3E0] hover:text-white transition-colors py-1"
              onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact"
            className="text-sm font-medium bg-[#2F54EB] text-white px-5 py-2.5 rounded-lg text-center mt-2"
            onClick={() => setOpen(false)}>
            Book a free discovery call
          </a>
        </div>
      )}
    </nav>
  )
}
