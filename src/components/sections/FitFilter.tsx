const goodFit = [
  'Startups that need to ship an MVP without hiring a full team',
  'Companies adding AI features to existing products',
  'Businesses needing a specialist squad for one service line',
  'Anyone in the USA, UAE, Middle East, or anywhere else wanting remote-first delivery with real accountability',
]
const notFit = [
  'Budget under $5,000 (a template solves this better)',
  'Need 50+ developers on one project',
  'Want a team that builds without questioning the brief',
]

export default function FitFilter() {
  return (
    <section className="section-light py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">Fit check</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">Is IT Nesto the right fit?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-7 border border-electric-100">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="font-semibold text-navy-900">We work well with</span>
            </div>
            <ul className="space-y-3">
              {goodFit.map(item => (
                <li key={item} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-7 border border-red-100">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span className="font-semibold text-navy-900">Not the right fit if</span>
            </div>
            <ul className="space-y-3">
              {notFit.map(item => (
                <li key={item} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
