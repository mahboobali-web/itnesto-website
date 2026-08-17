const phases = [
  { num: '01', name: 'Discovery', duration: 'Wk 1-2', desc: 'Written spec covering architecture, scope, timeline, and cost. Nothing moves forward until this is signed off.' },
  { num: '02', name: 'Design', duration: 'Wk 2-4', desc: 'Wireframes, brand assets, API contracts, and infrastructure plan. Every "how will this work" answered before code starts.' },
  { num: '03', name: 'Build', duration: 'Sprint-based', desc: 'Two-week sprints with a working demo at the end of each. You see progress every fortnight, not at the end.' },
  { num: '04', name: 'QA and testing', duration: 'Pre-launch', desc: 'Automated tests, performance audits, security review, and cross-device testing before any production deployment.' },
  { num: '05', name: 'Handover', duration: 'Final week', desc: 'Full codebase documentation, deployment runbooks, and knowledge transfer. You own everything. No lock-in.' },
]

export default function Process() {
  return (
    <section id="process" className="section-navy py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="text-xs font-medium text-electric-300 uppercase tracking-widest">How we work</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2">The Nesto delivery framework</h2>
          <p className="text-electric-200 mt-3 max-w-lg">
            Every engagement runs five phases. Each has a written output before the next starts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-electric-600/30" />
          {phases.map((p, i) => (
            <div key={p.num} className="relative flex flex-col gap-4 pr-6 pb-8 md:pb-0">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <div className="w-14 h-14 rounded-full bg-electric-500 flex items-center justify-center text-white font-semibold text-sm shrink-0 relative z-10">
                  {p.num}
                </div>
                {i < phases.length - 1 && (
                  <div className="md:hidden flex-1 h-px bg-electric-600/30" />
                )}
              </div>
              <div>
                <div className="font-semibold text-white">{p.name}</div>
                <div className="text-xs text-electric-300 mb-2">{p.duration}</div>
                <p className="text-sm text-electric-200 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
