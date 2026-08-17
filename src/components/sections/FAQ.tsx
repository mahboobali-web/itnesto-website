'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Where is IT Nesto based?', a: 'IT Nesto is registered in the United States and operates fully remote. We serve clients across the USA, UAE, Saudi Arabia, Qatar, the wider Middle East, Europe, and Southeast Asia. Timezone is not a constraint for us.' },
  { q: 'What is your minimum project size?', a: 'We work with projects from $5,000 upward for focused engagements like landing pages, SEO audits, or single-service builds. Full-stack product builds typically start from $15,000. We scope every project individually on the discovery call.' },
  { q: 'Who owns the work at the end?', a: 'You do. Full IP transfer on completion. All code, design files, ad accounts, content, and documentation belong to the client. No lock-in, no ongoing licence fees.' },
  { q: 'How long does a project take?', a: 'A landing page or brand identity runs 1 to 2 weeks. An MVP for a web or mobile app runs 8 to 14 weeks. AI integrations run 3 to 8 weeks depending on complexity. RAG systems run 4 to 10 weeks. We give firm timelines after discovery.' },
  { q: 'Can you handle multiple services at once?', a: 'Yes. Many clients use us across two or three service lines simultaneously. For example, a web build running alongside SEO setup and brand design. We assign a single point of contact to coordinate across teams.' },
  { q: 'Do you support Arabic and RTL interfaces?', a: 'Yes. RTL layout, Arabic typography, and bidirectional text handling are scoped explicitly in the discovery phase. We test Arabic interfaces at the component level, not just visually.' },
  { q: 'Fixed price or time-and-materials?', a: 'Both. Fixed price for well-scoped projects. Time-and-materials for ongoing product development or AI builds where scope evolves. We recommend the model that protects the client.' },
  { q: 'How do I get started?', a: 'Book a free 45-minute discovery call. No preparation needed on your end. Tell us what you are trying to build or fix, and we take it from there.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section-light py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">Common questions</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-electric-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium text-navy-900 hover:text-electric-500 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <svg className={`w-4 h-4 text-electric-400 transition-transform shrink-0 ml-4 ${open === i ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-navy-700 leading-relaxed border-t border-electric-50 pt-4">
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
