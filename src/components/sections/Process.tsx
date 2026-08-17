const phases = [
  { num: '01', name: 'Discovery', duration: 'Week 1–2', desc: 'Written technical spec covering architecture, scope, timeline, and cost. Nothing starts until this is signed off.', icon: '🔍' },
  { num: '02', name: 'Design', duration: 'Week 2–4', desc: 'Wireframes, brand assets, API contracts, infrastructure plan. Every question answered before code is written.', icon: '✦' },
  { num: '03', name: 'Build', duration: 'Sprint-based', desc: 'Two-week sprints with a working demo at the end of each. You see real progress every fortnight.', icon: '⚡' },
  { num: '04', name: 'QA', duration: 'Pre-launch', desc: 'Automated tests, performance audits, security review, cross-device testing. Nothing ships broken.', icon: '◈' },
  { num: '05', name: 'Handover', duration: 'Final week', desc: 'Full documentation, deployment runbooks, knowledge transfer. You own everything. No lock-in.', icon: '◎' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden" style={{background:'#020714'}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F54EB]/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2F54EB]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 fade-up">
          <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">How we work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            The Nesto<br />
            <span className="gradient-text-blue">delivery framework</span>
          </h2>
          <p className="text-lg text-[#8BA3E0] mt-4 max-w-xl">
            Every engagement runs five defined phases. Each has a written output before the next starts. No black-box delivery.
          </p>
        </div>

        {/* Phases — vertical on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#2F54EB]/80 via-[#2F54EB]/40 to-transparent" />

          {phases.map((p, i) => (
            <div key={p.num} className={`fade-up fade-up-delay-${i + 1} relative group`}>
              {/* Mobile connector */}
              {i < phases.length - 1 && (
                <div className="md:hidden absolute left-[22px] top-16 w-px h-full bg-gradient-to-b from-[#2F54EB]/60 to-transparent" />
              )}

              <div className="md:text-center">
                {/* Number circle */}
                <div className="relative inline-flex md:mx-auto">
                  <div className="w-11 h-11 rounded-full bg-[#2F54EB] flex items-center justify-center text-white text-xs font-bold relative z-10 group-hover:scale-110 transition-transform shadow-lg shadow-[#2F54EB]/30">
                    {p.num}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#2F54EB]/30 scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="mt-4 md:mt-6 pl-16 md:pl-0 md:px-3">
                  <div className="text-xs font-medium text-[#2F54EB] mb-1">{p.duration}</div>
                  <div className="font-bold text-white text-base mb-2">{p.name}</div>
                  <p className="text-sm text-[#8BA3E0] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20">
          {[
            { label: 'Written spec first', desc: 'Nothing is built until the specification is documented and agreed. This protects you and the project.' },
            { label: 'You own everything', desc: 'Code, design files, ad accounts, content. Full IP transfer at handover. No ongoing licence fees.' },
            { label: '30-day post-launch support', desc: 'Included on every fixed-price engagement. Issues after launch are our problem to fix.' },
          ].map(c => (
            <div key={c.label} className="fade-up glass rounded-2xl p-6 border border-[#2F54EB]/20 hover:border-[#2F54EB]/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#2F54EB]/20 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F54EB" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <div className="font-semibold text-white mb-2">{c.label}</div>
              <p className="text-sm text-[#8BA3E0] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
