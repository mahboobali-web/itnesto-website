export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{background:'#020714'}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F54EB]/40 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-[#2F54EB]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="fade-up inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-[#6B8CFF]">Available for new projects</span>
        </div>

        <h2 className="fade-up text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
          Let's build<br />
          <span className="gradient-text text-glow">something great.</span>
        </h2>

        <p className="fade-up text-lg text-[#8BA3E0] mb-10 max-w-xl mx-auto">
          45 minutes. No commitment. No sales deck. Tell us what you are building and we take it from there. Proposal within 48 hours.
        </p>

        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="mailto:hello@itnesto.com"
            className="group inline-flex items-center justify-center gap-2 bg-[#2F54EB] text-white font-semibold px-10 py-4 rounded-xl text-base hover:bg-[#1a3fd4] transition-all duration-300 glow-btn"
          >
            Book a free discovery call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="mailto:hello@itnesto.com"
            className="inline-flex items-center justify-center gap-2 glass text-white font-medium px-10 py-4 rounded-xl text-base hover:bg-white/[0.08] transition-all duration-300"
          >
            Email us directly
          </a>
        </div>

        {/* Contact details */}
        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#8BA3E0]">
          <a href="mailto:hello@itnesto.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4 text-[#2F54EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            hello@itnesto.com
          </a>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#2F54EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            USA registered · Serving clients worldwide
          </span>
        </div>
      </div>
    </section>
  )
}
