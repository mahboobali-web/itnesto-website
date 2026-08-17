const placeholders = [
  { sector: 'Fintech', region: 'USA', desc: 'Case study coming soon' },
  { sector: 'E-commerce', region: 'UAE', desc: 'Case study coming soon' },
  { sector: 'Healthcare', region: 'Middle East', desc: 'Case study coming soon' },
  { sector: 'SaaS', region: 'Global', desc: 'Case study coming soon' },
]

export default function CaseStudies() {
  return (
    <section id="work" className="section-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">Our work</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">Work we have shipped</h2>
          <p className="text-navy-700 mt-3 max-w-lg text-sm">
            Case studies are published as projects complete. Real numbers only — no projected or unverified claims.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {placeholders.map(c => (
            <div key={c.sector + c.region} className="rounded-xl border-2 border-dashed border-electric-100 bg-electric-50/50 p-8 flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="text-xs font-semibold bg-electric-100 text-electric-600 px-3 py-1 rounded-full">{c.sector}</span>
                <span className="text-xs font-semibold bg-navy-900/10 text-navy-700 px-3 py-1 rounded-full">{c.region}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'].map(m => (
                  <div key={m} className="bg-white rounded-lg p-3 border border-electric-100">
                    <div className="text-xl font-semibold text-navy-900/20">—</div>
                    <div className="text-xs text-navy-700/50 mt-1">{m}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-navy-700/60 italic mt-1">Publishing soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
