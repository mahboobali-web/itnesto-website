const goodFit = [
  'Startups shipping an MVP without hiring a full team',
  'Companies adding AI features to existing products',
  'Businesses needing a specialist squad for one service line',
  'Anyone in the USA, UAE, Middle East, or globally wanting remote-first delivery',
  'Teams that need design, development, and marketing coordinated together',
]
const notFit = [
  'Budget under $5,000 (a template solves this better)',
  'Projects requiring 50+ developers on one engagement',
  'Clients who want a team that builds without questioning the brief',
]

export default function FitFilter() {
  return (
    <section className="relative py-24 overflow-hidden section-dark">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#2F54EB]/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="fade-up mb-12">
          <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">Fit check</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Is IT Nesto<br />the right fit?</h2>
          <p className="text-[#8BA3E0] mt-3 max-w-lg">
            We include this section because a bad-fit project wastes everyone's time. If you see yourself in the "not a fit" column, we will tell you that on the first call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Good fit */}
          <div className="fade-up glass rounded-2xl p-8 border border-emerald-500/20" style={{background:'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, transparent 100%)'}}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <span className="font-bold text-white text-lg">Good fit</span>
            </div>
            <ul className="space-y-4">
              {goodFit.map(item => (
                <li key={item} className="flex gap-3 group">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/25 transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-sm text-[#c8d5f0] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="fade-up glass rounded-2xl p-8 border border-red-500/15" style={{background:'linear-gradient(135deg, rgba(239,68,68,0.04) 0%, transparent 100%)'}}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <span className="font-bold text-white text-lg">Not a fit</span>
            </div>
            <ul className="space-y-4">
              {notFit.map(item => (
                <li key={item} className="flex gap-3 group">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </span>
                  <span className="text-sm text-[#c8d5f0] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mid-section note */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-sm text-[#8BA3E0]">
                Not sure? Book the discovery call anyway. 45 minutes and we will both know.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#6B8CFF] hover:text-white transition-colors"
              >
                Book a call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
