const placeholders = [
  { sector: 'Fintech', region: 'USA', metrics: ['Revenue impact', 'Time to launch', 'Uptime SLA', 'User growth'] },
  { sector: 'E-commerce', region: 'UAE', metrics: ['Conversion rate', 'Page load time', 'Mobile orders', 'SKUs migrated'] },
  { sector: 'Healthcare', region: 'Middle East', metrics: ['Patients served', 'System uptime', 'HIPAA compliant', 'Cost saved'] },
  { sector: 'SaaS', region: 'Global', metrics: ['MRR growth', 'API response', 'Team size', 'Deployment time'] },
]

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden" style={{background:'#020714'}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F54EB]/30 to-transparent" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#2F54EB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 fade-up">
          <div>
            <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">Our work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Work we&apos;ve<br /><span className="gradient-text-blue">shipped</span>
            </h2>
          </div>
          <p className="text-[#8BA3E0] max-w-sm md:text-right">
            Case studies publish as projects complete. Real numbers only. No projected or estimated figures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {placeholders.map((c, i) => (
            <div
              key={c.sector}
              className={`fade-up fade-up-delay-${i + 1} group relative glass rounded-2xl p-7 border border-white/[0.07] hover:border-[#2F54EB]/30 transition-all duration-500 hover:-translate-y-1 card-glow overflow-hidden`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{background: 'radial-gradient(circle at 80% 20%, rgba(47,84,235,0.08) 0%, transparent 60%)'}}
              />

              {/* Tags */}
              <div className="flex gap-2 mb-5 relative z-10">
                <span className="tag-chip">{c.sector}</span>
                <span className="tag-chip">{c.region}</span>
                <span className="ml-auto text-xs text-[#8BA3E0] italic">Coming soon</span>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {c.metrics.map(m => (
                  <div key={m} className="rounded-xl border border-white/[0.06] p-4" style={{background:'rgba(47,84,235,0.05)'}}>
                    <div className="text-2xl font-bold text-white/20 mb-1">—</div>
                    <div className="text-xs text-[#8BA3E0]">{m}</div>
                  </div>
                ))}
              </div>

              {/* Dashed border overlay hint */}
              <div className="mt-5 flex items-center gap-2 relative z-10">
                <div className="flex-1 h-px bg-gradient-to-r from-[#2F54EB]/30 to-transparent" />
                <span className="text-xs text-[#2F54EB]/60 font-medium">Publishing soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
