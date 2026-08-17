'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Where is IT Nesto based?', a: 'IT Nesto is registered in the United States and operates fully remote. We serve clients across the USA, UAE, Saudi Arabia, Qatar, the wider Middle East, Europe, and Southeast Asia.' },
  { q: 'What is your minimum project size?', a: 'We work with projects from $5,000 upward for focused engagements like landing pages, SEO audits, or single-service builds. Full-stack product builds typically start from $15,000. We scope every project individually on the discovery call.' },
  { q: 'Who owns the code and assets at the end?', a: 'You do. Full IP transfer on completion. All code, design files, ad accounts, content, and documentation belong to the client. No lock-in, no ongoing licence fees.' },
  { q: 'How long does a project take?', a: 'A landing page or brand identity runs 1 to 2 weeks. An MVP for a web or mobile app runs 8 to 14 weeks. AI integrations run 3 to 8 weeks. RAG systems run 4 to 10 weeks. We give firm timelines after discovery.' },
  { q: 'Can you handle multiple services at once?', a: 'Yes. Many clients use us across two or three service lines simultaneously — for example, a web build running alongside SEO and brand design. One point of contact coordinates everything.' },
  { q: 'Do you support Arabic and RTL interfaces?', a: 'Yes. RTL layout, Arabic typography, and bidirectional text handling are scoped explicitly in the discovery phase. We test Arabic interfaces at the component level, not just visually.' },
  { q: 'Fixed price or time-and-materials?', a: 'Both. Fixed price for well-scoped projects. Time-and-materials for ongoing product development or AI builds where scope evolves. We recommend whichever model protects the client.' },
  { q: 'How do I get started?', a: 'Book a free 45-minute discovery call. No preparation needed. Tell us what you are trying to build or fix, and we take it from there.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-[#2F54EB]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Common questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`fade-up glass rounded-2xl overflow-hidden border transition-all duration-300 ${
                open === i ? 'border-[#2F54EB]/40' : 'border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-medium text-sm transition-colors ${open === i ? 'text-white' : 'text-[#c8d5f0] group-hover:text-white'}`}>
                  {f.q}
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                  open === i ? 'bg-[#2F54EB] rotate-180' : 'glass border border-white/10'
                }`}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-[#8BA3E0] leading-relaxed border-t border-white/[0.05] pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
