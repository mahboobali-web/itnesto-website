const markets = ['USA', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'United Kingdom', 'Europe', 'Southeast Asia']
const capabilities = [
  { label: 'Arabic RTL', desc: 'Full RTL layout, Arabic typography, bidirectional text — tested at component level.' },
  { label: 'UAE payments', desc: 'Telr, PayTabs, UAEIPS — local payment gateways integrated and documented.' },
  { label: 'PDPL compliance', desc: 'UAE data residency architecture from day one, not bolted on later.' },
  { label: 'USA frameworks', desc: 'GDPR, CCPA, HIPAA-applicable builds for US-regulated clients.' },
]

export default function GlobalReach() {
  return (
    <section id="global" className="relative py-24 md:py-32 overflow-hidden" style={{background:'#020714'}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F54EB]/30 to-transparent" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-[#2F54EB]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">Global reach</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Based in the USA.<br />
              <span className="gradient-text-blue">Working worldwide.</span>
            </h2>
            <p className="text-[#8BA3E0] leading-relaxed mb-8">
              IT Nesto is registered in the United States and operates fully remote. We serve clients across North America, the Middle East, Europe, and Southeast Asia. Language, timezone, and location have never stopped a well-run remote team.
            </p>

            {/* Capability grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map(c => (
                <div key={c.label} className="glass rounded-xl p-4 border border-[#2F54EB]/15 hover:border-[#2F54EB]/30 transition-colors">
                  <div className="text-sm font-semibold text-[#6B8CFF] mb-1">{c.label}</div>
                  <div className="text-xs text-[#8BA3E0] leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fade-up">
            {/* Market tags */}
            <div className="mb-8">
              <div className="text-xs font-semibold text-[#6B8CFF] uppercase tracking-widest mb-4">Markets we serve</div>
              <div className="flex flex-wrap gap-2">
                {markets.map(m => (
                  <span key={m} className="glass text-white text-sm font-medium border border-white/10 px-4 py-2 rounded-full hover:border-[#2F54EB]/40 hover:bg-[#2F54EB]/10 transition-all cursor-default">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '$5k', label: 'Minimum engagement', sub: 'focused projects' },
                { n: '48hr', label: 'Proposal turnaround', sub: 'after discovery call' },
                { n: '2 wks', label: 'Average project start', sub: 'from signed agreement' },
                { n: '100%', label: 'IP ownership', sub: 'transferred to you' },
              ].map(s => (
                <div key={s.label} className="stat-card rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-0.5">{s.n}</div>
                  <div className="text-sm font-medium text-[#6B8CFF]">{s.label}</div>
                  <div className="text-xs text-[#8BA3E0] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
