export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-[#2F54EB]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-14 fade-up">
          <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">Client reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            What clients say
          </h2>
          <p className="text-[#8BA3E0]">Named clients only. No anonymous or unverified quotes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {['USA · Fintech founder', 'UAE · E-commerce CEO', 'KSA · SaaS CTO'].map((label, i) => (
            <div
              key={label}
              className={`fade-up fade-up-delay-${i + 1} glass rounded-2xl p-7 border border-white/[0.07] relative overflow-hidden group hover:border-[#2F54EB]/30 transition-all duration-300`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-6xl font-serif text-[#2F54EB]/10 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#2F54EB" opacity="0.3">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Placeholder quote */}
              <div className="rounded-xl border border-dashed border-white/10 p-4 mb-5 min-h-[80px] flex items-center justify-center">
                <span className="text-sm text-[#8BA3E0] italic text-center">Review publishing soon</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#2F54EB]/25 flex items-center justify-center text-xs font-bold text-[#6B8CFF]">
                  {label.split('·')[0].trim().slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-medium text-white/40">Client name</div>
                  <div className="text-xs text-[#8BA3E0]">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
