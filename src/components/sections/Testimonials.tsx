const placeholders = [
  { initials: 'JD', name: 'Client name', title: 'CEO, Company', region: 'USA' },
  { initials: 'AM', name: 'Client name', title: 'Founder, Company', region: 'UAE' },
  { initials: 'SK', name: 'Client name', title: 'CTO, Company', region: 'Middle East' },
]

export default function Testimonials() {
  return (
    <section className="section-light py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">Client reviews</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">What clients say</h2>
          <p className="text-navy-700 mt-3 max-w-lg text-sm">Reviews are published as engagements complete. Named clients only — no anonymous or unverified quotes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-electric-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#2F54EB" opacity="0.25"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <div className="h-16 rounded-lg bg-electric-50 border border-dashed border-electric-200 mb-4 flex items-center justify-center">
                <span className="text-xs text-electric-300 italic">Review coming soon</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-electric-100 flex items-center justify-center text-xs font-semibold text-electric-600">
                  {p.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-navy-900/40">{p.name}</div>
                  <div className="text-xs text-navy-700/50">{p.title} · {p.region}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
